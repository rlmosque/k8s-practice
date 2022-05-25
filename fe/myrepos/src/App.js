import './App.css';
import {Component} from "react";

class App extends Component{
    constructor() {
        super();
        this.state = {
            operation: '',
            num1: '',
            num2: '',
            result: ''};
        this.onRadioChange = this.onRadioChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onRadioChange = (e) => {
        this.setState({operation: e.target.value});
    }
    onNum1Change = (e) => {
        this.setState({num1: e.target.value});
    }
    onNum2Change = (e) => {
        this.setState({num2: e.target.value});
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.calculate(this.state.operation, this.state.num1, this.state.num2);
    }
    async calculate(operation, num1, num2){
        console.log(operation + ' ' + num1 + ' ' +num2)
        // Set fetch request options
        const options={
            host: '34.148.126.42',
            port: 5000,
            path: '/calculate/' + operation,
            method: 'POST',
            headers: {'Content-Type': 'application/json',
                        'Accept': 'application/json'},
            body: JSON.stringify({num1: parseFloat(num1),
                                    num2: parseFloat(num2)})
        };
        // Call REST api 
        const response = await fetch(options);
        console.log(response);
        const data = await response.json() ;
        // set response to reply from api
        console.log(data);
        //this.setState({result: data})
    }

    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <form onSubmit={this.onSubmit}>
                        <strong>Select Operation</strong><br/>
                        <input type="radio" id="add" name="operation" 
                            value="add" checked={this.state.operation === "add"} onChange={this.onRadioChange}
                        />
                        <span>Add</span><br/>
                        <input type="radio" id="multiply" name="operation" 
                            value="multiply" checked={this.state.operation === "multiply"} onChange={this.onRadioChange}
                        />
                        <span>Multiply</span><br/>
                        <input type="radio" id="divide" name="operation" 
                            value="divide" checked={this.state.operation === "divide"} onChange={this.onRadioChange}
                        />
                        <span>Divide</span><br/>
                        num1: <input name="num1" type="number" step="0.01" onChange={this.onNum1Change} /> <br/>
                        num2: <input name="num2" type="number" step="0.01" onChange={this.onNum2Change}/> <br/>
                        <button type="submit">Submit</button><br/>
                        <span>Result: <input name="result" type="textbox" value={this.state.result}/></span>
                    </form>
                </header>
            </div>
        );
    }
}

export default App;
