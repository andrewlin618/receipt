import React from 'react';
import Receipt from '../components/Receipt';
import Basket from '../components/Basket';
import Nav from '../components/Nav';
import $ from 'jquery';
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

  handleAddItem = () => {
    alert('ok');
    console.log($('#item').text());
  }

  handleSubmit = () => {
    let newItem = {};
    newItem.name = $('#name').val();
    if (newItem.name === '') return alert('Input the name of item!') 
    newItem.quantity = parseInt($('#quantity').val());
    if (isNaN(newItem.quantity) || newItem.quantity <= 0) return alert('Invalid quantity!') 
    newItem.price = parseFloat($('#price').val());
    if (isNaN(newItem.price))  return alert('Invalid price!')
    newItem.exemption = $('#category').val() !== 'other' ? true : false;
    newItem.imported = $('#imported').val() === 'yes' ? true : false
    let items = this.state.items;
    items.push(newItem)
    this.setState({
      items : items
    });
    $('#name').val('');
    $('#quantity').val('');
    $('#price').val('');
    $('#category').val('other');
    $('#imported').val('no');
  }

  getReceipt = (input) => {
    // TODO:
    var totalTax = 0;
    var total = 0;
    var itemsPricesWithTax = []
    for (const item of input) {
        let salesTax = item.exemption? 0 : getSalesTax(item.price);
        let importedTax = !item.imported? 0 : getImportedTax(item.price);
        let tax = salesTax + importedTax;
        totalTax += item.quantity * tax;
        itemsPricesWithTax.push(Number((item.price + tax).toFixed(2)));
        total += item.quantity * (item.price + tax);
    }
    this.setState({
        items : input,
        itemsPricesWithTax : itemsPricesWithTax,
        salesTax : totalTax.toFixed(2),
        total : total.toFixed(2)
    })
  }

  clearUp = () => {
    this.setState({
      items : [],
      itemsPricesWithTax :[],
      salesTax : 0,
      total : 0
    });
    

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
                {/* Button trigger modal */}
                <button type="button" className="btn btn-dark w-75" data-toggle="modal" data-target="#exampleModalCenter">
                  +
                </button><br/>
                <button type="button" className="btn btn-primary w-25"  onClick = {() => this.clearUp()}>Clear up</button>
                <button type="button" className="btn btn-danger w-50"  onClick = {() => this.getReceipt(this.state.items)}>Check out</button>

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
                            <label >Item</label>
                            <input type="text" className="form-control" id="name"/>

                            <label >Quantity</label>
                            <input type="number" className="form-control" id="quantity" min='1'/>

                            <label >Price</label>
                            <div class="input-group mb-3">
                              <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">$</span>
                              </div>
                              <input type="text" className="form-control" id="price"/>
                            </div>

                            <label >Category</label>
                            <select className="custom-select" id="category">
                              <option value="other">Other</option>
                              <option value="food">Food</option>
                              <option value="book">Book</option>
                              <option value="medical">Medical product</option>
                            </select>

                            <label >Imported</label>
                            <select className="custom-select" id="imported">
                              <option value="no">No</option>
                              <option value="yes">Yes</option>
                            </select>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button className="btn btn-danger" onClick={this.handleSubmit}>Add to basket</button>
                          </div>
                          
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
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
      )
  }
};
export default Main;
