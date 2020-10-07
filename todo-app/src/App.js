import React,{Component} from "react"
import ToDoItems from './Components/ToDoItems'
import './App.css'
import ToDoData from './Components/ToDoData'

class App extends Component{
  constructor(){
    super()
    this.state = {
      content: ToDoData
    }
    this.handleChange = this.handleChange.bind(this);
    
  }
  handleChange(id){
    this.setState(
      (prevState) => {
        const updated = prevState.content.map( todo => {
          if(todo.id == id){
            todo.completed = !todo.completed
          }
          return todo
        })
        return {
          content : updated
        }
      }
      )
  }
  render(){

    let allCompleted = true

    const content = this.state.content.map(
    item => {
      if (!item.completed) {
        allCompleted = false
      }
      return (<ToDoItems key= {item.id}  item={item} handleChange={this.handleChange}/>)
    }
    )
    return(
      <div id="main">
        <div className="content">
          <h1> ToDo List </h1>
          {content}
        </div>

        {allCompleted && 
          <p style={
            {width:'100%', 
            textAlign:'center',
            fontSize:'40px',
            color:'red'}
          }>
        Congratulations ,you have finished all </p>}
      </div>
    );
  }
}

export default App