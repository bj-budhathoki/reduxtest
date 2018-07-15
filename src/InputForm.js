import React from 'react'
import { connect } from 'react-redux'
const InputForm = (props) => {
  return(
      <div>
          <input value={props.inputValue} onChange={props.inputChanged}/>
          <p>{props.inputValue}</p>
      </div>
  )
}
const mapStateToProps=(state)=>{
return{
    inputValue:state.inputValue
 }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        inputChanged:(e)=>{
            const action ={type:"INPUT_CHANGE",text: e.target.value};
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(InputForm);