import React from 'react'
import RenderBaidu from '../compoents/RenderBaidu'

async function page() {
    const data = fetch('https://api.uomg.com/api/rand.qinghua', { next: { revalidate: 60 } }).then(res => res.json())
    const data1 = fetch('https://api.uomg.com/api/rand.qinghua', { next: { revalidate: 60 } }).then(res => res.json())
    const data2 = fetch('https://api.uomg.com/api/rand.qinghua', { next: { revalidate: 60 } }).then(res => res.json())
    const res = Promise.all([data, data1, data2]);
    const [d, d1, d2] = await res;
    return (
        <RenderBaidu txt={d.content + d1.content + d2.content} />
    )
}

export default page