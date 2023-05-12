function App() {
  
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-2"></div>
        <div className="col">
          <h1 className="fw-lighter">Add Questions</h1>
          
        <a href="Add.html" class="btn btn-outline-primary btn-sm mt-1 me-1 fw-lighter">Add <i className="bi bi-plus-circle"></i></a>

        </div>
        <div className='col'>
          <h1 className="fw-lighter">Quiz Game</h1>
          <a href="Play.html" class="btn btn-outline-danger btn-sm mt-1 me-1 fw-lighter">
            Play Game
            <i className="bi bi-controller"></i>
          </a>
        </div>
        <div className="col-2 text-end"></div>
      </div>
    <hr />
    </div>
    
  )
}

export default App
