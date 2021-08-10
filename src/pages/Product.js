
import {Link} from 'react-router-dom';
import { useState } from 'react';
import '../asset/css/product.css';
import Desti from '../component/Desti'

function Product(){
    const [dummyData, setdummyData ]= useState([{
        id : 1,
        img : "../../../public/img/back3.webp",
        destination: "서울",
        distance: "차로 45분 거리"
    },
    {
        id : 2,
        img : "../../../public/img/back4.webp",
        destination: "부산",
        distance: "차로 5.5시간 거리"
    },
    {
        id : 3,
        img : "../../../public/img/back5.webp",
        destination: "양양군",
        distance: "차로 3시간 거리"
    },
    {
        id : 4,
        img : "../../../public/img/back6.webp",
        destination: "속초시",
        distance: "차로 3시간 거리"
    },
    {
        id : 5,
        img : "../../../public/img/back7.webp",
        destination: "제주도",
        distance: "차로 7시간 거리"
    },
    {
        id : 6,
        img : "../../../public/img/back8.webp",
        destination: "고성군",
        distance: "차로 3.5시간 거리"
    },
    {
        id : 7,
        img : "../../../public/img/back10.webp",
        destination: "완주군",
        distance: "차로 3시간 거리"
    },
    {
        id : 8,
        img : "../../../public/img/back10.webp",
        destination: "대구",
        distance: "차로 4시간 거리"
    },                
]);




    return (
        <>
        <div className="product_wrap">
            <section className="section_one">
                <h2>어디든 상관없이 떠나고 싶을 때 에어비앤비가 안도니다.</h2>
                <Link to="/" className="search_tag" >유연한 검색</Link>
            </section>
            <section className="section_two">
                <h2>가까운 여행지 둘러보기없기</h2>
                <div className="two_btm">
                {
                    dummyData.map(function(t,index){
                        return (
                        <Desti dummyData={dummyData} i={index} key={t.id} />
                        )
                    })
                }
                </div>
            </section>
            <section className="section_three">
                <h2>어디에서나, 여행은 살아보는건 아니고 </h2>
                <div className="three_btm">
                    <Link to="/" className="content1" >
                        <p>자연생활을 만끽할 수 있는 숙소</p>
                    </Link>
                    <Link to="/" className="content2" >
                        <p>독특한 공간</p>
                    </Link>
                    <Link to="/" className="content3" >
                        <p>집 전체</p>
                    </Link>
                    <Link to="/" className="content4" >
                        <p>반려동물 동반 가능</p>
                    </Link>                                                            
                </div>
            </section>
            <section className="section_four">
                <h2>특별한 즐길 거리를 찾아보다가 지쳐요</h2>
                <div className="four_btm">
                    <Link to="/" className="btm_contents first">
                        <p></p>
                        <h3>체험</h3>
                        <p>가까운 곳에서 즐길 수 있는 잊지 못할 체험을 찾아보세요.</p>
                    </Link>
                    <Link to="/" className="btm_contents second">
                        <p></p>
                        <h3>온라인 체험</h3>
                        <p>호스트와 실시간으로 소통하면서 액티비티를 즐겨보세요.</p>
                    </Link>
                    <Link to="/" className="btm_contents third">
                        <p></p>
                        <h3>추천 컬렉션: 여행 본능을 깨우는 체험</h3>
                        <p>온라인 체험으로 집에서 랜선 여행을 즐기세요.</p>
                    </Link>
                </div>
                <section className="section_five">
                    <h3>호스팅 시작하기</h3>
                    <p>숙소를 공유하여 부수입을 올리고 새로운 <br /> 가능성을 만나세요.</p>
                    <p>자세히 알아보기</p>
                </section>
            </section>
        </div>
        </>
    )
};




export default Product;