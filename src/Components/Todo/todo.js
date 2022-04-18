import React from "react";
import "./todo.css";

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        };
    }
    toggleChange(todos, idx) {
        this.setState({
            isChecked: !this.state.isChecked,
        });
        todos[idx].isCompleted = !this.state.isChecked;
        this.setState({ isChecked: todos[idx].isCompleted });
        localStorage.setItem("todos", JSON.stringify(todos));
    }
    render() {
        return (
            <div className="todo-item">
                <div className="todo-name">
                    <input type="checkbox" 
                        defaultChecked={this.state.isChecked} 
                        onChange={ this.toggleChange.bind(this, this.props.todos, this.props.index) } />
                    <label style={{textDecoration: this.state.isChecked ? "line-through" : "none"}} >{ this.props.newTodo }</label>
                </div>
                <div className="editor">
                    <i className="fa-solid fa-trash-can" onClick={ this.props.removeTodo }></i>
                    <i className="fa-solid fa-pen-to-square" onClick={ this.props.editTodo }></i>
                </div>
            </div>
        );
    }
}

export default TodoItem;