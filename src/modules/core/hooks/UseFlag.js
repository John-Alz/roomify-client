import { useState } from "react";

export const useFlag = (initialState = false) => {

    const [flag, setFlag] = useState(initialState);

    const handleFlag = () => {
        setFlag(prev => !prev)
    }

    return {
        flag,
        handleFlag
    }
}
