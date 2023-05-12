import { useState } from "react"
import NewQuestionButton from "./components/NewQuestionButton";
import ListQuestion from "./components/ListQuestions";
import {v4 as uuidv4} from 'uuid';
import Swal from "sweetalert2";
import ReturnButton from "../../components/ReturnButton";


function App() {
  
  const [listQuestions, setListQuestions] = useState(
    JSON.parse (localStorage.getItem("listQuestions")) || []
    );

  const handleNewQuestionButton = async () =>{
    const {value} = await Swal.fire({
      title:"New Question Information",
      html:`<input 
            type="text" 
            id="Question" 
            name="Question" 
            class="swal2-input" 
            placeholder="Question"
            />
            <input 
            type="text" 
            id="Answer1" 
            name="Answer1" 
            class="swal2-input" 
            placeholder="Answer1"
            />
            <input 
            type="text" 
            id="Answer2" 
            name="Answer2" 
            class="swal2-input" 
            placeholder="Answer2"
            />
            <input 
            type="text" 
            id="Answer3" 
            name="Answer3" 
            class="swal2-input" 
            placeholder="Answer3"
            />`,
      confirmButtonText:"Add Question",
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      cancelButtonText: "Dismiss",
      preConfirm: () =>{
        const Question= Swal.getPopup().querySelector('#Question').value;
        const Answer1= Swal.getPopup().querySelector('#Answer1').value;
        const Answer2= Swal.getPopup().querySelector('#Answer2').value;
        const Answer3= Swal.getPopup().querySelector('#Answer3').value;

        if (!Question|| !Answer1 || !Answer2 || !Answer3) {
          Swal.showValidationMessage('Please enter the item full information');
        }
        return{Question, Answer1, Answer2, Answer3}
      },
    })

    if(!value.Question || !value.Answer1 || !value.Answer2 || !value.Answer3) return

    const newList=[
      ...listQuestions,
      {id:uuidv4(), ...value, checked:false},
    ]

    localStorage.setItem("listQuestions", JSON.stringify(newList));

    setListQuestions(newList);

    console.log({value});
  
  }



  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-auto"></div>
        <div className="col">
          <h1 className="fw-lighter">Add Questions</h1>
          <NewQuestionButton handleButton={handleNewQuestionButton} />
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
