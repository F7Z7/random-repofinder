import React from 'react';
import Dropdown from "./Dropdown.jsx";

export default function Hero() {
    return (
        <div className="flex items-center justify-center h-screen  text-white px-4">
            <div className="flex flex-col items-center text-gray-50 bg-gray-900 p-12 rounded-2xl gap-5 max-w-xl w-full space-y-4">
                <div>
                    <h1 className="text-3xl font-bold mb-1">
                        GitHub Random Repository Finder
                    </h1>
                    <h2 className="text-gray-300 text-base">
                        Discover hidden gems by language
                    </h2>
                </div>
                <div className="flex flex-col w-64 space-y-3">
                    <Dropdown />
                    <button
                        className="px-4 py-2 border border-white bg-gray-900 text-gray-100 hover:bg-gray-50 hover:text-black transition-colors transition 300 ease-in-out"
                    >
                        Find Repository
                    </button>
                </div>
            </div>
        </div>
    );
}
