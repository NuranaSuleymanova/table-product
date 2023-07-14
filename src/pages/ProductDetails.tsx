
import {useParams} from "react-router-dom";
import Table from '../components/Table';

const ProductDetails = () => {
const {id}=useParams();
  
  return (
    <div>
      <p>{id}</p>
    </div>
  )
}

export default ProductDetails