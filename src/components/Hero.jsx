import React, {useState} from 'react';
import Dropdown from "./Dropdown.jsx";

export default function Hero() {
    const [count, setCount] = useState(0);
    return (
        <div className="flex items-center justify-center h-screen  text-white px-4">
            <div
                className="flex flex-col items-center text-gray-50 bg-gray-900 p-12 rounded-2xl gap-5 max-w-xl w-full space-y-4">
                <div>
                    <h1 className="text-3xl font-bold mb-1">
                        GitHub Random Repository Finder
                    </h1>
                    <h2 className="text-gray-300 text-base">
                        Discover the most starred repositories by programming language
                    </h2>
                </div>
                <div className="flex flex-row  gap-6">
                    <Dropdown/>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="count" className="font-medium text-sm text-gray-200 text-start ">
                            Number of Repositories
                        </label>
                        <input
                            type="number"
                            id="count"
                            name="count"
                            placeholder="Enter a number"
                            value={count}
                            onChange={(e) => setCount(Number(e.target.value))}
                            className="p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border border-white focus:border-none"
                            min="0"
                        />
                    </div>
                </div>
                <button
                    className="px-4 py-2 border border-white bg-gray-900 text-gray-100 hover:bg-gray-50 hover:text-black transition-colors transition 300 ease-in-out"
                >
                    Find Repository
                </button>

            </div>
        </div>
    );
}
