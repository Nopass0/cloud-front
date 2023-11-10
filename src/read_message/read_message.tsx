import React, { useState } from "react";
import './read.css';
function Readr_msg() {
    const [lang, setLang] = useState(localStorage.getItem('lang_item') === 'ru' ? 'ru' : 'en');

    return (
        <>
            <div className="container">
                <div className="header_r_msg">
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
                <div className="wrapper_r_msg">
                    <div className="block_r_msg">
                        <div className="inside_r_msg">
                            <div className="header_block_r_msg">
                                <h1 style={{whiteSpace: 'nowrap'}}>{lang === 'ru' ? 'Чтение письма' : 'Read Message'}</h1>
                            </div>
                            <div className="main_block_r_msg">
                                <div className="from">
                                    <h3 style={{fontSize: '24px', fontWeight: '500'}}>{lang === 'ru' ? 'От кого:' : 'From:'}</h3>
                                    <p style={{fontSize: '20px', fontWeight: '400'}}>danyl@mail.com <span style={{color: '#CCC', fontSize: '15px', fontWeight: '400'}}>(Authenticated by ********)</span></p>
                                </div>
                                <div className="to_r_msg">
                                    <h3 style={{fontSize: '24px', fontWeight: '500'}}>{lang === 'ru' ? 'Кому:' : 'To:'}</h3>
                                    <p style={{fontSize: '20px', fontWeight: '400'}}>danyl@mail.com <span style={{color: '#CCC', fontSize: '15px', fontWeight: '400'}}>(Authenticated by ********)</span></p>
                                
                                </div>
                                <div className="subject_r_msg">
                                    <div className="subject_title">
                                        <label htmlFor="subject" style={{marginRight: '30px'}}>{lang === 'ru' ? 'Тема:' : 'Subject:'}</label>
                                    </div>
                                    <input
                                    readOnly
                                    type="text"
                                    id="subject"
                                    placeholder="Test"
                                    />
                                </div>
                                <div className="attach_r_msg">
                                    <span style={{marginRight: '30px'}}>{lang === 'ru' ? 'Вложения:' : 'Attached:'}</span>
                                    <p>htmlfile.html</p>
                                </div>
                                <div className="plain_text_read">
                                    <textarea readOnly name="" className="plain_text--area" id="plain_text--area">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque amet repellendus dolor, sunt qui aspernatur explicabo aut quo excepturi porro eaque a molestias quidem aperiam distinctio doloribus quisquam. Autem, commodi.</textarea>
                                </div>
                                <div className="footer_r_msg">
                                    <div className="copy_block">                                       
                                        <p className="copy_email_r_msg" style={{fontSize: '20px', fontWeight: '400', color: '#CCC'}}>{lang === 'ru' ? 'Данные защищенны с помощью' : 'Email security Powered By'} ******** <a className="link" href="#!">{lang === 'ru' ? 'Подробнее' : 'More'}</a></p>
                                    </div>
                                    <button className="button_active send_secure">{lang === 'ru' ? 'Ответить' : 'Reply'}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Readr_msg;