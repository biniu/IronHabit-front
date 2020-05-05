import React, {Fragment} from 'react';

import {QuestEntrance} from './QuestEntrance';
import './Quest.css';


export const QuestList = (props) => {
  return <Fragment>
    {props.questList.map((item) => {
      return <QuestEntrance quest={item}/>;
    })}
  </Fragment>;
};

// export default QuestList;
