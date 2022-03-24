import styled from "styled-components";

export const Bdg = styled.span`
    width: 110px;
    height: 18px;
    color: #fff;
    background: none;
    border-radius: 24px;
    border: 2px solid ${(props) => (props.state ? "#008d0c" : "#909090")};

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 15px;

    padding: 8px;
`;
