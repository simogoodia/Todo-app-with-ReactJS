import React from "react";
import "./input.css";

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.reference = React.createRef();
    }
    componentDidMount() {
        this.reference.current.focus();
    }
    render() {
        return (
            <form onSubmit={ this.props.submit }>
                <input type="text" value={ this.props.newTodo } onChange={ this.props.change } ref={ this.reference } />
                <i className="fa-solid fa-bars-staggered"></i>
            </form>
        );
    }
}

export default Input;