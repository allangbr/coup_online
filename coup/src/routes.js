import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import Home from "./pages/home/home"
import Game from "./pages/game/game"

export default function Routes () {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<Home />} />
                <Route path="/game" element={<Game />} />
            </Switch>
        </BrowserRouter>
    )
}