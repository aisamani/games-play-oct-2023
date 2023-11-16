const baseUrl = 'http://localhost:3030/jsonstore/games';
import { request } from "../lib/request";


export const getAll = async () => {

    const result = request('GET', baseUrl);

    console.log(result);
}

export const create = async (gameData) => {

    const response = await fetch(`${baseUrl}/create`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(gameData)
    });

    const result = await response.json();

    return result;

}
