import React from "react";
import Main from "../../Components/Main";
import Navigation from "../../Components/Navigation";
import BaseTemplate from "../../Template/BaseTemplate";
import { Wrapper } from './Styled'

export default class Home extends BaseTemplate {
    constructor(props) {
        super(props);
        super.showHeader = true;
        super.showFooter = true;
        super.bodyBg = "white";
    }

    renderBody() {
        return (
            <Wrapper>
                <Navigation />
                <Main />
            </Wrapper>
        );
    }
}
