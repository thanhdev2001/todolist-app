import React, {Component} from 'react';
import './App.css';
import Todolist from './components/Todolist';
import checkBox from '../src/img/check-box.svg'
import checkBoxComplete from '../src/img/check-box-complete.svg'

class App extends Component {
  constructor(){
    super();
    this.state = { 
      newItem: '',
      todoList: [
      {title: 'Eat breakfast', isComplete: false},
      {title: 'Eat lunch', isComplete: false},
      {title: 'Eat dinner', isComplete: false}     
    ]
  }

    this.onKeyUp = this.onKeyUp.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onClickAll = this.onClickAll.bind(this)
  }

  onItemClicked(item) {
    return (event) => {
      const isComplete = item.isComplete
      const {todoList} = this.state
      const index = todoList.indexOf(item)
      
      this.setState({
        todoList: [
          ...todoList.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },         
          ...todoList.slice(index + 1)
        ]
      })
    }
    
  }

  onClickAll(event) { 
    const {todoList} = this.state
    let newArray = [...this.state.todoList]

    for(var i = 0; i < newArray.length; i++) {
        newArray[i] = {...newArray[i], isComplete: !newArray[i].isComplete}
    }
    
    this.setState({
      todoList: newArray    
    })
  }

  onKeyUp(event) {
    if(event.keyCode === 13) { //enter key
      let text = event.target.value
      if(!text) {
        return;
      }

      text = text.trim()
      if(!text) {
        return;
      }

      this.setState({
        newItem: '',
        todoList: [
          {title: text, isComplete: false},
          ...this.state.todoList
        ]
      })
      } 
  }

  onChange(event) {
    this.setState({
      newItem: event.target.value
    })
  }

  render() {
    const {todoList, newItem} = this.state
    
    let url = checkBox
    var count = 0;
    for(var i = 0; i < todoList.length; i++){
      if(todoList[i].isComplete){
        count++
        if(count == todoList.length){
          url = checkBoxComplete
        }       
      }
    }
       
    return (
      <div className="App">
        <div className="Header">
          <img src={url} width={32} height={32} onClick={this.onClickAll} />
          <input 
            type="text" 
            placeholder="Add anything" 
            value={newItem}
            onChange={this.onChange}
            onKeyUp={this.onKeyUp} />
        </div>
        {
          todoList.map((item, index) => 
          <Todolist 
            key={index} 
            item={item} 
            onClick={this.onItemClicked(item)} />
          )
        } 
      </div>
    );
  }
  
}


export default App;
