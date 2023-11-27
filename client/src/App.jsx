import { Routes, Route } from 'react-router-dom';


import { AuthProvider } from "./contexts/authContext";
import Path from "./paths";

import CreateGame from "./components/game-create/CreateGame";
import GameList from "./components/game-list/GameList";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import GameDetails from "./components/game-details/GameDetails";
import Logout from "./components/logout/logout";


function App() {
    return (
        <div id="box">
            <AuthProvider >
                <Header />
                <Routes>
                    <Route path={Path.Home} element={<Home />} />
                    <Route path="/games" element={<GameList />} />
                    <Route path="/games/create" element={<CreateGame />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/games/:gameId" element={<GameDetails />} />
                    <Route path={Path.Logout} element={<Logout />} />
                </Routes>
            </AuthProvider>
        </div>
    )
}

export default App
