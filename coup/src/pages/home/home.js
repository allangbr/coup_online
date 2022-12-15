import React from 'react';
import "../home/home.css"

export default function Home() {
  return <div>
    <div class="header">
      <h1>Coup Online</h1>
    </div>

    <div class="create-content">
      <div class="create-inputs-area">
      <h2 class="title"> Criar Sala</h2>
        Nickname <input type="text" name="nick" class="inputs"/> 
        Nº de Players <input type="text" class="inputs"/>
        Link para o discord (Opcional) <input type="text" name="nick" class="inputs"/> 
        <a href="/lobby" class="button">CRIAR</a>
      </div>
    </div>
    <div class="enter-content"> 
      <div class="enter-inputs-area">
        <h2 class="title-enter"> Entrar em Sala</h2>
          Nickname <input type="text" name="nick" class="inputs"/> 
          ID da sala <input type="text" class="inputs"/>
          <a href="/lobby" class="button-enter">ENTRAR</a>
      </div>
    </div>
    </div>;
}
