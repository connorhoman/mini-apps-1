class App extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {currentPage: 'f1'}
  }



  render() {
  	if (this.state.currentPage === 'home') {
  	  return (
  	    <button id='checkoutButton' name='checkoutButton' type='button'>Checkout</button>
	)}

  	if (this.state.currentPage === 'f1') {
  	  return (
  		<F1 />
  	)}

  	if (this.state.currentPage === 'f2') {
  	  return (
  		<F2 />
  	)}

  	if (this.state.currentPage === 'f3') {
  	  return (
  		<F3 />
  	)}      
  }
}

class F1 extends App {
	constructor(props) {
		super(props);
	}
	render() {
	  return (
		<div> 
		  <form>
		    Name: <br />
		    <input type='text' name='name'/>
		    <br />
		    Email: <br />
		    <input type='text' name='input'/>
		    <br />
		    Password: <br />
		    <input type='text' name='password'/>
		  </form>
		  <button id='next1' name='next1' type='button'>Next</button>
		</div>
	)}
}

class F2 extends App {
	constructor(props) {
		super(props);
	}
	render() {
		return (
		<div> 
		  <form>
		    Address Line 1: <br />
		    <input type='text' name='address1'/>
		    <br />
		    Address Line 2: <br />
		    <input type='text' name='address2'/>
		    <br />
		    City: <br />
		    <input type='text' name='city'/>
		    <br />
		    State: <br />
		    <input type='text' name='state'/>
		    <br />
		    ZIP Code: <br />
		    <input type='text' name='zipcode'/>
		    <br />
		    Phone: <br />
		    <input type='text' name='phone'/>
		  </form>
		  <button id='next2' name='next2' type='button'>Next</button>
		</div>
	)}
}

class F3 extends App {
	constructor(props) {
		super(props);
	}
	render() {
		return (
		<div> 
		  <form>
		    Credit Card #: <br />
		    <input type='text' name='creditCard'/>
		    <br />
		    Expiration: <br />
		    <input type='text' name='expiration'/>
		    <br />
		    CVV: <br />
		    <input type='text' name='cvv'/>
		    <br />
		    ZIP: <br />
		    <input type='text' name='zip'/>
		  </form>
		  <button id='next3' name='next3' type='button'>Next</button>
		</div>
	)}
}

ReactDOM.render(<App />, document.getElementById('app'));