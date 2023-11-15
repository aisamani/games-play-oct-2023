import CreateGame from "./components/game-create/CreateGame";
import GameList from "./components/game-list/GameList";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { Routes, Route } from 'react-router-dom';
import Login from "./components/login/Login";

function App() {
    return (
        <div id="box">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<GameList />} />
                <Route path="/games/create" element={<CreateGame />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    )
}

export default App
