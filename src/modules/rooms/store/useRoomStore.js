import { create } from "zustand";
import { api } from "../../../shared/api/apiClient";


const useRoomStore = create((set) => ({
    rooms: [],
    filters: {},
    setFilter: (filters) => set({ filters }),
    clearFilter: () => set({ filters: {} }),
    roomSelected: null,
    loading: false,
    error: null,



    fetchRooms: async () => {

        const { filters } = useRoomStore.getState();

        const baseUrl = '/api/v1/rooms?page=0&size=20&orderAsc=false'

        const params = new URLSearchParams({
            ...filters
        });

        const data = await api.get(`${baseUrl}&${params.toString()}`);
        if (data) set({ rooms: data })
    },

    fetchRoomById: async (id) => {
        const data = await api.get(`/api/v1/rooms/${id}`);
        if (data) set({ roomSelected: data })
    }

}))

export default useRoomStore;