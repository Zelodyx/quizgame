const NewQuestionButton = ({handleButton}) =>{
    return(
        <button 
            type="button" 
            className="btn btn-outline-success btn-sm mt-1 me-1 fw-lighter"
            onClick={handleButton}>
            Add { } <i className="bi bi-plus-circle"></i>
        </button>
    ) 
}

export default NewQuestionButton