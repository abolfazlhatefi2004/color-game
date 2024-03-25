import { useEffect, useState } from "react";
import GuessColor from "./GuessColor";
import LevelGame from "./LevelGame";
import Panel from "./Panel";
import Modal from "./Modal";

const itemsFlag = [
    { name: 'easy', flag: false },
    { name: 'normal', flag: false },
    { name: 'hard', flag: true }
];
let answerColor = [];
let wrongGuessNum = 0;
export default function Game() {
    const [selecting, setSelecting] = useState(itemsFlag);
    const [levelOfGame, setLevelOfGame] = useState([]);
    const [scoreCounter, setScoreCounter] = useState(0);
    const [modalFlag, setModalFlag] = useState(false);
    useEffect(() => {
        generateColors();
    }, [selecting, modalFlag]);

    function generateColors() {
        let colorGame = []
        let num = Math.max(...selecting.map((item, index) => item.flag ? (index + 1) * 3 : 0));
        for (let i = 0; i < num; i++) {
            let colors = [];
            for (let j = 0; j < 3; j++) {
                colors = [...colors, Math.floor(Math.random() * 256)];
            }
            colorGame = [...colorGame, { color: colors, flag: false }];
        }
        generateAnswer(colorGame);
    }
    function generateAnswer(colorGame) {
        answerColor = colorGame[Math.floor(Math.random() * colorGame.length)].color;
        setLevelOfGame(() => colorGame.map(item => {
            let flag = item.color.every((item, index) => item === answerColor[index]);
            return { ...item, flag: flag }
        }));
    }
    let levelHandler = e => {
        e.preventDefault();
        setSelecting(prev => (e.target.tagName === 'BUTTON') ? prev.map(item => (item.name === e.target.dataset.name) ? { ...item, flag: true } : { ...item, flag: false }) : prev);
    }
    let judgeGuess = e => {
        const tagStyle = e.target.style;
        if (e.target.dataset.id === "color" && tagStyle.backgroundColor !== `transparent`) {
            tagStyle.backgroundColor = `transparent`;
            if (e.target.dataset.flag === "true") {
                e.target.className = `rounded-lg cursor-pointer transition-all duration-700 bg-cover bg-no-repeat bg-center`;
                e.target.style.backgroundImage = `url('/images/win.png')`;
                setTimeout(() => generateColors(), 700);
                setScoreCounter(prev => prev + (levelOfGame.length / 3));
                wrongGuessNum = 0;
            } else {
                lost();
            }
        };
    }
    function lost() {
        wrongGuessNum++;
        wrongGuessNum === 2 && alert('be careful,you gonna lose these game');
        if (wrongGuessNum === 3) {
            setModalFlag(true);
            setScoreCounter(0);
            wrongGuessNum = 0;
        }
    }
    let tryHandler = e => {
        e.preventDefault();
        setModalFlag(false);
    }
    let newGameHandler = e => {
        e.preventDefault();
        generateColors();
        setScoreCounter(0);
        wrongGuessNum = 0;
    }
    return (
        <article>
            <LevelGame selecting={selecting} clickHandler={levelHandler} newGameHandler={newGameHandler} />
            <Panel answerColor={answerColor} scoreCounter={scoreCounter} />
            <GuessColor square={levelOfGame} clickHandler={judgeGuess} />
            {modalFlag && <Modal clickHandler={tryHandler} />}
        </article>
    );
}