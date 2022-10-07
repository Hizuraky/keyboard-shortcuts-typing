import userProfile from "./userProfile.json"
import apps from "./apps.json"
import ranking from "./ranking.json"
import game from "./game.json"
import user from "./user.json"
import register from "./register.json"
import top from "./top.json"
import notification from "./notifications.json"

// jsonよりfetchのtype定義
export type UserProfileType = typeof userProfile
export type AppsType = typeof apps
export type RankingType = typeof ranking
export type GameType = typeof game
export type UserType = typeof user
export type RegisterType = typeof register
export type TopType = typeof top
export type NotificationType = typeof notification
