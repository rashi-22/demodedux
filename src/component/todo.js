import react, { useEffect } from 'react'
import {connect} from 'react-redux'
import { addTodo } from '../actions/todoAction'

const Todo=(props)=>{
    const { todoData, addTodo } = props;
useEffect(() => {
    addTodo('Chetna');
}, []);
useEffect(() => {
    console.log(todoData.name);
}, [todoData])
const saveName = () =>{
    addTodo('Kanha');
}
return (
    <div>{todoData.name}
    <button onClick={saveName}>Change</button>
    </div>
);
}
const mapStateToProps=(state)=>{
    return {
        todoData: state.todo
    };

}

const mapDispatchToProps=(dispatch)=>{
    return {
        addTodo: (name) => dispatch(addTodo(name))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Todo)