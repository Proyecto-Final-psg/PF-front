import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getAllReviews } from "../../Redux/Actions"
import Card from "../Card/Card"

export function Cards({ items }) {

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getAllReviews())
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    return <div className="grid-cards">
        {items.length <= 0 && <p>No items found.</p>}
        {items && items.map(p => <Card
            key={p.id}
            name={p.name}
            id={p.id}
            img={p.img.split(',')[0]}
            description={p.description}
            price={p.price}
            stock={p.stock}
        />)}
    </div>
}