import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AbBotao } from '../src';
import { AbCard } from '../src/components/AbCard';
import { AbTag } from '../src/components/AbTag';
import { AbGroupOptions } from '../src/components/AbGroupOptions';
const opcones = [
  {
      id: 1,
      titulo: 'E-book',
      corpo: 'R$ 00,00',
      rodape: '.pdf, .epub, .mob'
  },
  {
      id: 2,
      titulo: 'Impresso',
      corpo: 'R$ 00,00',
      rodape: '.pdf, .epub, .mob'
  },
  {
      id: 3,
      titulo: 'Impresso + E-book',
      corpo: 'R$ 00,00',
      rodape: '.pdf, .epub, .mob'
  }
]
const App = () => {
  return (
    <>
      <AbGroupOptions opcoes={opcones}/>
      <AbBotao texto='Botao primario dahora boladão'/>
      <AbCard>
        <div>
            <h2>Sobre o Livro:</h2>
            <h4>dalva puita</h4>
            <div>
                <span>aaaaaaaaaaa</span>
                <span>Por: 50tasso</span>
            </div>
            <div>
                <p>A partir de:</p>
                <h2>R$ teu</h2>
            </div>
        </div>
      </AbCard>
      <AbTag texto='faz o l'/>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
