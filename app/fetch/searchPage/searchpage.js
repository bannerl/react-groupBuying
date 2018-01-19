import { get } from '../get'

export function getHotSearch() {
    const result = get('/api/hotsearch')
    return result
}
