import React from "react";
import { Btn } from "./Styled";

const Button = ({
    text,
    background,
    width,
    height,
    color,
    padding,
    margin,
    radius,
    onClick,
}) => {
    return (
        <Btn
            background={background}
            width={width}
            height={height}
            color={color}
            margin={margin}
            radius={radius}
            padding={padding}
            onClick={onClick}
        >
            {text}
        </Btn>
    );
};

export default Button;
