import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [TDList, setTDList] = useState([
    {content: 'Buy milk', iscomplete: false},
    {content: 'get newspaper', iscomplete: true},
    {content: 'go for a walk', iscomplete: true},
  ]);


  const removeHandler = (index) => {
    TDList.splice(index, 1);
    setTDList([...TDList]);
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
  for (const index in TDList) {
    renderList.push(<div key={index} className="item">{TDList[index].content}</div>);
    renderList.push(<button key={"button"+index} className="removeButton" onClick={() => prep.removeHandler(index)}>X</button>)
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

export default App;
