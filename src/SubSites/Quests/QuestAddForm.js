import React, { useState, useEffect, useContext } from "react";

import QuestContext from "./QuestContext";
import {AddQuest, UpdateQuest} from "./QuestAPI"

export default function QuestAddForm() {
  const [todo, setTodo] = useState("");
  const {
    state: { currentTodo: currentQuest = {} },
    dispatch
  } = useContext(QuestContext);

  useEffect(
    () => {
      if (currentQuest.text) {
        setTodo(currentQuest.text);
      } else {
        setTodo("");
      }
    },
    [currentQuest.text]
  );

  const handleSubmit = async event => {
    event.preventDefault();
    if (currentQuest.text) {
      const response = await UpdateQuest(todo, currentQuest.id);
      dispatch({ type: "UPDATE_QUEST", payload: response.data });
    } else {
      const response = await AddQuest(todo);
      dispatch({ type: "ADD_QUEST", payload: response.data });
    }
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={event => setTodo(event.target.value)}
        value={todo}
      />
    </form>
  );
}
