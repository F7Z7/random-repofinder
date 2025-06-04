import React from "react";
import languages from "./Languages.jsx";

export default function Dropdown({ selectedLang, setSelectedLang }) {
    return (
        <div className="w-64 text-sm">
            <label
                htmlFor="language"
                className="block mb-2 text-white font-semibold tracking-wide text-start"
            >
                Choose a programming language:
            </label>
            <select
                id="language"
                name="language"
                value={selectedLang}
                onChange={(e) => setSelectedLang(e.target.value)}
                className="w-full px-4 py-2 rounded-md text-white bg-gray-800/80 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"


            >
                <option value="" disabled>
                    -- Select a language --
                </option>
                {languages.map(({ id, languageName }) => (
                    <option key={id} value={languageName}>
                        {languageName}
                    </option>
                ))}
            </select>
        </div>
    );
}
