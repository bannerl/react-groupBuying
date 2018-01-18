import { get } from '../get'

export function getDetail(obj) {
    const result = get('/api/shop/'+obj.sellerId+'?id='+obj.id)
    return result
}
