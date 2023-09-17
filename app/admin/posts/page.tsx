'use client'
import { Layout } from '@/components/layout/admin'
import React from 'react'
import { Input, FeiId, ImageCard, Textarea, ImageUpload, Button } from '@/app/use-client'
import { ImageCreate } from '@/app/actions/admin/image_actions'
import SubmitButton from './SubmitButton'

function page() {

    return (
        <Layout>
            <form className='!w-full' action={ImageCreate}>
                <FeiId label={'图集名称'}>
                    <Input id={'name'} name='name' type='text' placeholder='图集名称' />
                </FeiId>

                <FeiId label={'图集封面'} >
                    <input id={'cover'} name='cover' type='file' placeholder='图集封面' />
                </FeiId>

                <FeiId label={'图集描述'}>
                    <Textarea id={'desc'} name='desc' placeholder='图集描述'></Textarea>
                </FeiId>

                <FeiId label={'图册集合'}>
                    <ImageUpload name='images' />
                </FeiId>
                <FeiId>
                  <SubmitButton />
                </FeiId>
            </form>
        </Layout >
    )
}

export default page