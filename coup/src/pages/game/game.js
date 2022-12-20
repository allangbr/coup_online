import React from 'react';
import './game.css'

import back_card from '../../images/back_card.png'
import coin from '../../images/coin.png'
import capitao from '../../images/capitao.png'
import condensa from '../../images/condensa.png'

export default function Game() {
  return <div>
    <div class="container">
      <div class="exit">
        <a href="/" class="card_button">SAIR</a>
      </div>
      <div class="card">
        <div>
          <h2>Allan</h2>
        </div>
        <div>
          <img src={back_card} class="back-card" alt="back card"/>
          <img src={back_card} class="back-card" alt="back card"/>
        </div>
        <div class="coin_img">
          <img src={coin} class="coin" alt="coin"/> 
          <h3>2</h3>
        </div>
      </div>
      <div class="card">
        <div>
          <h2>Jeison</h2>
        </div>
        <div>
          <img src={back_card} class="back-card" alt="back card"/>
          <img src={back_card} class="back-card" alt="back card"/>
        </div>
        <div class="coin_img">
          <img src={coin} class="coin" alt="coin"/> 
          <h3>2</h3>
        </div>
      </div>
      <div class="card">
        <div>
          <h2>Rauan</h2>
        </div>
        <div>
          <img src={back_card} class="back-card" alt="back card"/>
          <img src={back_card} class="back-card" alt="back card"/>
        </div>
        <div class="coin_img">
          <img src={coin} class="coin" alt="coin"/> 
          <h3>2</h3>
        </div>
      </div>
      <div class="card">
        <div>
          <h2>Leonardo</h2>
        </div>
        <div>
          <img src={back_card} class="back-card" alt="back card"/>
          <img src={back_card} class="back-card" alt="back card"/>
        </div>
        <div class="coin_img">
          <img src={coin} class="coin" alt="coin"/> 
          <h3>2</h3>
        </div>
      </div>
    </div>
    <div class="continer_player">
      <div class="card_player">
        <div>
          <h2>Eduardo</h2>
        </div>
        <div>
          <img src={capitao} class="back-card" alt="back card"/>
          <img src={condensa} class="back-card" alt="back card"/>
        </div>
        <div class="coin_img_player">
          <img src={coin} class="coin" alt="coin"/> 
          <h3>2</h3>
        </div>
      </div>
    </div>
    <div class="container_plays">
      <div class="title_action">
        <h2>ESPERANDO QUE OS OUTROS JOGADORES RESPONDAM</h2>
      </div>

      <div class="plays">
        <div class="file_1">
          <div class="card_play_1">
            <p>RENDA</p>
          </div>
          <div class="card_play_1">
            <p>AJUDA EXTERNA</p>
          </div>
          <div class="card_play_1">
            <p>COUP</p>
          </div>
        </div>
        <div class="file_2">
          <div class="card_play_2">
            <p>TAXAR</p>
          </div>
          <div class="card_play_2">
            <p>ASSASSINAR</p>
          </div>
          <div class="card_play_3">
            <h3>ROUBAR</h3>
          </div>
          <div class="card_play_2">
            <p>TROCAR</p>
          </div>
        </div>
      </div>
    </div>
  </div>;
}
