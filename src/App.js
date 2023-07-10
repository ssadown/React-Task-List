import React from "react";
import TaskList from "./components/TaskList";
import './styles/App.css'
import TaskForm from "./components/TaskForm";
import Header from "./components/Header";
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: [
                {
                    id: 1,
                    task: 'Создать проект и провести его настройку'
                },
                {
                    id: 2,
                    task: 'Создать компонент и провести его настройку'
                }
            ]
        }
        this.addTask = this.addTask.bind(this)
        this.delete = this.delete.bind(this)
    }
    render() {
        return (
            <div className="task-list">
                <Header/>
                <TaskList tasks={this.state.tasks} addTask={this.addTask} delete={this.delete} />
                <TaskForm addTask={this.addTask}/>
            </div>
        )
    }
    addTask (task) {
        const id = this.state.tasks.length + 1
        this.setState({tasks: [...this.state.tasks, {id,...task}]})
    }
    delete (id) {
        this.setState({tasks: this.state.tasks.filter((el) => el.id !== id)})
    }
}

export default App