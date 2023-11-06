import React, { useEffect, useState } from "react";
import Sign_In from "./signin";
import Sign_Up from "./signup";
import "./index.css";
function AuthIndex() {
    const [wrap,setWrap] = useState(localStorage.getItem('wrap_item') === 'SignIn' ? <Sign_In/> : <Sign_Up/>);
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        document.addEventListener('changeSign', (event) => {
            setIsLogin(true);
        });
    },[])
    return (
        <>
            <div className="container">
                <div className="header">
                    <p><button className="en active">en</button>/<button className="ru">ru</button></p>
                    <div className="button_sign">
                        {isLogin ? 
                        <>
                        <button className="sign_in" style={{display: 'flex', alignItems: 'center'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-box-arrow-left" style={{marginRight: '10px'}} viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                                <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                            </svg>
                            Sign Out
                        </button>
                        </>
                        : 
                        <>
                            <button className={localStorage.getItem('wrap_item') === 'SignIn' ? 'sign_in active' : 'sign_in'} onClick={() => {setWrap(<Sign_In/>); localStorage.setItem('wrap_item','SignIn')}}>Sign In</button>
                            <button className={localStorage.getItem('wrap_item') === 'SignUp' ? 'sign_up active' : 'sign_up'} onClick={() => {setWrap(<Sign_Up/>); localStorage.setItem('wrap_item','SignUp')}}>Sign Up</button>

                        </> 
                            
                        }
                    </div>
                </div>
                <div className="wrapper">
                    <div className="block">
                        {wrap}
                    </div>
                </div>
            </div>
        </>
    );
}
export default AuthIndex;