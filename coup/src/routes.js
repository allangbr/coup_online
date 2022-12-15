import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import Home from "./pages/home/home"
import Game from "./pages/game/game"
import Lobby from "./pages/lobby/lobby"

export default function Routes () {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<Home />} />
                <Route path="/game" element={<Game />} />
                <Route path="/lobby" element={<Lobby />} />

            </Switch>
        </BrowserRouter>
    )
}