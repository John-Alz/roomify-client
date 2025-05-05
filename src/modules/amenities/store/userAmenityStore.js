import { create } from "zustand";
import { api } from "../../../shared/api/apiClient";


const useAmenityStore = create((set) => ({

    amenities: [],

    fetchAmenities: async () => {
        const data = await api.get('/api/v1/rooms/amenities?page=0&size=10')
        if (data) set({ amenities: data })
    }

}));

export default useAmenityStore;