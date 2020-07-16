import React from 'react';
import { connect } from "react-redux";
import clickReducer from './redux/reducer';
class TotalClicked extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="totalClicked">
                <p>total click:{this.props.state.totalClick} 
                total right click:{this.props.state.totalRightClick}</p>
            </div>
        )
    }
}
const mapStateToProps = state=>{
    return {state};
}
export default connect(mapStateToProps)(TotalClicked);