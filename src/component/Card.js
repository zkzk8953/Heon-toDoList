
import { useEffect, useState } from 'react';
import "../asset/css/card.css"

function Card(props){
        //props 단축

    const { data } = props;

     

    //체크이벤트  
    const [체크이벤트, 체크이벤트변경] = useState(false);

    const checkEvent = ()=> {
        // data.checked = !data.checked;

        // if(체크이벤트 === false){
        //     data.checked = true
        //     체크이벤트변경(true)
        //     localStorage.setItem('data',JSON.stringify(props.workData))
        // }else if(체크이벤트 === true){
        //     data.checked = false;
        //     체크이벤트변경(false)
        //     localStorage.setItem('data',JSON.stringify(props.workData))
        // }
        if(data.checked){
            data.checked = false;
            체크이벤트변경(false)
        }else{
            data.checked = true
            체크이벤트변경(true)
        }
        localStorage.setItem('data',JSON.stringify(props.workData))
    }

    
    //card 삭제 가능여부 이벤트

    /* const deleteEvent = ()=> {
        if(props.workData[props.i].checked === true){
            window.confirm('삭제하시겠습니까?')
        }else {
            window.alert('일단 해세요')
        }
    } */


    //modyfy 이벤트
    const [thisIsswitch,setSwitch] = useState(false)
    const [modify,setModify] = useState([{

    }])
    const [누른제목,누른제목변경] = useState(0);
    const [todo2,setTodo2] = useState('');

    //useEffect
    useEffect(()=>{
        체크이벤트변경(data.checked)
        // const comedata = localStorage.getItem('data');
        // const comeData2 = JSON.parse(comedata)

        // console.log(comeData2[props.i].checked)

        // if(comeData2[props.i].checked == true){
        //     setcbCss("todo_card_active")
        //     setcbCss2("todo_card_active2")
        // }else if(comeData2[props.i].checked == false){
        //     setcbCss("todo_card_h3")
        //     setcbCss2("todo_card_p")
        // } 

    },[data.checked])



    return (
        <>
        <div className="todo_card">
            <input type="checkbox" id={data.id} onChange={checkEvent} value={data.checked} />
            <label className={data.checked? "label_css2" : "label_css1"} htmlFor={data.id} />
            <div className="work">
                <h3 className={data.checked? "todo_card_active":"todo_card_h3"}>{data.content}</h3>
                {/* <p className={cbCss2}>{data.num}</p> */}
                <p className={data.checked? "todo_card_active2":"todo_card_p"}>{Math.abs(data.id) +1 } 번째 할일</p>
            </div>
            <div className="card_btn">
                <button onClick={()=>{
                    setSwitch(true)
                    누른제목변경(props.i)
                }}></button>
                <button onClick={()=>{
                    if(data.checked===false){   
                        window.alert("일단 하세요")
                    } else {
                        props.onRemove(props.id)
                    }
                }}></button>    
            </div>
        </div>
        {
                thisIsswitch === false
                ? null
                : <Modify thisIsswitch={thisIsswitch} setSwitch={setSwitch}  workData={props.workData}  setworkData={props.setworkData} setTodo2={setTodo2} todo2={todo2} 누른제목={누른제목}/>
        }
        </>
        
    )
}



function Modify(props){


    const onModify = ()=> {
        if(props.todo2 ===''){
            alert('내용 입력하세요')
        }else {
            let copy3 = [...props.workData]
                copy3[props.누른제목].content = props.todo2
                props.setworkData(copy3)

                localStorage.setItem('data',JSON.stringify(copy3))
                props.setSwitch(false)
        }
    }

    const onKeyPress2 = (e)=>{
        if(e.key == 'Enter'){
            onModify();
        }
    }

    

    return (
    <div className="modify_tab">
        <div className="modify_true">
            <input type="text" placeholder="Modify?" onChange={(e)=>{props.setTodo2(e.target.value)}} onKeyPress={onKeyPress2} />
            <button className="pub_btn" onClick={()=>{onModify()}} >⭕</button>
            <button className="close_btn" onClick={()=>{props.setSwitch(false)}}>❌</button>
        </div>
    </div> 
    )

}



export default Card;