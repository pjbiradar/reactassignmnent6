import { createStore } from "redux";
import rootreducer from "./Reducer/Rootreducer";



const store = createStore(rootreducer)

export default store;