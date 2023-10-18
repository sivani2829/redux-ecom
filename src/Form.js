
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { deposit,withdraw,updateMobile,updateName,reset} from './Action';

const Form=()=>{
    const[amount,setamount]=useState();
    const[name,setName]=useState('')
    const [mobile,setMobile]=useState('')
    const[tid,setTid]=useState(0)

    let dispatch=useDispatch();
    return(
        <div>
            <h1 className="text-center">Form</h1>
            <div className="d-flex">
            <input type='number' value={amount} onChange={(e)=>{setamount(e.target.value)}} className="form-control text-center w-50 ml-5"/>
            <button onClick={()=>{dispatch(deposit(amount)); setTid(prev=>prev+1); dispatch({type:'add',payload:{id:tid,amount:amount,date:new Date(),type:'credit'}});}} className="btn btn-primary ml-5 mr-5">Deposit</button>
            <button onClick={()=>{dispatch(withdraw(amount)); setTid(prev=>prev+1); dispatch({type:'add',payload:{id:tid,amount:amount,date:new Date(),type:'debit'}});}}  className="btn btn-danger ml-3 mr-5">withdraw</button>
             </div>
             <div className='d-flex pt-3'>
            <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}  className="form-control text-center w-50 ml-5" />
            <button onClick={()=>{dispatch(updateName(name))}}  className="btn btn-primary  ml-5 mr-5">updateName</button>
            </div>
            <div className='d-flex pt-3 pb-5'>   
            <input type='type' value={mobile} onChange={(e)=>{setMobile(e.target.value)}} className="form-control text-center w-50 ml-5"/>
           
            <button onClick={()=>{dispatch(updateMobile(mobile))}} className="btn btn-primary ml-5 mr-5">updateMobile</button>
            </div>
            <div className="text-center m-3">
            <button onClick={()=>{dispatch(reset())}} className="btn btn-primary ml-5 mr-5 text-center ml-5">Reset</button></div>
        </div>

    )
}
export default Form