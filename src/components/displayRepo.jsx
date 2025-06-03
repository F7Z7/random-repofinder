import React from 'react';
import {Star, User, GitFork, Github} from 'lucide-react';

function DisplayRepo({repo}) {
    function formatNumber(num) {
        if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
        return num;
    }
    return (
        <div
            className="bg-[#FFDCDC] rounded-2xl shadow-lg p-6 max-w-sm w-full flex flex-col items-center text-center space-y-4 hover:scale-105 transition-transform duration-300 ease-in-out"   >
        <div className="w-full flex justify-between items-center">
                <h2 className="font-bold text-lg text-gray-900 truncate">{repo.name}</h2>
                <div className="flex items-center gap-2">
                    <User className="text-gray-600"/>
                    <span className="text-sm font-medium text-gray-800 truncate">{repo.owner.login}</span>
                </div>
            </div>

            <p className="text-black text-sm">{repo.description}</p>

            <div className="w-full flex justify-around border-t pt-4 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                    <Star className="text-yellow-500"/>
                    <span className="font-semibold">{formatNumber(repo.stargazers_count)}</span>
                </div>
                <div className="flex items-center gap-2">
                    <GitFork className="text-blue-500"/>
                    <span className="font-semibold">{formatNumber(repo.forks_count)}</span>
                </div>
                <a
                    href={repo.clone_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-blue-400"
                >
                  <Github/>
                </a>
            </div>

        </div>

    );
}

export default DisplayRepo;