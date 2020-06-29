import React, { Component } from "react";
import { render } from "react-dom";

// let skiData ={
//   total: 50,
//   powder: 20,
//   backcountry: 10,
//   goal: 100
// }
// const getPercent = decimal => {
//       return decimal * 100 + "%"
// }

// const calcGoalProgress = (total, goal) => {
//       return getPercent(total/goal)
// }

// Function Component

// const SkiDayCounter = ({total,powder,backcountry,goal}) => {
//   return(
//     <section>
//         <div>
//           <p>Total Days: {total}</p>
//         </div>
//         <div>
//           <p>Powder Days: {powder}</p>
//         </div>
//         <div>
//           <p>Backcountry Days: {backcountry}</p>
//         </div>
//         <div>
//           <p>Goal Progress: {calcGoalProgress(total,goal)}</p>
//         </div>
//       </section>
//   )
// }

// Class Component

// class SkiDayCounter extends Component {
//   getPercent = decimal => {
//     return decimal * 100 + "%"
//   }
//   calcGoalProgress = (total, goal) => {
//     return this.getPercent(total/goal)
//   }
//   render(){
//     const {total,powder,backcountry,goal} = this.props
//     return(
//       <section>
//         <div>
//           <p>Total Days: {total}</p>
//         </div>
//         <div>
//           <p>Powder Days: {powder}</p>
//         </div>
//         <div>
//           <p>Backcountry Days: {backcountry}</p>
//         </div>
//         <div>
//           <p>Goal Progress: {this.calcGoalProgress(total,goal)}</p>
//         </div>
//       </section>
//     )
//   }
// }

//Simple Component
// var style = {
//   backgroundColor: 'orange',
//   color: 'white',
//   fontFamily: 'Arial'
// }
// const title = React.createElement(
//   'h1',
//   {id: 'title', className: 'header', style: style},
//   'Hello World'
// )

// Compose Component

const Book = ({ title, author, pages }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{pages}</p>
    </section>
  );
};

const Library = () => {
  return (
    <div>
      Welcome to the Library
      <Book title="The Sun Also Rises" author="Ernest Hemingway" pages={260} />
    </div>
  );
};

render(<Library />, document.getElementById("root"));
