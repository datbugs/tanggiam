import React, { useState } from 'react';
import useCount from './useCount';


const Count1 = () => {

  const { count, increaseCount, decreaseCount } = useCount(0);

  console.log("count:", count);

  const onPressIncrease = () => {
    increaseCount();
  }
  const onPressDecrease = () => {
    decreaseCount();
  }


  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={(onPressIncrease)}>
        Increase
      </button>
      <button onClick={(onPressDecrease)}>
        Decrease
      </button>
    </div>
  );
}
const Count2 = () => {

  const { count, increaseCount, decreaseCount } = useCount(0);

  console.log("count:", count);

  const onPressIncrease = () => {
    increaseCount();
  }
  const onPressDecrease = () => {
    decreaseCount();
  }


  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={(onPressIncrease)}> 
        Increase
      </button>
      <button onClick={(onPressDecrease)}>
        Decrease
      </button>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <Count1 />
      <Count2 />
    </div>
  )

}

export default App;
