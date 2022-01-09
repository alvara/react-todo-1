import Button from "./Button";

const deleteTask = (e) => { 
  console.log("Delete task");
}

const toggleTask = (e) => {
  console.log("Toggle task");
}

export default function Task({title, description,done}) {
  return (
    <div className="task" onClick={toggleTask}>
      <div className="task-content">
        <h2>{title}</h2>
        <p>{description}</p>
        {done}
      </div>
      <Button text="Delete" action={deleteTask} />
    </div>
  )
}
