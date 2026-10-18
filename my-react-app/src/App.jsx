import reactLogo from './assets/react.svg';
import { useState } from 'react';

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>Clicked {count} times</button>
  );
}
const isLoggedIn = false;

const isSkyGreen = false;

const user = {
  name: "Jonathan",
  img: reactLogo,
};

const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
  { title: 'Orange', id: 4 },
]

const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);

export default function App() {
  return (
    <>
      {isLoggedIn ? (
        <>
          <img src={user.img} />
          <h1>Welcome {user.name} to my app</h1>
        </>
      ) : (
        <MyButton />
      )}
      <p>Sky is {!isSkyGreen && "not"} green.</p>

      <ul>{listItems}</ul>
    </>
  );
}