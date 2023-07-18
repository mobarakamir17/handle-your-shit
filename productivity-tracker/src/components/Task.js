import React, { useState } from "react";
function Task({tasks : {task, id, time}}){
    return (<li className="Task"><strong>task: {task}, time left: {time}</strong></li>
        )
}
export default Task;