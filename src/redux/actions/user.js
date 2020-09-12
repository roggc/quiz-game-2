export const USER_SET='USER_SET'
export const USER_UNSET='USER_UNSET'

export const userSet=(user)=>({
    type:USER_SET,
    user
})

export const userUnset=()=>({
    type:USER_UNSET
})