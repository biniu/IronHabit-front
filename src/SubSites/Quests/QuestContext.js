import React from 'react';

const QuestContext = React.createContext({
    quests: [
      // { id: 1, text: "Eat breakfast", complete: false },
      // { id: 2, text: "Do laundry", complete: false },
      // { id: 3, text: "Finish project", complete: true }
  ],
  currentQuest: {}
});

export default QuestContext;
