import Slider from "@/app/components/Slider";
import Link from "next/link"
import "../app/globals.css"
import { useState } from "react";


export default function page({ products }) {

    const [num,setNum] = useState(null)
    return (
        <div>
            <Slider />
            <div className="w-[70%] m-auto grid grid-cols-4 gap-4">
                {
                    products.map((d, index) => (

                        <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <Link href="#">
                                <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                            </Link>
                            <div className="p-5">
                                <Link href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{d.product_name}</h5>
                                </Link>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <Link href={`/product/detail/${d.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                    ))


                }
            </div>
        </div>
    )
}

export async function getServerSideProps(num) {
    // Fetch data from external API
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    const res = await fetch(`https://localhost:7037/api/v1/Product/getall`)
    const data = await res.json()

    console.log("number",num);

    const products = data.products;
    // Pass data to the page via props
    return { props: { products } }
}