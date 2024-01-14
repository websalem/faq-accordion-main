import plusIcon from '../assets/images/icon-plus.svg';
import minusIcon from '../assets/images/icon-minus.svg';
import { useState } from 'react';
const Question = ({title, para}) => {
const [state, setState] = useState(false);
  const  handleClick = ()=>{
    setState(!state);
  }
  return (
    <div className="question">
        <div className="question-title" onClick={handleClick}>
          <h2>{title}</h2>
        <img src={state?minusIcon:plusIcon} alt="plus icon" />
        </div>
        <div className={state?'answer open':'answer'}>
          <p>{para}</p>
        </div>
      </div>
  )
}
export default Question