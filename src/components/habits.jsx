import React, {Component} from 'react';
import Habit from "./habit";
import HabitAndForm from "./habitAndForm";

class Habits extends Component {
    handleIncrement =habit =>{
        this.props.onIncrement(habit);
    };
    handleDecrement =habit =>{
        this.props.onDecrement(habit);
    };
    handleDelete    =habit =>{
        this.props.onDelete(habit);
    };
    handleAdd=(habitName)=>{
       this.props.onAdd(habitName);
    }
    handleResetAll=()=>{
        this.props.onResetAll();
    }
    render() {
        console.log("habits");
        return (
            <>
            <HabitAndForm onAdd={this.handleAdd}/>
            <ul>
                {this.props.habits.map(habit =>
                    <Habit key={habit.id}
                           habit={habit}
                           onIncrement={this.handleIncrement}
                           onDecrement={this.handleDecrement}
                           onDelete={this.handleDelete}
                           onAdd={this.handleAdd}
                           />
                )}
            </ul>
                <button className="habits-reset" name="habitReset" onClick={this.handleResetAll}>Reset All</button>
            </>
        );
    }
}

export default Habits;
