import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export const create = async (gameId, userName, text) => {

    const newComment = await request.post(baseUrl, {
        gameId,
        userName,
        text
    });

    return newComment;
}

export const getGameComments = async (gameId) => {

    const query = new URLSearchParams({
        where: `gameId="${gameId}"`
    });
    const gameComments = await request.get(`${baseUrl}`);
    return Object.values(gameComments).filter(comment => comment.gameId === gameId);
}