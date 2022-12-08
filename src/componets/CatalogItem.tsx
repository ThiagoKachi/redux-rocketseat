import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../store";
import { addProductToCartRequest } from "../store/models/cart/actions";
import { IProduct } from "../store/models/cart/types"

interface CatalogItemProps {
  product: IProduct;
}

function CatalogItem({ product }: CatalogItemProps) {
  const dispatch = useDispatch()

  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failureStockCheck.includes(product.id)
  })

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product))
  }, [dispatch, product])
  
  return (
    <article>
      <strong>{product.title}</strong> {" - "}
      <strong>R$ {product.price}</strong> {"  "}

      <button
        type="button"
        onClick={handleAddProductToCart}
      >
        Comprar
      </button>

      {hasFailedStockCheck && <span style={{ color: 'red' }}>Falta de estoque</span>}
    </article>
  )
}

export default CatalogItem;