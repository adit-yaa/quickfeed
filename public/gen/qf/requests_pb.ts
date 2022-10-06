// @generated by protoc-gen-es v0.0.10 with parameter "target=ts"
// @generated from file qf/requests.proto (package qf, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Message, proto3, protoInt64} from "@bufbuild/protobuf";
import {Course, Enrollment_UserStatus, EnrollmentLink, Repository_Type, Review, Submission_Status, User} from "./types_pb.js";

/**
 * @generated from message qf.CourseSubmissions
 */
export class CourseSubmissions extends Message<CourseSubmissions> {
  /**
   * preloaded assignments
   *
   * @generated from field: qf.Course course = 1;
   */
  course?: Course;

  /**
   * @generated from field: repeated qf.EnrollmentLink links = 2;
   */
  links: EnrollmentLink[] = [];

  constructor(data?: PartialMessage<CourseSubmissions>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "qf.CourseSubmissions";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "course", kind: "message", T: Course },
    { no: 2, name: "links", kind: "message", T: EnrollmentLink, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CourseSubmissions {
    return new CourseSubmissions().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CourseSubmissions {
    return new CourseSubmissions().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CourseSubmissions {
    return new CourseSubmissions().fromJsonString(jsonString, options);
  }

  static equals(a: CourseSubmissions | PlainMessage<CourseSubmissions> | undefined, b: CourseSubmissions | PlainMessage<CourseSubmissions> | undefined): boolean {
    return proto3.util.equals(CourseSubmissions, a, b);
  }
}

/**
 * @generated from message qf.ReviewRequest
 */
export class ReviewRequest extends Message<ReviewRequest> {
  /**
   * @generated from field: uint64 courseID = 1;
   */
  courseID = protoInt64.zero;

  /**
   * @generated from field: qf.Review review = 2;
   */
  review?: Review;

  constructor(data?: PartialMessage<ReviewRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "qf.ReviewRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "courseID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "review", kind: "message", T: Review },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReviewRequest {
    return new ReviewRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReviewRequest {
    return new ReviewRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReviewRequest {
    return new ReviewRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ReviewRequest | PlainMessage<ReviewRequest> | undefined, b: ReviewRequest | PlainMessage<ReviewRequest> | undefined): boolean {
    return proto3.util.equals(ReviewRequest, a, b);
  }
}

/**
 * @generated from message qf.CourseRequest
 */
export class CourseRequest extends Message<CourseRequest> {
  /**
   * @generated from field: uint64 courseID = 1;
   */
  courseID = protoInt64.zero;

  constructor(data?: PartialMessage<CourseRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "qf.CourseRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "courseID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CourseRequest {
    return new CourseRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CourseRequest {
    return new CourseRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CourseRequest {
    return new CourseRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CourseRequest | PlainMessage<CourseRequest> | undefined, b: CourseRequest | PlainMessage<CourseRequest> | undefined): boolean {
    return proto3.util.equals(CourseRequest, a, b);
  }
}

/**
 * @generated from message qf.UserRequest
 */
export class UserRequest extends Message<UserRequest> {
  /**
   * @generated from field: uint64 userID = 1;
   */
  userID = protoInt64.zero;

  constructor(data?: PartialMessage<UserRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "qf.UserRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "userID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserRequest {
    return new UserRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserRequest {
    return new UserRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserRequest {
    return new UserRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UserRequest | PlainMessage<UserRequest> | undefined, b: UserRequest | PlainMessage<UserRequest> | undefined): boolean {
    return proto3.util.equals(UserRequest, a, b);
  }
}

/**
 * @generated from message qf.GetGroupRequest
 */
export class GetGroupRequest extends Message<GetGroupRequest> {
  /**
   * @generated from field: uint64 groupID = 1;
   */
  groupID = protoInt64.zero;

  constructor(data?: PartialMessage<GetGroupRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "qf.GetGroupRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "groupID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetGroupRequest {
    return new GetGroupRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetGroupRequest {
    return new GetGroupRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetGroupRequest {
    return new GetGroupRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetGroupRequest | PlainMessage<GetGroupRequest> | undefined, b: GetGroupRequest | PlainMessage<GetGroupRequest> | undefined): boolean {
    return proto3.util.equals(GetGroupRequest, a, b);
  }
}

/**
 * @generated from message qf.GroupRequest
 */
export class GroupRequest extends Message<GroupRequest> {
  /**
   * @generated from field: uint64 userID = 1;
   */
  userID = protoInt64.zero;

  /**
   * @generated from field: uint64 groupID = 2;
   */
  groupID = protoInt64.zero;

  /**
   * @generated from field: uint64 courseID = 3;
   */
  courseID = protoInt64.zero;

  constructor(data?: PartialMessage<GroupRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "qf.GroupRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "userID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "groupID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "courseID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GroupRequest {
    return new GroupRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GroupRequest {
    return new GroupRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GroupRequest {
    return new GroupRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GroupRequest | PlainMessage<GroupRequest> | undefined, b: GroupRequest | PlainMessage<GroupRequest> | undefined): boolean {
    return proto3.util.equals(GroupRequest, a, b);
  }
}

/**
 * @generated from message qf.OrgRequest
 */
export class OrgRequest extends Message<OrgRequest> {
  /**
   * @generated from field: string orgName = 1;
   */
  orgName = "";

  constructor(data?: PartialMessage<OrgRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "qf.OrgRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "orgName", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OrgRequest {
    return new OrgRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OrgRequest {
    return new OrgRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OrgRequest {
    return new OrgRequest().fromJsonString(jsonString, options);
  }

  static equals(a: OrgRequest | PlainMessage<OrgRequest> | undefined, b: OrgRequest | PlainMessage<OrgRequest> | undefined): boolean {
    return proto3.util.equals(OrgRequest, a, b);
  }
}

/**
 * @generated from message qf.Organization
 */
export class Organization extends Message<Organization> {
  /**
   * @generated from field: uint64 ID = 1;
   */
  ID = protoInt64.zero;

  /**
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * @generated from field: string avatar = 3;
   */
  avatar = "";

  /**
   * @generated from field: string paymentPlan = 4;
   */
  paymentPlan = "";

  constructor(data?: PartialMessage<Organization>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "qf.Organization";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "avatar", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "paymentPlan", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Organization {
    return new Organization().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Organization {
    return new Organization().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Organization {
    return new Organization().fromJsonString(jsonString, options);
  }

  static equals(a: Organization | PlainMessage<Organization> | undefined, b: Organization | PlainMessage<Organization> | undefined): boolean {
    return proto3.util.equals(Organization, a, b);
  }
}

/**
 * @generated from message qf.Organizations
 */
export class Organizations extends Message<Organizations> {
  /**
   * @generated from field: repeated qf.Organization organizations = 1;
   */
  organizations: Organization[] = [];

  constructor(data?: PartialMessage<Organizations>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "qf.Organizations";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "organizations", kind: "message", T: Organization, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Organizations {
    return new Organizations().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Organizations {
    return new Organizations().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Organizations {
    return new Organizations().fromJsonString(jsonString, options);
  }

  static equals(a: Organizations | PlainMessage<Organizations> | undefined, b: Organizations | PlainMessage<Organizations> | undefined): boolean {
    return proto3.util.equals(Organizations, a, b);
  }
}

/**
 * @generated from message qf.Reviewers
 */
export class Reviewers extends Message<Reviewers> {
  /**
   * @generated from field: repeated qf.User reviewers = 1;
   */
  reviewers: User[] = [];

  constructor(data?: PartialMessage<Reviewers>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "qf.Reviewers";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "reviewers", kind: "message", T: User, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Reviewers {
    return new Reviewers().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Reviewers {
    return new Reviewers().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Reviewers {
    return new Reviewers().fromJsonString(jsonString, options);
  }

  static equals(a: Reviewers | PlainMessage<Reviewers> | undefined, b: Reviewers | PlainMessage<Reviewers> | undefined): boolean {
    return proto3.util.equals(Reviewers, a, b);
  }
}

/**
 * EnrollmentRequest is a request for enrolled users of a given course,
 * whose enrollment status match those provided in the request. To ignore group members
 * that otherwise match the enrollment request, set ignoreGroupMembers to true.
 *
 * @generated from message qf.EnrollmentRequest
 */
export class EnrollmentRequest extends Message<EnrollmentRequest> {
  /**
   * @generated from field: uint64 courseID = 1;
   */
  courseID = protoInt64.zero;

  /**
   * @generated from field: bool ignoreGroupMembers = 2;
   */
  ignoreGroupMembers = false;

  /**
   * @generated from field: bool withActivity = 3;
   */
  withActivity = false;

  /**
   * @generated from field: repeated qf.Enrollment.UserStatus statuses = 4;
   */
  statuses: Enrollment_UserStatus[] = [];

  constructor(data?: PartialMessage<EnrollmentRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "qf.EnrollmentRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "courseID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "ignoreGroupMembers", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "withActivity", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "statuses", kind: "enum", T: proto3.getEnumType(Enrollment_UserStatus), repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnrollmentRequest {
    return new EnrollmentRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnrollmentRequest {
    return new EnrollmentRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnrollmentRequest {
    return new EnrollmentRequest().fromJsonString(jsonString, options);
  }

  static equals(a: EnrollmentRequest | PlainMessage<EnrollmentRequest> | undefined, b: EnrollmentRequest | PlainMessage<EnrollmentRequest> | undefined): boolean {
    return proto3.util.equals(EnrollmentRequest, a, b);
  }
}

/**
 * EnrollmentStatusRequest is a request for a given user, with a specific enrollment status.
 *
 * @generated from message qf.EnrollmentStatusRequest
 */
export class EnrollmentStatusRequest extends Message<EnrollmentStatusRequest> {
  /**
   * @generated from field: uint64 userID = 1;
   */
  userID = protoInt64.zero;

  /**
   * @generated from field: repeated qf.Enrollment.UserStatus statuses = 2;
   */
  statuses: Enrollment_UserStatus[] = [];

  constructor(data?: PartialMessage<EnrollmentStatusRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "qf.EnrollmentStatusRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "userID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "statuses", kind: "enum", T: proto3.getEnumType(Enrollment_UserStatus), repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnrollmentStatusRequest {
    return new EnrollmentStatusRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnrollmentStatusRequest {
    return new EnrollmentStatusRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnrollmentStatusRequest {
    return new EnrollmentStatusRequest().fromJsonString(jsonString, options);
  }

  static equals(a: EnrollmentStatusRequest | PlainMessage<EnrollmentStatusRequest> | undefined, b: EnrollmentStatusRequest | PlainMessage<EnrollmentStatusRequest> | undefined): boolean {
    return proto3.util.equals(EnrollmentStatusRequest, a, b);
  }
}

/**
 * @generated from message qf.SubmissionRequest
 */
export class SubmissionRequest extends Message<SubmissionRequest> {
  /**
   * @generated from field: uint64 userID = 1;
   */
  userID = protoInt64.zero;

  /**
   * @generated from field: uint64 groupID = 2;
   */
  groupID = protoInt64.zero;

  /**
   * @generated from field: uint64 courseID = 3;
   */
  courseID = protoInt64.zero;

  constructor(data?: PartialMessage<SubmissionRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "qf.SubmissionRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "userID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "groupID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "courseID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SubmissionRequest {
    return new SubmissionRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SubmissionRequest {
    return new SubmissionRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SubmissionRequest {
    return new SubmissionRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SubmissionRequest | PlainMessage<SubmissionRequest> | undefined, b: SubmissionRequest | PlainMessage<SubmissionRequest> | undefined): boolean {
    return proto3.util.equals(SubmissionRequest, a, b);
  }
}

/**
 * @generated from message qf.UpdateSubmissionRequest
 */
export class UpdateSubmissionRequest extends Message<UpdateSubmissionRequest> {
  /**
   * @generated from field: uint64 submissionID = 1;
   */
  submissionID = protoInt64.zero;

  /**
   * @generated from field: uint64 courseID = 2;
   */
  courseID = protoInt64.zero;

  /**
   * @generated from field: uint32 score = 3;
   */
  score = 0;

  /**
   * @generated from field: bool released = 4;
   */
  released = false;

  /**
   * @generated from field: qf.Submission.Status status = 5;
   */
  status = Submission_Status.NONE;

  constructor(data?: PartialMessage<UpdateSubmissionRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "qf.UpdateSubmissionRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "submissionID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "courseID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "score", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "released", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "status", kind: "enum", T: proto3.getEnumType(Submission_Status) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateSubmissionRequest {
    return new UpdateSubmissionRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateSubmissionRequest {
    return new UpdateSubmissionRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateSubmissionRequest {
    return new UpdateSubmissionRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateSubmissionRequest | PlainMessage<UpdateSubmissionRequest> | undefined, b: UpdateSubmissionRequest | PlainMessage<UpdateSubmissionRequest> | undefined): boolean {
    return proto3.util.equals(UpdateSubmissionRequest, a, b);
  }
}

/**
 * @generated from message qf.UpdateSubmissionsRequest
 */
export class UpdateSubmissionsRequest extends Message<UpdateSubmissionsRequest> {
  /**
   * @generated from field: uint64 courseID = 1;
   */
  courseID = protoInt64.zero;

  /**
   * @generated from field: uint64 assignmentID = 2;
   */
  assignmentID = protoInt64.zero;

  /**
   * @generated from field: uint32 scoreLimit = 3;
   */
  scoreLimit = 0;

  /**
   * @generated from field: bool release = 4;
   */
  release = false;

  /**
   * @generated from field: bool approve = 5;
   */
  approve = false;

  constructor(data?: PartialMessage<UpdateSubmissionsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "qf.UpdateSubmissionsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "courseID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "assignmentID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "scoreLimit", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "release", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "approve", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateSubmissionsRequest {
    return new UpdateSubmissionsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateSubmissionsRequest {
    return new UpdateSubmissionsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateSubmissionsRequest {
    return new UpdateSubmissionsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateSubmissionsRequest | PlainMessage<UpdateSubmissionsRequest> | undefined, b: UpdateSubmissionsRequest | PlainMessage<UpdateSubmissionsRequest> | undefined): boolean {
    return proto3.util.equals(UpdateSubmissionsRequest, a, b);
  }
}

/**
 * @generated from message qf.SubmissionReviewersRequest
 */
export class SubmissionReviewersRequest extends Message<SubmissionReviewersRequest> {
  /**
   * @generated from field: uint64 submissionID = 1;
   */
  submissionID = protoInt64.zero;

  /**
   * @generated from field: uint64 courseID = 2;
   */
  courseID = protoInt64.zero;

  constructor(data?: PartialMessage<SubmissionReviewersRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "qf.SubmissionReviewersRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "submissionID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "courseID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SubmissionReviewersRequest {
    return new SubmissionReviewersRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SubmissionReviewersRequest {
    return new SubmissionReviewersRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SubmissionReviewersRequest {
    return new SubmissionReviewersRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SubmissionReviewersRequest | PlainMessage<SubmissionReviewersRequest> | undefined, b: SubmissionReviewersRequest | PlainMessage<SubmissionReviewersRequest> | undefined): boolean {
    return proto3.util.equals(SubmissionReviewersRequest, a, b);
  }
}

/**
 * @generated from message qf.URLRequest
 */
export class URLRequest extends Message<URLRequest> {
  /**
   * @generated from field: uint64 courseID = 1;
   */
  courseID = protoInt64.zero;

  /**
   * @generated from field: repeated qf.Repository.Type repoTypes = 2;
   */
  repoTypes: Repository_Type[] = [];

  constructor(data?: PartialMessage<URLRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "qf.URLRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "courseID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "repoTypes", kind: "enum", T: proto3.getEnumType(Repository_Type), repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): URLRequest {
    return new URLRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): URLRequest {
    return new URLRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): URLRequest {
    return new URLRequest().fromJsonString(jsonString, options);
  }

  static equals(a: URLRequest | PlainMessage<URLRequest> | undefined, b: URLRequest | PlainMessage<URLRequest> | undefined): boolean {
    return proto3.util.equals(URLRequest, a, b);
  }
}

/**
 * used to check whether student/group submission repo is empty
 *
 * @generated from message qf.RepositoryRequest
 */
export class RepositoryRequest extends Message<RepositoryRequest> {
  /**
   * @generated from field: uint64 userID = 1;
   */
  userID = protoInt64.zero;

  /**
   * @generated from field: uint64 groupID = 2;
   */
  groupID = protoInt64.zero;

  /**
   * @generated from field: uint64 courseID = 3;
   */
  courseID = protoInt64.zero;

  constructor(data?: PartialMessage<RepositoryRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "qf.RepositoryRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "userID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "groupID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "courseID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RepositoryRequest {
    return new RepositoryRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RepositoryRequest {
    return new RepositoryRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RepositoryRequest {
    return new RepositoryRequest().fromJsonString(jsonString, options);
  }

  static equals(a: RepositoryRequest | PlainMessage<RepositoryRequest> | undefined, b: RepositoryRequest | PlainMessage<RepositoryRequest> | undefined): boolean {
    return proto3.util.equals(RepositoryRequest, a, b);
  }
}

/**
 * @generated from message qf.Repositories
 */
export class Repositories extends Message<Repositories> {
  /**
   * @generated from field: map<string, string> URLs = 1;
   */
  URLs: { [key: string]: string } = {};

  constructor(data?: PartialMessage<Repositories>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "qf.Repositories";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "URLs", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Repositories {
    return new Repositories().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Repositories {
    return new Repositories().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Repositories {
    return new Repositories().fromJsonString(jsonString, options);
  }

  static equals(a: Repositories | PlainMessage<Repositories> | undefined, b: Repositories | PlainMessage<Repositories> | undefined): boolean {
    return proto3.util.equals(Repositories, a, b);
  }
}

/**
 * @generated from message qf.Status
 */
export class Status extends Message<Status> {
  /**
   * @generated from field: uint64 Code = 1;
   */
  Code = protoInt64.zero;

  /**
   * @generated from field: string Error = 2;
   */
  Error = "";

  constructor(data?: PartialMessage<Status>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "qf.Status";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "Code", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "Error", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Status {
    return new Status().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Status {
    return new Status().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Status {
    return new Status().fromJsonString(jsonString, options);
  }

  static equals(a: Status | PlainMessage<Status> | undefined, b: Status | PlainMessage<Status> | undefined): boolean {
    return proto3.util.equals(Status, a, b);
  }
}

/**
 * @generated from message qf.SubmissionsForCourseRequest
 */
export class SubmissionsForCourseRequest extends Message<SubmissionsForCourseRequest> {
  /**
   * @generated from field: uint64 courseID = 1;
   */
  courseID = protoInt64.zero;

  /**
   * @generated from field: qf.SubmissionsForCourseRequest.Type type = 2;
   */
  type = SubmissionsForCourseRequest_Type.ALL;

  constructor(data?: PartialMessage<SubmissionsForCourseRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "qf.SubmissionsForCourseRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "courseID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "type", kind: "enum", T: proto3.getEnumType(SubmissionsForCourseRequest_Type) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SubmissionsForCourseRequest {
    return new SubmissionsForCourseRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SubmissionsForCourseRequest {
    return new SubmissionsForCourseRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SubmissionsForCourseRequest {
    return new SubmissionsForCourseRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SubmissionsForCourseRequest | PlainMessage<SubmissionsForCourseRequest> | undefined, b: SubmissionsForCourseRequest | PlainMessage<SubmissionsForCourseRequest> | undefined): boolean {
    return proto3.util.equals(SubmissionsForCourseRequest, a, b);
  }
}

/**
 * @generated from enum qf.SubmissionsForCourseRequest.Type
 */
export enum SubmissionsForCourseRequest_Type {
  /**
   * @generated from enum value: ALL = 0;
   */
  ALL = 0,

  /**
   * @generated from enum value: INDIVIDUAL = 1;
   */
  INDIVIDUAL = 1,

  /**
   * @generated from enum value: GROUP = 2;
   */
  GROUP = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(SubmissionsForCourseRequest_Type)
proto3.util.setEnumType(SubmissionsForCourseRequest_Type, "qf.SubmissionsForCourseRequest.Type", [
  { no: 0, name: "ALL" },
  { no: 1, name: "INDIVIDUAL" },
  { no: 2, name: "GROUP" },
]);

/**
 * @generated from message qf.RebuildRequest
 */
export class RebuildRequest extends Message<RebuildRequest> {
  /**
   * @generated from field: uint64 courseID = 1;
   */
  courseID = protoInt64.zero;

  /**
   * @generated from field: uint64 assignmentID = 2;
   */
  assignmentID = protoInt64.zero;

  /**
   * @generated from field: uint64 submissionID = 3;
   */
  submissionID = protoInt64.zero;

  constructor(data?: PartialMessage<RebuildRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "qf.RebuildRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "courseID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "assignmentID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "submissionID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RebuildRequest {
    return new RebuildRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RebuildRequest {
    return new RebuildRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RebuildRequest {
    return new RebuildRequest().fromJsonString(jsonString, options);
  }

  static equals(a: RebuildRequest | PlainMessage<RebuildRequest> | undefined, b: RebuildRequest | PlainMessage<RebuildRequest> | undefined): boolean {
    return proto3.util.equals(RebuildRequest, a, b);
  }
}

/**
 * @generated from message qf.CourseUserRequest
 */
export class CourseUserRequest extends Message<CourseUserRequest> {
  /**
   * @generated from field: string courseCode = 1;
   */
  courseCode = "";

  /**
   * @generated from field: uint32 courseYear = 2;
   */
  courseYear = 0;

  /**
   * @generated from field: string userLogin = 3;
   */
  userLogin = "";

  constructor(data?: PartialMessage<CourseUserRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "qf.CourseUserRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "courseCode", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "courseYear", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "userLogin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CourseUserRequest {
    return new CourseUserRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CourseUserRequest {
    return new CourseUserRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CourseUserRequest {
    return new CourseUserRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CourseUserRequest | PlainMessage<CourseUserRequest> | undefined, b: CourseUserRequest | PlainMessage<CourseUserRequest> | undefined): boolean {
    return proto3.util.equals(CourseUserRequest, a, b);
  }
}

/**
 * Void contains no fields. A server response with a Void still contains a gRPC status code,
 * which can be checked for success or failure. Status code 0 indicates that the requested action was successful,
 * whereas any other status code indicates some failure. As such, the status code can be used as a boolean result from
 * the server.
 *
 * @generated from message qf.Void
 */
export class Void extends Message<Void> {
  constructor(data?: PartialMessage<Void>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "qf.Void";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Void {
    return new Void().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Void {
    return new Void().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Void {
    return new Void().fromJsonString(jsonString, options);
  }

  static equals(a: Void | PlainMessage<Void> | undefined, b: Void | PlainMessage<Void> | undefined): boolean {
    return proto3.util.equals(Void, a, b);
  }
}

