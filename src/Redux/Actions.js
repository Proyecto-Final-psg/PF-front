
import { GET_ALL_REVIEWS, REMOVE_FAVORITE, GET_USER_REVIEWS,CLEAR_CART, GET_ORDER_BY_ORDERID,GET_BEST_CUSTOMERS, GET_REVIEWS,GET_USER_CART,  API_URL, GET_ALL_ORDERS, GET_ORDER_DETAILS, GET_ALL_PRODUCTS, CHANGE_ROLL,GET_ALL_ITEMS, ADD_TO_CART,UPDATE_TO_CART, DELETE_TO_CART, GET_ALL_USERS, GET_PRODUCT_BY_ID, GET_ALL_CATEGORIES, REGISTER_USER, ADD_GUEST, EDIT_PRODUCT, GET_USER_ORDER, GET_ORDER_ITEMS,  GET_ITEMS_OF_ORDER, ADD_FAVORITE, GET_FAVORITE,CLEAN_FAVORITES } from "./Constants"

export function getAllProducts() {
    return function (dispatch) {
        return fetch(`${API_URL}/products`)
            .then(res => res.json())
            .then(data => {
                // console.log('data de action ', data)
                dispatch({
                    type: GET_ALL_PRODUCTS,
                    payload: data
                })
            })
    }
}

export function getProductById(id) {
    return function (dispatch) {
        return fetch(`${API_URL}/products/${id}`)
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: GET_PRODUCT_BY_ID,
                    payload: data
                })
            })
    }
}

export function getProductByName(name) {
    return function (dispatch) {
        return fetch(`${API_URL}/products/search?name=${name}`)
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: GET_ALL_PRODUCTS,
                    payload: data
                })
            })
    }
}

export function getAllCategories() {
    return function (dispatch) {
        return fetch(`${API_URL}/category`)
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: GET_ALL_CATEGORIES,
                    payload: data
                })
            })
    }
}

export function getAllUsers() {
    return async function (dispatch) {
        const res = await fetch(`${API_URL}/getAllUsers`)
        const data = await res.json()
        dispatch({
            type: GET_ALL_USERS,
            payload: data
        })
    }
}

export function getUserById(id){
    return function(dispatch){
        return fetch(`${API_URL}/users/${id}`)
        .then(data => data.json())
        .then(res => {
            dispatch({
                type: GET_USER_ORDER,
                payload: res
            })
        })
    }
}

export function registerUser(user) {
    return function (dispatch) {
        return fetch(`${API_URL}/ath0log`, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(user), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: REGISTER_USER,
                    payload: data
                })
            })
    }
}

export function submitOrder(order) {
    return function (dispatch) {
        return fetch(`${API_URL}/addOrder`, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(order), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => window.location.href = data)
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
    }
}


///users/subscribe
export function subscribeStock(user_id, product_id) {
    // console.log(user_id, product_id);
    return function (dispatch) {
        return fetch(`${API_URL}/users/subscribe`, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify({user_id, product_id}), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error))
    }
}


export const addGuest = (guest) => {
    return (
        { type: ADD_GUEST, guest: guest }
    )
}
export const changeRoll = (roll) => {
    return (
        { type: CHANGE_ROLL, roll: roll }
    )
}

export const getReviews = (product_id) => {
    return function (dispatch) {
        return fetch(`${API_URL}/reviews/${product_id}`)
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: GET_REVIEWS,
                    payload: data
                })
            })
    }
}

export const getUserReviews = (id) => {
    //console.log('manda',id)
    return function (dispatch) {
        return fetch(`${API_URL}/reviewsUser/${id}`)
            .then(res => res.json())
            .then(data => {
                //console.log('data',data)
                dispatch({
                    type: GET_USER_REVIEWS,
                    payload: data
                })
            })
    }
}

export const getAllReviews = () => {
    return function (dispatch) {
        return fetch(`${API_URL}/reviews`)
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: GET_ALL_REVIEWS,
                    payload: data
                })
            })
    }
}

export const addToCart = (id, name, price, cant) => {
    return (
        {
            type: ADD_TO_CART,
            payload: {
                id: id,
                name: name,
                price: price,
                cant: 1
            }
        }
    )
}

