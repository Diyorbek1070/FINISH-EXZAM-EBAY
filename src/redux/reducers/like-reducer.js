const initialState = {
    likedPraduct:[]
}

const likedPraduct = (state = initialState , action) => {
   switch(action.type){
    case "LIKE_FURNUTURE":
        return{
            likedPraduct:[ ...state.likedPraduct , action.categorydataItem]
        }
    case "REMOVE_LIKED":
        let removedPraductIndex = state.likedPraduct.findIndex(p => p?.id === action?.id)
        state.likedPraduct.splice(removedPraductIndex,1);
        return{
             likedPraduct:[ ...state.likedPraduct]
        }
        default:
            return state
   }
}

export default likedPraduct;