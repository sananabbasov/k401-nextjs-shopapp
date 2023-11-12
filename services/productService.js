export const getProducts = async () =>{
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    const res = await fetch(`https://localhost:7037/api/v1/Product/getall`)
    return res.data

}


export const getProductById = async (id) =>{

}