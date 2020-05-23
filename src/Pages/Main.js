import React from 'react';
import Receipt from '../components/Receipt';
import Basket from '../components/Basket';
import Nav from '../components/Nav';
import Jumbotron from '../components/Jumbotron';


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


class Main extends React.Component {
  state = {
    items : [],
    itemsPricesWithTax :[],
    salesTax : 0,
    total : 0
  };

  handleSubmit = () => {
    //TODO:
  }

  handleAddItem = () => {
    console.log('added');
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
          <Nav active = "home"/>
          <Jumbotron />
          <div className = 'container'>
            <div className = 'row'>
            {/* The input field: */}
              <div className = 'col-md-6'> 
                <h3>1) Add a new item into basket!</h3>
                <Basket items = {this.state.items}/>
                <br />
                {/* Button trigger modal */}
                <button type="button" className="btn btn-dark w-75" data-toggle="modal" data-target="#exampleModalCenter">
                  +
                </button>

                {/* Modal for add item to basket*/}
                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                      <div className="modal-header text-center">
                        <h5 className="modal-title" id="exampleModalLongTitle">Add new item into basket</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>

                      {/* new item */}
                      <div className="modal-body">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text">Item</span>
                          </div>
                          <input type="text" className="form-control" id="item"/>
                        </div>

                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text">Price</span>
                          </div>
                          <input type="text" className="form-control" id="price"/>
                        </div>

                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <label className="input-group-text">Quantity</label>
                          </div>
                          <input type="number" className="form-control" id="quantity" min="1"/>
                        </div>

                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <label className="input-group-text">Category</label>
                          </div>
                          <select className="custom-select" id="category">
                            <option value="1">Food</option>
                            <option value="2">Book</option>
                            <option value="3">Medical product</option>
                            <option value="4">Other</option>
                          </select>
                        </div>

                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <label className="input-group-text">Imported</label>
                          </div>
                          <select className="custom-select" id="category">
                            <option value="no">No</option>
                            <option value="yes">Yes</option>
                          </select>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick = {this.handleAddItem()}>Add to basket</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              

              <div className = 'col-md-6'>    
              <h3>2) Check out to print the receipt</h3>      
              <Receipt 
                  items = {this.state.items} 
                  tax = {this.state.salesTax} 
                  total = {this.state.total}
                  itemsPricesWithTax = {this.state.itemsPricesWithTax} 
              />
              </div>
            </div>  
          </div>         
        </div>
      )
  }
};
export default Main;
