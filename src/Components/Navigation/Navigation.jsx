import React, { useEffect, useState } from "react";

//Modules
import { Link } from "react-router-dom";

//Styles
import {
    Nav,
    NavButton,
    NavButtonImage,
    NavLink,
    NavLinkParagraph,
    NavLinkText,
} from "./Styled";

const Navigation = () => {
    return (
        <Nav>
            <Link to="/">
                <NavButton>
                    <NavButtonImage src="/assets/Images/Navigation/totem.svg" />
                </NavButton>
            </Link>

            <Link to="/account">
                <NavButton>
                    <NavButtonImage src="/assets/Images/Navigation/bars.svg" />
                </NavButton>
            </Link>

            <Link to="/v1">
                <NavLink>
                    <NavLinkText>V1</NavLinkText>
                    <NavLinkParagraph>dApp</NavLinkParagraph>
                </NavLink>
            </Link>
        </Nav>
    );
};

export default Navigation;
