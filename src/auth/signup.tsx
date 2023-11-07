import React from "react";
import './signup.css';
import { useState } from 'react';

const Sign_Up: React.FC = () => {
    const [email, setEmail] = useState('');
    const [switchPage, setSwitchPage] = useState(false);
    const [switchPage2, setSwitchPage2] = useState(false);
    // Is Wrong Email? True/False 
    const [isWrong,setIsWrong] = useState(false);
    const [isWrong2,setIsWrong2] = useState(false);
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    };
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const changeSign = new CustomEvent('changeSign', {});

        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

        if (!emailRegex.test(email)) {
            setIsWrong(true);
            return;
        }

        if (switchPage === true && (password !== retypePassword || password.length < 8)) {
            setIsWrong2(true);
            return;
        }
        if (switchPage) {
            setSwitchPage2(true);
            setIsWrong2(false);
            document.dispatchEvent(changeSign);
            return;
        }
        setSwitchPage(true);
        setIsWrong(false);
        setIsWrong2(false);
    };


    return (
        <>
        <div className="InsideBlock" style={{display: switchPage2 ? 'none' : 'block'}}>
            <div className="header_block">
                <h2>LOGO</h2>
                <h1>Sign Up</h1>
                <p style={{color: switchPage ? '#6176DE' : 'black'}}>
                    {switchPage ? '2/2' : '1/2'}
                </p>
            </div>
            <div className="main_block">
                <div className="input_email" style={{display: switchPage ? 'none' : 'flex'}}>
                    <label htmlFor="email_In">Enter your email</label>
                    <input 
                    type="email" 
                    id="email_In" 
                    autoComplete="email" 
                    value={email} 
                    onChange={handleEmailChange} 
                    style={isWrong ? {background: 'rgba(255, 38, 38, 0.20)'} : {}}
                    />
                </div>
                <div className="input_password_email" style={{ display: switchPage ? 'flex' : 'none' }}>
                    <label htmlFor="password_In">Create Password <span style={{color: '#CCC', fontSize: '15px', fontWeight: '500'}}>(min, 8 symbols)</span></label>
                    <input
                    type="password"
                    id="password_In"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    style={isWrong2 ? {background: 'rgba(255, 38, 38, 0.20)'} : {}}
                    />
                </div>
                
                <div className="input_password_email" style={{ display: switchPage ? 'flex' : 'none' }}>
                    <label htmlFor="retype_password">Retype Password</label>
                    <input
                    type="password"
                    id="retype_password"
                    value={retypePassword}
                    onChange={(event) => setRetypePassword(event.target.value)}
                    style={isWrong2 ? {background: 'rgba(255, 38, 38, 0.20)'} : {}}
                    />
                </div>
                <button className="accept_sign_button button_active" onClick={handleSubmit}>Next</button>
                <p style={{marginBottom: switchPage ? '100px' : '220px'}}>Protected by ***** <a href="#!" className="link">More</a></p>
            </div>
            <div className="footer_block">
                <p>Email security Powered By ******** <a href="#!" className="link">More</a></p>
            </div>
        </div>

        {/* Errors */}
        <div className="error_Block" style={isWrong ? {display: 'flex'} : {display: 'none'}}>
            Error: <span style={{color: 'black'}}>&nbsp;enter your email</span>
        </div>  
        
        <div className="error_Block" style={isWrong2 ? {display: 'flex'} : {display: 'none'}}>
            Error: <span style={{color: 'black'}}>&nbsp;check your passwords</span>
        </div> 

        {/* Check Your Email */}
        <div className="insideBlockCheckEmail" style={{display: switchPage2 ? 'block' : 'none'}}>
            <div className="header_block" style={{display: 'flex', justifyContent: 'center', margin: '0px'}}>
                <h1>Check Your Email</h1>
            </div>
            <div className="main_block">
                <h2>We have sent a message to your email</h2>
                <p style={{marginBottom: '30px' ,fontSize: '24px', fontWeight: '400'}}>Please check the message and click on the link to <br/> confirm your registration</p>
                <p>Protected by ***** <a href="#!" className="link">More</a></p>
            </div>
            <div className="footer_block">
                <p>Email security Powered By ******** <a href="#!" className="link">More</a></p>
            </div>
        </div>
        </>
    );
}

export default Sign_Up;