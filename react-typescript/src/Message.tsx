import React from 'react';
import messageHoc from './Hoc'

//Type inspection for the props to check type
//you dont need to spcificy any

//Props Sending
//(prop: {message: string})

//Interface Prop
//Accept multiple props with Interface instead of seprate parameteres
// interface UserMessage{
//     name: string,
//     message: string
// } 

const example = (props: any): any => <p>{props.name}{props.message}</p>


const Message = messageHoc(example)



export default Message;