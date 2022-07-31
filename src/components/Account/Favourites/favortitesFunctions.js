import Toastify from 'toastify-js'
import swal from 'sweetalert'
import { addFavorite,  addFavReducer, deleteProductFav, removeFavReducer } from '../../../Redux/Actions'




export const addToFavourites = (e, product_id, product_name, user_id, dispatch) => {
    e.preventDefault();
    Toastify({
      text: "Added " + product_name + " to Favorites ♥",
      duration: 3000,

      newWindow: true,
      close: false,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "#438A00",
        padding: "20px"
      },
      onClick: function () { } // Callback after click
    }).showToast();
    dispatch(addFavorite(product_id, user_id))
    dispatch(addFavReducer(product_id))
  
}
export function deleteFavourite(e, product_id, product_name, user_id, dispatch) {
    e.preventDefault();
Toastify({
  text: "Deleted " + product_name + " from Favorites ♥",
  duration: 3000,

  newWindow: true,
  close: false,
  gravity: "top", // `top` or `bottom`
  position: "center", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "#6e0000",
    padding: "20px"
  },
  onClick: function () { } // Callback after 
}).showToast();
dispatch(deleteProductFav(product_id, user_id ))
dispatch(removeFavReducer(product_id))
}

export function signInFav(e, loginWithRedirect){
e.preventDefault()
swal({
  title: `Sign in to add this product to favorites`,
  // text: "Doing this, the user will be unable to login to Weedical",
  icon: "info",
  buttons: [
      'Cancel',
      'Sign In'
  ],
  dangerMode: true
})
  .then(
      function (isConfirm) {
          if (isConfirm) {
              loginWithRedirect()
          }
      }
  )
}