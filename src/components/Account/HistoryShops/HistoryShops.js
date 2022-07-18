import React from 'react'
import { useSelector } from 'react-redux';
import Card from '../../Card/Card';

const HistoryShops = () => {

  const users = useSelector(store => store.users)
  const history = useSelector(store => store.orderDetails[0].arrayItems)
  console.log(history)

  return (
    <div>
      <h1>Historial de compras</h1>

      {
        history.length > 0 &&
        history.map( c => (
          <Card 
            key={c.id}
            name={c.name}
            description={c.description}
            img={c.img}
            price={c.price}
            stock={c.stock}
          />
        ) )
      }

    </div>
  )
}

export default HistoryShops