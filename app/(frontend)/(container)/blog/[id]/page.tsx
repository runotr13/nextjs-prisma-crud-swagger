import React from 'react'
import { headers } from 'next/headers'
interface BlogProps {
    params : {
        id : string
    }
}

export default function Blog({params} : BlogProps) {
    const headersList = headers()
    const referer = headersList.forEach((header) => console.log('header',header))
    console.log(referer)
    return (
        <div>
            <h1>Blog {params.id}</h1>
        </div>
    )
}