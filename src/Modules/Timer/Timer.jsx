import React from "react";
import { Boxes, Time, TimeBox, TimeTitle, TimeValue, Title } from "./Styled";

const Timer = ({ day, hour, min, sec }) => {
    return (
        <Time>
            <Title>Staking open for</Title>
            <Boxes>
                <TimeBox>
                    <TimeValue>{day}</TimeValue>
                    <TimeTitle>days</TimeTitle>
                </TimeBox>

                <TimeBox>
                    <TimeValue>{hour}</TimeValue>
                    <TimeTitle>hrs</TimeTitle>
                </TimeBox>

                <TimeBox>
                    <TimeValue>{min}</TimeValue>
                    <TimeTitle>mins</TimeTitle>
                </TimeBox>

                <TimeBox>
                    <TimeValue>{sec}</TimeValue>
                    <TimeTitle>secs</TimeTitle>
                </TimeBox>
            </Boxes>
        </Time>
    );
};

export default Timer;
