import React from 'react';
import "./App.css";
import TodoApp from "./Components/todoApp/todoApp.js";

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <TodoApp />
            </div>
        );
    }
}

export default App;