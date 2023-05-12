const ListQuestion = ({
      item,
}) => {

    const {id, Question, Answer1, Answer2, Answer3} = item;

    
    return(
        <div className="row">
          <div className="col-auto">
          </div>
          <div className="col-3 col-md-3 text-start">
          {"¿"}{Question}{"?"}
          </div>
          <div className="col-3 col-md-3 text-start">
            {<input type="radio" name={id} value="true"/>}{"A)"}{Answer1}{<br/>}

            {<input type="radio" name={id} value="true"/>}{"B)"}{Answer2}{<br/>}

            {<input type="radio" name={id} value="true"/>}{"C)"}{Answer3}{<br/>}
            {<hr/>}
          </div>
        </div>
    );
}

export default ListQuestion