import { useEffect, useState } from "react"
import Card from "../Card/Card"


export function Cards({items}){
    
    return <div className="grid">
        
        {items.length <=0 && <p>No items finded.</p>}
        {items && items.map(p => <Card 
                                    key={p.id} 
                                    name={p.name} 
                                    id={p.id} 
                                    img={p.img} 
                                    description={p.description} 
                                    price={p.price} 
                                    stock={p.stock} 
                                    /> )}
    </div>
}