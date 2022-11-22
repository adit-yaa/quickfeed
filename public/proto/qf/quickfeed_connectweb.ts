// @generated by protoc-gen-connect-web v0.2.1 with parameter "target=ts"
// @generated from file qf/quickfeed.proto (package qf, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {CourseRequest, CourseSubmissions, EnrollmentRequest, EnrollmentStatusRequest, GetGroupRequest, GroupRequest, Organization, OrgRequest, RebuildRequest, Repositories, RepositoryRequest, ReviewRequest, SubmissionRequest, UpdateSubmissionRequest, UpdateSubmissionsRequest, URLRequest, Void} from "./requests_pb.js";
import {Assignments, Course, Courses, Enrollment, Enrollments, GradingBenchmark, GradingCriterion, Group, Groups, Review, Submission, Submissions, User, Users} from "./types_pb.js";
import {MethodKind} from "@bufbuild/protobuf";

/**
 * users //
 *
 * @generated from service qf.QuickFeedService
 */
export const QuickFeedService = {
  typeName: "qf.QuickFeedService",
  methods: {
    /**
     * @generated from rpc qf.QuickFeedService.GetUser
     */
    getUser: {
      name: "GetUser",
      I: Void,
      O: User,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc qf.QuickFeedService.GetUsers
     */
    getUsers: {
      name: "GetUsers",
      I: Void,
      O: Users,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc qf.QuickFeedService.UpdateUser
     */
    updateUser: {
      name: "UpdateUser",
      I: User,
      O: Void,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc qf.QuickFeedService.GetGroup
     */
    getGroup: {
      name: "GetGroup",
      I: GetGroupRequest,
      O: Group,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc qf.QuickFeedService.GetGroupByUserAndCourse
     */
    getGroupByUserAndCourse: {
      name: "GetGroupByUserAndCourse",
      I: GroupRequest,
      O: Group,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc qf.QuickFeedService.GetGroupsByCourse
     */
    getGroupsByCourse: {
      name: "GetGroupsByCourse",
      I: CourseRequest,
      O: Groups,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc qf.QuickFeedService.CreateGroup
     */
    createGroup: {
      name: "CreateGroup",
      I: Group,
      O: Group,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc qf.QuickFeedService.UpdateGroup
     */
    updateGroup: {
      name: "UpdateGroup",
      I: Group,
      O: Group,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc qf.QuickFeedService.DeleteGroup
     */
    deleteGroup: {
      name: "DeleteGroup",
      I: GroupRequest,
      O: Void,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc qf.QuickFeedService.GetCourse
     */
    getCourse: {
      name: "GetCourse",
      I: CourseRequest,
      O: Course,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc qf.QuickFeedService.GetCourses
     */
    getCourses: {
      name: "GetCourses",
      I: Void,
      O: Courses,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc qf.QuickFeedService.CreateCourse
     */
    createCourse: {
      name: "CreateCourse",
      I: Course,
      O: Course,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc qf.QuickFeedService.UpdateCourse
     */
    updateCourse: {
      name: "UpdateCourse",
      I: Course,
      O: Void,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc qf.QuickFeedService.UpdateCourseVisibility
     */
    updateCourseVisibility: {
      name: "UpdateCourseVisibility",
      I: Enrollment,
      O: Void,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc qf.QuickFeedService.GetAssignments
     */
    getAssignments: {
      name: "GetAssignments",
      I: CourseRequest,
      O: Assignments,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc qf.QuickFeedService.UpdateAssignments
     */
    updateAssignments: {
      name: "UpdateAssignments",
      I: CourseRequest,
      O: Void,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc qf.QuickFeedService.GetEnrollmentsByUser
     */
    getEnrollmentsByUser: {
      name: "GetEnrollmentsByUser",
      I: EnrollmentStatusRequest,
      O: Enrollments,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc qf.QuickFeedService.GetEnrollmentsByCourse
     */
    getEnrollmentsByCourse: {
      name: "GetEnrollmentsByCourse",
      I: EnrollmentRequest,
      O: Enrollments,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc qf.QuickFeedService.CreateEnrollment
     */
    createEnrollment: {
      name: "CreateEnrollment",
      I: Enrollment,
      O: Void,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc qf.QuickFeedService.UpdateEnrollments
     */
    updateEnrollments: {
      name: "UpdateEnrollments",
      I: Enrollments,
      O: Void,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc qf.QuickFeedService.GetSubmission
     */
    getSubmission: {
      name: "GetSubmission",
      I: SubmissionRequest,
      O: Submission,
      kind: MethodKind.Unary,
    },
    /**
     * Get latest submissions for all course assignments for a user or a group.
     *
     * @generated from rpc qf.QuickFeedService.GetSubmissions
     */
    getSubmissions: {
      name: "GetSubmissions",
      I: SubmissionRequest,
      O: Submissions,
      kind: MethodKind.Unary,
    },
    /**
     * Get lab submissions for every course user or every course group
     *
     * @generated from rpc qf.QuickFeedService.GetSubmissionsByCourse
     */
    getSubmissionsByCourse: {
      name: "GetSubmissionsByCourse",
      I: SubmissionRequest,
      O: CourseSubmissions,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc qf.QuickFeedService.UpdateSubmission
     */
    updateSubmission: {
      name: "UpdateSubmission",
      I: UpdateSubmissionRequest,
      O: Void,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc qf.QuickFeedService.UpdateSubmissions
     */
    updateSubmissions: {
      name: "UpdateSubmissions",
      I: UpdateSubmissionsRequest,
      O: Void,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc qf.QuickFeedService.RebuildSubmissions
     */
    rebuildSubmissions: {
      name: "RebuildSubmissions",
      I: RebuildRequest,
      O: Void,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc qf.QuickFeedService.CreateBenchmark
     */
    createBenchmark: {
      name: "CreateBenchmark",
      I: GradingBenchmark,
      O: GradingBenchmark,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc qf.QuickFeedService.UpdateBenchmark
     */
    updateBenchmark: {
      name: "UpdateBenchmark",
      I: GradingBenchmark,
      O: Void,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc qf.QuickFeedService.DeleteBenchmark
     */
    deleteBenchmark: {
      name: "DeleteBenchmark",
      I: GradingBenchmark,
      O: Void,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc qf.QuickFeedService.CreateCriterion
     */
    createCriterion: {
      name: "CreateCriterion",
      I: GradingCriterion,
      O: GradingCriterion,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc qf.QuickFeedService.UpdateCriterion
     */
    updateCriterion: {
      name: "UpdateCriterion",
      I: GradingCriterion,
      O: Void,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc qf.QuickFeedService.DeleteCriterion
     */
    deleteCriterion: {
      name: "DeleteCriterion",
      I: GradingCriterion,
      O: Void,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc qf.QuickFeedService.CreateReview
     */
    createReview: {
      name: "CreateReview",
      I: ReviewRequest,
      O: Review,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc qf.QuickFeedService.UpdateReview
     */
    updateReview: {
      name: "UpdateReview",
      I: ReviewRequest,
      O: Review,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc qf.QuickFeedService.GetOrganization
     */
    getOrganization: {
      name: "GetOrganization",
      I: OrgRequest,
      O: Organization,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc qf.QuickFeedService.GetRepositories
     */
    getRepositories: {
      name: "GetRepositories",
      I: URLRequest,
      O: Repositories,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc qf.QuickFeedService.IsEmptyRepo
     */
    isEmptyRepo: {
      name: "IsEmptyRepo",
      I: RepositoryRequest,
      O: Void,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc qf.QuickFeedService.SubmissionStream
     */
    submissionStream: {
      name: "SubmissionStream",
      I: Void,
      O: Submission,
      kind: MethodKind.ServerStreaming,
    },
  }
} as const;

