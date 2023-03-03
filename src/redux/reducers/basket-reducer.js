
const initialState = {
    basketedPraduct:[]
}

const basketedPraduct = (state = initialState, action) => {
     console.log(action)
     switch(action.type){
        case "BASKET_PRADUCT":
            return{
                basketedPraduct:[ ...state.basketedPraduct , action.categorydataItem]
            }
        case "REMOVE_BASKET":
            let removBasketIndex = state.basketedPraduct.findIndex(p => p?.id === action.id) 
            state.basketedPraduct.splice(removBasketIndex,1)   
            return{
                basketedPraduct:[...state.basketedPraduct]
            }
         default:
           return state    
     }
}

export default basketedPraduct;