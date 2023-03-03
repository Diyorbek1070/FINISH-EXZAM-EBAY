const initialState = {
    name:""
}

const nameReducer = (state = initialState,action) =>{
    // console.log(action)
    switch(action.type){
        case "CREATE_USER":
            return {name: action.name}
        default:
            return state
    }

}

export default nameReducer;