import "./styles.css";
import { useState } from "react";

const initialVocabulary = [
    {
    id: 1,
    word: "Apple",
    explanation: "苹果",
    remembered: false
    },
    {
    id: 2,
    word: "What are the building blocks of React apps?",
    explanation: "Components",
    remembered: false
    },
    {
    id: 3,
    word: "What's the name of the syntax we use to describe a UI in React?",
    explanation: "JSX",
    remembered: false
    },
    {
    id: 4,
    word: "How to pass data from parent to child components?",
    explanation: "Props",
    remembered: false
    },
    {
    id: 5,
    word: "How to give components memory?",
    explanation: "useState hook",
    remembered: false
    },
    {
    id: 6,
    word:
        "What do we call an input element that is completely synchronised with state?",
    explanation: "Controlled element",
    remembered: false
    }
];
export default function EnglishStudy(){
    const [vocabularys, setVocabularys] = useState(initialVocabulary);

    function handleAddVocabulary(vocabulary){
        setVocabularys((vocabularys) => [...vocabularys,vocabulary]);
    }

    function handleDeleteVocabulary(id){
        setVocabularys((vocabularys) => vocabularys.filter((vocabulary) => vocabulary.id !== id));
    }

    return (<div className="App">
        <Form onAddNewVocabulary={handleAddVocabulary}/>
        <FlashCards  vocabularys={vocabularys} onDeleteVocabulary={handleDeleteVocabulary}/>
    </div>)
}


function Form({onAddNewVocabulary}){
    const [explanation, setExplanation] = useState("");
    const [word, setWord] = useState("");
    
    function handleSubmit(e){
        e.preventDefault();

        if (!explanation) return;

        const newWord = {
            word, explanation, remembered: false, id: Date.now()
        };
        console.log(newWord);

        onAddNewVocabulary(newWord);

        setExplanation("");
        setWord("");
    }
    return(
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>Which word do you want to add to the vocabulary</h3>
            <input type="text" placeholder="Vocabulary..." value={word} onChange={(e)=> setWord(e.target.value)}/>
            <input type="text" placeholder="Vocabulary..." value={explanation} onChange={(e)=> setExplanation(e.target.value)}/>
            <button>Add</button>
        </form>
    )
}

function FlashCards({vocabularys, onDeleteVocabulary}) {
    const [selectId, setSelectedId] = useState(null);

    function handleClick(id){
        setSelectedId(id !== selectId ? id : null);
    }

    return (
        <div className="flashcards">
            <h3>Here is the English corner, you can abroaden your vocabulary here!</h3>
            {vocabularys.map((word)=>(
                <div key={word.id} onClick={() => handleClick(word.id)} className={word.id === selectId ? "selected":""}>
                    <p>
                        {word.id === selectId? word.explanation:word.word}
                    </p>
                    <button
                        onClick={(e)=>{onDeleteVocabulary(word.id)}}
                        aria-label="Close"
                    >
                        &times;
                    </button>
                    {/* <button
                        className="close-btn"
                        onClick={(e) => {
                        e.stopPropagation(); // stop card flipping
                        onDeleteVocabulary(word.id);
                        }}
                        aria-label="Delete word"
                    /> */}
                </div>
                
            ))}
        </div>
    )
}