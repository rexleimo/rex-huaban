'use client'

import { FluentProvider, webLightTheme } from '@fluentui/react-components'
import { use, useEffect, useState } from 'react'

export function ThemeProvider(props: { children: React.ReactNode }) {

    const [done, setDone] = useState(false)

    useEffect(() => {
        setDone(true)
    }, [])

    if (!done) {
        return null
    }

    return (
        <FluentProvider theme={webLightTheme}>
            {props.children}
        </FluentProvider>
    )
}