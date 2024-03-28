import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AbBotao } from '../src';
import { AbCard } from '../src/components/AbCard';

const App = () => {
  return (
    <div>
      <AbBotao/>
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
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
