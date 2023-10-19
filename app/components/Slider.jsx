"use client"
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';

function Slider() {


    const [featured, setFeatured] = useState([])

    const getData = async () => {
        await fetch(`${process.env.baseUrl}/v1/Product/featured`).then(x => x.json()).then(c => setFeatured(c.data))
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <Swiper className='w-full'
            spaceBetween={50}
            slidesPerView={1}
        >
            {
                featured.map((data, index) => (

                    <SwiperSlide key={index} className='w-full'>
                        <img width={"100"} className='w-full h-[500px]' alt='salam' src={data.photo_url} />
                        {data.product_name}
                    </SwiperSlide>
                ))
            }

        </Swiper>
    )
}

export default Slider