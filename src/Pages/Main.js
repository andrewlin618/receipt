import React from 'react';
import Cart from '../components/Cart';
import Receipt from '../components/Receipt';
import Nav from './components/Nav';
import {input1, input2, input3} from './data/testInput';

function getSalesTax(price){
  let tem = Math.ceil(price * 10);
  while (tem % 5 !== 0) {
    tem ++;
  }
  return tem / 100;
};

function getImportedTax(price){
  let tem = Math.ceil(price * 5);
  while (tem % 5 !== 0) {
    tem ++;
  }
  return tem / 100;
}


class App extends React.Component {
  state = {
    items : input1,
    salesTax : 0,
    total : 0
  };

  handleSubmit = () => {
    //TODO:
  }

  getReceipt = (test) => {
    // TODO:
    var totalTax = 0;
    var total = 0;
    for (const item of test) {
      let salesTax = item.exemption? 0 : getSalesTax(item.price);
      let importedTax = !item.imported? 0 : getImportedTax(item.price);
      let tax = salesTax + importedTax;
      totalTax += tax;
      item.priceAfterTax = Number((item.price + tax).toFixed(2));
      total += item.priceAfterTax;
    }
    this.setState({
      items : test,
      salesTax : totalTax.toFixed(2),
      total : total.toFixed(2)
    })
  }

  render() {
      return(
        <div className = 'App'>
          <Nav/>
          <div className = 'row'>
          {/* The input field: */}
            <div className = 'col-md-4'> 
              <h3>Add a new item into your cart!</h3>
              <form>
                <label>item:<input type="text" name="name" /></label><br/>
                <label>price:<input type="text" name="price" /></label><br/>
                <label>amount:<input type="number" min = '1' name="amount" /></label><br/>
                <label>tax exemption?<input type="checkbox" name="exemption" /></label><br/>
                <label>imported? :<input type="checkbox" name="imported" /></label><br/>
                <button type='submit' onClick = {this.handleSubmit}>add</button>
              </form>
            </div>  


            {/* The shopping cart: */}
            <div className = 'col-md-4'> 
              <h3>This is your cart.</h3>   
              <button onClick = {() => this.getReceipt(input1)}>Input 1</button>
              <button onClick = {() => this.getReceipt(input2)}>Input 2</button>
              <button onClick = {() => this.getReceipt(input3)}>Input 3</button>      
              <button onClick = {() => this.getReceipt(input3)}>Customer Input</button>      
              <Cart items = {this.state.items}>
              </Cart>
              {/* onClick={() => this.handleBookSave(book.id)}  */}
            </div>  


            {/* The receipt: */}
            <div className = 'col-md-4'>          
              <Receipt items = {this.state.items} tax = {this.state.salesTax} total = {this.state.total}>
              </Receipt>
            </div>
          </div>  
        </div>
      )
  }
};
export default App;
