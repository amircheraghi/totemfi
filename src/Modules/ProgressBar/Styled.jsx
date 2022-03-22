import styled from "styled-components";

export const Progressive = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const Bar = styled.div`
    width: 100%;
    height: 8px;
    border-radius: 8px;
    background: #4f545c;

    display: flex;
    justify-content: flex-start;
`;

export const ValueBar = styled.div`
    width: ${(props) => props.perc};
    height: 100%;
    border-radius: 8px;
    background: linear-gradient(
        to left,
        rgb(255, 123, 3) 0%,
        rgb(255, 161, 5) 100%
    );

    font-size: 26px;
    line-height: 1.1;
`;

export const Details = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 7px 0 0 0;
`;

export const PercentageRatio = styled.span`
    color: #909090;

    font-size: 16px;
    line-height: 1;
`;

export const NumberedRatio = styled.div`
    color: #909090;

    font-size: 14px;
    line-height: 1;
`;
