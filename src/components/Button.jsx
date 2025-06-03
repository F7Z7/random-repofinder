import React from "react";

export default function Button({content, functionCall}) {
    return (
        <button
            onClick={functionCall}
            className="px-4 py-2 border border-white bg-gray-900 text-gray-100 hover:bg-gray-50 hover:text-black transition-colors transition 300 ease-in-out cursor-pointer"
        >
            {content}
        </button>
    )
}