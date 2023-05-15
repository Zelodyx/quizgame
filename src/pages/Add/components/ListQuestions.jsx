import Swal from "sweetalert2";
import {v4 as uuidv4} from 'uuid';
import Radio from "./Radio";

const ListQuestion = ({
      item,
      listQuestions,
      setListQuestions,
}) => {

    const {id, Question, Answer1, Answer2, Answer3, AnswerChecked} = item;

    

    const deleteListQuestions = () =>{
      const newList = listQuestions.filter((item) => item.id !== id);
      localStorage.setItem("listQuestions", JSON.stringify(newList));
      setListQuestions(newList);
    };

    const newList=[
      ...listQuestions,
      {
        ...item,
        id:uuidv4()        }
    ]

    const editListQuestion = async () =>{
      const {value} = await Swal.fire({
        title:"Question Information",
        html:`<input 
              type="text" 
              id="Question" 
              name="Question" 
              class="swal2-input" 
              placeholder="Question"
              value="${Question}"
              />
              <input 
              type="text" 
              id="Answer1" 
              name="Answer1" 
              class="swal2-input" 
              placeholder="Answer1"
              value="${Answer1}"
              />
              <input 
              type="text" 
              id="Answer2" 
              name="Answer2" 
              class="swal2-input" 
              placeholder="Answer2"
              value="${Answer2}"
              />
              <input 
              type="text" 
              id="Answer3" 
              name="Answer3" 
              class="swal2-input" 
              placeholder="Answer3"
              value="${Answer3}"
              />
              `,
        confirmButtonText:"Save Question",
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
  
      const newList = listQuestions.map((item) => {
        if (item.id === id) {
          item.Question = value.Question;
          item.Answer1 = value.Answer1;
          item.Answer2 = value.Answer2;
          item.Answer3 = value.Answer3;

        }
        return item;
      })
      localStorage.setItem("listQuestions",JSON.stringify(newList))
      setListQuestions(newList);
    }

    const radioAnswerButton = () => {
      const AnswerChecked = document.querySelector('input[name="answer"]:checked').value;
      const newList = listQuestions.map((item) => {
        if (item.id === id) {
          item.AnswerChecked = AnswerChecked;
        }
        return item;
      })
      localStorage.setItem("listQuestions", JSON.stringify(newList));
      setListQuestions(newList);
    }
    

    return(
        <div className="row">
          <div className="col-auto">
          </div>
          <div className="col-3 col-md-3 text-start">
          {"¿"}{Question}{"?"}
          </div>
          <div className="col-2 col-md-2 text-start">
          {"A)"}{Answer1}
          </div>
          <div className="col-2 col-md-2 text-start">
          {"B)"}{Answer2}
          </div>
          <div className="col-2 col-md-2 text-start">
          {"C)"}{Answer3}
          </div>
          <div className="col-2 col-md-2 btn-group btn-group-sm text-end" role="group">
          <button 
            className="btn btn-outline-primary"
            onClick={editListQuestion}
            >
              <i className="bi bi-pencil-square"></i>
            </button>
            <button 
              className="btn btn-outline-danger"
              onClick={deleteListQuestions}
              >
              <i className="bi bi-trash2-fill"></i>
            </button>
            <Radio
            Answer1={Answer1}
            Answer2={Answer2}
            Answer3={Answer3}
            AnswerChecked={AnswerChecked}
            radioAnswerButton={radioAnswerButton}
            />    
          </div>
        </div>
    );
}

export default ListQuestion