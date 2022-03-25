import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Modules/Button/Button";
import BaseTemplate from "../../Template/BaseTemplate";
import { NothingBox } from "./Styled";

export default class NotFound extends BaseTemplate {
    constructor(props) {
        super(props);
        super.showHeader = false;
        super.showFooter = false;
        super.bodyBg = "white";
    }

    renderBody() {
        return (
            <NothingBox>
                404 | Page Not Founded
                <Link to="/">
                    <Button
                        text="Back To Home"
                        background="none"
                        color="#fff"
                        margin="24px 0"
                    />
                </Link>
            </NothingBox>
        );
    }
}
