//@ts-nocheck
import wrongSound from "src/assets/wrongSound.mp3"
import correctSound from "src/assets/correctSound.mp3"
import skipSound from "src/assets/skipSound.mp3"
import pressSound from "src/assets/pressSound.mp3"
import useSound from "use-sound"

/**
 * 各サウンド再生hooks
 */

export const useSoundPlay = () => {
  const [wrongPlay] = useSound(wrongSound)
  const [correctPlay] = useSound(correctSound)
  const [skipPlay] = useSound(skipSound)
  const [pressPlay] = useSound(pressSound)

  return { wrongPlay, correctPlay, skipPlay, pressPlay }
}
