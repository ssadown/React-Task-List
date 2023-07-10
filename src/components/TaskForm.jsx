import React from "react";

class TaskForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            task: ''
        }
    }
    render () {
        return (
            <div className="task-form-block">
                <form ref={(el) => this.myForm = el}>
                    <h3>Введите новую задачу:</h3>
                    <input type="text" placeholder="Задача" name="Task" className="taskForm" onChange={(element) => this.setState({task: element.target.value})}/>
                    <button type="button" onClick={() =>{
                        this.myForm.reset()
                        console.log(this.state.task)
                        this.task = {task: this.state.task}
                        this.props.addTask(this.task)
                    }}>Добавить!</button>
                </form>
            </div>
        )
    }
}

export default TaskForm