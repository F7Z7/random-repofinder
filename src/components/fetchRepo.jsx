import React from 'react';

export async function FetchRepo(language,count) {
const response=await fetch(`https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=${count}`)//github repo finder api
const repos = await response.json();
    return repos.items;
}

