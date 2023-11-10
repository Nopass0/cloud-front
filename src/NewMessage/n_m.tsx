import React, { useState } from "react";
import './n_m.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
function NewMessage() {
    const [value,setValue] = useState('');
    const [show, setShow] = useState(false);
    const [lang, setLang] = useState(localStorage.getItem('lang_item') === 'ru' ? 'ru' : 'en');

    return (
        <>
            <div className="container">
                <div className="header_message">
                    <p>
                        <button className={localStorage.getItem('lang_item') === 'en' ? 'en active' : 'en'} onClick={() => {setLang('en'); localStorage.setItem('lang_item','en');}}>
                        en
                        </button>
                        /
                        <button className={localStorage.getItem('lang_item') === 'ru' ? 'ru active' : 'ru'} onClick={() => {setLang('ru'); localStorage.setItem('lang_item', 'ru')}}>
                        ru
                        </button>
                    </p>
                    <div className="button_sign">
                        <button className="sign_in" style={{display: 'flex', alignItems: 'center'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-box-arrow-left" style={{marginRight: '10px'}} viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                                <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                            </svg>
                            {lang === 'ru' ? 'Выход' : 'Sign Out'}
                        </button>
                    </div>
                </div>
                <div className="wrapper_message">
                    <div className="block_message">
                        <div className="inside_message">
                            <div className="header_block_message">
                                <h2 style={lang === 'ru' ? {whiteSpace: 'nowrap', marginRight: '30px'} : {}}>LOGO</h2>
                                <h1 style={{whiteSpace: 'nowrap'}}>
                                {lang === 'ru' ? 'Новое сообщение' : 'New Message'}
                                </h1>
                            </div>
                            <div className="main_block_message">
                                <div className="from">
                                    <h3 style={{fontSize: '24px', fontWeight: '500'}}>{lang === 'ru' ? 'От кого:' : 'From'}</h3>
                                    <p style={{fontSize: '20px', fontWeight: '400'}}>danyl@mail.com <span style={{color: '#CCC', fontSize: '15px', fontWeight: '400'}}>(Authenticated by ********)</span></p>
                                </div>
                                <div className="to_message">
                                    <label htmlFor="to">{lang === 'ru' ? 'Кому:' : 'To'}</label>
                                    <input 
                                    type="email" 
                                    id="to" 
                                    autoComplete="email"
                                    />
                                </div>
                                <div className="subject_message">
                                    <div className="subject_title">
                                        <label htmlFor="subject" style={{marginRight: '30px'}}>{lang === 'ru' ? 'Тема:' : 'Subject'}</label>
                                        <button className="button_subject" onClick={() => setShow(!show)}>{lang === 'ru' ? 'Показать Копию/СК' : 'Show Cc/Bcc'}</button>
                                    </div>
                                    <input
                                    type="text"
                                    id="subject"
                                    />
                                    <div className="show_cc_bcc" style={show ? {display: 'flex'} : {display: 'none'}}>
                                        <label htmlFor="show_cc">{lang === 'ru' ? 'Копия:' : 'Cc'}</label>
                                        <input 
                                        type="text" 
                                        id="show_cc"
                                        />
                                        <label htmlFor="show_bcc">{lang === 'ru' ? 'СК:' : 'Bcc'}</label>
                                        <input 
                                        type="text" 
                                        id="show_bcc"
                                        />
                                    </div>
                                </div>
                                <div className="attach_message">
                                    <span style={{marginRight: '30px'}}>{lang === 'ru' ? 'Вложения:' : 'Attach'} </span>
                                    <label htmlFor="attach">{lang === 'ru' ? 'Обзор' : 'overview'}</label>
                                    <input type="file" name="attach" id="attach" />
                                </div>
                                <div className="plain_text" style={{paddingTop: '5px'}}>
                                    <h2 style={{fontSize: '18px', fontWeight: '500', padding: '0 10px'}}>{lang === 'ru' ? 'Текст письма' : 'Plain Text'}</h2>
                                    <ReactQuill 
                                    theme="snow" 
                                    value={value} 
                                    onChange={setValue} 
                                    formats={["bold", "italic", "underline", "strike"]} 
                                    modules={{toolbar: ["bold", "italic", "underline", "strike"]}}
                                    />
                                </div>
                                <div className="footer_message">
                                    <div className="copy_block">
                                        <div className="copy_me">
                                            <input type="checkbox" id="copy" name="copy" className="copy_check" style={{marginRight: '7px'}}/>
                                            <label htmlFor="copy" style={{fontSize: '12px', fontWeight: '400', fontFamily: 'Inter', cursor: 'pointer'}}>{lang === 'ru' ? 'Копию мне' : 'Copy me'}</label>
                                        </div>
                                        <p className="copy_email" style={{fontSize: '20px', fontWeight: '400', color: '#CCC'}}>{lang === 'ru' ? 'Данные защищенны с помощью' : 'Email security Powered By'} ******** <a className="link" href="#!">{lang === 'ru' ? 'Подробнее' : 'More'}</a></p>
                                    </div>
                                    <button className="button_active send_secure">{lang === 'ru' ? 'Отправить' : 'Send secure'}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default NewMessage;