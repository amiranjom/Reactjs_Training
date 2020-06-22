import React from 'react';

//Type inspection for the props to check type
//you dont need to spcificy any

//Props Sending
//(prop: {message: string})

//Interface Prop
//Accept multiple props with Interface instead of seprate parameteres
interface UserMessage{
    name: string,
    message: string
} 

const Message = (props: UserMessage ) => {
    return(
        <p> {props.name},  {props.message}</p>
    )
}

export default Message;