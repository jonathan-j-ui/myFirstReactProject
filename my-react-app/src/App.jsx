import reactLogo from './assets/react.svg';

function MyButton() {
  return (
    <button>Login</button>
  );
}
const loggedIn = 1;

const user = {
  name: "Jonathan",
  img: reactLogo,
};

export default function App() {
  let content;
  if (loggedIn == 1){
    content = <h1>Welcome {user.name} to my app</h1>;
  }
  else{
    content = <MyButton />;
  }

  return (
    <div>
      {content}
      <img src={user.img} />
    </div>
  );
}