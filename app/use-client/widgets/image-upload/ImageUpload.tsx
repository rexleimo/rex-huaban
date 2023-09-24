'use client'
import React, { useRef, useState } from 'react'
import { Button, ImageCard } from '@/app/use-client'

function ImageUpload(props: {
    name?: string
}) {
    const [list, updateList] = useState<string[]>([])
    const inputRef = useRef<HTMLInputElement>()

    const handleUpload = (e: Event) => {
        const file = (e.target as HTMLInputElement).files![0];
        const formData = new FormData();
        formData.append('file', file);
        fetch('/api/upload', {
            method: "POST",
            body: formData
        }).then(res => res.json())
            .then(json => {
                updateList(list => [...list, json.file])
            })

        // const reader = new FileReader()
        // reader.readAsDataURL(file)
        // reader.onload = () => {

        //     
        //     setTimeout(() => {
        //         inputRef.current?.remove()
        //     }, 0);
        // }
    }

    const handleCreate = () => {
        // TODO: 创建图片集
        const input = document.createElement('input')
        input.style.display = 'none'
        input.setAttribute('type', 'file')
        input.setAttribute('accept', 'images/*')
        input.onchange = handleUpload;
        document.body.appendChild(input)
        inputRef.current = input
        setTimeout(() => {
            input.click()
        }, 0);
    }

    return (
        <>
            <Button className='!mb-4 w-48' onClick={handleCreate}>upload image set</Button>
            <input type='hidden' name={`${props.name}`} value={list.join(',')} />
            <div className='grid grid-cols-5 gap-4'>
                {
                    list?.map((item, index) => (
                        <>
                            <ImageCard key={item} uri={item} />
                        </>
                    ))
                }
            </div>
        </>
    )
}

export default ImageUpload