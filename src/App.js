import "./styles.css";

import { useState } from "react";
import data from './data'
import List from './List'

export default function App() {

  const [product, setProduct] = useState(data)
  return (
    <div className="App">
      <List people={product} />
      <button onClick={() => setProduct([])}>clear all</button>
    </div>
  );
}
