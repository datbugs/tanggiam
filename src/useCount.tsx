import React, { useState, useCallback } from "react";

const useCount = (initState: number) => {
    const [count, setCount] = useState<number>(initState);

    const increaseCount = useCallback(() => {
        setCount(count + 1);
    }, [count])

    const decreaseCount = useCallback(() => {
        setCount(count - 1);
    }, [count]);

    return { count, increaseCount, decreaseCount }
}

export default useCount;