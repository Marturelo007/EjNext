"use client"

//props
export default function Checkbox({name, text, onChange}) {    
    return (
        <div>
                <input type="checkbox" name={name} onChange={onChange}/>
                <label>{text}</label>
        </div>

    );
  };