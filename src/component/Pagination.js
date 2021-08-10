import React, { useEffect,useState } from 'react';

import '../asset/css/main.css'



export default function Pagination({workData, postPerPage, totalPosts, currentPage, setCurrentPage, plzNm, setPlzNm}) {



    const pageNumber = [];

    for(var i=0; i<Math.ceil(totalPosts / postPerPage); i++) {
        pageNumber.push(i+1)
    };


    const pageCutFnc = (arr,startNm,LastNm) => {
        let answer = pageNumber.slice(startNm,LastNm)
        return answer
    };




    const [pageList, setPageList] = useState([]);

    







    useEffect(()=>{
        setPageList(pageCutFnc(pageNumber,0,10))
        
    },[workData])    



    const onNextBTn = () => {
        if(currentPage < pageNumber.length){
            setCurrentPage(plzNm+1)
            setPlzNm(plzNm+1)
        }
    }

    const onPrevBtn = () => {
        if(currentPage > 1){
            setCurrentPage(plzNm-1)
            setPlzNm(plzNm-1)
        }
    }



    return (
        <div className="pagination_wrap">
            <span className="page_move prevBtn" onClick={onPrevBtn}>
            ◀
            </span>
            {
               pageList.map((obj, index) => (
                   <div 
                   className={currentPage === obj ? "now_page" : "page"}
                   key={index} 
                   onClick={()=>{
                       setCurrentPage(obj)
                       setPlzNm(obj)
                   }}>
                       {pageList[index]}
                   </div>
               ))
            }
            <span className="page_move nextBtn" onClick={onNextBTn}>
            ▶
            </span>
        </div>
    )
};