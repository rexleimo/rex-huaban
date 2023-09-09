import Blog from '@/models/blog'
import mongodb from '@/utils/db'
import React from 'react'


const getData = async () => {
    await mongodb()
    const blog = new Blog({
        title: 'Hello World',
        body: 'This is my first blo14g',
    })
    await blog.save();
}

async function Admin() {

    await getData()

    return (
        <div>Admin</div>
    )
}

export default Admin