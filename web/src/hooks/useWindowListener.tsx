import { useContext } from "react"
import { WindowListenerContext } from "../contexts/WindowListener"

export function useWindowListener() {
  const context = useContext(WindowListenerContext)

  return context
}