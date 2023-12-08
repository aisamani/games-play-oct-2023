import { useEffect, useState } from 'react';
import * as gammeService from '../../services/gameService';
import { useNavigate, useParams } from 'react-router-dom';
import useForm from '../../hooks/useForm';

export default function GameEdit() {

    const navigate = useNavigate();
    const { gameId } = useParams();
    const [game, setGame] = useState({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: '',
    });

    useEffect(() => {
        gammeService.getOne(gameId)
            .then(result => {
                setGame(result);
            });
    }, [gameId]);

    const editGameSubmitHandler = async (values) => {
        try {

            await gammeService.edit(gameId, values);
            navigate('/games');

        } catch (error) {
            console.log(error);
        }
    }
    const { values, onChange, onSubmit } = useForm(game, editGameSubmitHandler)

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onSubmit}>
                <div className="container">

                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" value={values.title} onChange={onChange} placeholder="Enter game title..." />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" value={values.category} onChange={onChange} placeholder="Enter game category..." />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" value={values.maxLevel} onChange={onChange} min="1" placeholder="1" />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={values.imageUrl} onChange={onChange} placeholder="Upload a photo..." />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" value={values.summary} onChange={onChange} id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Submit Changes" />
                </div>
            </form>
        </section>
    );
}