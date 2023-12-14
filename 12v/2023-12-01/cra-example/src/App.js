import logo from "./logo.svg";
import "./App.css";
import { Profile } from "./Profile";

function Comp() {
  return <div>123</div>;
}

function App() {
  const someCondition = false;

  const data = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Joe" },
  ];

  return (
    <div
      id="some"
      style={{
        backgroundColor: "red",
      }}
    >
      {data.map((item) => (
        <div key={item.id}>
          {item.name} ........ <input></input>
          <Profile />
        </div>
      ))}
    </div>
  );
}

export default App;
