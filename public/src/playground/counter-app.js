class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
    handleAddOne() {
        console.log('Add one'); 
        this.state.count = this.state.count + 1;
        console.log(this.state);
          
    }
    handleMinusOne() {
        console.log('Minus one');   
    }
    handleReset() {
        console.log('Reset');   
    }
    render() {
        return (
            <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.handleAddOne}>Plus 1</button>
            <button onClick={this.handleMinusOne}>Minus 1</button>
           <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
// let count = 0;
// const addOne = () => {
//     count = count + 1
//     renderCounter()
//     // return ;
    
// };
// const minusOne = () => {
//     count = count - 1
//     renderCounter()
    
// };
// const reset = () => {
//     count = '0';
//     renderCounter()
    
// };



// const renderCounter = () => {
//     const templateTwo = (
//         <div>
//         <h1>Count: {count}</h1>
//         <button onClick={addOne}>Plus 1</button>
//         <button onClick={minusOne}>Minus 1</button>
//         <button onClick={reset}>Reset</button>
//         </div>
//     );


// ReactDOM.render(templateTwo, appRoot);
// }
// renderCounter();