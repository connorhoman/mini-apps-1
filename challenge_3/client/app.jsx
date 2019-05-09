class App extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {currentPage: 'home'};
  	this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(e) {
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
  	if (this.state.currentPage === 'summary') {
  	  return (
  		<Summary />	
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
		  <form onSubmit= {(e) => this.props.handleButtonClick(e)}>
		    Name: <br />
		    <input type='text' name='name'/>
		    <br />
		    Email: <br />
		    <input type='text' name='input'/>
		    <br />
		    Password: <br />
		    <input type='text' name='password'/>
		    <br />
		    <button id='next1' type='submit'>Next</button>
		  </form>
		  
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
		  <form onSubmit={(e) => this.props.handleButtonClick(e)}>
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
		    <br />
		    <button id='next2' type='submit'>Next</button>
		  </form>
		  
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
		  <form onSubmit={(e) => this.props.handleButtonClick(e)}>
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
	  <button id='purchase' type='submit' onClick={(e) => this.props.handleButtonClick(e)}>Next</button>
  )}
}

ReactDOM.render(<App />, document.getElementById('app'));