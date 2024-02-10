import React from "react"

interface VerbsButtonProps {
    text?: string;
    color?: string;
    backgroundColor?: string;
    onClick?: () => void;
}

const VerbsButton = (props: VerbsButtonProps) => {

    const { text, color, backgroundColor, onClick } = props

    return (
        <div className="mr-1 py-0.5 px-2 rounded font-medium" style={{ backgroundColor: backgroundColor }} onClick={onClick}>
            <button style={{ color: color }}>{text}</button>
        </div>
    )
}

export default VerbsButton;