"use client"

import React, { useState } from 'react'

function RenderBaidu(props: { txt: string }) {
    const [count, setCount] = useState(0)
    return (
        <div onClick={() => {
            setCount(count + 1)
        }}>
            来着：{props.txt} {count}
        </div>
    )
}

export default RenderBaidu