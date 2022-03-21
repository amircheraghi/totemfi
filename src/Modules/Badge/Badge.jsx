import React from "react";
import { Bdg } from "./Styled";

const Badge = ({ text, state }) => {
    return <Bdg state={state}>{text}</Bdg>;
};

export default Badge;
