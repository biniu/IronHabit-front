import React, { useContext, useReducer, useEffect } from "react";

import './App.css';

import QuestList from "./SubSites/Quests/QuestList"
import QuestAddForm from "./SubSites/Quests/QuestAddForm"

import {GetQuests} from "./SubSites/Quests/QuestAPI"
import QuestContext from "./SubSites/Quests/QuestContext"
import QuestReducer from  "./SubSites/Quests/QuestReducer"

const App = () => {
  const initialState = useContext(QuestContext);
  const [state, dispatch] = useReducer(QuestReducer, initialState);
  const savedQuests = GetQuests();

  useEffect(
    () => {
      dispatch({
        type: "GET_QUEST",
        payload: savedQuests
      });
    },
    [savedQuests]
  );

  return (
    <QuestContext.Provider value={{ state, dispatch }}>
      <QuestAddForm />
      <QuestList />
    </QuestContext.Provider>
  );
}

export default App;
