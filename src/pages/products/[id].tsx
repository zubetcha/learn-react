import { useQuery } from "react-query"
import { Link, useParams } from "react-router-dom"
import ProductDetail from "../../components/product/detail"
import { GET_PRODUCT, PRODUCT } from "../../graphql/products"
import { graphqlFetcher, QueryKeys } from "../../queryClient"
import { Product } from "../../types"

const ProductDetailPage = () => {
  const {id} = useParams()
  const {data} = useQuery<PRODUCT>([QueryKeys.PRODUCTS, id], () => graphqlFetcher(GET_PRODUCT, {id}))

  if (!data) return null;

  const {
    title,
    description,
    imageUrl,
    price,
  } = data

  return (
    <div>
      <h2>상품상세</h2>
      <ProductDetail item={data} />
    </div>
  )
}

export default ProductDetailPage