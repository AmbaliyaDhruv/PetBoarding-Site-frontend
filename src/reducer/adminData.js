
let initalState={
    AdminSatatus:false,
    name:"",
}

const adminData=(state=initalState,action)=>{
  
    switch(action.type){
        case 'ADMIN_LOGIN':{
            if(action.payload.email==="A@D.com"){
                return {...state,AdminSatatus:true,name:action.payload.firstname}
            }
            else if(action.payload.email==="nan"){
                return {...state,AdminSatatus:false,name:""}
            
            }
            else{
                return {...state,AdminSatatus:false,name:action.payload.firstname}
            }
        } 
        default: return state;
}
}

export default adminData;