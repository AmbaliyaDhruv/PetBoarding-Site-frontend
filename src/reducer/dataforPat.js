let initalState=[];


const dataForPat=(state=initalState,action)=>{
    
    switch(action.type){
        case 'PAT_ADD_DATA': {state,state=action.payload}
        default: return state;
    }
}


export default dataForPat;