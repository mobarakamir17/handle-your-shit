import React, { useState } from "react";
import Task from "./Task"

function CompletetedTasks({tasks}){

    const userTasks =tasks.map((task)=>{ return (

        <Task task={task.task} key= {'task - ${task.id}'} time = {tasks.time}/>
    )
    }
)
console.log(userTasks)
    return (<ol className="completedTasks">
    {/* //     tasks.map((task)=>{ return (

    //         <Task task={task.task} key= {'task - ${task.id}'} time = {tasks.time}/>
    //     )
    //     }
    // )} */}
        {userTasks}
    </ol>);

}

export default CompletetedTasks;