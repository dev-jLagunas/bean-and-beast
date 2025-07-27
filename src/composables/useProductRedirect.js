import { useRouter } from 'vue-router'

export function useProductRedirect() {
  const router = useRouter()

  function goToProductDetails(id) {
    router.push({ name: 'Product Details', params: { id } })
  }

  return { goToProductDetails }
}
