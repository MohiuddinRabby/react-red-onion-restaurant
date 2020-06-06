import React from 'react';

const Login = () => {
    return (
        <div>
             <div className="form-body">
       <div className="form-cont">
       <form id="#form">
       <div className="f-con">
            </div>
            <div className="f-con">
                {/* <label for="username">Username</label> */}
                <input type="email"  placeholder="Email"/>
            </div>
            <div className="f-con">
                {/* <label for="username">Username</label> */}
                <input type="password"  placeholder="Password"/>
            </div>
            <button class="form-button">Login</button>
       </form>
       </div>
    </div>
        </div>
    );
};
export default Login;