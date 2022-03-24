import styled from "styled-components";

export const Body = styled.div`
    width: 65%;
    min-height: 673px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    margin: 140px auto 55px auto;
`;

export const Navigator = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

export const Tabs = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const Sorter = styled.div`
    background: #232831;
    width: 220px;
    height: 35px;
    color: #909090;
    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SorterValues = styled.select`
    height: 50%;
    background: #232831;
    border: none;
    color: #909090;

    font-size: 15px;
    line-height: 0;
`;

export const SorterValue = styled.option``;

export const View = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: ${(props) => props.sty < 3 ? 'flex-start' : 'space-between'};
`;

export const LoadMoreBox = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: flex-start;
`;
