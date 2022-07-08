import './Paginator.scss'

export function Paginator({ postsPerPage, totalPosts, paginate, currentPage }) {
    const pageNumbers = []


    let maxPags = Math.ceil(totalPosts / postsPerPage)

    for (let i = 1; i <= maxPags; i++) {
        pageNumbers.push(i)
    }

    function up() {
<<<<<<< HEAD
        // console.log('maxpag', maxPags)
=======
        //console.log('maxpag', maxPags)
>>>>>>> develop
        if (currentPage < maxPags)
            paginate(currentPage + 1)


    }

    function back() {
        if (currentPage > 1)
            paginate(currentPage - 1)
    }


    return <nav className="pagination">
        {/* <ul> */}
        <button className='paginatorMove' onClick={back}>
<<<<<<< HEAD
            <span class="material-symbols-outlined">arrow_back</span>
=======
            <span className="material-symbols-outlined">arrow_back</span>
>>>>>>> develop
        </button>
        {pageNumbers.map((number, i) => (
            <div key={i}>

<<<<<<< HEAD
                <span className={currentPage === number ? 'active-pag' : 'inactive'} key={number}>
=======
                <span className={currentPage === number ? 'active-pag' : 'inactive'} >
>>>>>>> develop
                    <button className={currentPage === number ? 'active-pag' : 'pags inactive'} onClick={() => { paginate(number) }} >
                        {number}
                    </button>
                </span>
<<<<<<< HEAD
            </div>))}
        <button className='paginatorMove' onClick={up}>
            <span class="material-symbols-outlined">arrow_forward</span>
=======
            </div>
            ))}
        <button className='paginatorMove' onClick={up}>
            <span className="material-symbols-outlined">arrow_forward</span>
>>>>>>> develop
        </button>
        {/* </ul> */}
    </nav>
}