import React from 'react'
import Header from './header'
import { Button } from '@/app/use-client'

function Layout(props:React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className='flex min-h-screen'>
            <div className='w-60 border-solid border-r border-gray-100 p-4'>
                <div className='h-14'></div>
                <Button>新增图册</Button>
            </div>

            <div className='flex flex-col flex-auto'>
                <Header />

                <main className='p-4'>
                   {props.children} 
                </main>

            </div>
        </div>
    )

}


export default Layout