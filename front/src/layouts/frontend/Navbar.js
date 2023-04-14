import axios from 'axios';
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import swal from 'sweetalert';

export default function Navbar() {

    const history = useHistory();

    const logoutSubmit = (e) => {
        e.preventDefault();

        axios.post('api/logout').then(res =>{
            if (res.data.status === 200) {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_name');
                swal("Success",res.data.message,"success")
                history.push('/login')
            }
        })
    }

    // hadi bach ila kan user msajal thayad register ou login mn nav
    var AuthButton = '';
    if (!localStorage.getItem('auth_token')) {
        AuthButton = (
            <ul className='navbar-nav' >
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/register" > Register</Link>
                </li>
            </ul>
        )
    } else {
        AuthButton = (
            <li className="nav-item">
                <button type='button' onClick={logoutSubmit} className="nav-link btn btn-danger btn-sm text-white" > Logout</button>
            </li>
        )
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow sticky-top">
            {/* if you want the writing in the navbar black change the navbar-dark to light */}
            <div className="container">
                <Link className="navbar-brand" to="#">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Collections</Link>
                        </li>
                        {AuthButton}

                    </ul>
                </div>
            </div>
        </nav>
    )
}
