import React from "react";
import Task from "./task";

class TaskList extends React.Component {
    render() {
        if (this.props.tasks.length > 0) {
            return (
            <div className="task-list-block">
                {this.props.tasks.map((el) => (
                    <Task id={el.id} task={el.task} key={el.id} delete={this.props.delete}/>
                ))}
            </div>
            )
        } else {
            return (
            <div className="task-list-block">
                <h1 className="all-task-ready">Все задачи выполнены!</h1>
            </div>
            )
        }
    }
}

export default TaskList