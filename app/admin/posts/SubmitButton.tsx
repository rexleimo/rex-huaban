import React from 'react'
import { Button } from '@/app/use-client'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

function SubmitButton() {
    const { pending } = useFormStatus()
    return (
        <Button type="submit" disabled={pending}>
            {pending ? '提交中...' : '提交'}
        </Button>
    )
}

export default SubmitButton