import { useRouter } from 'vue-router'

export function useStoryRedirect() {
  const router = useRouter()

  function goToStoryDetails(id) {
    router.push({ name: 'Story Details', params: { id } })
  }

  return { goToStoryDetails }
}
