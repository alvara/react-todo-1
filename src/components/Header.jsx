import Button from "./Button";

const addTask = () => {
  console.log("Add task");
}

export default function Header() {
  return (
    <header>
      <h1>Task Tracker</h1>
      <Button text="Add" color="green" action={addTask} />
    </header>
  )
}
