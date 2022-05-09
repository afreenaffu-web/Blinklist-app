import React from 'react'

interface Person{
    firstName: string;
    lastName:string;
}

interface props{
    text:string;
    ok?:boolean;
    person: Person;
}

export const Greeting: React.FC<props> = (props) => {
  return (
    <div>
        <h1>{props.text}</h1>
        <h2>{props.person.firstName} {props.person.lastName}</h2>
        
    </div>
  )
}

export default Greeting