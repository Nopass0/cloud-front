import React, { useState } from "react";
import './n_m.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
function NewMessage() {
    const [value,setValue] = useState('');
    
    return (
        <>
            <div className="container">
                <div className="header_message">
                    <p><button className="en active">en</button>/<button className="ru">ru</button></p>
                    <div className="button_sign">
                        <button className="sign_in" style={{display: 'flex', alignItems: 'center'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-box-arrow-left" style={{marginRight: '10px'}} viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                                <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                            </svg>
                            Sign Out
                        </button>
                    </div>
                </div>
                <div className="wrapper_message">
                    <div className="block_message">
                        <div className="inside_message">
                            <div className="header_block_message">
                                <h2>LOGO</h2>
                                <h1 style={{whiteSpace: 'nowrap'}}>New Message</h1>
                            </div>
                            <div className="main_block_message">
                                <div className="from">
                                    <h3 style={{fontSize: '24px', fontWeight: '500'}}>From:</h3>
                                    <p style={{fontSize: '20px', fontWeight: '400'}}>danyl@mail.com <span style={{color: '#CCC', fontSize: '15px', fontWeight: '400'}}>(Authenticated by ********)</span></p>
                                </div>
                                <div className="to_message">
                                    <label htmlFor="to">To:</label>
                                    <input 
                                    type="email" 
                                    id="to" 
                                    autoComplete="email"
                                    />
                                </div>
                                <div className="subject_message">
                                    <div className="subject_title">
                                        <label htmlFor="subject" style={{marginRight: '30px'}}>Subject:</label>
                                        <button className="button_subject" >Show Cc/Bcc</button>
                                    </div>
                                    <input
                                    type="text"
                                    id="subject"
                                    />
                                </div>
                                <div className="attach_message">
                                    <span style={{marginRight: '30px'}}>Attach: </span>
                                    <label htmlFor="attach">Overview</label>
                                    <input type="file" name="attach" id="attach" />
                                </div>
                                <div className="plain_text" style={{paddingTop: '15px'}}>
                                    <h2 style={{fontSize: '15px', fontWeight: '400', padding: '0 30px'}}>Plain text</h2>
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
                                            <label htmlFor="copy" style={{fontSize: '12px', fontWeight: '400', fontFamily: 'Inter', cursor: 'pointer'}}>Copy Me</label>
                                        </div>
                                        <p className="copy_email" style={{fontSize: '20px', fontWeight: '400', color: '#CCC'}}>Email security Powered By ******** <a className="link" href="#!">More</a></p>
                                    </div>
                                    <button className="button_active send_secure">Send secure</button>
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