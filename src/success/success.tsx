import React from "react";
import './success.css';
function Success() {
    
    return (
        <>
            <div className="container">
                <div className="header_success">
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
                <div className="wrapper_success">
                    <div className="block_success">
                        <div className="inside_success">
                            <div className="header_block_success">
                                <h1>Success</h1>
                            </div>
                            <div className="secure_message">
                                <p style={{fontSize: '24px', fontWeight: '500', marginBottom: '30px'}}>You have successfully sent a secure message</p>
                                <button className="button_active">Send another secure message</button>
                            </div>
                            <p style={{fontSize: '20px', fontWeight: '400', color: '#CCC', marginBottom: '290px'}}>Protected by ***** <a href="#!" className="link">More</a></p>
                            <div className="footer_success">
                                <p style={{fontSize: '20px', fontWeight: '400', color: '#CCC'}}>Email security Powered By ******** <a href="#!" className="link">More</a></p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}
export default Success;