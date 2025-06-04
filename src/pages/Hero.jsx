import React, {useState} from 'react';

import Dropdown from "../components/Dropdown.jsx";
import {useNavigate} from "react-router-dom";
import {FetchRepo} from "../components/fetchRepo.jsx";
import Button from "../components/Button.jsx";
import {GitFork, Star, User} from "lucide-react";

export default function Hero() {
    const [count, setCount] = useState(0);
    const [selectedLang, setSelectedLang] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (!selectedLang || count <= 0) {
            alert("Please select a language and enter a valid count");
            return;
        }

        try {
            const repos = await FetchRepo(selectedLang, count);
            navigate(`/results?lang=${selectedLang}&count=${count}`);
        } catch (error) {
            console.error('Error fetching repos:', error);
        }
    }
    const resetOption = () => {
        setSelectedLang('');
        setCount(0);
    };
    return (
        <div className="flex items-center justify-center min-h-screen flex-wrap text-white px-4 py-4 flex-wrap">
            <div
                className="flex flex-col items-center text-white bg-[#1e293b]/60 backdrop-blur-lg  border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 p-8 sm:p-12 rounded-2xl gap-5 max-w-xl w-full space-y-4">



                <div className="text-center">
                    <h1 className="text-2xl sm:text-3xl font-bold mb-1">
                        GitHub Random <br/>Repository Finder
                    </h1>
                    <h2 className="text-gray-300 text-sm sm:text-base">
                        Discover the most starred repositories by programming language
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 w-full">
                    <Dropdown selectedLang={selectedLang} setSelectedLang={setSelectedLang}/>

                    <div className="flex flex-col gap-1 ">
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
                            className="p-2 rounded-md bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 border border-white/30 focus:ring-2 focus:ring-blue-400 transition-all duration-200"
                            min="1"
                        />
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-evenly items-center">
                    <Button content="Fetch Repositories" functionCall={handleSubmit}/>
                    <Button content="Reset Selection" functionCall={resetOption}/>
                </div>
            </div>

        </div>
    );
}