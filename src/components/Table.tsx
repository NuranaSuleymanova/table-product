
import { IProduct } from '../models/model';
import { useNavigate } from "react-router-dom";
interface PropsProduct
{
    product:IProduct
}

const Table = ({product}:PropsProduct) => {

 const navigate=useNavigate()
  return (
    <div>
<table id="customers">
  <thead>
    <th>Image</th>
    <th>Title</th>
    <th>Description</th>
    <th>Details</th>
  </thead>
   <tr>
    <td><img src={product.image} alt="" /></td>
    <td>{product.title.slice(0,10)}</td>
    <td>{product.description.slice(0,100)}</td>
    <td><button onClick={()=>navigate(`/product-detail/${product.id}`)}>Detail</button></td>
  </tr>
 
</table>
    </div>
  )
}

export default Table