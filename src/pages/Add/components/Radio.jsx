import React from 'react'

const Radio = ({Answer1, Answer2, Answer3, AnswerChecked, radioAnswerButton} ) => {
  
  const RadioAnswer = () => {
    document.querySelectorAll(`input[name="answer"]`).forEach(element => {
      if(element.value === AnswerChecked) {
          element.checked = true;
      }
    });
  }
  return (
    <div className="dropdown">
        <a onClick={RadioAnswer} className="btn btn-outline-success dropdown-toggle fw-lighter" role="button" data-bs-toggle="dropdown" aria-expanded="false"> 
        Select { }
        <i class="bi bi-ui-checks"></i>
        </a>
        <ul className="dropdown-menu">
          <li>
            <div className="input-group">
              <div className="input-group-text">
                <input type="radio" value={Answer1} name="answer"/>
              </div>
                <input type="text" className="form-control"  value={Answer1}/>
            </div>
          </li>
          <li>
            <div className="input-group">
              <div className="input-group-text">
                <input type="radio" value={Answer2} name="answer"/>
              </div>
                <input type="text" className="form-control"  value={Answer2}/>
            </div>
          </li>
          <li>
            <div className="input-group">
              <div className="input-group-text">
                <input type="radio" value={Answer3} name="answer"/>
              </div>
                <input type="text" className="form-control"  value={Answer3}/>
            </div>
            <div className="input-group">
            <button onClick={radioAnswerButton} type="button" className="btn btn-outline-success btn-sm text-center">
            { }
            <i class="bi bi-check2-circle"></i>
            </button>
            </div>
          </li>
        </ul>
      </div>
  )
}

export default Radio