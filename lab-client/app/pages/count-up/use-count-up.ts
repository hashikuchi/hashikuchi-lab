import { useState } from "react";

export function useCountUp() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);
  const reset = () => setCount(0);
  return { count, increment, reset };
}