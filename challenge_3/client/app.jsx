

class App extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {currentPage: 'home'};
  	this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(e, state) {
  	console.log(state);

  	e.preventDefault();
  	if (this.state.currentPage === 'home') {
  	  this.setState({currentPage: 'f1'});
  	}
  	if (this.state.currentPage === 'f1') {
  	  this.setState({currentPage: 'f2'});
  	}
  	if (this.state.currentPage === 'f2') {
  	  this.setState({currentPage: 'f3'});
  	}
  	if (this.state.currentPage === 'f3') {
  	  this.setState({currentPage: 'summary'});
  	}
  	if (this.state.currentPage === 'summary') {
  	  this.setState({currentPage: 'home'});
  	}
  }

  render() {
  	if (this.state.currentPage === 'home') {
  	  return (
  	    <button id='checkoutButton' name='checkoutButton' type='button' onClick={(e) => this.handleButtonClick(e)}>Checkout</button>
	)}
  	if (this.state.currentPage === 'f1') {
  	  return (
  		<F1 handleButtonClick = {this.handleButtonClick}/>
  	)}
  	if (this.state.currentPage === 'f2') {
  	  return (
  		<F2 handleButtonClick = {this.handleButtonClick}/>
  	)}
  	if (this.state.currentPage === 'f3') {
  	  return (
  		<F3 handleButtonClick = {this.handleButtonClick}/>
  	)} 
  	if (this.state.currentPage === 'summary') {
  	  return (
  		<Summary handleButtonClick = {this.handleButtonClick}/>	
  	)}     
  }
}


class F1 extends App {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: ''
		}
	}
	render() {
	  return (
		<div> 
		  <form onSubmit= {(e, state) => this.props.handleButtonClick(e, this.state)}>
		    Name: <br />
		    <input type='text' name='name' onChange={(e) => {this.setState({name:e.target.value})}}/>
		    <br />
		    Email: <br />
		    <input type='text' name='email' onChange={(e) => {this.setState({email:e.target.value})}}/>
		    <br />
		    Password: <br />
		    <input type='text' name='password' onChange={(e) => {this.setState({password:e.target.value})}}/>
		    <br />
		    <button id='next1' type='submit'>Next</button>
		  </form>
		  
		</div>
	)}
}


class F2 extends App {
	constructor(props) {
		super(props);
		this.state = {
			address1: '',
			address2: '',
			city: '',
			state: '',
			zip: '',
			phone: '',
		}
	}
	render() {
		return (
		<div> 
		  <form onSubmit={(e, state) => this.props.handleButtonClick(e, this.state)}>
		    Address Line 1: <br />
		    <input type='text' name='address1' onChange={(e) => {this.setState({address1:e.target.value})}}/>
		    <br />
		    Address Line 2: <br />
		    <input type='text' name='address2' onChange={(e) => {this.setState({address2:e.target.value})}}/>
		    <br />
		    City: <br />
		    <input type='text' name='city' onChange={(e) => {this.setState({city:e.target.value})}}/>
		    <br />
		    State: <br />
		    <input type='text' name='state' onChange={(e) => {this.setState({state:e.target.value})}}/>
		    <br />
		    ZIP Code: <br />
		    <input type='text' name='zip' onChange={(e) => {this.setState({zip:e.target.value})}}/>
		    <br />
		    Phone: <br />
		    <input type='text' name='phone' onChange={(e) => {this.setState({phone:e.target.value})}}/>
		    <br />
		    <button id='next2' type='submit'>Next</button>
		  </form>
		  
		</div>
	)}
}


class F3 extends App {
	constructor(props) {
		super(props);
		this.state = {
			creditcard: '',
			expiration: '',
			cvv: '',
			billingzip: ''
		}
	}
	render() {
		return (
		<div> 
		  <form onSubmit={(e, state) => this.props.handleButtonClick(e, this.state)}>
		    Credit Card #: <br />
		    <input type='text' name='creditCard' onChange={(e) => {this.setState({creditcard:e.target.value})}}/>
		    <br />
		    Expiration: <br />
		    <input type='text' name='expiration' onChange={(e) => {this.setState({expiration:e.target.value})}}/>
		    <br />
		    CVV: <br />
		    <input type='text' name='cvv' onChange={(e) => {this.setState({cvv:e.target.value})}}/>
		    <br />
		    ZIP: <br />
		    <input type='text' name='billingzip' onChange={(e) => {this.setState({billingzip:e.target.value})}}/>
		    <br />
		    <button id='next3' type='submit'>Next</button>
		  </form>  
		</div>
	)}
}

class Summary extends App {
  constructor(props) {
	super(props);
  }
  render() {
	return (
	  <button id='purchase' type='submit' onClick={(e, state) => this.props.handleButtonClick(e, this.state)}>Purchase</button>
  )}
}

ReactDOM.render(<App />, document.getElementById('app'));