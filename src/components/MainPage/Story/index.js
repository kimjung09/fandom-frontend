import React from "react";
import "./style/Story.css"
import ItemList from '../../item.json'
import Image from '../../images/main_11.jpg'

function Story(){
    return (
        <div className="Story-container" id="Story">
            <div className="Story-components">
               <div className="Story-components form">
                 <h1 className="Story-components form h1">
                     1st Story
                 </h1>
                 <p className="Story-components form p">
                     길거리에서 복권을 팔던 평범한 베트남 소녀, 국민 영웅이 되기까지 Nguyen Thi ThuNhi.
                     <br/>
                     <span className="Story-components form p 375px">
                     그녀는 이제 하나의 계단만을 남겨두고 있습니다. 그녀의 WHO벨트 세계 타이틀전을 응원하며, 기념합니다.
                         </span>
                 </p>
                   <div className="Story-components Image-Container">
                       {ItemList.map(item => (
                           <a href={item.id}  className="Story-components Image-Small-Form">
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
                <button className="NFT-Button-container">
                    bid now
                </button>
            </div>
        </div>
    )
}

export default Story;