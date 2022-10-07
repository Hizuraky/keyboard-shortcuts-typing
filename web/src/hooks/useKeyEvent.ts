/**
 * keyEvent記号変換 + ブラウザショートカットキー無効化
 */

export const useKeyEvent = () => {
  const changeKey = (event: any) => {
    event.preventDefault()
    event.stopPropagation()
    let key = event.key
    switch (key) {
      case "Meta":
        key = "⌘"
        break
      case "ArrowUp":
        key = "↑"
        break
      case "ArrowRight":
        key = "→"
        break
      case "ArrowDown":
        key = "↓"
        break
      case "ArrowLeft":
        key = "←"
        break
      case "Alt":
        key = "⌥"
        break
      case "Shift":
        key = "⇧"
        break
      case "Control":
        key = "^"
        break
      case " ":
        key = "space"
        break
      default:
        break
    }
    return key
  }

  return { changeKey }
}
