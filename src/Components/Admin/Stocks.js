import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';
import './Stocks.css';
function Stocks() {
  return (
    <Table className='tb'>
      <thead>
        <tr>
          <th>SI.NO:</th>
          <th>STOCKS</th>
          <th>PER-PRICE-₹</th>
          <th >CATEGORY</th>
          <th>AMOUNT INVESTED-₹</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>DATA</td>
          <td>DATA</td>
          <td>DATA</td>
          <td>DATA</td>
          <td>DATA</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Stocks;