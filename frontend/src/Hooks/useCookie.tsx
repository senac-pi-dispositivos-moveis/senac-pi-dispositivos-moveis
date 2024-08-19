import {useState, useCallback} from "react"
import Cookies from "js-cookie"

export default function useCookie(
    name: string,
    defaultValue = '',
): [
    string,
    (newValue: string, options?: object) => void,
    () => void,
] {
    const [value, setValue] = useState(() => {
        const cookie = Cookies.get(name)
        if (cookie) {
            return cookie
        }
        Cookies.set(name, defaultValue)
        return defaultValue
    })

    const updateCookie = useCallback((newValue: string, options = {}) => {
        Cookies.set(name, newValue, options)
        setValue(newValue)
    }, [name])

    const deleteCookie = useCallback(() => {
        Cookies.remove(name)
        setValue('')
    }, [name])

    return [value, updateCookie, deleteCookie]
}