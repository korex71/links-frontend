import React from 'react'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import $ from 'jquery';

import SignIn from './screens/SignIn/'
import SignUp from './screens/SignUp'
import Links from './screens/manage/links'
import Create from './screens/manage/create'
import Edit from './screens/manage/Edit'
import Home from './screens/Home'


$(document).ready(function () {
    $('title').text('Links app')
    $('a.nav-link').click(function () {
        $('.active').removeClass('active')
        $(this).addClass('active')
        $('title').text($('.active').text())
    })
})

const App = () => {
    return (
        <BrowserRouter>
            <div><nav className="navbar navbar-expand-lg bg-primary">
						<div className="container">
							<div className="navbar-translate">
                                <Link to="/home" className="navbar-brand">Links app</Link>
								<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#example-navbar-primary" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
									<span className="navbar-toggler-bar bar1"></span>
									<span className="navbar-toggler-bar bar2"></span>
									<span className="navbar-toggler-bar bar3"></span>
								</button>
							</div>

							<div className="collapse navbar-collapse" id="example-navbar-primary" data-nav-image="./assets/img/blurred-image-1.jpg">
								<ul className="navbar-nav ml-auto">
									<li className="nav-item active">
                                        <Link className="nav-link" to="/sign-in">
											<i className="now-ui-icons objects_globe"></i>
											<p>Login</p>
										</Link>
									</li>
									<li className="nav-item">
                                        <Link className="nav-link" to="/sign-up">
											<i className="now-ui-icons users_circle-08"></i>
											<p>Cadastro</p>
										</Link>
									</li>
									<li className="nav-item">
                                        <Link className="nav-link" to="/manage/links/create">
											<i className="now-ui-icons ui-1_settings-gear-63"></i>
											<p>Criar link</p>
                                        </Link>
									</li>
									<li className="nav-item">
                                        <Link className="nav-link" to="/manage/links/edit">
											<i className="now-ui-icons ui-1_settings-gear-63"></i>
											<p>Editar link</p>
                                        </Link>
									</li>
									<li className="nav-item">
                                        <Link className="nav-link" to="/manage/links">
											<i className="now-ui-icons ui-1_settings-gear-63"></i>
											<p>Ver links</p>
                                        </Link>
									</li>
								</ul>
							</div>
						</div>
					</nav>
                <div>
                    <Switch>
                        <Route path="/sign-in"><SignIn></SignIn></Route>
                        <Route path="/sign-up"><SignUp></SignUp></Route>
                        <Route path="/manage/links/create"><Create></Create></Route>
                        <Route path="/manage/links/edit"><Edit></Edit></Route>
                        <Route path="/manage/links"><Links></Links></Route>
                        <Route path="/"><Home></Home></Route>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    )
}
export default App