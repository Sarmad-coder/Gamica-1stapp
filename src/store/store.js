

import axios from "axios";
import { useEffect } from "react";
import { createStore, combineReducers } from "redux";




function jobSection(puranaData = [], nyaData) {


    if (nyaData.type == "job-created") {
        return nyaData.payload;
    }

    return [...puranaData]


}

function userSection (puranaData = {
    users: [],
    cu: {}
}, nyData) {
   
    if (nyData.type == "USER-CREATED") {
        puranaData.users.push(nyData.payload);
       
    } else if (nyData.type == "USER_LOGIN_HOGYA") {
        puranaData.cu = nyData.payload;
    } else if (nyData.type == "LOGOUT_HOGY_AW") {
        puranaData.cu = {};
    } else if (nyData.type == "DELETE_HOGYA") {
        puranaData.users = puranaData.users.filter(user => user.id != nyData.payload);
    } else if (nyData.type == "EDIT_HOGYA") {
        puranaData.users[nyData.payload.index] = nyData.payload.data;
    }





    return {
        ...puranaData,
        users: [...puranaData.users]
    };

}

function videoSection() {
    return "Ayan"
}

let allSections = combineReducers({ jobSection, userSection });

let meraStore = createStore(allSections, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default meraStore;