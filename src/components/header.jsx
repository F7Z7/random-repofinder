import react from 'react'
import Languages from "./languages.jsx";

export default function Header() {
    return (
        <>
            <div className="flex items-center justify-between flex-col">
                <h1 className="text-3xl font-bold">Github Random Repository Finder</h1>
                <h2 className="text-2xl font-semibold"> Discover amazing repositories by programming language</h2>
                <Languages/>
            </div>
        </>
    )
}