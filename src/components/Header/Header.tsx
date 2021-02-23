import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

interface HeaderProps {
    logoImage: string, 
    logoText: string
}

export const Header: React.FC<HeaderProps> = ({ 
    logoImage, 
    logoText
}) => {
    return (
        <>
            <Navbar bg="custom">
                <div className="container">
                    <Navbar.Brand href="#home">
                        <img
                            alt="Apple Logo"
                            src={ logoImage }
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                        />{' '}
                        <span data-test="component-logo-text" className="align-middle">{ logoText }</span>                
                    </Navbar.Brand>
                </div>
            </Navbar> 
        </>
    );
}