import {useEffect, useState} from "react";
import axios from "axios";
import uuidv4 from "uuid/v4";


export const GetQuests = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get("http://localhost:3001/quests");
    setData(response.data);
  };

  return data;
}

export async function AddQuest(todo) {
  return await axios.post(
    "http://localhost:3001/quests",
    {
      id: uuidv4(),
      text: todo,
      complete: false
    }
  );
}

export async function CompleteQuest(QuestID, QuestStatus) {
  return await axios.patch(
    `http://localhost:3001/quests/${QuestID}`,
    {
      complete: QuestStatus
    }
  );
}

export async function UpdateQuest(todo, QuestID) {
  {console.log("UpdateQuest " + todo + " " + QuestID)}
  return await axios.patch(
    `http://localhost:3001/quests/${QuestID}`,
    {
      text: todo
    }
  );
}

export async function DeleteQuest(QuestID) {
  await axios.delete(
    `http://localhost:3001/quests/${QuestID}`
  );
}
