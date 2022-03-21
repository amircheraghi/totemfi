import styled from "styled-components";

export const Bdg = styled.span`
    width: 130px;
    height: 37px;
    color: #fff;
    background: none;
    border-radius: 24px;
    border: 2px solid ${(props) => (props.state ? "#008d0c" : "#fff")};

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 15px;
`;
