import React, {useContext} from "react";
import axios from "axios";

import {DeleteQuest, CompleteQuest} from "./QuestAPI"
import QuestContext from "./QuestContext";

export default function QuestList() {
  const {state, dispatch} = useContext(QuestContext);
  return (
    <div>
      <h1>Quest List</h1>
      <ul>
        {state.quests.map(quest => (
          <li
            key={quest.id}
            className="flex items-center bg-orange-dark border-black border-dashed border-2 my-2 py-4"
          >
            <span
              onDoubleClick={async () => {
                const response = await axios.patch(
                  `http://localhost:3001/quests/${quest.id}`,
                  {
                    complete: !quest.complete
                  }
                );
                dispatch({ type: "TOGGLE_TODO", payload: response.data });
              }}
              className={`flex-1 ml-12 cursor-pointer ${quest.complete &&
              "line-through text-grey-darkest"}`}
            >
              {quest.text}
            </span>
            <button
              onClick={() =>
                dispatch({ type: "SET_CURRENT_QUEST", payload: quest })
              }>
            Edit
            </button>
            <button
              onClick={async () => {
                await DeleteQuest(quest.id)
                dispatch({ type: "REMOVE_QUEST", payload: quest });
              }}
            >
              Delete
            </button>
            <button
              onClick={async () => {
                await CompleteQuest(quest.id)
                dispatch({ type: "TOGGLE_QUEST", payload: quest });
              }}
            >
              Done
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
