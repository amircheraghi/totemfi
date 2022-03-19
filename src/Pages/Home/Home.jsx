import React from "react";
import BaseTemplate from "../../Template/BaseTemplate";

export default class Home extends BaseTemplate {
    constructor(props) {
        super(props);
        super.showHeader = true;
        super.showFooter = true;
        super.bodyBg = "white";
    }

    renderBody() {
        return (
            <>
                <p>Home</p>
            </>
        );
    }
}
