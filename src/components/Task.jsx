import Button from "./Button";

const deleteTask = (e) => { 
  console.log("Delete task");
}

const toggleTask = (e) => {
  console.log("Toggle task");
}

export default function Task() {
  return (
    <div className="task" onClick={toggleTask}>
      <div className="task-content">
        <h2>Doctors Appointment</h2>
        <p>Feb 5th at 2:30pm</p>
      </div>
      <Button text="Delete" action={deleteTask} />
    </div>
  )
}
