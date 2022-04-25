let initalState = {
    name:"",
    type:"",
    age:"",
    weight:"",
    userId:"",
}

const createPatData=(state=initalState,action)=>{

 switch(action.type){
  case 'PAT_DATA': return {...state,name:action.payload.name,type:action.payload.type,age:action.payload.age,weight:action.payload.weight,userId:action.payload.userId}
    default: return state;
  }
}

export default createPatData;