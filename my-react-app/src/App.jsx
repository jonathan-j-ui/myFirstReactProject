function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

const user = {
  name: "Jonathan",
};

export default function App() {
  return (
    <div>
      <h1>Welcome {user.name} to my app</h1>
      <MyButton />
    </div>
  );
}