export function getUserCart(id){
    return function(dispatch){
        return fetch(`${API_URL}/cart/${id}`)
        .then(data => data.json())
        .then(res => {
            dispatch({
                type: GET_USER_CART,
                payload: res
            })
        })
    }
}

export const deleteToCart = (id) => {
    return (
        {
            type: DELETE_TO_CART,
            payload: id
        }
    )
}


export const updateToCart = (id, name, price, contador) => {
    return (
        {
            type: UPDATE_TO_CART,
            payload: {
                id: id,
                name: name,
                price: price,
                cant: contador
            }
        }
    )
}


export const cleanCart = () => {
    return (
        {
            type: CLEAR_CART,
        }
    )
}

export const getAllItems = () => {
    return (
        {
            type: GET_ALL_ITEMS,
        }
    )
}

export function getOrderDetails(user_id) {
    return function (dispatch) {
        return fetch(`${API_URL}/getOrders/${user_id}`)
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: GET_ORDER_DETAILS,
                    payload: data
                })
            })
            .catch(e => console.log(e))
    }
}

export function getOrdersByOrderId(id){
    return function(dispatch){
        return fetch(`${API_URL}/getOrdersById/${id}`)
        .then(data => data.json())
        .then(res =>{
            dispatch({
                type: GET_ORDER_BY_ORDERID,
                payload: res
            })
        })
    }
}

export function getAllOrders() {
    return function (dispatch) {
        return fetch(`${API_URL}/getAllOrders`)
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: GET_ALL_ORDERS,
                    payload: data
                })
            })
            .catch(e => console.log(e))
    }
}

export function getOrderItems(){
    return function(dispatch){
        return fetch(`${API_URL}/getOrderItems`)
        .then(data => data.json())
        .then(res => {
            dispatch({
                type: GET_ORDER_ITEMS,
                payload: res
            })
        })
    }
}

export function getItemsOfOrder(id){
    return function(dispatch){
        return fetch(`${API_URL}/getItemsByOrder/${id}`)
        .then(data => data.json())
        .then(res => {
            dispatch({
                type:GET_ITEMS_OF_ORDER,
                payload:res
            })
        })
    }
}


export function createProduct(product) {
    return function (dispatch) {
        return fetch(`${API_URL}/products`, {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
            },
        })
    }
}


export function editProduct(id, editedProduct) {
    return function (dispatch) {
        return fetch(`${API_URL}/products/${id}`, {
            method: 'PUT', // or 'PUT'
            body: JSON.stringify(editedProduct), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: EDIT_PRODUCT,
                    payload: data
                })
            })
    }
}

