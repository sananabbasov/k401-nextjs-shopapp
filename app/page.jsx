import  Link  from "next/link"

function page() {



  return (
    <div>
        <ul>
          <li>
            <Link href="/product">Products</Link>
          </li>
          <li>
            <Link href="/blog/detail/1">Blog detail</Link>
          </li>
        </ul>
    </div>
  )
}

export default page