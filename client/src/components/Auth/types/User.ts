export type User = {
    id: number,
    login: string,
    email: string,
    password: string,
    rpassword?: string,
}

export type UserAuth = {
    email: string,
    password: string,
}

export type UserType = {
    user: User|undefined,
    error:string|undefined
}

export type UserWithoutId = Omit<User, 'id'>;

export type UserID = User["id"]

export type AuthForm =  Pick<User, "login" | "password">