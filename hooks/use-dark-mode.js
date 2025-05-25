import { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'

const useDarkMode = (defaultTheme = 'dark') => {
  const [theme, setTheme] = useState(defaultTheme)
  const [cookies, setCookie] = useCookies(['theme'])

  useEffect(() => {
    if (cookies.theme && cookies.theme !== theme) {
      setTheme(cookies.theme)
      document.documentElement.classList.remove('light', 'dark')
      document.documentElement.classList.add(cookies.theme)
    }
  }, [cookies.theme])

  const setAndSaveTheme = (theme) => {
    setTheme(theme)
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)
    setCookie('theme', theme)
  }
  const toggleTheme = () => {
    setAndSaveTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return { theme, toggleTheme }
}

export default useDarkMode
