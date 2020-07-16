import React from 'react';
import {clickFunction, rightClickFunction} from './redux/action';
import { connect } from "react-redux";
class ClickComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="clickMe" onClick={this.props.click} 
                                    onContextMenu={this.props.rightClick}>
                <p>Click Me!</p>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        click: ()=>{
            dispatch(clickFunction())
        },
        rightClick:()=>{
            dispatch(rightClickFunction())
        }
    }
}
export default connect(
    null,
    mapDispatchToProps
)(ClickComponent);