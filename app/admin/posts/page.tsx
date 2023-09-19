'use client'
import { Layout } from '@/components/layout/admin'
import React, { useCallback, useState } from 'react'
import { Input, FeiId, ImageCard, Textarea, ImageUpload, Button } from '@/app/use-client'
import { ImageCreate } from '@/app/actions/admin/image_actions'
import SubmitButton from './SubmitButton'
import { z } from 'zod'

function page() {

    const [errors, updateErrors] = useState<z.ZodIssue[]>([]);

    const errorItem = useCallback((name: string) => {
        return errors.find(item => item.path[0] === name);
    }, [errors])

    const errorMessage = useCallback((name: string) => {
        return errorItem(name)?.message;
    }, [errorItem]);

    const errorState = useCallback((name: string) => {
        return errorItem(name) ? "error" : "none";
    }, [errorItem]);

    const onSubmit = async (formData: FormData) => {
        const { errors } = await ImageCreate(formData)
        updateErrors(errors!);
    }

    return (
        <Layout>
            <form className='!w-full' action={onSubmit}>
                <FeiId label={'图集名称'}
                    validationState={errorState('name')}
                    validationMessage={errorMessage('name')}>
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