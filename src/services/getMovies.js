import { apiBase, apiKey} from './tmdb';

const date = new Date()
const currentYear = date.getFullYear();
const month = date.getMonth() - 1

let monthFormated = month;

if(month <= 10) {
    monthFormated = `0${month}`;
}

const dateRecent = `${currentYear}-${monthFormated}-01`;

async function getRecent(type, size) {
    const data = await fetch(`${apiBase}/trending/all/week?api_key=${apiKey}&language=pt-BR`)

    const json = await data.json();

    return json.results;
}

async function getMain() {
    const data = await fetch(`${apiBase}/discover/movie?api_key=${apiKey}&language=pt-BR&sort_by=popularity.desc&page=1&primary_release_date.gte=${dateRecent}&with_watch_monetization_types=flatrate`)
    
    const json = await data.json();
    
    return json.results;
}

async function getByGender(id) {
    const data = await fetch(`${apiBase}/discover/movie?api_key=${apiKey}&language=pt-BR&sort_by=popularity.desc&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`)
    
    const json = await data.json();
    
    return json.results;
}

async function getSpot() {
    const data = await fetch(`${apiBase}/trending/movie/day?api_key=${apiKey}&language=pt-BR&page=4`)

    const json = await data.json();
    
    return json.results;
}

function shuffleArray(inputArray){
    const newArray = inputArray.sort(()=> Math.random() - 0.5);

    return newArray;
}

export { getRecent, getMain, shuffleArray, getByGender, getSpot }