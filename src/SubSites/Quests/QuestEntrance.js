import ContentEditable from "react-contenteditable";

import {CompleteQuest, DeleteQuest, UpdateQuest} from "./QuestAPI";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faTrash} from "@fortawesome/free-solid-svg-icons";

import React, {useContext, useRef} from "react";
import QuestContext from "./QuestContext";




export default function QuestEntrance(currentQuest) {

  const {state, dispatch} = useContext(QuestContext);
  const quest = useRef(currentQuest);


  const  handleChange = evt => {
    console.log("handleChange");
    console.log(evt.target.value)
    quest.current.QuestContext.text = evt.target.value;
  };

  async function onBlur(todo, QuestID) {
    console.log("onBlur");
  };

  const disableNewlines = (event) => {
    const keyCode = event.keyCode || event.which

    if (keyCode === 13) {
      event.returnValue = false
      if (event.preventDefault) event.preventDefault()
      onBlur(event);
    }
  }

  return (
  <>

    <ContentEditable
      html={quest.current.QuestContext.text}
      disabled={false}
      onChange={handleChange}
      onBlur={
        async () => {
          const response = await UpdateQuest(quest.current.QuestContext.text, quest.current.QuestContext.id);
          dispatch({type: "UPDATE_QUEST", payload: response.data});
        }
      }
      onKeyPress={disableNewlines}
      className={'questTextContainer'}
    />

    <button
      className={'questButton'}
      onClick={async () => {
        await DeleteQuest(quest.current.QuestContext.id)
        dispatch({type: "REMOVE_QUEST", payload: quest.current.QuestContext});
      }}
    >
    <FontAwesomeIcon icon={faTrash}/>
    </button>

    <button
      className={'questButton'}
      onClick={async () => {
        const response = await CompleteQuest(quest.current.QuestContext.id, !quest.current.QuestContext.complete)
        dispatch({type: "TOGGLE_QUEST", payload: response.data});
      }}
    >
    <FontAwesomeIcon icon={faCheck}/>
    </button>
  </>
  )
}
