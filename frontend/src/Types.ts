export interface CollectionType {
    count: number
    next: string
    previous: string
    results: never[]
}

export interface AuthType {
    username: string
    token: string
}

export interface AuthContextType {
    username: string
    token: string
    login: (_: AuthType) => void,
    logout: () => void,
}
