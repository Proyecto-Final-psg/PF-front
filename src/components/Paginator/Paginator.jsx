import './Paginator.scss'

export function Paginator({ postsPerPage, totalPosts, paginate, currentPage }){
    const pageNumbers = []


    let maxPags = Math.ceil(totalPosts / postsPerPage )

    for (let i = 1; i <= maxPags; i++) {
        pageNumbers.push(i)        
    }

    function up(){
        console.log('maxpag', maxPags)
        if(currentPage < maxPags)
            paginate(currentPage + 1) 

        
    }

    function back(){
        if(currentPage > 1 )
            paginate(currentPage - 1) 
    }
    
   
    return <nav className="pagination">
        {/* <ul> */}
        <button className='paginatorMove' onClick={back}>
           <span className="material-symbols-outlined">arrow_back</span>
        </button>
            {pageNumbers.map( number => (
                <>
            
                <span className={currentPage === number ? 'active-pag' : 'inactive'}  key={number}>
                    <button  className={currentPage === number ? 'active-pag' : 'pags inactive'} onClick={() => {paginate(number)}} >
                        {number}   
                    </button>
                </span>        
        </>))}
        <button className='paginatorMove' onClick={up}>
           <span className="material-symbols-outlined">arrow_forward</span>
        </button>
        {/* </ul> */}
    </nav>
}