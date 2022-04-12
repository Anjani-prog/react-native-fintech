import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    email: null,
    first_name: null,
    last_name: null,
    phone: null,
    agent_id: null,
    pin: null,
    pinentered: false,
    token: null,
    place: null,
    pincode: null,
    address: null,
    location: null,
    email_verified_at: null,
    auth: null
}
const authSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        setSignIn: (state, action) => {
            state.email = action.payload.email;
            state.first_name = action.payload.first_name;
            state.last_name = action.payload.last_name;
            state.token = action.payload.token;
            state.pin = action.payload.pin;
            state.location = action.payload.location;
            state.pinentered = action.payload.pinentered;
            state.agent_id = action.payload.agent_id;
            state.phone = action.payload.phone;
            state.place = action.payload.place;
            state.pincode = action.payload.pincode;
            state.address = action.payload.address;
            state.auth = action.payload.auth;
            state.email_verified_at = action.payload.email_verified_at;

        },
        setSignOut: (state) => {
            state.email = null;
            state.first_name = null;
            state.last_name = null;
            state.token = null;
            state.pin = null;
            state.location = null;
            state.pinentered = null;
            state.agent_id = null;
            state.phone = null;
            state.place = null;
            state.pincode = null;
            state.address = null;
            state.auth = null;
            state.email_verified_at = null;

        }
    }
});

export const { setSignIn, setSignOut } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.userAuth.isLoggedIn;

export default authSlice.reducer;
