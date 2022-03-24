import React from "react";

//Modules
import DobuleCurrencyIcons from "./../../Modules/DobuleCurrencyIcons";
import Badge from "./../../Modules/Badge";
import Timer from "./../../Modules/Timer";
import ProgressBar from "./../../Modules/ProgressBar";
import { Date, Details, Informations, Predict } from "./Styled";
import { useTimestampToDateConverter } from './../../Hooks/useTimestampToDateConverter'
import { useCountdownTimer } from "../../Hooks/useCountdownTimer";

//Styles

const Prediction = ({token, tokenImages, state, targetDate, progressValues, sty}) => {

    let { month, day, year, hour, timezone } = useTimestampToDateConverter(targetDate)
    let { days, hours, minutes, seconds } = useCountdownTimer(targetDate * 1000)

    return (
        <Predict sty={sty}>
            <Informations>
                <DobuleCurrencyIcons
                    imgOne={tokenImages.imgOne}
                    imgTwo={tokenImages.imgTwo}
                />
                <Badge text={state} state={state == 'Open' ? true : false} />
            </Informations>
            <Details>
                <Date>
                    What will the price of {token} be at
                    <br />
                    {month}, {day}, {year}, {hour}
                </Date>
                <Timer day={days > 0 ? days : '00'} hour={hours > 0 ? hours : '00'} min={minutes > 0 ? minutes : '00'} sec={seconds > 0 ? seconds : '00'} />
                <ProgressBar value={progressValues.value} total={progressValues.total} />
            </Details>
        </Predict>
    );
};

export default Prediction;
