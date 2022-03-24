import styled from "styled-components";

export const Time = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    margin: 0 0 30px 0;
`;

export const Title = styled.span`
    color: #fff;

    line-height: 1.5;
    font-size: 16px;

    margin: 0 0 5px 0;
`;

export const Boxes = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TimeBox = styled.div`
    width: 43px;
    height: 55px;
    background: #181c23;
    border-radius: 6px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 0 5px;
    margin: 0 2.6px;
`;

export const TimeValue = styled.span`
    color: #fff;

    font-size: 26px;
    font-weight: bold;
    line-height: 1.1;
`;

export const TimeTitle = styled.span`
    color: #909090;

    font-size: 12px;
    line-height: 1;
`;
