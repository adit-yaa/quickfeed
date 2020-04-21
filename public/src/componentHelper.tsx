import * as React from "react";
import { Course, Enrollment, Group, User } from "../proto/ag_pb";
import { IStudentLabsForCourse } from './models';


export function sortCoursesByVisibility(enrols: Enrollment[]): Enrollment[] {
    let sorted: Enrollment[] = [];
    const active: Enrollment[] = [];
    const archived: Enrollment[] = [];
    // TODO: if we want to display active and hidden courses in separate tables,
    // they can easily be separated here
    enrols.forEach((enrol) => {
        switch (enrol.getState()) {
            case Enrollment.DisplayState.FAVORITE:
                sorted.push(enrol);
                break;
            case Enrollment.DisplayState.ACTIVE:
                active.push(enrol);
                break;
            case Enrollment.DisplayState.ARCHIVED:
                archived.push(enrol);
                break;
            case Enrollment.DisplayState.UNSET:
                active.push(enrol);
                break;
        }
    })
    sorted = sorted.concat(active, archived);
    return sorted;
}

export function sortUsersByAdminStatus(users: Enrollment[]): Enrollment[] {
    return users.sort((x, y) => ((x.getUser()?.getIsadmin() ?? false) < (y.getUser()?.getIsadmin() ?? false) ? 1 : -1));
}

export function searchForStudents(enrols: Enrollment[], query: string): Enrollment[] {
    query = query.toLowerCase();
    const filteredStudents: Enrollment[] = [];
    enrols.forEach((enrol) => {
        const student = enrol.getUser();
        if (student && foundUser(student, query)) {
            filteredStudents.push(enrol);
        }
    })
    return filteredStudents;
}

export function searchForGroups(groups: Group[], query: string): Group[] {
    query = query.toLowerCase();
    const filteredGroups: Group[] = [];
    groups.forEach((grp) => {
        if (foundGroup(grp, query)) {
            filteredGroups.push(grp);
        }
    })
    return filteredGroups;
}

export function searchForCourses(courses: Enrollment[] | Course[], query: string): Enrollment[] | Course[] {
    if (courses.length < 1) {
        return courses;
    }
    const enrollmentList: Enrollment[] = [];
    const coursesList: Course[] = [];
    query = query.toLowerCase();
    courses.forEach((e: Enrollment | Course) => {
        const course = e instanceof Enrollment ? e.getCourse() : e;
        if (course && foundCourse(course, query)) {
            e instanceof Enrollment ? enrollmentList.push(e) : coursesList.push(e);
        }
    })
    return enrollmentList.length > 0 ? enrollmentList : coursesList;
}

export function searchForLabs(labs: IStudentLabsForCourse[], query: string) {
    query = query.toLowerCase();
    const filteredLabs: IStudentLabsForCourse[] = [];
    labs.forEach((e) => {
        const usr = e.enrollment.getUser();
        const grp = e.enrollment.getGroup();
        if (usr && foundUser(usr, query)) {
                filteredLabs.push(e);
        } else if (grp && foundGroup(grp, query)) {
              filteredLabs.push(e);
        }
    });
    return filteredLabs;
}

function foundGroup(group: Group, query: string): boolean {
    return group.getName().toLowerCase().indexOf(query) !== -1 ||
     group.getTeamid().toString().indexOf(query) !== -1;
}

function foundUser(user: User, query: string): boolean {
    const student = user.toObject();
    return student.name.toLowerCase().indexOf(query) !== -1
    || student.email.toLowerCase().indexOf(query) !== -1
    || student.studentid.toString().indexOf(query) !== -1
    || student.login.toLowerCase().indexOf(query) !== -1;
}

function foundCourse(course: Course, query: string): boolean {
    return course.getName().toLowerCase().indexOf(query) !== -1 ||
    course.getCode().toLowerCase().indexOf(query) !== -1 ||
    course.getYear().toString().indexOf(query) !== -1 ||
    course.getTag().toLowerCase().indexOf(query) !== -1;
}

export function getActiveCourses(courses: Course[], enrols: Enrollment[], userID: number): Course[] {
    const activeCourses: Course[] = [];
    enrols = sortCoursesByVisibility(enrols);
    enrols.forEach((enrol) => {
        const crs = enrol.getCourse();
        if (enrol.getState() !== Enrollment.DisplayState.ARCHIVED &&
            crs && courses.find(e => e.getId() === crs.getId()
            )) {
            activeCourses.push(crs);
        }
    });
    return activeCourses;
}

export function groupRepoLink(groupName: string, courseURL: string): JSX.Element {
    return <a href={courseURL + slugify(groupName)} target="_blank">{ groupName }</a>;
}

function gitUserLink(user: string): string {
    return "https://github.com/" + user;
}

function labRepoLink(course: string, login: string): string {
    return course + login + "-labs";
}

// If the courseURL parameter is given, returns a link to the student lab repository,
// otherwise returns link to the user's GitHub profile.
export function generateGitLink(user: string, courseURL?: string): string {
    return courseURL ? labRepoLink(courseURL, user) : gitUserLink(user);
}

// Returns a URL-friendly version of the given string.
export function slugify(str: string): string {

    str = str.replace(/^\s+|\s+$/g, "").toLowerCase();

    // Remove accents, swap ñ for n, etc
    const from = "ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;";
    const to   = "AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------";
    for (let i = 0 ; i < from.length ; i++) {
        str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
    }

    // Remove invalid chars, replace whitespace by dashes, collapse dashes
    str = str.replace(/[^a-z0-9 -]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");

    return str;
}