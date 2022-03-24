import React from "react";

//Modules
import DobuleCurrencyIcons from "./../../Modules/DobuleCurrencyIcons";
import Badge from "./../../Modules/Badge";
import Timer from "./../../Modules/Timer";
import ProgressBar from "./../../Modules/ProgressBar";
import { Date, Details, Informations, Predict } from "./Styled";

//Styles

const Prediction = ({token, tokenImages, state, date, progressValues}) => {

    return (
        <Predict>
            <Informations>
                <DobuleCurrencyIcons
                    imgOne={tokenImages.imgOne}
                    imgTwo="/assets/Images/Currencies/SUP.png"
                />
                <Badge text={state} state={state == 'Open' ? true : false} />
            </Informations>
            <Details>
                <Date>
                    What will the price of {token} be at
                    <br />
                    Apr, 03, 2022, 23:00 UTC
                </Date>
                <Timer day="02" hour="16" min="37" sec="24" />
                <ProgressBar value={140342} total={250000} />
            </Details>
        </Predict>
    );
};

export default Prediction;
