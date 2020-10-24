import React, { useContext, useReducer, useEffect } from "react";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './GlobalCSS/App.css';

import QuestMainSite from "./SubSites/Quests/QuestMainSite"

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
      <QuestMainSite />
    </QuestContext.Provider>
  );
}

export default App;
