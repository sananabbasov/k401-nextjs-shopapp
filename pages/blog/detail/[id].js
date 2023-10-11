import { useRouter } from 'next/router'

function detail() {
  const router = useRouter()
  return (
    <div>Id is: {router.query.id}</div>
  )
}

export default detail