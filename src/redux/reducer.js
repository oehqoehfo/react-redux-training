import {clickAction, rightClickAction} from './action';
const initialState ={
    totalClick:0,
    totalRightClick:0
};
export default function(state=initialState,action){
    switch(action.type){
        case clickAction:
            return{
                ...state,
                totalClick:++state.totalClick
            }
        case rightClickAction:
            return{
                ...state,
                totalRightClick:++state.totalRightClick
            }
        default:
            return{...state}
    }
};