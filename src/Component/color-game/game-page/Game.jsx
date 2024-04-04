import { useEffect, useState } from "react";
import GuessColor from "./GuessColor";
import LevelGame from "./LevelGame";
import Panel from "./Panel";
import Modal from "./Modal";

import win from '../../../images/win.png'

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
    const [newRecordFlag, setNewRecordFlag] = useState(false);
    useEffect(() => {
        generateColors();
    }, [selecting, modalFlag]);
    useEffect(() => {
        let setRecord = {};
        let player = JSON.parse(localStorage.getItem('player'));
        let players = JSON.parse(localStorage.getItem('players'));
        console.log(players);
        if (player.highestScore < scoreCounter) {
            setRecord = { ...player, highestScore: scoreCounter };
            localStorage.setItem('player', JSON.stringify(setRecord));
            const setRecordInPlayers = players.map(item => item.userName === player.userName ? setRecord : item);
            localStorage.setItem('players', JSON.stringify(setRecordInPlayers));
            setNewRecordFlag(true);
        };
    }, [scoreCounter]);

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
                e.target.style.backgroundImage = `url(${win})`;
                setTimeout(() => generateColors(), 700);
                setScoreCounter(prev => prev + (levelOfGame.length / 3));
                wrongGuessNum = 0;
            } else {
                lost();
            }
        };
    }
    function lost() {
        let deferntLevelLost = (alertNum, loosingNum) => {
            wrongGuessNum++;
            wrongGuessNum === alertNum && alert('be careful,you gonna lose these game');
            if (wrongGuessNum === loosingNum) {
                setModalFlag(true);
                setScoreCounter(0);
                wrongGuessNum = 0;
            }
        }
        if (levelOfGame.length === 3) {
            deferntLevelLost(1, 2);
        } else if (levelOfGame.length === 6) {
            deferntLevelLost(2, 3);
        } else {
            deferntLevelLost(3, 4);
        }
    }
    let tryHandler = e => {
        e.preventDefault();
        setModalFlag(false);
        setNewRecordFlag(false);
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
            {modalFlag && <Modal clickHandler={tryHandler} newRecordFlag={newRecordFlag} />}
        </article>
    );
}