 import {createStore,combineReducers} from 'redux';
 const initialState={
    bal:0,
    name:'',
    mobile:'',
 }

 function reducer(state=initialState,action){
    switch(action.type){
        case 'deposit':
            return {...state,bal:state.bal+ +action.payload}
        case 'withdraw':
                return {...state,bal:state.bal- +action.payload}
        case 'updateName':
            return {...state,name:action.payload}
        case 'updateMobile':
                return {...state,mobile:action.payload}
        case 'reset':
            return initialState
        default:
            return state
    }
 }

 function transactionReducer(state=[],action){
    switch(action.type){
        case 'add':
            return [...state,{amount:action.payload.amount,type:action.payload.type,date:action.payload.date,id:action.payload.id}]
        default:
            return state
    }
 }

 let rootreducer=combineReducers(
    {
        account:reducer,
        transaction:transactionReducer
    }
 )

 const store=createStore(rootreducer)
 console.log(store.getState())


//  store.dispatch({type:'deposit',payload:5000})
//  console.log(store.getState())
//  store.dispatch({type:'withdraw',payload:1000})
//  console.log(store.getState())
//  store.dispatch({type:'updateName',payload:'sivani'})
//  console.log(store.getState())
//  store.dispatch({type:'updateMobile',payload:8500789087})
//  console.log(store.getState())


 export default store;