import React from "react";
import { IoCloseCircleSharp, } from 'react-icons/io5';
class Task extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: false
        }
    }
    render() {
        return (
            <div className="task">
                <div className="task-id">
                    <input type="checkbox" className="task-check" onChange={(el) => {this.setState({checked: el.target.checked}); console.log(this.state.checked)}}/>
                        <h1 className={this.state.checked ? 'ready' : ''}>
                            Номер задачи: {this.props.id} 
                        </h1>
                    <IoCloseCircleSharp className={this.state.checked ? 'delete-icon-ready' : 'delete-icon'} 
                    onClick={() => {
                    this.props.delete(this.props.id)
                    }}/>
                </div>
                <p className={this.state.checked ? 'ready' : ''}>Задача: <b>{this.props.task}</b></p>
            </div>
        )
    }
}
export default Task