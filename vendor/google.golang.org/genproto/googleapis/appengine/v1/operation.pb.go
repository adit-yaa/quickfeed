// Code generated by protoc-gen-go. DO NOT EDIT.
// source: google/appengine/v1/operation.proto

package appengine // import "google.golang.org/genproto/googleapis/appengine/v1"

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import timestamp "github.com/golang/protobuf/ptypes/timestamp"
import _ "google.golang.org/genproto/googleapis/api/annotations"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

// Metadata for the given
// [google.longrunning.Operation][google.longrunning.Operation].
type OperationMetadataV1 struct {
	// API method that initiated this operation. Example:
	// `google.appengine.v1.Versions.CreateVersion`.
	//
	// @OutputOnly
	Method string `protobuf:"bytes,1,opt,name=method,proto3" json:"method,omitempty"`
	// Time that this operation was created.
	//
	// @OutputOnly
	InsertTime *timestamp.Timestamp `protobuf:"bytes,2,opt,name=insert_time,json=insertTime,proto3" json:"insert_time,omitempty"`
	// Time that this operation completed.
	//
	// @OutputOnly
	EndTime *timestamp.Timestamp `protobuf:"bytes,3,opt,name=end_time,json=endTime,proto3" json:"end_time,omitempty"`
	// User who requested this operation.
	//
	// @OutputOnly
	User string `protobuf:"bytes,4,opt,name=user,proto3" json:"user,omitempty"`
	// Name of the resource that this operation is acting on. Example:
	// `apps/myapp/services/default`.
	//
	// @OutputOnly
	Target               string   `protobuf:"bytes,5,opt,name=target,proto3" json:"target,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *OperationMetadataV1) Reset()         { *m = OperationMetadataV1{} }
func (m *OperationMetadataV1) String() string { return proto.CompactTextString(m) }
func (*OperationMetadataV1) ProtoMessage()    {}
func (*OperationMetadataV1) Descriptor() ([]byte, []int) {
	return fileDescriptor_operation_85c0c218be0d371d, []int{0}
}
func (m *OperationMetadataV1) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_OperationMetadataV1.Unmarshal(m, b)
}
func (m *OperationMetadataV1) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_OperationMetadataV1.Marshal(b, m, deterministic)
}
func (dst *OperationMetadataV1) XXX_Merge(src proto.Message) {
	xxx_messageInfo_OperationMetadataV1.Merge(dst, src)
}
func (m *OperationMetadataV1) XXX_Size() int {
	return xxx_messageInfo_OperationMetadataV1.Size(m)
}
func (m *OperationMetadataV1) XXX_DiscardUnknown() {
	xxx_messageInfo_OperationMetadataV1.DiscardUnknown(m)
}

var xxx_messageInfo_OperationMetadataV1 proto.InternalMessageInfo

func (m *OperationMetadataV1) GetMethod() string {
	if m != nil {
		return m.Method
	}
	return ""
}

func (m *OperationMetadataV1) GetInsertTime() *timestamp.Timestamp {
	if m != nil {
		return m.InsertTime
	}
	return nil
}

func (m *OperationMetadataV1) GetEndTime() *timestamp.Timestamp {
	if m != nil {
		return m.EndTime
	}
	return nil
}

func (m *OperationMetadataV1) GetUser() string {
	if m != nil {
		return m.User
	}
	return ""
}

func (m *OperationMetadataV1) GetTarget() string {
	if m != nil {
		return m.Target
	}
	return ""
}

func init() {
	proto.RegisterType((*OperationMetadataV1)(nil), "google.appengine.v1.OperationMetadataV1")
}

func init() {
	proto.RegisterFile("google/appengine/v1/operation.proto", fileDescriptor_operation_85c0c218be0d371d)
}

var fileDescriptor_operation_85c0c218be0d371d = []byte{
	// 271 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x84, 0x91, 0x41, 0x4b, 0x03, 0x31,
	0x10, 0x85, 0x59, 0xad, 0x55, 0x53, 0xf0, 0xb0, 0x05, 0x5d, 0x16, 0xc1, 0xa2, 0x97, 0x9e, 0x12,
	0x56, 0xf1, 0x54, 0x4f, 0xbd, 0x8b, 0xa5, 0x88, 0x07, 0x2f, 0x92, 0xba, 0x63, 0x0c, 0x74, 0x67,
	0x42, 0x32, 0xed, 0xbf, 0xf4, 0x3f, 0xc9, 0x26, 0xbb, 0x0b, 0x82, 0xd0, 0x5b, 0x5e, 0xe6, 0x7d,
	0x79, 0x2f, 0x89, 0xb8, 0x33, 0x44, 0x66, 0x0b, 0x4a, 0x3b, 0x07, 0x68, 0x2c, 0x82, 0xda, 0x57,
	0x8a, 0x1c, 0x78, 0xcd, 0x96, 0x50, 0x3a, 0x4f, 0x4c, 0xf9, 0x34, 0x99, 0xe4, 0x60, 0x92, 0xfb,
	0xaa, 0xbc, 0x1e, 0x48, 0xab, 0x34, 0x22, 0x71, 0x24, 0x42, 0x42, 0xca, 0x9b, 0x6e, 0x1a, 0xd5,
	0x66, 0xf7, 0xa5, 0xd8, 0x36, 0x10, 0x58, 0x37, 0x2e, 0x19, 0x6e, 0x7f, 0x32, 0x31, 0x7d, 0xe9,
	0x73, 0x9e, 0x81, 0x75, 0xad, 0x59, 0xbf, 0x55, 0xf9, 0xa5, 0x18, 0x37, 0xc0, 0xdf, 0x54, 0x17,
	0xd9, 0x2c, 0x9b, 0x9f, 0xaf, 0x3b, 0x95, 0x2f, 0xc4, 0xc4, 0x62, 0x00, 0xcf, 0x1f, 0xed, 0x49,
	0xc5, 0xd1, 0x2c, 0x9b, 0x4f, 0xee, 0x4b, 0xd9, 0x35, 0xeb, 0x63, 0xe4, 0x6b, 0x1f, 0xb3, 0x16,
	0xc9, 0xde, 0x6e, 0xe4, 0x8f, 0xe2, 0x0c, 0xb0, 0x4e, 0xe4, 0xf1, 0x41, 0xf2, 0x14, 0xb0, 0x8e,
	0x58, 0x2e, 0x46, 0xbb, 0x00, 0xbe, 0x18, 0xc5, 0x26, 0x71, 0xdd, 0xf6, 0x63, 0xed, 0x0d, 0x70,
	0x71, 0x92, 0xfa, 0x25, 0xb5, 0xb4, 0xe2, 0xea, 0x93, 0x1a, 0xf9, 0xcf, 0x4b, 0x2d, 0x2f, 0x86,
	0x7b, 0xae, 0xda, 0xb0, 0x55, 0xf6, 0xfe, 0xd4, 0xd9, 0x0c, 0x6d, 0x35, 0x1a, 0x49, 0xde, 0x28,
	0x03, 0x18, 0xab, 0xa8, 0x34, 0xd2, 0xce, 0x86, 0x3f, 0x9f, 0xb2, 0x18, 0xc4, 0x66, 0x1c, 0x8d,
	0x0f, 0xbf, 0x01, 0x00, 0x00, 0xff, 0xff, 0x1d, 0x8e, 0xb2, 0x00, 0xbc, 0x01, 0x00, 0x00,
}
