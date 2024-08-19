import Cookies from "js-cookie";

export const capitalizeText = (text: string): string => (
    text.toLowerCase()
        .split(' ')
        .map(w => w.length > 2 ? w.charAt(0).toUpperCase() + w.slice(1) : w)
        .join(' ')
)

export const wrapLines = (str: string, maxLen: number) => {
    const reg = new RegExp(`(?=\\S).{0,${maxLen - 1}}\\S(?!\\S)|\\S{${maxLen}}`, 'gm')
    return Array.from(str.matchAll(reg), (m) => m[0])
}

export function downloadFile(url: string, fileName: string, contentType: string) {
    fetch(url, {
        method: 'GET',
        headers: {
            ...getFetchHeader(),
            'Content-Type': contentType,
        }
    })
        .then((response) => response.blob())
        .then((blob) => {
            const url = window.URL.createObjectURL(
                new Blob([blob]),
            )
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute(
                'download',
                fileName,
            )
            document.body.appendChild(link)
            link.click()
            if (link.parentNode) {
                link.parentNode.removeChild(link)
            }
        });
}

export const deepEqual = (
    x: { [key: string]: never },
    y: { [key: string]: never },
): boolean => {
    const ok = Object.keys, tx = typeof x, ty = typeof y;
    return x && y && tx === 'object' && tx === ty ? (
        ok(x).length === ok(y).length &&
        ok(x).every(key => deepEqual(x[key], y[key]))
    ) : (x === y);
}

export const getFetchHeader = (): HeadersInit => ({
    'Content-Type': 'application/json',
    'Authorization': `Token ${Cookies.get('token')}`,
})
