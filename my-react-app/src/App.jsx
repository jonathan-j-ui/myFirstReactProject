import reactLogo from './assets/react.svg';

function MyButton() {
  return (
    <button>Login</button>
  );
}
const isLoggedIn = true;

const user = {
  name: "Jonathan",
  img: reactLogo,
};

export default function App() {
  return (
    <div>
      {isLoggedIn ? (
        <>
          <img src={user.img} />
          <h1>Welcome {user.name} to my app</h1>
        </>
      ) : (
        <MyButton />
      )}
    </div>
  );
}