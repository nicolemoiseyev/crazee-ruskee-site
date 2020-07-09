import React from "react"
import { ThemeProvider } from "./ThemeContext"
export default ({ children }) => {
  const themeOptions = {
    DARK: { name: "DARK", background: "#252632", text: "#F6F7FF" },
    LIGHT: { name: "LIGHT", background: "#F6F7FF", text: "#1A1A22" },
  }

  const initialState = { theme: themeOptions["LIGHT"] }

  const reducer = (state, action) => {
    switch (action.type) {
      case "toggleTheme":
        const themeName = state.theme.name == "DARK" ? "LIGHT" : "DARK"
        return {
          ...state,
          theme: themeOptions[themeName],
        }
      default:
        return state
    }
  }
  return (
    <ThemeProvider initialState={initialState} reducer={reducer}>
      {children}
    </ThemeProvider>
  )
}
