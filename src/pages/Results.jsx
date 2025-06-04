import React, { useEffect, useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import DisplayRepo from '../components/DisplayRepo.jsx';
import {FetchRepo} from "../components/fetchRepo.jsx";
import Button from "../components/Button.jsx";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Results() {
    const query = useQuery();
    const lang = query.get('lang');
    const count = query.get('count');

    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!lang || !count) return;//retun if parametrs not seclected

        setLoading(true);
        FetchRepo(lang, count)
            .then(data => {
                setRepos(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message || 'Error fetching repos');
                setLoading(false);
            });
    }, [lang, count]);

    if (loading) return <p className="text-white">Loading repositories...</p>;
    if (error) return <p className="text-red-500">{error}</p>;
    if (repos.length === 0) return <p className="text-white">No repositories found.</p>;

    return (
        <div className="p-4 sm:p-8 space-y-6 max-w-full sm:max-w-4xl mx-auto flex flex-col justify-center items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center">
                Top {count} repositories for {lang}
            </h2>
            <div className="flex flex-col sm:flex-row flex-wrap sm:gap-4 gap-6 justify-center">
                {repos.map((repo) => (
                    <DisplayRepo key={repo.id} repo={repo} />
                ))}
            </div>
            <Button content={"Return To Home Page"} functionCall={() => navigate('/')} />
        </div>
    );
}
