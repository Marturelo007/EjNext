"use client"

//props
export default function ClassHeader(props) {
    
    return (
        <section>
            <h2>{props.textTitle}</h2>
            <h3>{props.textSubtitle}</h3>
            <h3 >{props.nameTeacher}</h3>
        </section>
    );
  };
  