
let initalState = {
    name:"",
    city:"",
    address:"",
    capacity:"",
    costPerDay:"",
}

const createCenter=(state=initalState,action)=>{

 switch(action.type){
  case 'ADD_DATA': return {...state,name:action.payload.name,city:action.payload.city,address:action.payload.address,capacity:action.payload.capacity,costPerDay:action.payload.costPerDay}
    default: return state;
  }
}

export default createCenter;