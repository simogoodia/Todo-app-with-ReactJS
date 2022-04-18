import React from 'react';
import "./todoApp.css";
import Input from "../Input/input.js";
import TodoItem from "../Todo/todo.js";

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodo: "",
            todos: [],
            idxEdit: "",
            isEdit: false
        }
    }
    componentDidMount() {
        const todoList = JSON.parse(localStorage.getItem("todos"));
        if(todoList) {
            this.setState({ todos: JSON.parse(localStorage.getItem("todos")) });
        } else {
            return 0;
        }
    }
    handlerChange = ({ target }) => {
        this.setState({
            newTodo: target.value
        });
    }
    handlerSubmit = (e) => {
        e.preventDefault();
        if(this.state.newTodo !== "") {
            if(!this.state.isEdit) {
                let todosLength = this.state.todos.length;
                this.setState({
                    todos: [...this.state.todos, {id: todosLength++, name: this.state.newTodo, isCompleted: false}]
                });
            } else {
                this.state.todos[this.state.idxEdit].name = this.state.newTodo;
                this.setState({ 
                    isEdit: false,
                });
            }
            this.setState({ newTodo: "" });
            localStorage.setItem("todos", JSON.stringify(this.state.todos));
        }
    }
    rTodo(idx) {
        this.state.todos.splice(idx, 1);
        this.setState({ todos: this.state.todos });
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
    edtTodo = (name, idx) => {
        this.setState({ 
            newTodo: name,
            isEdit: true,
            idxEdit: idx,
        })
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
    render() {
        return (
            <div className='todo-app'>
                <Input newTodo={ this.state.newTodo } 
                    change={ this.handlerChange } 
                    submit={ this.handlerSubmit } />
                { this.state.todos.length <= 0 ? <p className="empty">Write something</p> : this.state.todos.map((todo, i) => 
                    <TodoItem key={ todo.id }
                        newTodo={ todo.name } 
                        removeTodo={this.rTodo.bind(this, todo.id)} 
                        editTodo={ this.edtTodo.bind(this, todo.name, todo.id) }
                        todos={ this.state.todos }
                        index={ i } />
                ) }
            </div>
        );
    }
}

export default TodoApp;