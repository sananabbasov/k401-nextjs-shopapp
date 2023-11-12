import React from 'react'
import "@/app/globals.css"
import WishList from '@/components/WishList'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router';
import { NextResponse } from 'next/server';
export default function index() {
    const { data: session, status } = useSession();
    const router = useRouter()

    if (status === "unauthenticated") {
        return <p>Access Denied</p>
    }


    return (
        <div className='container m-auto mt-10'>
            <WishList />
        </div>
    )
}



