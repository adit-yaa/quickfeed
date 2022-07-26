package interceptors

import (
	"context"
	"fmt"
	"strings"

	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/metadata"
	"google.golang.org/grpc/status"
)

var ErrAccessDenied = status.Errorf(codes.Unauthenticated, "access denied")

// GetFromMetadata extracts a value from the request metadata.
// There are two formats of data we need to extract:
// ["cookie"]["auth"][value] when intercepting an API request,
// and ["user"][ID] when inspecting the request internally.
func GetFromMetadata(ctx context.Context, field, key string) (string, error) {
	if field == "" {
		return "", fmt.Errorf("missing metadata field name (%s)", field)
	}
	meta, ok := metadata.FromIncomingContext(ctx)
	if !ok {
		return "", fmt.Errorf("failed to read metadata")
	}
	content := meta.Get(field)
	// if there is no key, the field is expected to have only one element.
	if key == "" {
		if len(content) != 1 {
			return "", fmt.Errorf("incorrect metadata content length: %d", len(content))
		}
		return content[0], nil
	}
	for _, c := range content {
		_, metadataValue, ok := strings.Cut(c, key+"=")
		if ok {
			return strings.TrimSpace(metadataValue), nil
		}
	}
	return "", fmt.Errorf("missing %s (%s) in metadata", field, key)
}

// setToMetadata sets a new metadata field to the incoming context.
func setToMetadata(ctx context.Context, field, value string) (context.Context, error) {
	if field == "" || value == "" {
		return nil, fmt.Errorf("missing metadata field name (%s) or value (%s)", field, value)
	}
	meta, ok := metadata.FromIncomingContext(ctx)
	if !ok {
		return nil, fmt.Errorf("failed to read metadata")
	}
	meta.Set(field, value)
	return metadata.NewIncomingContext(ctx, meta), nil
}

// setCookie sets a "Set-Cookie" header with JWT token to the outgoing context.
func setCookie(ctx context.Context, cookie string) error {
	if cookie == "" {
		return fmt.Errorf("empty cookie")
	}
	meta, ok := metadata.FromIncomingContext(ctx)
	if !ok {
		return fmt.Errorf("failed to read metadata")
	}
	ctx = metadata.AppendToOutgoingContext(ctx, "Set-Cookie", cookie)
	if err := grpc.SetHeader(ctx, meta); err != nil {
		return fmt.Errorf("failed to set grpc header: %w", err)
	}
	return nil
}
