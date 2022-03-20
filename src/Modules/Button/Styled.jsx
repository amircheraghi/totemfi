import styled from "styled-components";

export const Btn = styled.button`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background: ${(props) => props.background};
    padding: ${(props) => props.padding};
    margin: ${(props) => props.margin};
    color: ${(props) => props.color};
    border: none;
    border-radius: ${(props) => props.radius};

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    font-size: 15px;
`;
