import React from 'react';
import ReactDOM from 'react-dom'
import obj from './RestControl'

class Update1 extends React.Component {

    render() {                            
		return (
			<div>
				<button onClick={obj.GetStatus}>
  Status
</button>
			</div>


		)
	}
//ReactDOM.render(<RestController />, document.getElementById('root1')); }
}

export default Update1;