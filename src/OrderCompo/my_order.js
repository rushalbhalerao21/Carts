import React from 'react';
import './Save.css';
import posts from './Posts';



class My_order extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value:1,
                        result:0,
                       num1:0,
                    num2:0,
                    posts :posts,
                  qty:0 ,
                list:[1],
              data:[{ "qty": 0,
              "price":0,
              "total":0,}],};
        this.handleChange = this.handleChange.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onAddItem = this.onAddItem.bind(this)
    this.onChangeQty = this.onChangeQty.bind(this)
    this.onChangePrice = this.onChangePrice.bind(this)


      }
      onAddItem() {
        //this.setState(state => {
       // const list = state.list.concat(state.value);})
       this.setState({ list: this.state.list.concat(6) })
         }
    
      handleChange(event) {
       // this.setState({value: event.target.value});
        this.setState({qty: event.target.value});

        console.log(this.state.qty)
      }


      onChangeQty(e,index){
      //  let value = e.target.value
      let value = e.target.value
      let qty = e.target.qty
      let price = e.target.price
      this.setState((state)=>{
    
          let postTemp = state.data
          postTemp[index].qty = value
          
          postTemp[index].total=postTemp[index].qty*postTemp[index].price
          
            return{
              ...state,
              posts:postTemp
            }
        })
    }

    onChangePrice(e,index){
      //  let value = e.target.value
      let value = e.target.value
      this.setState((state)=>{
    
          let postTemp = state.data
          
          postTemp[index].price = value
          
            return{
              ...state,
              posts:postTemp
            }
        })
    }


      onChangeValue = event => {
        this.setState({ value: event.target.value });
        this.setState({ list: this.state.list.concat(6) });
        console.log(this.state.list)
      };

           onRemoveItem = i => {
            this.setState(state => {
              const list = state.data.filter((item, j) => i !== j);
        
              return {
                list,
              };
            });
          };

          handleAddShareholder = () => {
            this.state.data.push({
               // "name": "",
                "qty": 0,
                "price":0,
                "total":0,
            })
            this.setState({data:this.state.data})
          };

  
// onChange={this.handlenum1Change}
      

 render()    
{
    return (
       <table>
         <tr>
                    <th> ADD</th>
                    <th>Menu </th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
            </tr>
           { this.state.data.map((post,index)=> 
          <tr>
                 <td>   <button class=" form-control col-sm-1 offset-sm-1 text-center" type="button"  onClick={this.handleAddShareholder}    > +</button> </td>

                 <td>   <select 
               onChange={(e)=>this.onChangePrice(e,index)}>
                        <option>Menu</option>
                        {
                            posts.map(post => (
                              <option name='price' onChange={(e)=>this.onChangePrice(e,index)} value={post.qty}>{post.title}</option>
                            ))
                        }
                            </select>  </td>

                            <td>    <input type="number"  class="form-control col-sm-2 text-center" min="0" name='qty' onChange={(e)=>this.onChangeQty(e,index)} /> </td>
                            <td>    <input   class="form-control col-sm-2 text-center" value={post.price} readonly/>  </td>
                            <td>    <input  class="form-control col-sm-2 text-center" value={post.total} readonly/>  </td>
                            <td>    <button type="button" class="form-control col-sm-1 text-center" onClick={() => this.onRemoveItem(index)}> -</button>  </td>
                     
                        
        </tr>)}

       

           </table> 
            
                
            );
        
}

}

export default My_order;