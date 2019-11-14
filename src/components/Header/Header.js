import React from 'react';


function Header(props) {
    return (
        <div className="header_wrap">
            <div className="header">
                <a href="" className="header_logo">
                    <span className="header_logo_text">Realestate Company</span>
                    <span className="header_logo_smallText">Lorem Ipsum is simply dummy text</span>
                </a>
                <div className="header_phone">
                    <span>{props.headerPhone}</span>
                </div>
            </div>
        </div>
    );
}

export default Header;