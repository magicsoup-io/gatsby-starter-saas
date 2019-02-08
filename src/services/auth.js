export const isBrowser = () => typeof window !== 'undefined'

export const getCurrentUser = () =>
  isBrowser() && window.localStorage.getItem('gatsbyUser')
    ? JSON.parse(window.localStorage.getItem('gatsbyUser'))
    : {}

const setUser = user =>
  window.localStorage.setItem('gatsbyUser', JSON.stringify(user))

export const handleLogin = ({ username, password }) => {
  if (username === `gatsby` && password === `demo`) {
    return setUser({
      username: `gatsby`,
      name: `gatsby demo user`,
      email: `gatsy@demouser.com`,
    })
  }

  return false
}

export const isLoggedIn = () => {
  const user = getCurrentUser()

  return !!user.username
}

export const logout = callback => {
  setUser({})
  callback()
}