import React, { useEffect, useState } from "react";

//Modules

//Styles
import { Nav, NavButton, NavButtonImage, NavLink, NavLinkParagraph, NavLinkText } from "./Styled";

const Navigation = () => {
    return (
        <Nav>
            <NavButton>
                <NavButtonImage src="/assets/Images/Navigation/totem.svg" />
            </NavButton>

            <NavButton>
                <NavButtonImage src="/assets/Images/Navigation/bars.svg" />
            </NavButton>

            <NavLink>
                <NavLinkText>V1</NavLinkText>
                <NavLinkParagraph>dApp</NavLinkParagraph>
            </NavLink>
        </Nav>
    );
};

export default Navigation;
