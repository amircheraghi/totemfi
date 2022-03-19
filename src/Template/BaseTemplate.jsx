import React, { Component, Fragment } from "react";
import { Theme, GlobalStyle } from "./Styled";

class BaseTemplate extends Component {
    constructor(props) {
        super(props);

        this.theme = {
            mainFont: '"Montserrat", sans-serif',
            mainFontColor: "#797A80",
            bodyBg: "#EAEAEA",
            cyan: "#07AED0",
        };

        this.showHeader = true;
        this.showFooter = true;
    }

    renderHeader() {
        return <p>Header</p>;
    }

    renderFooter() {
        return <p>Footer</p>;
    }

    render() {
        return (
            <Theme theme={this.theme}>
                <Fragment>
                    {this.showHeader && this.renderHeader()}
                    {this.renderBody()}
                    {this.showFooter && this.renderFooter()}
                    <GlobalStyle bodyBg={this.bodyBg} />
                </Fragment>
            </Theme>
        );
    }
}

export default BaseTemplate;
