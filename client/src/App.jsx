import CreateGame from "./components/game-create/CreateGame";
import GameList from "./components/game-list/GameList";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { Routes, Route } from 'react-router-dom';
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import GameDetails from "./components/game-details/GameDetails";

function App() {
    return (
        <div id="box">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<GameList />} />
                <Route path="/games/create" element={<CreateGame />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/games/:gameId" element={<GameDetails />} />
            </Routes>
        </div>
    )
}

export default App
