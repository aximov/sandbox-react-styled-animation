import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import styled from 'styled-components'

const box = { width: "100pt", height: "100pt" };

const click = event => {
  render(); // 再描画
};

const Block = styled.div`
  width: 100pt;
  height: 100pt;
  margin: 20pt;
  background-color: chocolate;
`

// コンポーネント定義
const AnimationBlock = props => (
  <div>
    <Block>
      ブロック
    </Block>
    <button id="scaling-button" onClick={click}>
      拡大縮小
    </button>
  </div>
);

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <AnimationBlock />
    </React.StrictMode>
    ,
    document.getElementById("root")
  );
};

render();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
