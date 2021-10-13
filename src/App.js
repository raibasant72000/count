import "antd/dist/antd.css";
// import { Button } from 'antd';
import "./App.css";
import {useSelector,useDispatch} from 'react-redux';
import {incNumber,decNumber} from './actions/updown';


function App() {
  const myState= useSelector((state) => state.changeNumber)
  const dispatch = useDispatch();
 
  return (
    <div className="App">
      {/*<Button type="primary">Primary Button</Button>*/}
      <h1>Welcome to'react-redux'</h1>
      <a
        className="quantity_minus"
        title="Decrement"
        onClick={() => dispatch(decNumber())}
        
        
      >
        <span>-</span>
      </a>
      <input
        name="quantity"
        type="text"
        className="quantity_input"
      value ={myState}
      ></input>
      <a
        className="quantity_plus"
        title="Increment"
        onClick= {() => dispatch(incNumber())}
      >
        <span>+</span>
      </a>
    </div>
  );
}

export default App;
