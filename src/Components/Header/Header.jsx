import React, { useEffect, useState } from "react";

//Modules
import Button from "../../Modules/Button/Button";

//Styles
import { DropdownMenu, Head, TotmPrice } from "./Styled";

const Header = () => {
    let [totmPrice, setTotmPrice] = useState("0.10315941");

    useEffect(() => {
        // Get & Set Price Of Totm Token
    }, []);

    return (
        <Head>
            <TotmPrice>1 TOTM: ${totmPrice}</TotmPrice>
            <Button
                text="Connect Wallet"
                color="#fff"
                height="100%"
                width='174px'
                radius='8px'
                margin='0 5px'
                background="linear-gradient(90deg,#ffa005,#ff7b03)"
            />
            <DropdownMenu>...</DropdownMenu>
        </Head>
    );
};

export default Header;
