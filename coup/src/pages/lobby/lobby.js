import React from 'react';
import "./lobby.css"

export default function Lobby() {
  return <div>
    <div class="header-lobby">
      <h1>Coup Online</h1>
    </div>

    <div class="create-content-lobby">
      <h2 class="title-lobby"> SALA</h2>
      <div class="list">
        <ul>
          <li>Allan(Você) </li>
          <li>David</li>
          <li>Rauan</li>
          <li>Eduardo</li>
          <li>Leo</li>
          <li>Pedro</li>
          <li>Jeison</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
        </ul>
      </div>
      <div class="room-id">
        ID da sala: <input type="text" name="nick" class="inputs-lobby" placeholder='Gr1U6ubjV'/>
      </div>
      Link para o discord: <input type="text" name="nick" class="inputs-lobby-discord" placeholder='https://discord.gg/mcHuEqjw'/>

      <div class="text-explanation">
      O jogo irá começar quando todos os jogadores entrarem na sala.

      </div>
       
      <div class="leave">
        <a href="/" class="button-exit">SAIR</a>
      </div>
    </div>
    </div>;
}
