// import Tasks from './Tasks.js'
import Nav from './Nav'
import useFetch from './useFetch'
import { TaskList, TaskItem } from './Styled/styled'
import { useHistory } from 'react-router-dom'
import { motion } from 'framer-motion'

const Todos = () => {
  const history = useHistory()

  const del = function(obj){
    fetch('http://localhost:8080/todos/'+obj.id, {
    method: 'DELETE',
  }).then(res => {
    history.go(0)
  })
  }

  const update = async function(obj){
    obj.status = !obj.status
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/'+obj.id, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(obj)
    })
    if(res.ok){
      history.go(0)
    }
  }
  
  const {data, error, isPending } = useFetch('https://jsonplaceholder.typicode.com/todos')
  console.log(data)
  return ( 
    <TaskList>
    <motion.div initial={{y: '-100vh'}} animate={{y: 0}} transition={{delay: 0.2, type: 'spring', stiffness: 110}}>
      <Nav />
    </motion.div>
    {isPending && <p>Loading...</p>}
    {error && <p>{error}</p>}
    {data && data.map(task => (
      <motion.div initial={{x: '-100vw'}} animate={{x: 0}} transition={{delay: 0.5, type: 'spring', stiffness: 120}}>
        <TaskItem key={task.id}>
          <a href="/">
            <span>{task.task}</span>
            { task.status && <span onClick={(e) => update(task)}><i className="fas fa-check" style={{color: 'green'}}></i></span> }
            { !task.status && <span onClick={(e) => update(task)}><i className="fas fa-question" style={{color: 'blue'}}></i></span> }
            { <span onClick={() => del(task)} style={{color: 'red'}}><i className="fas fa-times"></i></span> }
          </a>
        </TaskItem>
      </motion.div>
    ))}
    </TaskList>
  );
}
 
export default Todos;
