"use client"
import styles from './button.module.css';

//props
export default function Checkbox({name, text, onChange}) {    
    return (
        <label class='container'>
                <input type="checkbox"  name={name} onChange={onChange}/>
                <div class="checkmark"></div>
                <label>{text}</label>
        </label>

    );
  };