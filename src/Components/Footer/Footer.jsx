import React, { useEffect, useState } from "react";
import { Foot, SocialIcon } from "./Styled";

//Modules
import DobuleCurrencyIcons from './../../Modules/DobuleCurrencyIcons'

//Styles

const Footer = () => {
    return (
        <Foot>
            <SocialIcon src="/assets/Images/Footer/telegram.svg" />
            <SocialIcon src="/assets/Images/Footer/twitter.svg" />
            <SocialIcon src="/assets/Images/Footer/discord.svg" />
            <DobuleCurrencyIcons imgOne='/assets/Images/Currencies/BNB.png' imgTwo='/assets/Images/Currencies/SUP.png' />
        </Foot>
    );
};

export default Footer;
