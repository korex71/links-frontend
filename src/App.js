import React from 'react'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'

import SignIn from './screens/SignIn/'
import SignUp from './screens/SignUp'
import Links from './screens/manage/links'
import Create from './screens/manage/create'
import Edit from './screens/manage/Edit'
import Home from './screens/Home'
const App = () => {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul className="list-group list-group-horizontal">
                        <li className="list-group-item"><Link to="/sign-in">Sign-in</Link></li>
                        <li className="list-group-item"><Link to="/sign-up">Sign-up</Link></li>
                        <li className="list-group-item"><Link to="/manage/links/create">Create link</Link></li>
                        <li className="list-group-item"><Link to="/manage/links/edit">Edit link</Link></li>
                        <li className="list-group-item"><Link to="/manage/links">Links</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/sign-in"><SignIn></SignIn></Route>
                    <Route path="/sign-up"><SignUp></SignUp></Route>
                    <Route path="/manage/links/create"><Create></Create></Route>
                    <Route path="/manage/links/edit"><Edit></Edit></Route>
                    <Route path="/manage/links"><Links></Links></Route>
                    <Route path="/"><Home></Home></Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App