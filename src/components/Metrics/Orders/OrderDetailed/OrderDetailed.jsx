import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getOrderDetails, getUserById } from "../../../../Redux/Actions"
import './OrderDetailed.scss'
export function OrderDetailed(){

    const {id} = useParams()
    const user = useSelector(store => store.user_order)
    const orderDetailed = useSelector(store => store.orderDetails)
    const dispatch = useDispatch()

    useEffect(()=>{
        
        console.log(id)
    },
     // eslint-disable-next-line 
    [])

    useEffect(()=>{
        dispatch(getUserById(id))
        dispatch(getOrderDetails(id))
    },
     // eslint-disable-next-line 
    [id])

    useEffect(()=>{
       return () => console.log('desmonto') 
    },[])

 

    useEffect(()=>{
        console.log(orderDetailed)
    },[orderDetailed])
    

    return <div className="container datas">
    
    
    <div className="order-detailed" style={{width:"100%"}}>
    <span style={{fontWeight:"bold"}}>Order: {user.user_name} </span>
    
    <table className="table is-bordered is-narrow shadow is-hoverable" style={{width:"50%"}}>
        <thead>
          <tr>
            <th><abbr title="ID">Products</abbr></th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
            {orderDetailed && orderDetailed.map(o =>{
                return <>
                    
                    {o.arrayItems.map(i => 
                    {return <tr>
                        <td>
                            {i.name}
                        </td>
                        <td>
                            {i.quantity}
                            </td>    
                    
                    </tr>
                    })}
                    <tr>
                        <td colSpan='2'>
                            Address:{o.address}
                        </td>
                    </tr>
                   

                    
                </>
                
            })}
   
   
     </tbody>
      </table>
    <div className="">

    </div>
  </div>
  </div>
}