import React from 'react';
import { Link } from 'react-router-dom';
const logo = "./src/assets/images/logo.png";

const Header = ({ data }) => {
    return (
        <header style={{ justifyContent: "center" }}>
            <table style={{ zIndex: 100, position: 'relative', height: '96px', top: '0px', left: '0px', fontFamily: 'Arial', fontSize: '13px', width: '100%', textAlign: 'center' }} border="0" cellSpacing="0" cellPadding="0">
                <tbody>
                    <tr>
                        <td style={{ height: '55px', background: '#000' }} height="55" valign="top"></td>
                    </tr>
                    <tr>
                        <td style={{ height: '23px', background: '#990000' }} valign="center" align="middle">
                            <font style={{ color: '#ffffff' }} color="#ffffcc">
                                <a style={{ color: '#ffffff', textDecoration: 'none' }} href="#">About US</a> |
                                <a style={{ color: '#ffffff', textDecoration: 'none' }} href="/mgm">MGM</a> |
                                <a style={{ color: '#ffffff', textDecoration: 'none' }} href="/tutorials">Tutorials</a> |
                                <a style={{ color: '#ffffff', textDecoration: 'none' }} href="/faq">FAQ</a> |
                                <a style={{ color: '#ffffff', textDecoration: 'none' }} href="/downloads">Downloads</a> |
                                <a style={{ color: '#ffffff', textDecoration: 'none', verticalAlign: 'baseline' }} href="/contact-us">Contact Us</a>
                            </font>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ background: '#F7B200' }} height="21" valign="center" align="middle">
                            <a href="/Dashboard" style={{ color: '#320000', textDecoration: 'none' }}>Manage My Points</a> |
                            <Link to="/ChildRegistration" style={{ color: '#320000', textDecoration: 'none' }}>Child Registration</Link> |
                            <Link to="/ChangePassword" style={{ color: '#320000', textDecoration: 'none' }}>Change Password</Link> |
                            <Link to="/ChangePin" style={{ color: '#320000', textDecoration: 'none' }}>PIN</Link> |
                            <Link to="/UpdateProfile" style={{ color: '#320000', textDecoration: 'none' }}>Update Profile</Link> |
                            <Link to="/DrawDetails" style={{ color: '#320000', textDecoration: 'none' }}><strong>Draw Details</strong></Link> |
                            <Link to="#" style={{ color: '#320000', textDecoration: 'none' }}>Download Patch</Link> |
                            <Link to="#" style={{ color: '#320000', textDecoration: 'none' }}>Play Games</Link> |
                            <Link to="/ResetPinPassword" style={{ color: '#320000', textDecoration: 'none' }}>Pin & Password</Link> |
                            <Link to="/Logout" style={{ color: '#320000', textDecoration: 'none' }}>Logout</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div style={{ zIndex: 102, position: 'absolute', width: '120px', height: '91px', top: '14px', left: '16px' }}>
                <img style={{ zIndex: 103, position: 'absolute', top: '0px', left: '0px' }} alt="" src={logo} width="120" height="90" />
            </div>


            <div style={{ width: "50%", display: "flex", flexDirection: "row", paddingLeft: 170 }}>
                <div style={{ width: "100%", left: 180 }}>
                    <p>Welcome</p>
                    <p>
                        <span id="siteDataHolder_lblMemberName" style={{ color: 'Blue' }}>Mr. {data?.firstName} &nbsp; {data?.lastName}</span>
                    </p>

                    <p>
                        Your Current Balance is <strong>
                            <span id="siteDataHolder_lblCurrentBalance" style={{ color: 'Blue' }}>{data?.walletBalance}</span>  </strong>
                    </p>
                </div>

                <div style={{ position: "absolute", right: 180, bottom: 0 }}>
                    OTC is <strong>
                        <span id="siteDataHolder_lblOTCBalance" style={{ color: 'Blue' }}>0</span>
                    </strong>
                </div>

            </div>



        </header>
    );
};

export default Header;