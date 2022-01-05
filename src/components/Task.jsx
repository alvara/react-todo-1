import Button from "./Button";

export default function Task() {
  return (
    <div className="task">
      <div className="task-content">
        <h2>Doctors Appointment</h2>
        <p>Feb 5th at 2:30pm</p>
      </div>
      <Button text="Delete" />
    </div>
  )
}
