import Card from "../Card/Card"

export function Cards({ items }) {
    return <div className="grid">
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