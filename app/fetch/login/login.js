import { post } from '../post'

export function LoginIn(params) {
    const result = post('/api/login?phone='+params.phone+'&code='+params.code)
    return result
}

