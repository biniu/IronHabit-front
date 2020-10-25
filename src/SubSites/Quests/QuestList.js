import React, {useContext} from "react";

import QuestEntrance from "./QuestEntrance";

import QuestContext from "./QuestContext";



export default function QuestList() {
  const {state, dispatch} = useContext(QuestContext);
  return (
    <div>
      <ul className={'questList'}>
        {state.quests.map(quest => (
          <li
            key={quest.id}
            className={quest.complete ? "questEntranceDone" : "questEntrance"}
          >
            <QuestEntrance QuestContext={quest}/>
          </li>
        ))}
      </ul>
    </div>
  )
}
