import React from "react";
import UserCard from "./components/UserCard";
import "./App.css";

const listOfUsers = [
  {
    name: "John Doe",
    age: 40,
    email: "jhon@gmail.com",
    address: "Tunis",
    isAuth: true,
  },
  {
    name: "Mohamed",
    age: 26,
    email: "med@gmail.com",
    isAuth: false,
  },
  {
    name: "Houssem",
    age: 25,
    email: "houssem@gmail.com",
    isAuth: false,
  },
  {
    name: "Mohamed Hassanet",
    age: 25,
    email: "MedHassanet@gmail.com",
    isAuth: true,
  },
  {},
];

function App() {
  const alertName = (name) => alert(name);
  return (
    <div>
      {listOfUsers.map((currentUser, i) => (
        <UserCard key={i} user={currentUser} alertName={alertName} />
      ))}
      <UserCard user={{}} />
    </div>
  );
}

export default App;
