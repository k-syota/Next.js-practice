import React, { useReducer, useState } from "react"

type CounterProps = {
    initialValue: number
}

type Action = "DECREMENT" | "INCREMENT" | "DOUBLE" | "RESET"

const reducer = (currentCount: number, action: Action) => {
    switch (action) {
        case 'INCREMENT':
            return currentCount + 1
        case 'DECREMENT':
            return currentCount - 1
        case 'DOUBLE':
            return currentCount * 2
        case 'RESET':
            return 0
        default:
            return currentCount
    }
}

const Counter = (props: CounterProps) => {
    const { initialValue } = props
    // const [count, setCount] = useState(initialValue);
    const [count, dispatch] = useReducer(reducer,initialValue)

    return (
        <div>
            <p>Count: {count}</p>
            {/* <button onClick={() => setCount(count - 1)}>ー</button>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>＋</button> */}
            <button onClick={()=> dispatch("DECREMENT")}>-</button>
            <button onClick={()=> dispatch("INCREMENT")}>+</button>
            <button onClick={()=> dispatch("DOUBLE")}>*</button>
            <button onClick={()=> dispatch("RESET")}>reset</button>
        </div>
    )
}

export default Counter
