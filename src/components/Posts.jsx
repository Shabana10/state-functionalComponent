import React, { useState } from 'react';

let Posts = () => {
    let [isNum, setNum] = useState(0);
    let [isString, setString] = useState("GOOD MORNING");
    let [isArray, setArray] = useState([1,2,3,4,5,6,7,8,9,10]);

    return (
        <div className="posts">
            {/* NUMBER  */}
            <h1>{isNum}</h1>
            <br />
            <button onClick={() => setNum(++isNum)}>
                increase
            </button>
            <button onClick={() => setNum(--isNum)}>
                decrease
            </button>

            {/* STRING  */}
            <h1>{isString}</h1>
            <br />
            <button onClick={() => setString("GOOD NIGHT")}>
                Change Greeting
            </button>

            {/* ARRAY  */}
            {
            isArray.map((i) => {
               return <h3>{i} </h3>
            })
            }
                        <br />
            <button onClick={() => setArray([11,12,16,14,15,16,17,18,19,20])}>
                Change Array
            </button>


        </div>
    )
}

export default Posts;