import { create } from "zustand";
import { api } from "../../../shared/api/apiClient";


const useRoomTypeStore = create((set) => ({

    roomsTypes: [],

    fetchRoomsTypes: async () => {
        const data = await api.get('/api/v1/rooms/types?page=0&size=10');
        if (data) set({ roomsTypes: data });
    }

}));

export default useRoomTypeStore;