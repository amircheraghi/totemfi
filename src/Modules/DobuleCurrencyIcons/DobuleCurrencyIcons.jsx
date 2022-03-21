import React from "react";
import { CurrencyOne, CurrencyTwo, Icons } from "./Styled";

const DobuleCurrencyIcons = ({ imgOne, imgTwo }) => {
    return (
        <Icons>
            <CurrencyOne src={imgOne} />
            <CurrencyTwo src={imgTwo} />
        </Icons>
    );
};

export default DobuleCurrencyIcons;
