import React, { useState } from "react";

import CharPicker from "./components/CharPicker";
import Character from "./components/Character";

const App = (props: any) => {
  const [destroyed, setDestroyed] = useState<boolean>(false);
  const [selectedCharacter, setSelectedCharacter] = useState<number>(1);
  const [chosenSide, setChosenSide] = useState<string>("light");

  const sideHandler = (side: any) => {
    setChosenSide(side);
  };

  const charSelectHandler = (event: any) => {
    const charId = event.target.value;
    setSelectedCharacter(charId);
  };

  const destructionHandler = () => {
    setDestroyed(true);
  };

  let content = (
    <React.Fragment>
      <CharPicker
        side={chosenSide}
        selectedChar={selectedCharacter}
        onCharSelect={charSelectHandler}
      />
      <Character selectedChar={selectedCharacter} />
      <button onClick={sideHandler.bind("light")}>Light Side</button>
      <button onClick={sideHandler.bind("dark")}>Dark Side</button>
      {chosenSide === "dark" && (
        <button onClick={destructionHandler}>DESTROY!</button>
      )}
    </React.Fragment>
  );

  if (destroyed) {
    content = <h1>DESTROYED!</h1>;
  }
  return content;
};

export default App;
