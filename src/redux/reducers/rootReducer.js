import { combineReducers } from "redux";
import nameReducer from "../reducers/create-reducer";
import likedPraduct from "./like-reducer";
import basketedPraduct from "./basket-reducer"
const rootReducer = combineReducers({
    nameReducer,
    likedPraduct,
    basketedPraduct
})

export default rootReducer;