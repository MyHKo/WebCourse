import {createStore} from "@reduxjs/toolkit";
import {reducer} from "./reducers.js";

const store = createStore(reducer);
