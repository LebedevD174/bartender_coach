import type { User, UserWithoutId } from "../../Auth/types/User"

export type Profile = {
    id: number,
    name: string,
    lastName: string,
    age: number|string,
    phoneNumber: number|string,
    img: string | null,
    isAdmin: boolean,
}

export type ProfileWithoutID = Omit<Profile, "id">

export type UserProfile = User & {
    Profile: Profile
}

export type UserProfileWithoutID = UserWithoutId & {
    Profile: ProfileWithoutID
}

export type ProfileType = {
    profile: Profile|undefined,
    error:string|undefined
}