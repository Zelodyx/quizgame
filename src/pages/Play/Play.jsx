import { useState } from "react"
import ListQuestion from "./components/ListQuestions";
import ReturnButton from "../../components/ReturnButton";


function App() {
  
  const [listQuestions, setListQuestions] = useState(
    JSON.parse (localStorage.getItem("listQuestions")) || []
    );

  
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-auto"></div>
        <div className="col">
          <h1 className="fw-lighter">Add Questions</h1>
          <ReturnButton handleButton={""} />
        </div>
      </div>
    <hr />
    {
      listQuestions.length === 0 && (
      <h3>
        Empty list...
      </h3>
      )
    }
    {
      listQuestions.map((listQuestion)=>(
        <ListQuestion
        key={listQuestion.id}
        item={listQuestion}
        listQuestions={listQuestions}
        setListQuestions={setListQuestions}
        />
      ))
    }
    </div>
    
  )
}

export default App
