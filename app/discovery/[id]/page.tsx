import React from 'react'

function page({ params, searchParams }: { params: { id: string }, searchParams: { id: string } }) {

    return (
        <>
            <div>discovery Id is : {params.id}</div>
            <div>discovery Query is : {searchParams.id}</div>
        </>
    )
}

export default page