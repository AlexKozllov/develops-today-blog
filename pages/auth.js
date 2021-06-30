import Router from "next/router";
import { useState } from "react";
import { MainLayout } from "../Layout/MainLayout";

const initialState = {
  name: "Alex",
  age: 25,
};

export default function Authorisation() {
  const [user, setUser] = useState(initialState);
  const goToHomeHandler = (e) => {
    console.log(e);
    Router.push("/");
  };

  const incrementYearHandler = () => {
    setUser({ ...user, age: user.age + 1 });
  };

  const decrementYearHandler = () => {
    setUser({ ...user, age: user.age - 1 });
  };

  return (
    <MainLayout>
      <h2>Autharisation page</h2>
      <button onClick={goToHomeHandler}>Go to Home</button>
      <div>
        <p>Nane: {user.name}</p>
        <p>Age: {user.age}</p>
      </div>
      <div>
        <button onClick={incrementYearHandler}>Add Yars</button>
      </div>

      <div>
        <button onClick={decrementYearHandler}>Less Yars</button>
      </div>
    </MainLayout>
  );
}
