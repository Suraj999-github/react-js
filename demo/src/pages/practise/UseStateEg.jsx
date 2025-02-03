import  { useState } from "react";

import { Button } from 'primereact/button';
const Counter = () => {
  const [count, setCount] = useState(0); // Initialize state

  return (
    <div className="text-center p-5">
      <h1 className="text-2xl font-bold">Counter: {count}</h1>
      <Button label="Increment" outlined  onClick={() => setCount(count + 1)}/>
      {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => setCount(count + 1)}>
        
      </button> */}
    </div>
  );
};

export default Counter;
