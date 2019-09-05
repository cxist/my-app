import React, { useState } from 'react';
import HelloWorld from './components/HelloWorld';

function App() {
  const [text, setText] = useState('Hello world');

  const onClick = count => {
    setText('changed ' + count + ' times.');
  };

  return (
    <div classname="App">
      <HelloWorld text={text} handleClick={onClick} />
    </div>
  );
}

export default App;
