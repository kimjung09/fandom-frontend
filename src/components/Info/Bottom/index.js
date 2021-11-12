import React from "react";
import "./style/Bottom.css"
import ItemList from '../../item.json';

const Bottom = ({match}) => {
    // itemList match 함수를 불러 ItemList json 파일에 배치된 id 값을 숫자로 불러 - 1씩 뺸 값을 불러온다.
    const item = ItemList[parseInt(match.params.id) - 1];
  return (
      <>
      <div className="Bottom-container" id="Story">
            <form>
                <div>
               <h1>{item.story + 1}</h1>
                <p>{item.description}</p>
                <p>{item.description}</p>

                <h1>{item.story + 2}</h1>
                <p>{item.description}</p>
                <p>{item.description}</p>
                <p>{item.description}</p>

                </div>
                <img src={item.img} />
                <img src={item.img}/>

            </form>

      </div>
      </>
  )
}

export default Bottom;