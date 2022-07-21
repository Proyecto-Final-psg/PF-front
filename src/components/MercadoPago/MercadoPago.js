import './MercadoPago.scss'
const MercadoPago = () => {

    const handleSubmit = () => {
        var data = {
            "user_id": "4",
            "address": "av la plata",
            "status": "inprogress",
            "arrayItems": [
                { "product_id": 19, "quantity": 2, "price": 150 },
                { "product_id": 4, "quantity": 1, "price": 1500 },
                { "product_id": 2, "quantity": 1, "price": 1500 }
            ]
        }

        fetch("https://desarrollo-back.herokuapp.com/addOrder", {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => window.location.href = data)
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
    }
    
    return (
        <div className="cmp-mercadoPago">
            <button className="btn-filter-reset" onClick={handleSubmit}>Ir a MercadoPago</button>
        </div>
    )
}
export default MercadoPago