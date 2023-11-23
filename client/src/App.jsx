import { useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';


import AuthContext from "./contexts/authContext";
import * as authService from './services/authService';
import Path from "./paths";

import CreateGame from "./components/game-create/CreateGame";
import GameList from "./components/game-list/GameList";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import GameDetails from "./components/game-details/GameDetails";


function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        setAuth(result);
        navigate(Path.Home);
    }

    const registerSubmitHandler = async (values) => {
        console.log(values);
    }

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        username: auth.username,
        email: auth.email,
        isAuthenticated: !!auth.username

    };

    return (
        <div id="box">
            <AuthContext.Provider value={values}>
                <Header />
                <Routes>
                    <Route path={Path.Home} element={<Home />} />
                    <Route path="/games" element={<GameList />} />
                    <Route path="/games/create" element={<CreateGame />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/games/:gameId" element={<GameDetails />} />
                </Routes>
            </AuthContext.Provider>
        </div>
    )
}

export default App
