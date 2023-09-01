import React from 'react'

function page({ params }: { params: { id: string } }) {
    return (
        <div>discovery Id is : {params.id}</div>
    )
}

export default page