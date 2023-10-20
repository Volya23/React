/*class Head extends React.Component {
    render() {
      const h1 = React.createElement('h1', {}, 'Super Component');
      const h2 = React.createElement('h2', {title: 'Hi!'}, `Hello, ${this.props.text}`);
      const p = React.createElement('p', {}, 'Super paragraph');

      const article = React.createElement('article', {}, h1, h2, p);
      
      return article;
    }
}

const Component = React.createElement(Head, {text: 'React'}, 'Text');
const Component2 = React.createElement(Head, {text: 'JavaScript'});
const parent = React.createElement('section', {}, Component, Component2);

const root = document.querySelector('#root');

ReactDOM.render(parent, root);*/

/*class Nik extends React.Component {
    render() {
        const h1 = React.createElement ('h1', {}, `Привіт, ${this.props.text}`);

        return h1;
    }
}

const Component3 = React.createElement(Nik, {text: 'John'});

const root = document.querySelector('#root');

ReactDOM.render(Component3 , root);*/


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0
        }
    }

    increment () {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement () {
        if(this.state.count > 0) {
            this.setState({
            count: this.state.count - 1
        })
        } else if (this.state.count === 0) {
            this.state({
                count: 0
            })
        }
    }

    render() {
        const h2 = React.createElement('h2', {}, this.state.count);
        const button = React.createElement('button', {onClick: () => {this.increment()}}, '+');
        const button2 = React.createElement('button', {onClick: () => {this.decrement()}}, '-')

        return React.createElement(React.Fragment, {}, h2, button, button2);
    }
} 

const component4 = React.createElement(Counter);

const root = document.querySelector('#root');
ReactDOM.render(component4, root);