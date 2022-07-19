import './Review.scss'

export function Review({name, score, review}) {
console.log(name, score, review)
score = parseInt(score)
const stars = Array.from(String(score), Number)

console.log(stars)

    return (
    <div className="review">
        <div className="review-header">
            <h5>User</h5>
            <div className="stars">
               
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">grade</span>
                <span className="material-symbols-outlined">grade</span>
            </div>

        </div>
        <p>hola</p>

    </div>
    )
}