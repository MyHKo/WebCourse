import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./reduxSlice.js";

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});

export default store;
