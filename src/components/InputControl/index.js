import React from 'react'

const InputControl=({group,value,changed,children})=>{
    return (
        <div>
            <input 
            type="radio"
            name={group}
            value={value}
            onChange={changed}
            />{children}
        </div>
    )
}

export default InputControl