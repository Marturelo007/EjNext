"use client"
import Button from "@/components/button";
//props
export default function Tasks(props) {
    return (
        <section>
            <h5>{props.expireDate}</h5>
            <p>{props.taskName}</p>
        </section>
    );
  };