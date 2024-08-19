"use client"

//props
export default function Checkbox(id, type, name, text, forInput) {    
    return (
        <div>
                <input type={type} id={id} name={name} defaultChecked={false}></input>
                <label for={forInput}>{text}</label>
        </div>

    );
  };