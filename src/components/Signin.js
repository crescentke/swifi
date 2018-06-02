import React from 'react';
import {Link} from "react-router-dom";

export class Signin extends React.Component {


    render() {
        return (
            <div>
                <div className='auth-wrap'>

                    <div className='text-center'>
                        <Link to={'/'} className='nav-btn sign-in-btn'>App | WiFi</Link>
                    </div>

                    <div className='auth-tiny'>

                        <h4>Sign In</h4>

                        <div className='input-group'>
                            <label for="id_username">Username or email address</label>
                            <input type='text' className='input-fw' required name='username' id='id_username'/>
                        </div>


                        <div className='input-group'>
                            <label for="id_password">Enter your password</label>
                            <input type='password' className='input-fw' required name='password' id='id_password'/>
                        </div>

                        <div className='input-group'>
                            <button className='btn-green' type='submit'>Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}