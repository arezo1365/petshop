import React, { useState } from "react";

export default function useCounter(initValue = 0) {
  const [count, setCount] = useState(initValue);
  const add = () => {
    if (count<50) setCount(count + 1);
  } 
  const subtract = () => {
    if (count > 0) setCount(count - 1);
  };

  return { count, add, subtract };
}
