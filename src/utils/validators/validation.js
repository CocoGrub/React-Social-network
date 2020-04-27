export const required = (value) => {
    if (value) return undefined
    return "value is required"
}
export const maxLength = (value) => {
    if (value && value.length > 30) return "max length is 30 symbols"
    return undefined
}
export const MaxLengthCreator=(maxLength)=>{
    return (value)=>{
        if(value.length>maxLength){
            return "so long value"
        }else {
            return
        }

    }
}