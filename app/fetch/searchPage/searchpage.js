import { get } from '../get'

export function getHotSearch() {
    const result = get('/api/hotsearch')
    return result
}

export function getSearchResult(value) {
	value = value || '';
	const result = get('api/search?param='+value)
	return result
}
