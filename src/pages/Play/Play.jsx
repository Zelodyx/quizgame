import { useState } from "react"
import ListQuestion from "./components/ListQuestions";
import ReturnButton from "../../components/ReturnButton";
import Swal from "sweetalert2";


function App() {
  
  const [listQuestions, setListQuestions] = useState(
    JSON.parse (localStorage.getItem("listQuestions")) || []
    );

    const CheckedRadio = () => {
      var correct = [];
      var incorrect = [];
      listQuestions.map((i) => (
        document.querySelectorAll(`input[id="${i.id}"]`)
          .forEach(element => {
            if (element.checked && i.AnswerChecked === element.value) {
              correct.push(element.value);
              console.log(element.value);
            } else if (element.checked && i.AnswerChecked !== element.value)  {
              incorrect.push(element.value)
              console.log(element.value);
            } else {
              console.log(element);
            }
          })
      ));
      var nquestion = 0;
      for (const key in listQuestions) {
          const element = listQuestions[key];
          nquestion++;
          
      }
      Swal.fire({
        title: "Are you sure?",
        width: 400,
        padding:'3em',
        color: ' #0066FF  ',
        background: '#fff',
        backdrop: `rgba(  23, 32, 42  ,0.4)`,
        text: `"Correct answers: ${correct.length}/${nquestion}"                
               "Wrong answers: ${incorrect.length}/${nquestion}"`,
        icon: "question",
      });
    }

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-auto"></div>
        <div className="col">
          <h1 className="fw-lighter">Play Game</h1>
          <ReturnButton handleButton={""} />
        </div>
      </div>
    <hr />
    {
      listQuestions.length === 0 && (
      <h3>
        Add a question...
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
     <button onClick={CheckedRadio} type="submit" className="btn btn-outline-success btn-sm text-center fw-lighter">
        Finish
        <i class="bi bi-device-hdd"></i>
    </button>
    </div>
    
  )
}

export default App
