import React from "react";
import { useNavigate } from "react-router-dom";

export default function Button({ content, functionCall }) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (typeof functionCall === "function") {
            functionCall();
        } else if (typeof functionCall === "string") {
            navigate(functionCall);
        } else {
            console.warn("Invalid functionCall prop passed to Button.");
        }
    };

    return (
        <button
            onClick={handleClick}
            className="px-4 py-2 rounded-2xl border border-white bg-gray-900 text-gray-100 hover:bg-gray-50 hover:text-black transition-colors duration-300 ease-in-out cursor-pointer"
        >
            {content}
        </button>
    );
}
