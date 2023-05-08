import { TYPE_USER_SUCEES } from "../constants/actionType";
const initialState = [];
const users = (state = initialState, action) => {
    switch (action.type) {
        case TYPE_USER_SUCEES:
            console.log("6. Reducer nhận được action: ", action);
            return [...action.payload];

        default:
            return state;
    }
}
export default users;