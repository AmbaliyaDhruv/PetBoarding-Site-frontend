
let initalState={
    AdminSatatus:false,
    name:"",
    Id:"",
}

const adminData=(state=initalState,action)=>{
  
    switch(action.type){
        case 'ADMIN_LOGIN':{
            if(action.payload.email==="A@D.com"){
                localStorage.setItem('admin',JSON.stringify({
                    AdminSatatus:true,
                    name:action.payload.firstname,
                    Id:"",
                }));
                return {...state,AdminSatatus:true,name:action.payload.firstname}
            }
            else if(action.payload.email==="nan"){
                localStorage.setItem('admin',JSON.stringify({
                    AdminSatatus:false,
                    name:"",
                    Id:"",
                }));
                return {...state,AdminSatatus:false,name:""}
            
            }
            else{
                localStorage.setItem('admin',JSON.stringify({
                    AdminSatatus:false,
                    name:action.payload.firstname,
                    Id:action.payload._id,
                }));
                return {...state,AdminSatatus:false,name:action.payload.firstname,Id:action.payload._id}
            }
        } 
        default: return state;
}
}

export default adminData;