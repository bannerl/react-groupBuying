import { get } from '../get'

export function getHotSearch() {
    const result = get('/api/hotsearch')
    return result
}

export function getSearchResult(value,page) {
	page = page || 0;
	value = value || '';
	const result = get('api/search?param='+value+'&page='+page)
	return result
}
