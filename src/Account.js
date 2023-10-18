import {useSelector} from 'react-redux'


const Account=()=>{
    let data=useSelector((state)=>{return state})
    console.log(data)
    // let data = useSelector(state => state)
    return(
        <>
        <div className='card pt-3 d-flex flex-column justify-content-center'>
            <h1 className="text-primary">Account details</h1>
         <p className='text-dark'>Balance:{data.account.bal}</p>
         <p>Name:{data.account.name}</p>
         <p>Mobile Number:{data.account.mobile}</p>
        </div>
        <div className='card pt-3 d-flex flex-column justify-content-center'>
        <h1 className="text-primary">Transaction details</h1>
            {data.transaction.map((e)=>(
                <div div className='d-flex flex-row justify-content-between'>
                <p className='text-dark'>Id:{e.id}</p>
                <p>Amount :{e.amount}</p>
                <p>Type:{e.type}</p>
                <p>Date:{e.date.toString()}
                </p></div>
            ))}
         
        </div>
        </>

    )
}
export default Account