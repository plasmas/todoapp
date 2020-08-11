import React, { useState } from 'react';
import './App.css';

// const App = () => {

//   const [TDList, setTDList] = useState([
//     {content: 'Buy milk', iscomplete: false},
//     {content: 'get newspaper', iscomplete: true},
//     {content: 'go for a walk', iscomplete: true},
//   ]);

//   const removeHandler = (i) => {
//     setTDList(TDList.splice(i,1))
//   }

//   const createHandler = () => {

//   }

//   console.log(TDList);
//   return (
//     <div className="App">
//       <div className="App-header">You have {TDList.length} To-Do items</div>
//       <List TDList={TDList} removeHandler={removeHandler} />
//       <CreateBox createHandler={createHandler} />
//     </div>
//   )
// }

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      TDList: [
        {content: 'Buy milk', iscomplete: false},
        {content: 'get newspaper', iscomplete: true},
        {content: 'go for a walk', iscomplete: true},
      ],
      version: 1.3
    };
    this.removeHandler = this.removeHandler.bind(this);
    this.createHandler = this.createHandler.bind(this);
  }

  removeHandler(i) {
    let TDList = this.state.TDList;
    TDList.splice(i, 1);
    let newList = TDList;
    console.log(newList);
    this.setState({
      TDList: newList,
      version: 1.4
    })
    console.log(this.state)
  }

  createHandler() {

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">You have {this.state.TDList.length} To-Do items</div>
        <List TDList={this.state.TDList} removeHandler={this.removeHandler} />
        <CreateBox createHandler={this.createHandler} />
      </div>
    )
  }
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
