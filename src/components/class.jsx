"use client"
import ClassHeader from "@/components/classHeader";
import Tasks from "@/components/tasks";
//props
export default function ButtonClass(props) {
    
    return (
        <button type="button" onClick={props.onClick}>
            <ClassHeader textTitle={props.textTitle} textSubtitle={props.textSubtitle} nameTeacher={props.nameTeacher}></ClassHeader>

            <Tasks expireDate={props.expireDate} taskName={props.taskName}></Tasks>
         
        </button>
    );
  };
  