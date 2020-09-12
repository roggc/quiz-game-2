import React,{useState, useEffect} from 'react'
import * as style from './index.module.css'
import {useSelector} from 'react-redux'
import InputControl from '../InputControl'

const ShowQuestionAndAnswers=({question,isLast,next})=>{
    if(!question){
        return <div></div>
    }
    const [checked,setChecked]=useState(false)
    const [answerValue,setAnswerValue]=useState(null)
    const answers=useSelector(state=>state.games.answers
        .filter(answer=>answer.qid===question.id))

    let changed=(e)=>{
        setAnswerValue(e.target.value)
        setChecked(true)
    }
    
    return (
        <div>
            <div>{question.text}</div>
            {answers.map(answer=>
            <InputControl 
            key={answer.text}
            value={answer.value}
            group={answer.qid}
            changed={changed}
            checked={checked}
            >{answer.text}</InputControl>
           
            )}
            <button 
            className="btn btn-primary"
            onClick={next.bind(this,isLast,answerValue,setChecked)}
            disabled={answerValue===null||!checked}>{isLast?'End':'Next'}</button>
        </div>
    )
}

export default ShowQuestionAndAnswers