import styled from "styled-components";

export const Nav = styled.ul`
    height: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    position: fixed;

    padding: 0;
    margin: 85px 0 0 0;
`;

export const NavButton = styled.li`
    background: #222;
    width: 60px;
    height: 60px;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    margin: 0 0 10px 0;
`;

export const NavLink = styled.li`
    background: #222;
    width: 60px;
    height: 60px;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    margin: 90px 0 10px 0;
`;

export const NavLinkText = styled.b`
    color: #909090;

    font-size: 24px;
    line-height: 1;
`;

export const NavLinkParagraph = styled.span`
    color: #909090;

    font-size: 12px;
    line-height: 1;

    margin: 6px 0 0 0;
`;

export const NavButtonImage = styled.img``;
