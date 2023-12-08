const baseUrl = 'http://localhost:3030/data/games';
import * as request from "../lib/request";


export const getAll = async () => {

    const result = await request.get(baseUrl);


    return Object.values(result);
}

export const getOne = async (gameId) => {

    const query = new URLSearchParams({
        load: `owner=_ownerId:users`,
    });

    console.log(`${baseUrl}/${query}`);
    const result = await request.get(`${baseUrl}/${gameId}?${query}`);
    return result;
}

export const create = async (gameData) => {

    const result = await request.post(baseUrl, gameData);
    return result;
}