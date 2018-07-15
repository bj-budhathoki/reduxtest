import React from 'react';
import { connect } from 'react-redux'
 const Lister = (props) => {
     console.log('reducer',props)
  return(
      <div>
          <h1>Lister</h1>
          <form onSubmit={props.submit}>
           <input value={props.inputText} onChange={props.inputChange}/>
          </form>
          <ul>
              {props.items.map((item,index)=><li key={index}>{item}</li>)}
          </ul>
      </div>
  )
}
function mapStateToProps(state){
    return{
        inputText:state.inputTex,
        items:state.items
    }
}
function mapDispatchToProps(dispatch){
    return{
        inputChange:(evt)=>{
            console.log("change");
            const action={type:"CHANGE_TEXT",text:evt.target.value};
            dispatch(action);
        },
        submit:(evt)=>{
            console.log('submitting');
            evt.preventDefault();
            const action={type:"ADD_ITEM"};
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Lister);