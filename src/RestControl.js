import React from 'react';

class RestController extends React.Component {
	constructor(props) {
		super(props);
		this.state = {user: ""};
	}
	
	
	componentDidMount() 
	{
		fetch('http://localhost:8080/user/order/status', {
                   //https://jsonplaceholder.typicode.com/posts
			method: 'POST',
			//mode:'no-cors',
			headers: {
				
				"Content-type": "application/json; charset=UTF-8"
				
			},
			body: JSON.stringify({
				emp_id: 7,
    emp_name: "akash",
    cart_id: 3000,
    ph_no: 9892003752,
    Snack: [
        {
            snack_id: 7,
            qty: 4,
            cost: 55
        },
        {
            snack_id: 3,
            qty: 6,
            cost: 75
        }
    ],
    datetime: "2029-08-15",
    total: 190,
    tnx_id: "627832862786483644535",
    payment_status: "canceled"
			}),
		}).then(response => {
            console.log(response)
				return response.text()
			}).then(json => {
				this.setState({ 
					user:json
				});
			});
	}
	render() {                            
		return (
			<div>
				<p><b>New Resource created in the server as shown below</b></p>
				<p>Id : {this.state.user}</p>
			</div>
		)
	}
}
//const obj = new RestController()
export default RestController;