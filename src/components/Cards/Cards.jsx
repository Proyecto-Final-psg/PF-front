
import Card from "../Card/Card"
import { useEffect } from "react";

export function Cards({ items }) {


    return <div className="grid">

        {items.length <= 0 && <p>No items finded.</p>}
        {items && items.map(p => <Card
            key={p.id}
            name={p.name}
            id={p.id}
            img={p.img}
            description={p.description}
            price={p.price}
            stock={p.stock}
        />)}
    </div>
}