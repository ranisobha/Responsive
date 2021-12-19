import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavBtnLink,  MobileIcon, NavItem, NavMenu, NavLinks, NavLogo } from './NavbarElements'
function Navbar() {
    return (
        <div>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">Amagio</NavLogo>
                    <MobileIcon>
                        <FaBars />

                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" >Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about" >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about" >Careers</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavBtnLink to="/signin">Sign in</NavBtnLink>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </div>
    )
}

export default Navbar
