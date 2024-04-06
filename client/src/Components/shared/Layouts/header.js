import React from "react";
import { BiSolidDonateBlood} from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux';


const Header = () => {
    const {user} = useSelector((state) => state.auth)
    const navigate = useNavigate()
    //logout handler
    const handleLogout = () => {
        localStorage.clear()
        
        alert('logout Successfully')
        navigate('/login')
    }
    return(
        <>
            <nav className="navbar ">
                <div className="container-fluid">
                    <div className="navbar-brand h1"><BiSolidDonateBlood color="red" /> Blood Bank App  </div>
                       <ul className="navbar-nav flex-row">
                        <li className="nav-item mx-3">
                            <p className="nav-link"><FaRegUserCircle />

                                Welcome{" "}{user?.name || user?.hospitalName || user?.organisationName} &nbsp;
                                <span class="badge text-bg-secondary">{user?.role}</span>
                            </p>
                             </li>
                        <li className="nav-item mx-3">
                           <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                        </li>
                       </ul>
                   
                </div>
            </nav>
        </>
    )
}

export default Header