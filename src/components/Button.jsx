import React from "react"

interface Props {
    color: string,
    background: string;
    padding: string;
    borderStyle: string;
    borderWidth: string;
    borderColor: string;
    marginTop: string;
    textTransform: string;
    children?: React.ReactNode;

}

const Button: React.FC<Props> = ({
    color,
    background,
    padding,
    borderStyle,
    borderWidth,
    borderColor,
    marginTop,
    textTransform,
    children
}) => {
    return (
        <button style={{
            color,
            background,
            padding,
            borderStyle,
            borderWidth,
            borderColor,
            marginTop,
            textTransform
        }}
        >
        {children}
        </button>
    )
}

export default Button