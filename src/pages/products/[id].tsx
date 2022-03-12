import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { fetcher, QueryKeys } from "../../queryClient"
import { Product } from "../../types"

const ProductDetail = () => {
  const id = useParams()
  const {data} = useQuery<Product>([QueryKeys.PRODUCTS, id], () => fetcher({
    method: 'GET',
    path: '/products',
  }))

  return <div>상세 페이지</div>
}

export default ProductDetail