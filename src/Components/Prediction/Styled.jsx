import styled from "styled-components";

export const Predict = styled.div`
    width: 340px;
    height: 280px;
    background: linear-gradient(90deg, #272e38, #232831);
    border-radius: 22px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    margin: 12.5px 2.5px;
    padding: 22px;
`;

export const Informations = styled.div`
    width: 100%;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Details = styled.div`
    width: 90%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const Date = styled.div`
    color: #fff;

    text-align: center;
    line-height: 1.3;
    font-size: 15px;

    margin: 20px 0 30px 0;
`;
