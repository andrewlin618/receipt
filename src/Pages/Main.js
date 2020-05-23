import React from 'react';
import Receipt from '../components/Receipt';
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
          <Nav active = "home"/>
          <Jumbotron />
          <div className = 'container'>
            <div className = 'row'>
            {/* The input field: */}
              <div className = 'col-md-6'> 
                <h3>1) Add a new item into basket!</h3>

                {/* Button trigger modal */}
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                  +
                </button>

                {/* Modal */}
                <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                      <div className="modal-header text-center">
                        <h5 className="modal-title" id="exampleModalLongTitle">Add new item into basket</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <label>Item:<input type="text" name="name" placeholder="book"/></label><br/>
                        <label>price:<input type="text" name="price" /></label><br/>
                        <label>amount:<input type="number" min = '1' name="amount" /></label><br/>
                        <label>tax exemption?<input type="checkbox" name="exemption" /></label><br/>
                        <label>imported? :<input type="checkbox" name="imported" /></label><br/>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Add to basket</button>
                      </div>
                    </div>
                  </div>
                </div>


              </div>  
              <div className = 'col-md-6'>          
              {this.state.items.length === 0 && <h3>2) Check out to get your receipt.</h3>}      
              {this.state.items.length > 0 && <Receipt items = {this.state.items} tax = {this.state.salesTax} total = {this.state.total}>
              </Receipt>}
              </div>
            </div>  
          </div>         
        </div>
      )
  }
};
export default Main;
