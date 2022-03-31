import React, { createContext, useState } from "react";
import "./Grandpa.css";
import Uncle from "../Uncle/Uncle";
import Father from "../Father/Father";
import Aunty from "../Aunty/Aunty";

// context api
// 1. call createContext with a default value
// 2. set a variable of the context with uppercase
// 3. make sure you export the context to use it in other places
// 4. wrap you child content using ringContext.provider
// 6. to consume the context from child component
// 7. useContext hook and you will need to pass the contextName

export const RingContext = createContext("diamond");

const Grandpa = () => {
  const [house, setHouse] = useState(1);
  const ornaments = "Diamond Ring";
  const handleBuyAHouse = () => {
    const newHouseCount = house + 1;
    setHouse(newHouseCount);
  };
  return (
    <RingContext.Provider value={[house, setHouse]}>
      <div className="grandpa">
        <h4>Grand Pa</h4>
        <p>
          House: {house} <button onClick={handleBuyAHouse}>Buy a House</button>{" "}
        </p>
        <section style={{ display: "flex" }}>
          <Father house={house}></Father>
          <Uncle house={house}></Uncle>
          <Aunty house={house}></Aunty>
        </section>
      </div>
    </RingContext.Provider>
  );
};

export default Grandpa;
