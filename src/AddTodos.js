import Nav from './Nav'
import { Form } from './Styled/styled.js'
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
    fetch('https://universal-substantial-tamarind.glitch.me/todos', {
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
      <Form>
        <h3>add todo</h3>
        <div>
        <input type="text" onChange={handleChange} />
        </div>
        <div>
          <input type="submit" value="add" />
        </div>
      </Form>
    </form>
  </div>
  );
}
export default AddTodo;