import React, { useState, useEffect, useContext } from "react";

import QuestContext from "./QuestContext";
import {AddQuest, UpdateQuest} from "./QuestAPI"

export default function QuestAddForm() {
  const [quest, setQuest] = useState("");
  const {
    state: { currentTodo: currentQuest = {} },
    dispatch
  } = useContext(QuestContext);

  useEffect(
    () => {
      if (currentQuest.text) {
        setQuest(currentQuest.text);
      } else {
        setQuest("");
      }
    },
    [currentQuest.text]
  );

  const handleSubmit = async event => {
    event.preventDefault();
    if (currentQuest.text) {
      const response = await UpdateQuest(quest, currentQuest.id);
      dispatch({ type: "UPDATE_QUEST", payload: response.data });
    } else {
      const response = await AddQuest(quest);
      dispatch({ type: "ADD_QUEST", payload: response.data });
    }
    setQuest("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={event => setQuest(event.target.value)}
        value={quest}
        placeholder={'finally learn a basic of HTML'}
        className={'questForm'}
      />
    </form>
  );
}
