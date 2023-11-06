import React from "react";
import './read.css';
import { Link } from "react-router-dom";
function Read() {

    return (
        <>
            <div className="container">
                <div className="header_read">
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
                <div className="wrapper_read">
                    <div className="block_read">
                        <div className="inside_read">
                            <div className="header_block_read">
                                <h1>Message</h1>
                            </div>
                            <div className="read_button" style={{marginBottom: '46px'}}>
                                <button className="button_active">
                                    <Link to="/readmsg" style={{textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center'}}>
                                        Click to read message 
                                        <svg style={{marginLeft: '30px'}} xmlns="http://www.w3.org/2000/svg" width="61" height="61" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                                        </svg>
                                    </Link>
                                </button>
                            </div>
                            <p style={{fontSize: '20px', fontWeight: '400', color: '#CCC', marginBottom: '105px'}}>
                                If the link is not valid, follow these short instructions:
                                <br/><br/>
                                Check the link:<br/>
                                The first step is to make sure you copied or entered the link correctly. Check for typos, extra spaces, or incorrect characters.
                                <br/><br/>
                                Refresh the page:<br/>
                                Try refreshing the web page that contains the invalid link. You can do this by pressing F5 (Windows) or Command+R (Mac), or by clicking the browser's refresh button.
                            </p>
                            <div className="footer_read">
                                <p style={{fontSize: '20px', fontWeight: '400', color: '#CCC'}}>Email security Powered By ******** <a href="#!" className="link">More</a></p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}
export default Read;