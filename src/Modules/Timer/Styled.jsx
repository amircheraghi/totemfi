import styled from "styled-components";

export const Time = styled.div`
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
    margin: 0 3px;
`;

export const TimeValue = styled.span`
    color: #fff;

    font-size: 26px;
    line-height: 1.1;
`;

export const TimeTitle = styled.span`
    color: #909090;

    font-size: 12px;
    line-height: 1;
`;
