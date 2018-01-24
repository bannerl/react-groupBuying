import { get } from '../get'

export function getCollection(id) {
    const result = get('/api/user/collection?id='+id)
    return result
}
