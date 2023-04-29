import qs from 'qs'


export const geneSearch = (obj) =>{
    return qs.stringify(obj)
}

export const parasSearch = (str) =>{
    return qs.parse(str.slice(1))
}