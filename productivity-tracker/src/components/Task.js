import React, { useState } from "react";
function Task({tasks : {tasks, id, time}}){
    return (<li className="Task"><strong>task: {tasks}, time left: {time}</strong></li>
        )
}
export default Task;