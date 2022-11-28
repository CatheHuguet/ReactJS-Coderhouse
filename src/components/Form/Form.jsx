import Title from "../Title/Title"
import './Form.css'

const Form = () => {
    return (
      <form style={{background: 'red'}}>
        <Title title={'titulo form'} subtitle={'sub de form'}/>
        <input type='text' placeholder='nombre:'></input>
      </form>
    )
  }
export default Form
