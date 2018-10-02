import React from 'react';

const NavBar = () => {

    return (
        <div className="header">
        <nav className="navbar navbar-inverse padding-0">
            <div className="container-fluid">
                <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>                        
                </button>
                <a className="navbar-brand" href="#myCarousel">Zer-Sheva</a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav navbar-right">
                    <li><a href='#contact'>צור קשר</a></li>
                    <li><a href="#products">זרים</a></li>
                    <li><a href="#about">עלינו</a></li>
                </ul>
                </div>
            </div>
        </nav>

        <div className="jumbotron">
            <h1>Welcome :)</h1>
            <br />
        </div>
        </div>

    );
};


export default NavBar;