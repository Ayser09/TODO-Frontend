import React from "react";
import Tasks from "./Tasks";
import  Paper from "@mui/material/Paper";
import TextField  from "@mui/material/TextField";
import Button from "@mui/material/Button"
import  Checkbox  from "@mui/material/Checkbox"
import "./App.css";

class App extends Tasks {
    
    state = { tasks: [], currentTask: "" };
    render() {
        const headerStyle = {
            background: `linear-gradient(90deg,#7f00ff, #00ff8f )`, // Gradient colors
          };
        const { tasks } = this.state;
        return (
            <div className="App flex" style={headerStyle} >
                <Paper elevation={3} className="container">
                    <div className="heading">TO-DO</div>
                    <form
                        onSubmit={this.handleSubmit}
                        className="flex"
                        style={{ margin: "15px 0" }}
                    >
                        <TextField
                            variant="outlined"
                            size="small"
                            style={{ width: "80%" }}
                            value={this.state.currentTask}
                            required={true}
                            onChange={this.handleChange}
                            placeholder="Add New TO-DO"
                        />
                        <Button
                            style={{ height: "40px" }}
                            color="primary"
                            variant="outlined"
                            type="submit"
                        >
                            Add task
                        </Button>
                    </form>
                    <div>
                        {tasks.map((task) => (
                            <Paper
                                key={task._id}
                                className="flex task_container"
                            >
                                <Checkbox
                                    checked={task.completed}
                                    onClick={() => this.handleUpdate(task._id)}
                                    color="primary"
                                />
                                <div
                                    className={
                                        task.completed
                                            ? "task line_through"
                                            : "task"
                                    }
                                >
                                    {task.task}
                                </div>
                                <Button
                                    onClick={() => this.handleDelete(task._id)}
                                    color="secondary"
                                >
                                    delete
                                </Button>
                            </Paper>
                        ))}
                    </div>
                </Paper>
            </div>
        );
    }
}

export default App;