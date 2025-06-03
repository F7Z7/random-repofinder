import React, {useState} from 'react';

import Dropdown from "../components/Dropdown.jsx";
import {useNavigate} from "react-router-dom";
import {FetchRepo} from "../components/fetchRepo.jsx";
import Button from "../components/Button.jsx";

export default function Hero() {
    const [count, setCount] = useState(0);
    const [selectedLang, setSelectedLang] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (!selectedLang || count <= 0) return;

        try {
            const repos = await FetchRepo(selectedLang, count);
            console.log('Repos:', repos[0].name);
            // navigate(`'/r`)
        } catch (error) {
            console.error('Error fetching repos:', error);
        }
    }
    const resetOption = () => {
        setSelectedLang('');
        setCount(0);
    };
    return (
        <div className="flex items-center justify-center h-screen text-white px-4">
            <div
                className="flex flex-col items-center text-gray-50 shadow-2xl shadow-white p-12 rounded-2xl gap-5 max-w-xl w-full space-y-4">
                <div>
                    <h1 className="text-3xl font-bold mb-1">
                        GitHub Random Repository Finder
                    </h1>
                    <h2 className="text-gray-300 text-base">
                        Discover the most starred repositories by programming language
                    </h2>
                </div>

                <div className="flex flex-row gap-6">
                    <Dropdown selectedLang={selectedLang} setSelectedLang={setSelectedLang}/>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="count" className="font-medium text-sm text-gray-200 text-start">
                            Number of Repositories
                        </label>
                        <input
                            type="number"
                            id="count"
                            name="count"
                            placeholder="Enter a number"
                            value={count}
                            onChange={(e) => setCount(Number(e.target.value))}
                            className="p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border border-white focus:border-none transition-border transition 300 ease-in-out"
                            min="1"
                        />
                    </div>
                </div>
                <div className="flex gap-6 justify-evenly items-center">
                    <Button content="Fetch Repositories" functionCall={handleSubmit}/>
                    <Button content="Reset Selection" functionCall={resetOption}/>
                </div>
            </div>
        </div>
    );
}
