import React,{useState, useEffect,useRef} from 'react'
import * as style from './index.module.css'
import {useSelector} from 'react-redux'
import InputControl from '../InputControl'

const ShowQuestionAndAnswers=({question,isLast,next})=>{
    if(!question){
        return null
    }

    const [answerValue,setAnswerValue]=useState(null)
    
    const answers=useSelector(state=>state.games.answers
        .filter(answer=>answer.qid===question.id))
   
    const func= useRef(null)

    let changed=(setChecked,e)=>{
        setAnswerValue(e.target.value)
        setChecked(true)
        func.current=setChecked
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
            >{answer.text}</InputControl>
            )}
            <button 
            className="btn btn-primary"
            onClick={next.bind(this,answerValue,func.current,setAnswerValue)}
            disabled={answerValue===null}>{isLast?'End':'Next'}</button>
        </div>
    )
}

export default ShowQuestionAndAnswers