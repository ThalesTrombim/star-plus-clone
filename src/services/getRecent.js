import { apiBase, apiKey} from './tmdb';

export async function getRecent() {
    const data = await fetch(`${apiBase}/trending/all/day?api_key=${apiKey}&language=pt-BR`)

    const json = await data.json();

    console.log(json.results.length)
    return json.results;
}