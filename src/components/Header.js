import React from 'react';
import {Link} from "react-router-dom";

class Header extends React.Component {


    render() {
        return (
            <div>
                <div className='h h-bottom h-top'>
                    <div className='bd-container bd-left bd-right'>
                        <div className='float-left'>
                            <Link to={'/'} className='nav-btn sign-in-btn'>App | WiFi</Link>
                        </div>
                        <div className='float-right'>
                            <Link to={'/accounts/login'} className='nav-btn sign-in-btn'>Sign In</Link>
                            <Link to={'/demo'} className='nav-btn register-btn'>Register</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default (Header);