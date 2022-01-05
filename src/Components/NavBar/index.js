import{
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";
import React from "react";
import { logDOM } from "@testing-library/react";

const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                Logo
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink to='/' activeStyle>
                    Home
                </NavLink>
                <NavLink to="/about" activeStyle>
                   About 
                </NavLink>
                <NavLink to="/contact" activeStyle>
                    Contact
                </NavLink>
                <NavLink to="/blog" activeStyle>
                    Blog 
                </NavLink>
            </NavMenu>
           </Nav> 
        </>
    );
};
export default Navbar;
