import React from 'react'
import { Button, ImageCard } from '@/app/use-client';
import { Header, Layout } from '@/components/layout/admin';

const getData = async () => {
}

async function Admin() {

    await getData()

    return (
        <Layout >
            {
                [1, 2, 3, 4, 5].map((v) => (
                    <ImageCard key={v} />
                ))
            }
        </Layout>
    )
}

export default Admin