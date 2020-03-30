import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'

const click = event => {
  render(); // 再描画
};

const Block = styled.div`
  width: 100pt;
  height: 100pt;
  margin: 20pt;
  background-color: chocolate;
`

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


function App() {
  return (
    <div className="App">
      <AnimationBlock />
    </div>
  );
}

export default App;
