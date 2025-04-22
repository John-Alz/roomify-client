import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    rooms: [],
}

export const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        setRooms: (state, action) => {
            state.rooms = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setRooms } = roomSlice.actions

export default roomSlice.reducer