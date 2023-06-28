import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './AppRouter'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}
