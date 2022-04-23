

let initalState=[];


const dataForTable=(state=initalState,action)=>{
    
    switch(action.type){
        case 'GET_DATA': {state,state=action.payload}
        default: return state;
    }
}


export default dataForTable;