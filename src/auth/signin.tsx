import React, { useEffect } from "react";
import './signin.css';
import { useState } from 'react';

const Sign_In: React.FC = () => {
    const [email, setEmail] = useState('');
    const [switchPage, setSwitchPage] = useState(false);
    // Is Wrong Email? True/False 
    const [isWrong,setIsWrong] = useState(Boolean);
    
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    };
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(email)) {
        setIsWrong(true);
        return;
        }
        setSwitchPage(true);
        setIsWrong(false);
    };

    const [lang,setLang] = useState(localStorage.getItem('lang_item') === 'ru' ? 'ru' : 'en');
    document.addEventListener('changeLang', (event) => {
        setLang(localStorage.getItem('lang_item') === 'ru' ? 'ru' : 'en');  
    })

    return (
        <>
        <div className="InsideBlock">
            <div className="header_block">
                <h2>LOGO</h2>
                <h1>{lang === 'ru' ? 'Вход' : 'Sign In'}</h1>
                <p style={{color: switchPage ? '#6176DE' : 'black'}}>{switchPage ? '2/2' : '1/2'}</p>
            </div>
            <div className="main_block">
                <div className="input_email" style={{display: switchPage ? 'none' : 'flex'}}>
                    <label htmlFor="email_In">{lang === 'ru' ? 'Введите ваш email' : 'Enter your email'}</label>
                    <input 
                    type="email" 
                    id="email_In" 
                    autoComplete="email" 
                    value={email} 
                    onChange={handleEmailChange} 
                    style={isWrong ? {background: 'rgba(255, 38, 38, 0.20)'} : {}}
                    />
                </div>
                <div className="input_password_email" style={{display: switchPage ? 'flex' : 'none'}}>
                    <label htmlFor="password_In">{lang === 'ru' ? 'Введите пароль для' : 'Enter password for'} {email}</label>
                    <input 
                    type="password" 
                    id="password_In"
                    />
                </div>
                <button className="accept_sign_button button_active" onClick={handleSubmit}>{lang === 'ru' ? 'Войти' : 'Sign In'}</button>
                <p>{lang === 'ru' ? 'Защищенно с помощью' : 'Protected by'} ***** <a href="#!" className="link">{lang === 'ru' ? 'Подробнее' : 'More'}</a></p>
            </div>
            <div className="footer_block">
                <p>{lang === 'ru' ? 'Данные защищенны с помощью' : 'Email security powered by'} ******** <a href="#!" className="link">{lang === 'ru' ? 'Подробнее' : 'More'}</a></p>
            </div>
        </div>
        <div className="error_Block" style={isWrong ? {display: 'flex'} : {display: 'none'}}>
            {lang === 'ru' ? 'Ошибка:' : 'Error:'}: <span style={{color: 'black'}}>&nbsp;{lang === 'ru' ? 'Неправильный email' : 'enter your email'}</span>
        </div>  
        </>
    );
}

export default Sign_In;