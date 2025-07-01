const INCREMENT2 = "INCREMENT";
const DECREMENT2 = "DECREMENT";

export const incrementCount2 = () => {
    return {
        type: INCREMENT2
    }
}

export const decrementCount2 = () => {
    return {
        type: DECREMENT2
    }
}