import React from 'react'

function page({ params }: { params: { slug: string[] } }) {
    return (
        <div>{params.slug.map((v) => v)}</div>
    )
}

export default page