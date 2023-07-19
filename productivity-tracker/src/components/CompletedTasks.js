import React, { useState } from "react";
import Task from "./Task"

function CompletedTasks({usersList}){

    const userTasks =usersList.map((users)=>{ return (

        <Task users={users.users} key= {users.id} time = {users.time}/>
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

export default CompletedTasks;