import './app.css';
import Habits from "./components/habits";
import React, {Component} from 'react';
import Navbar from "./components/navbar";
import HabitAndForm from "./components/habitAndForm";
class App extends Component {
  state = {
    habits: [
      {id: 1, name: 'Reading', count: 0},
      {id: 2, name: 'Running', count: 0},
      {id: 3, name: 'Coding', count: 0},
    ],
  };

  handleIncrement = (habit) => {
    const habits= this.state.habits.map(item=>{
      if(item.id===habit.id){
          return {...habit, count: habit.count + 1};
      }else{
        return item;
      }
    });

    this.setState({
      habits: habits
    })
  };
  handleDecrement = (habit) => {

    const habits= this.state.habits.map(item=>{
      if(item.id===habit.id){
       const count =  habit.count-1;
        return {...habit, count: count < 0 ? 0:count};
      }else{
        return item;
      }
    });


    this.setState({habits: habits});
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter(function (item) {
      return item.id != habit.id;
    })
    this.setState({
      habits: habits
    })
  };

  handleAdd = (name) =>{
    const habits = [...this.state.habits,{id:Date.now(),name:name,count:0}];
     this.setState({
       habits
     });
   }
  handleResetAll=()=>{
    const habits= this.state.habits.map(habit => {
      if(habit.count !==0){
        return {...habit,count:0};
      }else{
        return habit;
      }
    })
    this.setState({
      habits
    })
  }
  render() {
    console.log("App");
    return (
        <>
        <Navbar totalCount={this.state.habits.filter(item=>item.count > 0).length}/>
        <Habits
            habits={this.state.habits}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onAdd={this.handleAdd}
            onResetAll= {this.handleResetAll}
        />
        </>
    );
  }
}

export default App;

