function QuestionList({question, options, handleClick, currentAnswer}){
    return(
        <div>
            <div><h1>{question}</h1></div>
            <ul>
                {options.map((option, index)=>(
                    <li key={index} onClick={()=>handleClick(option)} className={currentAnswer===option? 'selected' : ''}>{option}</li>
                ))}
            </ul>
        </div>
    );
}

export default QuestionList;