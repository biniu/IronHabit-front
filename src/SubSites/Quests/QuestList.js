import React, {useContext} from "react";

import {DeleteQuest, CompleteQuest} from "./QuestAPI"
import QuestContext from "./QuestContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck, faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";



export default function QuestList() {
  const {state, dispatch} = useContext(QuestContext);
  return (
    <div>
      <ul className={'questList'}>
        {state.quests.map(quest => (
          <li
            key={quest.id}
            className="questEntrance"
          >
            <span>
              {quest.text}
            </span>

            <span className={'questButtonContainer'}>
              <button
                className={'questButton'}
                onClick={() =>
                  dispatch({ type: "SET_CURRENT_QUEST", payload: quest })
                }>
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button
                className={'questButton'}
                onClick={async () => {
                  await DeleteQuest(quest.id)
                  dispatch({ type: "REMOVE_QUEST", payload: quest });
                }}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
              <button
                className={'questButton'}
                onClick={async () => {
                  await CompleteQuest(quest.id)
                  dispatch({ type: "TOGGLE_QUEST", payload: quest });
                }}
              >
                <FontAwesomeIcon icon={faCheck} />
              </button>
              </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
