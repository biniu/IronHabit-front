import React, {useContext, useState} from "react";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import QuestContext from "./QuestContext";

const reorder = (list, fromIndex, toIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(fromIndex, 1);
    result.splice(toIndex, 0, removed);
    return result;
};

function QuestListDnD() {
    const [letters, setLetters] = useState(["a", "b", "c"]);

    const [quests, setQuests] = useState(useContext(QuestContext));

    function onDragEnd(result) {
        if (!result.destination) return;

        const fromIndex = result.source.index;
        const toIndex = result.destination.index;

        if (fromIndex === toIndex) return;

        setLetters(reorder(letters, fromIndex, toIndex));
    }



    return (
        <DragDropContext onDragEnd={onDragEnd}>
            {quests.map(quest => (
                console.log(quest)
            ))};

            {letters.map(letter => (
                console.log(letter)
            ))};

            <Droppable droppableId="list">
                {provided => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        {letters.map((quote, index) => (
                            <Draggable key={quote} draggableId={quote} index={index}>
                                {provided => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        {quote}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}


export default QuestListDnD;
