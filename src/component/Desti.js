
import '../asset/css/product.css';
import {Link} from 'react-router-dom'



function Desti(props){
    return (
        <Link className="travel_des" href="#">
            <div className="des_left">
                <p></p>
            </div>
            <div className="des_right">
                <h3>{props.dummyData[props.i].destination}</h3>
                <p>{props.dummyData[props.i].distance}</p>
            </div>
        </Link>
    )
};



export default Desti;


