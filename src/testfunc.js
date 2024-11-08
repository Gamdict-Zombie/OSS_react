import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>카운트: {count}</h1>
      <button type="button" class="submitbtncss" onClick={increment} id="subbtn">클릭</button>
    </div>
  );
}

export default Counter;