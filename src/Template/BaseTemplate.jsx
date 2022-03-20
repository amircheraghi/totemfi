import React, { Component, Fragment } from "react";
import Header from "../Components/Header";
import { Theme, GlobalStyle, Wrapper } from "./Styled";

class BaseTemplate extends Component {
    constructor(props) {
        super(props);

        this.theme = {
            mainFont: '"Lato", sans-serif',
            mainFontColor: "#797A80",
            bodyBg: "#EAEAEA",
            cyan: "#07AED0",
        };

        this.showHeader = true;
        this.showFooter = true;
    }

    renderHeader() {
        return <Header />;
    }

    renderFooter() {
        return <p>Footer</p>;
    }

    render() {
        return (
            <Theme theme={this.theme}>
                <Fragment>
                    <Wrapper>
                        {this.showHeader && this.renderHeader()}
                        {this.renderBody()}
                        {this.showFooter && this.renderFooter()}
                        <GlobalStyle bodyBg={this.bodyBg} />
                    </Wrapper>
                </Fragment>
            </Theme>
        );
    }
}

export default BaseTemplate;
