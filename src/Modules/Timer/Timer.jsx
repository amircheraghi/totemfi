import React from "react";
import { Time, TimeBox, TimeTitle, TimeValue } from "./Styled";

const Timer = ({ day, hour, min, sec }) => {
    return (
        <Time>
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
        </Time>
    );
};

export default Timer;
