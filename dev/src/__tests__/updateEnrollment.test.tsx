import { Enrollment, User } from "../../proto/ag/ag_pb"
import { createOvermindMock } from "overmind"
import { config } from "../overmind"
import { configure, mount, render } from "enzyme"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"
import { createMemoryHistory } from "history"
import React from "react"
import Members from "../components/Members"
import { Route, Router } from "react-router"
import { Provider } from "overmind-react"
import { MockGrpcManager } from "../MockGRPCManager"
import enzyme from "enzyme"


React.useLayoutEffect = React.useEffect


describe("UpdateEnrollment", () => {
    const mockedOvermind = createOvermindMock(config, {
        grpcMan: new MockGrpcManager()
    })
    it("Pending student gets accecpted", async () => {
        await mockedOvermind.actions.getEnrollmentsByCourse({ courseID: 2, statuses: [] })
        //This is a user with status pending
        window.confirm = jest.fn(() => true)
        mockedOvermind.actions.updateEnrollment({ enrollment: mockedOvermind.state.courseEnrollments[2][1], status: Enrollment.UserStatus.STUDENT })
        await expect(mockedOvermind.state.courseEnrollments[2][1].getStatus()).toEqual(2)
    })

    it("Demote teacher to student", async () => {
        await mockedOvermind.actions.getEnrollmentsByCourse({ courseID: 2, statuses: [] })
        //This is a user with status teacher
        window.confirm = jest.fn(() => true)
        mockedOvermind.actions.updateEnrollment({ enrollment: mockedOvermind.state.courseEnrollments[2][0], status: Enrollment.UserStatus.STUDENT })
        expect(mockedOvermind.state.courseEnrollments[2][0].getStatus()).toEqual(2)
    })
    it("Promote student to teacher", async () => {
        await mockedOvermind.actions.getEnrollmentsByCourse({ courseID: 1, statuses: [] })
        //This is a user with status student
        window.confirm = jest.fn(() => true)
        mockedOvermind.actions.updateEnrollment({ enrollment: mockedOvermind.state.courseEnrollments[1][0], status: Enrollment.UserStatus.TEACHER })
        expect(mockedOvermind.state.courseEnrollments[1][0].getStatus()).toEqual(3)

    })
})

configure({ adapter: new Adapter() })

describe("UpdateEnrollment in webpage", () => {
    it("If status is teacher, button should display demote", () => {
        const user = new User().setId(1).setName("Test User").setStudentid("6583969706").setEmail("test@gmail.com")
        const enrollment = new Enrollment().setId(2).setCourseid(1).setStatus(3).setUser(user).setSlipdaysremaining(3).setLastactivitydate("10 Mar").setTotalapproved(0)

        const mockedOvermind = createOvermindMock(config, (state) => {
            state.self = user
            state.activeCourse = 1
            state.courseEnrollments = { [1]: [enrollment] }
        })
        const history = createMemoryHistory()
        history.push("/course/1/members")

        React.useState = jest.fn().mockReturnValue("True")
        const wrapped = render(
            <Provider value={mockedOvermind}>
                <Router history={history} >
                    <Route path="/course/:id/members" component={Members} />
                </Router>
            </Provider>
        )
        expect(wrapped.find("i").first().text()).toEqual("Demote")
    })
    it("If status is student, button should display promote", () => {
        const user = new User().setId(1).setName("Test User").setStudentid("6583969706").setEmail("test@gmail.com")
        const enrollment = new Enrollment().setId(2).setCourseid(1).setStatus(2).setUser(user).setSlipdaysremaining(3).setLastactivitydate("10 Mar").setTotalapproved(0)

        const mockedOvermind = createOvermindMock(config, (state) => {
            state.self = user
            state.activeCourse = 1
            state.courseEnrollments = { [1]: [enrollment] }
        })
        const history = createMemoryHistory()
        history.push("/course/1/members")

        React.useState = jest.fn().mockReturnValue("True")
        const wrapped = render(
            <Provider value={mockedOvermind}>
                <Router history={history} >
                    <Route path="/course/:id/members" component={Members} />
                </Router>
            </Provider>
        )
        expect(wrapped.find("i").first().text()).toEqual("Promote")
    })
    it("If student is accepted, button should display Promote", async () => {
        // hent accept knappen, mocke at den blir trykket på, så sjekke tekst på knapp som skal være promote
        const mockedOvermind = createOvermindMock(config, {
            grpcMan: new MockGrpcManager()
        })
        await mockedOvermind.actions.fetchUserData()
        const history = createMemoryHistory()
        history.push("/course/2/members")
        console.log(mockedOvermind.state.courseEnrollments[2])

        React.useState = jest.fn().mockReturnValue("True")
        const wrapped = mount(
            <Provider value={mockedOvermind}>
                <Router history={history} >
                    <Route path="/course/:id/members" component={Members} />
                </Router>
            </Provider>
        )
        // console.log("Før click: knapp1: ", wrapped.find("i").at(0).text(), " knapp 2: ", wrapped.find("i").at(2).text())
        //expect(wrapped.find("i").at(2).text()).toEqual("Promote")
        wrapped.find("i").at(2).simulate("click")
        //wrapped.find("i").at(2).props().onClick()


        wrapped.update()
        //console.log("Etter click: knapp1: ", wrapped.find("i").at(0).text(), " knapp 2: ", wrapped.find("i").at(2).text())
        expect(wrapped.find("i").at(2).text()).toEqual("Promote")
        //expect(wrapped.instance().called).toBe(true)
    })

})
