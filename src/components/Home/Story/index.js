import React, {useState} from "react";
import "../Body/Story.css"
import ItemList from '../../item.json'
import axios from "axios";


const getItems = async() => {
    try{
        return await axios.get();
    } catch(error) {
        console.error(error);
    }
};


const [item, setItem] = useState('');




function Story(){
    return (
        <div className="Story-container" id="Story">
            <div>
               <div>
                 <h1>
                     1st Storsy
                 </h1>
                 <p>
                     길거리에서 복권을 팔던 평범한 베트남 소녀, 국민 영웅이 되기까지 Nguyen Thi ThuNhi.
                     <br/>
                     <span>
                     그녀는 이제 하나의 계단만을 남겨두고 있습니다. 그녀의 WHO벨트 세계 타이틀전을 응원하며, 기념합니다.
                     </span>
                 </p>
                   <div>
                       {ItemList.map(item => (
                           <a href={item.id}  className="Image-Small-Form">
                           <img
                                   key={item.id}
                                   src={item.img}
                           />
                           </a>
                           ))}
                       <div className="Story-components More-Button">
                               More
                       </div>
                   </div>
               </div>
                <button>
                    bid now
                </button>
            </div>
        </div>
    )
}

export default Story;