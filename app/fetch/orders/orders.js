import { get } from '../get'

export function getOrders(id) {
    const result = get('/api/user/orders?id='+id)
    return result
}
