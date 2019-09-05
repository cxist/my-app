import React, { useState } from 'react';

function HelloWorld({ text, handleClick }) {
  const [count, setCount] = useState(1);

  const onClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    handleClick(newCount);
  };

  return (
    <div>
      <div>{text}</div>
      <div>{count}</div>
      <button onClick={onClick}>Click</button>
    </div>
  );
}

export default HelloWorld;
