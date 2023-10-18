
export function deposit(amount){
    return {type:'deposit',payload:amount}
}
export function withdraw(amount){
    return {type:'withdraw',payload:amount}
}
export function updateName(name){
    return{type:'updateName',payload:name}
}
export function updateMobile(mobile){
    return {type:'updateMobile',payload:mobile}
}
export function reset(){
    return {type:'reset'}
}