export function getFavorite(user_id) {
   
    return function (dispatch) {
        return fetch(`${API_URL}/favoritebyuser/${user_id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                dispatch({
                    type: ADD_FAVORITE,
                    payload: data
                })
            })
            .catch(e => console.log(e))
    }
}

export function addFavReducer(product_id){
    return(
        {
            type: GET_FAVORITE,
            payload: product_id
        }
    )
}

export function cleanFavs(){
    return(
        {
            type: CLEAN_FAVORITES
        }
    )
}

export function removeFavReducer(product_id){
    return(
        {
            type: REMOVE_FAVORITE,
            payload: product_id
        }
    )
}

export function deleteProductFav(id, user_id) {
    return function (dispatch) {
        return fetch(`${API_URL}/removefavorites/${id}`, {
            method: 'DELETE', // or 'PUT'
            body: JSON.stringify({user_id}), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
    }
}

export function addFavorite(product_id, user_id) {
    return function (dispatch) {
        return fetch(`${API_URL}/addfavorites/${product_id}`, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify({user_id}), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}

export function changeRoles(nuevoroll) {
    return function (dispatch) {
        return fetch(`${API_URL}/changeRoles`, {
            method: 'PUT',
            body: JSON.stringify(nuevoroll),
            headers: {
                'Content-Type': 'application/json'
            },
        })
    }
}

export function orderProductsCbd(category, azOrZa) {
    return function (dispatch) {
        return fetch(`${API_URL}/products/orderCbd/`, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify({ category: category, setOrder: azOrZa }), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: GET_ALL_PRODUCTS,
                    payload: data
                })
            })
            .catch(e => console.log(e))
    }
}

export function orderProductsThc(category, azOrZa) {
    return function (dispatch) {
        return fetch(`${API_URL}/products/orderThc/`, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify({ category: category, setOrder: azOrZa }), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: GET_ALL_PRODUCTS,
                    payload: data
                })
            })
            .catch(e => console.log(e))
    }
}

export function orderProductsPrice(category, azOrZa) {

    return function (dispatch) {
        return fetch(`${API_URL}/products/orderPrice/`, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify({ category: category, setOrder: azOrZa }), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: GET_ALL_PRODUCTS,
                    payload: data
                })
            })
            .catch(e => console.log(e))
    }
}

export function filterByCategory(category) {
    return function (dispatch) {
        return fetch(`${API_URL}/products/filter/${category}`)
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: GET_ALL_PRODUCTS,
                    payload: data
                })
            })
            .catch(e => console.log(e))
    }
}

export function updateOrderStatus(id, status){
    return fetch(`${API_URL}/update-order?id=${id}&status=${status}`,{
        method:"PUT",
        // headers: {
        //     'Content-Type': 'application/json'
        // }
    })
    .then(data => data.json())
    .then(res => console.log(res))
}


// export function  getAuth0Users(){
//     return function(dispatch){
//         return fetch('https://dev-2-ge07xz.us.auth0.com/api/v2/users',{
//             method:"GET",
//             headers: {
//               "Content-Type":"application/json",
//               "authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InhXOVcxOWZ1YmpsY2xvVU03VzRWYSJ9.eyJpc3MiOiJodHRwczovL2Rldi0yLWdlMDd4ei51cy5hdXRoMC5jb20vIiwic3ViIjoiaXQwU1l6S3lKWUNIRUlxTmEwN1ZTQWtkZzBWVk5KUlpAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vZGV2LTItZ2UwN3h6LnVzLmF1dGgwLmNvbS9hcGkvdjIvIiwiaWF0IjoxNjU3OTgwMDU0LCJleHAiOjE2NTgwNjY0NTQsImF6cCI6Iml0MFNZekt5SllDSEVJcU5hMDdWU0FrZGcwVlZOSlJaIiwic2NvcGUiOiJyZWFkOmNsaWVudF9ncmFudHMgY3JlYXRlOmNsaWVudF9ncmFudHMgZGVsZXRlOmNsaWVudF9ncmFudHMgdXBkYXRlOmNsaWVudF9ncmFudHMgcmVhZDp1c2VycyB1cGRhdGU6dXNlcnMgZGVsZXRlOnVzZXJzIGNyZWF0ZTp1c2VycyByZWFkOnVzZXJzX2FwcF9tZXRhZGF0YSB1cGRhdGU6dXNlcnNfYXBwX21ldGFkYXRhIGRlbGV0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgY3JlYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSByZWFkOnVzZXJfY3VzdG9tX2Jsb2NrcyBjcmVhdGU6dXNlcl9jdXN0b21fYmxvY2tzIGRlbGV0ZTp1c2VyX2N1c3RvbV9ibG9ja3MgY3JlYXRlOnVzZXJfdGlja2V0cyByZWFkOmNsaWVudHMgdXBkYXRlOmNsaWVudHMgZGVsZXRlOmNsaWVudHMgY3JlYXRlOmNsaWVudHMgcmVhZDpjbGllbnRfa2V5cyB1cGRhdGU6Y2xpZW50X2tleXMgZGVsZXRlOmNsaWVudF9rZXlzIGNyZWF0ZTpjbGllbnRfa2V5cyByZWFkOmNvbm5lY3Rpb25zIHVwZGF0ZTpjb25uZWN0aW9ucyBkZWxldGU6Y29ubmVjdGlvbnMgY3JlYXRlOmNvbm5lY3Rpb25zIHJlYWQ6cmVzb3VyY2Vfc2VydmVycyB1cGRhdGU6cmVzb3VyY2Vfc2VydmVycyBkZWxldGU6cmVzb3VyY2Vfc2VydmVycyBjcmVhdGU6cmVzb3VyY2Vfc2VydmVycyByZWFkOmRldmljZV9jcmVkZW50aWFscyB1cGRhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGRlbGV0ZTpkZXZpY2VfY3JlZGVudGlhbHMgY3JlYXRlOmRldmljZV9jcmVkZW50aWFscyByZWFkOnJ1bGVzIHVwZGF0ZTpydWxlcyBkZWxldGU6cnVsZXMgY3JlYXRlOnJ1bGVzIHJlYWQ6cnVsZXNfY29uZmlncyB1cGRhdGU6cnVsZXNfY29uZmlncyBkZWxldGU6cnVsZXNfY29uZmlncyByZWFkOmhvb2tzIHVwZGF0ZTpob29rcyBkZWxldGU6aG9va3MgY3JlYXRlOmhvb2tzIHJlYWQ6YWN0aW9ucyB1cGRhdGU6YWN0aW9ucyBkZWxldGU6YWN0aW9ucyBjcmVhdGU6YWN0aW9ucyByZWFkOmVtYWlsX3Byb3ZpZGVyIHVwZGF0ZTplbWFpbF9wcm92aWRlciBkZWxldGU6ZW1haWxfcHJvdmlkZXIgY3JlYXRlOmVtYWlsX3Byb3ZpZGVyIGJsYWNrbGlzdDp0b2tlbnMgcmVhZDpzdGF0cyByZWFkOmluc2lnaHRzIHJlYWQ6dGVuYW50X3NldHRpbmdzIHVwZGF0ZTp0ZW5hbnRfc2V0dGluZ3MgcmVhZDpsb2dzIHJlYWQ6bG9nc191c2VycyByZWFkOnNoaWVsZHMgY3JlYXRlOnNoaWVsZHMgdXBkYXRlOnNoaWVsZHMgZGVsZXRlOnNoaWVsZHMgcmVhZDphbm9tYWx5X2Jsb2NrcyBkZWxldGU6YW5vbWFseV9ibG9ja3MgdXBkYXRlOnRyaWdnZXJzIHJlYWQ6dHJpZ2dlcnMgcmVhZDpncmFudHMgZGVsZXRlOmdyYW50cyByZWFkOmd1YXJkaWFuX2ZhY3RvcnMgdXBkYXRlOmd1YXJkaWFuX2ZhY3RvcnMgcmVhZDpndWFyZGlhbl9lbnJvbGxtZW50cyBkZWxldGU6Z3VhcmRpYW5fZW5yb2xsbWVudHMgY3JlYXRlOmd1YXJkaWFuX2Vucm9sbG1lbnRfdGlja2V0cyByZWFkOnVzZXJfaWRwX3Rva2VucyBjcmVhdGU6cGFzc3dvcmRzX2NoZWNraW5nX2pvYiBkZWxldGU6cGFzc3dvcmRzX2NoZWNraW5nX2pvYiByZWFkOmN1c3RvbV9kb21haW5zIGRlbGV0ZTpjdXN0b21fZG9tYWlucyBjcmVhdGU6Y3VzdG9tX2RvbWFpbnMgdXBkYXRlOmN1c3RvbV9kb21haW5zIHJlYWQ6ZW1haWxfdGVtcGxhdGVzIGNyZWF0ZTplbWFpbF90ZW1wbGF0ZXMgdXBkYXRlOmVtYWlsX3RlbXBsYXRlcyByZWFkOm1mYV9wb2xpY2llcyB1cGRhdGU6bWZhX3BvbGljaWVzIHJlYWQ6cm9sZXMgY3JlYXRlOnJvbGVzIGRlbGV0ZTpyb2xlcyB1cGRhdGU6cm9sZXMgcmVhZDpwcm9tcHRzIHVwZGF0ZTpwcm9tcHRzIHJlYWQ6YnJhbmRpbmcgdXBkYXRlOmJyYW5kaW5nIGRlbGV0ZTpicmFuZGluZyByZWFkOmxvZ19zdHJlYW1zIGNyZWF0ZTpsb2dfc3RyZWFtcyBkZWxldGU6bG9nX3N0cmVhbXMgdXBkYXRlOmxvZ19zdHJlYW1zIGNyZWF0ZTpzaWduaW5nX2tleXMgcmVhZDpzaWduaW5nX2tleXMgdXBkYXRlOnNpZ25pbmdfa2V5cyByZWFkOmxpbWl0cyB1cGRhdGU6bGltaXRzIGNyZWF0ZTpyb2xlX21lbWJlcnMgcmVhZDpyb2xlX21lbWJlcnMgZGVsZXRlOnJvbGVfbWVtYmVycyByZWFkOmVudGl0bGVtZW50cyByZWFkOmF0dGFja19wcm90ZWN0aW9uIHVwZGF0ZTphdHRhY2tfcHJvdGVjdGlvbiByZWFkOm9yZ2FuaXphdGlvbnNfc3VtbWFyeSByZWFkOm9yZ2FuaXphdGlvbnMgdXBkYXRlOm9yZ2FuaXphdGlvbnMgY3JlYXRlOm9yZ2FuaXphdGlvbnMgZGVsZXRlOm9yZ2FuaXphdGlvbnMgY3JlYXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJzIHJlYWQ6b3JnYW5pemF0aW9uX21lbWJlcnMgZGVsZXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJzIGNyZWF0ZTpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgcmVhZDpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgdXBkYXRlOm9yZ2FuaXphdGlvbl9jb25uZWN0aW9ucyBkZWxldGU6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25fbWVtYmVyX3JvbGVzIHJlYWQ6b3JnYW5pemF0aW9uX21lbWJlcl9yb2xlcyBkZWxldGU6b3JnYW5pemF0aW9uX21lbWJlcl9yb2xlcyBjcmVhdGU6b3JnYW5pemF0aW9uX2ludml0YXRpb25zIHJlYWQ6b3JnYW5pemF0aW9uX2ludml0YXRpb25zIGRlbGV0ZTpvcmdhbml6YXRpb25faW52aXRhdGlvbnMiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.gDdovASNcodcLev57JPi33iWKyzBp7PS1V7KAmcwKzgGF-9DP4MITmMFxpEcMaZwAKJSjsidL_laxwObH2G0Wot1p0_8LckC8euotS7Vkn7wct_gU2MI86i9J6xMpJ4hKcReBI93-K0n5SJGQXr7vR9VPyD62fiHvphSj2rjRWLHQ2S3wUwqpvLUunxMeMo4Yj3iHoDnxq-Z7Azk8Tj9KVqi9sWKaSbIDLNn0BMOkJ9WS1z9U1n2FumBPUO64H_l8SLXfk0skVw7f9UEyur0oaQ4-SxDuKT4ytYBTiMYCCWew0KMLYFP-YqlQorHTgtERLHM2jINhhhuINXGuCY-Dg"              
//             }
//           })
//           .then(data => data.json())
//           .then(res => {
//             dispatch({
//                 type:GET_AUTH0_USERS,
//                 payload:res
//             })             
//           })
//           .catch(e => console.log(e))
//     }
// }

export function mailer(userid, email, order, status, address, arrayItems){
    return function(){
        return fetch(`${API_URL}/mail`,{
            method:"POST",
            body: JSON.stringify({userid, email, order, status, address, arrayItems}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(data => data.json())
        .then(res => console.log('done',res))
    }
}

export function getTopCustomers(){
    return function(dispatch){
        return fetch(`${API_URL}/getTotalByUserByOrder`)
        .then(data => data.json())
        .then(res => {
            dispatch({
                type: GET_BEST_CUSTOMERS,
                payload: res
            })
        })
    }
}

export function addReview(review) {
    return function (dispatch) {
        return fetch(`${API_URL}/reviews`, {
            method: 'POST',
            body: JSON.stringify(review),
            headers: {
                'Content-Type': 'application/json'
            },
        })
    }
}


export function createDiscount(code,percentage){
    return function(dispatch){
        return fetch(`${API_URL}/add-discount`,{
            method: "POST",
            body: JSON.stringify({code,percentage}),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        // .then(data => data.json())
        // .then(res =>{
        //     dispatch({
        //         type: DISCOUNT_CREATED,
        //         payload: res
        //     })
        // })
    }
}

export function usedCoupon(code){
    return function(){
        // console.log('aplicando descuento ',code);
        return fetch(`${API_URL}/discount-used`,{
            method:"PUT",
            body: JSON.stringify({code}),
            headers: {
                'Content-Type': 'application/json'
            },
        })
    }
}

// export function getDiscount(code){
//     return function(dispatch){
//         return fetch(`${API_URL}/get-discount?code=${code}`)
//         .then(data => data.json())
//         .then(res =>{
//             dispatch({
//                 type: DISCOUNT,
//                 payload: res
//             })
//         })
//     }
// }





