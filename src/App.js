import React from "react";

const Title = function () {
    const arr = ['hello', 'world']
    return (
        <div>
            {arr.map((n, index) => {
                return <h2 key={index}>{n}</h2>
            })}
        </div>
    )
}

const App = function () {
    return (
        <div>
            <Title />
        </div>
    )
}
export default App