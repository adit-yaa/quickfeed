import React, { Component, useEffect, useState } from 'react'
import { useOvermind } from './overmind'
import Home from './components/Home'
import Info from "./components/Info";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from "./components/Profile";
import Course from "./components/Course";
import Lab from "./components/Lab";
import Courses from "./components/Courses";
import Group from "./components/Group";



const App = () => {

    const [loggedIn, setLoggedIn] = useState(false)
    const [isloading, setloading] =useState(true)
    useEffect(() => {
        if (!loggedIn) {
             actions.setupUser().then(success => {
                if (success) {
                    setLoggedIn(true)
                    
                }
                actions.loading()
            })
        }
        console.log('App.tsx useeffect runs')

    }, [loggedIn,setLoggedIn])

    // This is just to Update the Time object in state, every 20 minutes (after mount, it mounts with a new dateobject)
    useEffect(()=> {
        let updateDateNow = setInterval(()=>{
            actions.setTimeNow()
        },1200000)
        return() => clearInterval(updateDateNow)
    },[])
    // General
    const { state, actions } = useOvermind()
    return ( 
        <Router>
            <NavBar />
            <div className={state.theme+" app wrapper"} >
            
            
                <div id="content">
                {state.isLoading ? ( // if not logged in, enable only the Info component to be rendered
                    <div className="centered">Loading icon here</div>
                ) : ( // Else if, user logged in, but has not added their information redirect to Profile
                (state.user.email.length == 0 || state.user.name.length == 0 || state.user.studentid == 0) && loggedIn ? (
                    <Switch>
                        <Route path="/" component={Profile} />
                    </Switch>
                ) : ( !state.isLoading && loggedIn ? ( // Else render page as expected for a logged in user
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/info" component={Info} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/course/:id" exact component={Course} />
                    <Route path="/courses" exact component={Courses} />
                    <Route path="/course/:id/:lab" component={Lab} />
                    <Route path="/users" component={Group} />
                </Switch>
                // Admin stuff is probably also needed here somewhere. 
                ) : (
                    <Switch>
                        <Route path="/" component={Info} />
                    </Switch>
                )))}
                </div>
            </div>
        </Router>
        )

}



export default App