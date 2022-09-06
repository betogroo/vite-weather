import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export default (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
): void => {
  document.title = `${
    to.params.state ? `${to.params.city}, ${to.params.state}` : to.meta.title
  } | App Tempo`
  next()
}
