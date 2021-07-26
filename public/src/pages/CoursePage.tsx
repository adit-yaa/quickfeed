import React, { useEffect } from "react"
import { Redirect } from "react-router"
import { getCourseID, isEnrolled, isTeacher } from "../Helpers"
import { useOvermind } from "../overmind"
import StudentPage from "./StudentPage"
import TeacherPage from "./TeacherPage"

/** This component is mainly used to determine which view (Student or Teacher) to render, based on enrollment status. */
const CoursePage = () => {
    const { state, actions: {setActiveCourse} } = useOvermind()
    const courseID = getCourseID()
    const enrollment = state.enrollmentsByCourseId[courseID]

    useEffect(() => {
        setActiveCourse(courseID)
    }, [courseID])

    if (state.enrollmentsByCourseId[courseID] && isEnrolled(enrollment)){
        if (isTeacher(enrollment)) {
            return <TeacherPage />
        }
        return <StudentPage />      
    }
    else {
        return <Redirect to={"/"}></Redirect>
    }
}

export default CoursePage