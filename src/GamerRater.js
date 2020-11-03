import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"

export const GamerRater = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("lu_token")) {
                return <>
                    <Route render={props => <ApplicationViews {...props} />} />
                </>
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={Login} />
        <Route path="/register" render={Register} />
    </>
)
