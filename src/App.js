import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
    // <div className="App">
    //   <header className="App-header">
    //     <Example count={3} theme={'red'}/>
    //   </header>
    // </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
//   );
// }


const App = () => {

  const [TDList, setTDList] = useState([
    {content: 'Buy milk', iscomplete: false},
    {content: 'get newspaper', iscomplete: true},
    {content: 'go for a walk', iscomplete: true},
  ]);

  const removeHandler = () => {

  }

  const createHandler = () => {

  }

  return (
    <div className="App">
      <div className="App-header">You have {TDList.length} To-Do items</div>
      <List TDList={TDList} removeHandler={removeHandler} />
      <CreateBox createHandler={createHandler} />
    </div>
  )
}

const List = prep => {

  const TDList = prep.TDList;

  let renderList = [];
  for (const item of TDList) {
    renderList.push(<div className="item">{item.content}</div>);
  }


  return (
    <div className="List">
      {renderList}
    </div>
  )
}

const CreateBox = prep => {
  return null;
}


// const Example = (prep) => {
//   const [count, setCount] = useState(4);
//   const [theme, setTheme] = useState({Theme: "blue"});

//   function incrementCount() {
//     setCount(oldCount => oldCount + 1);
//   }

//   function decrementCount() {
//     setCount(oldCount => oldCount - 1);
//     setTheme(pre => {
//       return {Theme: 'red'}
//     })
//   }

//   return (
//     <div>
//       <p>You Clicked me {count} times with {theme.Theme}</p>
//       <button onClick={incrementCount}>Inc</button>
//       <button onClick={decrementCount}>Dec</button>
//     </div>
//   )
// }
export default App;
