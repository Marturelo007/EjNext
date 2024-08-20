"use client"
import styles from './button.module.css';

//props
export default function Button(props) {
    
    return (
      <button className={styles.button} onClick={props.onClick}> {props.children} </button>
    );
  };
  