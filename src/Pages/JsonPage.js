import React from 'react';
import JSON from '../components/JSON';
import Receipt from '../components/Receipt';
import Nav from '../components/Nav';
import './jsonPage.css';

import input1 from '../data/input1.json'
import input2 from '../data/input2.json'
import input3 from '../data/input3.json'

function getSalesTax(price){
    let tem = Math.ceil(price * 10);
    while (tem % 5 !== 0) tem ++;
    return tem / 100;
};

function getImportedTax(price){
    let tem = Math.ceil(price * 5);
    while (tem % 5 !== 0) tem ++;
    return tem / 100;
}

class Sample extends React.Component {
    state = {
        items : [],
        itemsPricesWithTax :[],
        salesTax : 0,
        total : 0
    };

    handleSubmit = () => {
        var files = document.getElementById('upload').files;
        console.log(files);
        if (files.length <= 0) return false;
        console.log('File uploaded!')
        var fr = new FileReader();
        fr.onload = function(e) { 
            console.log(e.target.result);
        }
        fr.readAsText(files.item(0));      
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
            totalTax += tax;
            itemsPricesWithTax.push(Number((item.price + tax).toFixed(2)));
            total += (item.price + tax);
        }
        this.setState({
            items : input,
            itemsPricesWithTax : itemsPricesWithTax,
            salesTax : totalTax.toFixed(2),
            total : total.toFixed(2)
        })
    }

    handleOnChange = () => {
        let file = document.getElementById('upload').files[0];
        console.dir(file);
    }

    render() {
        return(
            <div className = 'Main'>
                <Nav active = "jsonPage"/>
                <br/><br/>
                <div className = 'container'>
                <h3 className='text-center'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/JSON_vector_logo.svg/1200px-JSON_vector_logo.svg.png" height='25px' alt='logo'/> JSON</h3>  
                    <div className = 'row'>  
                        {/* The shopping cart: */}
                        <div className = 'col-md-2'>
                            <button className='btn btn-dark m-1' onClick = {() => this.getReceipt(input1)}>Sample 1</button>
                            <button className='btn btn-dark m-1' onClick = {() => this.getReceipt(input2)}>Sample 2</button>
                            <button className='btn btn-dark m-1' onClick = {() => this.getReceipt(input3)}>Sample 3</button>      
                            <button className='btn btn-secondary m-1' onClick = {() => this.getReceipt([])}>Clear Input </button>
                            <div className="upload-btn-wrapper">
                                <input type="file" accept='.json' id = 'upload' onChange={this.handleOnChange}/>
                                <button className="btn btn-success m-1" onClick={this.handleSubmit}>Upload</button>
                            </div>
                        </div>
                        <div className = 'col-md-5'>  
                            <JSON items = {this.state.items} />
                        </div>  

                        {/* <div className = 'col-md-4'> 
                            {this.state.itemsPricesWithTax.length > 0 && <Cart items = {this.state.items} />}
                        </div> */}
                        {/* The receipt: */}
                        <div className = 'col-md-5'>    
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
export default Sample;
