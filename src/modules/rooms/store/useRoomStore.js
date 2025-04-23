import { create } from "zustand";
import { api } from "../../../shared/api/apiClient";


const useRoomStore = create((set) => ({
    rooms: [],
    roomSelected: null,
    loading: false,
    error: null,

    fetchRooms: async () => {
        const data = await api.get('/api/v1/rooms');
        if (data) set({ roomSelected: data })
    },

    fetchRoomById: async (id) => {
        const data = await api.get(`/api/v1/rooms/${id}`);
        if (data) set({ roomSelected: data })
    }

}))

export default useRoomStore;