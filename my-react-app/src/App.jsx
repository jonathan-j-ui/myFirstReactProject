import reactLogo from './assets/react.svg';

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

const user = {
  name: "Jonathan",
  img: reactLogo,
};

export default function App() {
  return (
    <div>
      <h1>Welcome {user.name} to my app</h1>
      <MyButton />
      <img src={user.img} />
    </div>
  );
}