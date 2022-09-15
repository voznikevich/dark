import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ScrollspyNav from "react-scrollspy-nav";



function Header1() {

    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="navigation">
                                <Navbar bg="light" expand="lg">
                                    <Link className="navbar-brand" to={'/'}><img src={require('./../../images/logo.png')} alt="" /></Link>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse>
                                        <ScrollspyNav
                                            scrollTargetIds={["home", "price", "portfolio", "testimonial", "app",]}
                                            offset={100}
                                            activeNavclassName="active"
                                            scrollDuration="1000"
                                            headerBackground="true"
                                        >
                                            <Nav className="ms-auto">
                                                <Nav.Item><Nav.Link className="nav-Nav.link" href="#home">Обмін</Nav.Link></Nav.Item>
                                                <Nav.Item><Nav.Link className="nav-Nav.link" href="#price">Топ криптовалют</Nav.Link></Nav.Item>
                                                <Nav.Item><Nav.Link className="nav-Nav.link" href="#portfolio">Як ми працюємо? </Nav.Link></Nav.Item>
                                                <Nav.Item><Nav.Link className="nav-Nav.link" href="#testimonial">Про нас</Nav.Link></Nav.Item>
                                                <Nav.Item><Nav.Link className="nav-Nav.link" href="#app">Контакти</Nav.Link></Nav.Item>
                                            </Nav>
                                        </ScrollspyNav>

                                    </Navbar.Collapse>

                                    <div className="signin-btn">
                                        {/*<Link to={'./dashboard'}>Dashboard</Link>*/}
                                        <Nav.Link className="btn btn-primary ms-3" href={"tel:380638249864"}>+380 (63) 824 98 64</Nav.Link>
                                    </div>
                                </Navbar>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header1;