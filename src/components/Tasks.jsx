import { useState, useEffect } from 'react';
import Task from "./Task";

export default function Tasks() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const response = await fetch("http://localhost:3001/tasks")
        const data = await response.json()
        setItems(data)
      } catch (error) {
        console.log(error)
      }
    }

    getTasks()
    return () => {
      // cleanup
    }
  }, [])

  return (
    <div>
      {items.map(item => {
        return <Task key={item.id} title={item.title} done={item.done}/>
      })}
    </div>
  )
}
