import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reduser from "./reduser";

let store = createStore(reduser,applyMiddleware(thunk))

export default store