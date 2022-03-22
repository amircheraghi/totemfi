import React from "react";
import {
    Bar,
    Details,
    NumberedRatio,
    PercentageRatio,
    Progressive,
    ValueBar,
} from "./Styled";

const ProgressBar = ({ value, total }) => {
    return (
        <Progressive>
            <Bar>
                <ValueBar
                    perc={`${((value * 100) / total).toFixed().toString()}%`}
                />
            </Bar>
            <Details>
                <PercentageRatio>
                    {((value * 100) / total).toFixed(2).toString()}% full
                </PercentageRatio>
                <NumberedRatio>
                    {value.toFixed()}/{total.toFixed()} TOTM
                </NumberedRatio>
            </Details>
        </Progressive>
    );
};

export default ProgressBar;
