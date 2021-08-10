import react, { useEffect, useState } from 'react';

import Card from '../component/Card';
import Pagination from '../component/Pagination';
import "../asset/css/main.css";





function Main(props){    

    const [cardSwitch,setcardSwitch] = useState(true);
    // todoList 배열
    const [workData, setworkData] = useState([]);
    // todo 등록시 input
    const [todo, setTodo] =useState('');


    const workDataNumber = [];

    for (var i =0; i <workData.length; i++){
        workDataNumber.push(i+1)
    }


    //인풋창 비우기 
    let arrayCount = workData.length;

    const 텍스트초기화 = ()=> {
        setTodo('');
    }




    //할일 추가 이벤트

    const onClick = (e)=>{
        if(todo=== ''){
            alert('뭐할껀데?')
        } else {
           const freeData = arrayCount === 0 ? arrayCount : workData[0].id - 1; 
            let copy = [...workData]
            copy.push({id: freeData , content: todo , checked: false  });
            setworkData(copy);
            localStorage.setItem('data',JSON.stringify(copy))
            텍스트초기화();
        }
    }

/*     workData.sort((a,b)=> b.id - a.id) */
    //sort 메서드 사용


    //엔터 키 이벤트

    const onKeyPress = (e)=>{
        if(e.key =='Enter'){
            onClick();
        }
    }
 

    workData.sort((a,b) => a.id - b.id)

    useEffect(()=>{
        const comeData1 = localStorage.getItem('data');
        /* comeData()  */


        if(comeData1 !== null) {
         const comeData2 = JSON.parse(comeData1)
         setworkData(comeData2)
         
        }

        
        
    },[setworkData]);

    

    //전체 삭제 이벤트

/*     const comeData = () => {
        const response = localStorage.getItem('data')
        console.log(response.checked)
        if(id === response.id)
        체크이벤트변경(response.checked)
    }
 */

    //페이지네이션 슬라이스

    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(4);

    const indexOfLast = currentPage * postPerPage;
    const indexOfFirst = indexOfLast - postPerPage;


    const currentPosts = (arr) => {
        let currentPost = 0;
        currentPost = arr.slice(indexOfFirst, indexOfLast)
        return currentPost;
    }
    
    let list2 = currentPosts(workData);
    const [plzNm, setPlzNm] = useState(1);

    //전체 삭제 이벤트

    const onEntireRemove = ()=> {
        const entireDelete = workData.filter(item => item.checked !== true)
        const entireDelete2 = workData.filter(item => item.checked !== false)

        if(entireDelete2.length == 0){
            alert('체크를 해야 지워주지')
        }else {
            setworkData(entireDelete)
            localStorage.setItem('data',JSON.stringify(entireDelete)) 
            if(Number.isInteger(entireDelete.length/4)){
                setCurrentPage(plzNm-1)
                setPlzNm(plzNm-1)
            }
        }
        
        if(list2.length !== 0 && currentPage !== 1 ){
            setCurrentPage(1)
            setPlzNm(1)
        }
    };

        
    //삭제 버튼 구현하기

    const onRemove = (id) => {
        const remove1 = workData.filter(item => item.id !== id);
        /* console.log(workData.filter(item => item.id !== id)); */
        setworkData(remove1)
        localStorage.setItem('data',JSON.stringify(remove1))
    }
    


    useEffect(()=> {
        if(currentPage === 0){
            setCurrentPage(1)
            setPlzNm(1)
        }
    },[currentPage])
    


    return (
        <>
        <div className="main_wrap">
            <div className="todo_box">
                <div className="todo_plus">
                    <h2>To Do List</h2>
                    <div className="todo_input">
                        <input placeholder="Add Your todos..." value={todo} onChange={(e)=>{setTodo(e.target.value)}} onKeyPress={onKeyPress} />
                        <button onClick={onClick}>➕</button>
                        <button onClick={onEntireRemove}>🚽</button>
                    </div>
                </div>
                {
                    list2.map((data,i)=>{
                        return (
                        <Card workData={workData} data={data} i={i} setworkData={setworkData} id={data.id} key={data.id} onRemove={onRemove} workDataNumber={workDataNumber} list2={list2} />
                        )
                    })
                }
                {workData.length > 4  ? <Pagination workData={workData} postPerPage={postPerPage} totalPosts={workData.length} setCurrentPage={setCurrentPage} currentPage={currentPage} plzNm={plzNm} setPlzNm={setPlzNm} /> : null }
            </div>            
        </div>
        </>
    )

};








export default Main;