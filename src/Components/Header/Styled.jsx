import styled from "styled-components";

export const Head = styled.div`
    height: 37px;
    width: 100%;
    background-image: url('/assets/background.svg');
    background-repeat: no-repeat;
    
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;

    position: fixed;
    z-index: 1;

    padding: 20px 0;
    left: 0;
`;

export const TotmPrice = styled.div`
    height: 30px;
    background: #222;
    color: #979797;
    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 16px;

    margin: 0 5px;
    padding: 3px 10px;
`;

export const DropdownMenu = styled.div`
    height: 37px;
    width: 43px;
    background-color: #222;
    color: #979797;
    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;

    line-height: 0;

    margin: 0 30px 0 5px;
`;
