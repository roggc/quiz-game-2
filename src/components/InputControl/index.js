import React,{useState} from 'react'

const InputControl=({group,value,changed,children})=>{
    const [checked,setChecked]=useState(false)
    return (
        <div>
            <input 
            type="radio"
            name={group}
            value={value}
            onChange={changed.bind(this,setChecked)}
            checked={checked}
            />{children}
        </div>
    )
}

export default InputControl