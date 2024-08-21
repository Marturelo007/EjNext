"use client"
import Button from "@/components/button";
//props
export default function Form(props) {
    
    return (
      <form> {props.children} 
        <title>{props.title}</title>
        <input type="text"></input>
        <input type="number"></input>
        <Button > {props.btn1} </Button>
        <Button > {props.btn2} </Button>
      </form>
    );
  };
  