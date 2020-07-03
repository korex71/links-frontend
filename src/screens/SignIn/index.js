import React from 'react'
import {Link} from 'react-router-dom'
const SignIn = () => {
    return(
        <div className="container h-100 pt-5">
            <h1>Login</h1>
            <div className="d-flex flex-column h-100">
                <form>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Senha</label>
                        <input type="password" className="form-control"/>
                    </div>
                    <div>
                        <button className="btn btn-primary btn-round">Submit</button>
                    </div>
                </form>
                <div className="container text-center fixed-bottom pb-5">
                    <div className="text-muted">Não tem uma conta?</div>
                    <Link to="/sign-up">Cadastre-se</Link>
                </div>
            </div>
        </div>
    )
}

export default SignIn