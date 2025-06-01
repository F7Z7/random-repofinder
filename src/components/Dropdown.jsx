import React from "react";
import languages from "./Languages.jsx";

export default function Dropdown() {
    return (
        <form className="w-64 text-sm">
            <label
                htmlFor="language"
                className="block mb-2 text-white font-semibold tracking-wide text-start"
            >
                Choose a programming language:
            </label>
            <select
                id="language"
                name="language"
                defaultValue=""
                className="w-full px-4 py-2 border border-white bg-gray-900 text-gray-100 rounded focus:outline-none "
            >

                <option value="" disabled>
                    -- Select a language --
                </option>
                {languages.map(({id, languageName}) => (
                    <option key={id} value={languageName}>
                        {languageName}
                    </option>
                ))}
            </select>
        </form>
    );
}
