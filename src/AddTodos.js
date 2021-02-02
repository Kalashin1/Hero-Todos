import Nav from './Nav'
import { useHistory } from 'react-router-dom'


const AddTodo = () => {
  const history = useHistory()

  let task = ''
  let handleChange = (e) => {
    task = e.target.value
  }

  let handleSubmit = (e, item) => {
    e.preventDefault()
    let id = Math.floor(Math.random() * 10000)
    let status = false

    let newTodo = { task :item, id, status }
    fetch('http://localhost:8080/todos', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newTodo)
    }).then(res => {
      if(res.ok){
        history.push('/')
      }
    } )
  }


return (
  <div style={{padding : '1rem .5rem'}}>
    <Nav></Nav> 
    <form onSubmit={(e) => handleSubmit(e, task)}>
      <h3>add todo</h3>
      <div>
      <input type="text" onChange={handleChange} />
      </div>
      <div>
        <input type="submit" value="add" />
      </div>
    </form>
  </div>
  );
}
export default AddTodo;