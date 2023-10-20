/*class Head extends React.Component {
    render() {
      const h1 = React.createElement('h1', {}, 'Super Component');
      const h2 = React.createElement('h2', {title: 'Hi!'}, `Hello, ${this.props.text}`);
      const p = React.createElement('p', {}, 'Super paragraph');

      const article = React.createElement('article', {}, h1, h2, p);
      
      return article;
    }
}

const Component = React.createElement(Head, {text: 'React'});
const Component2 = React.createElement(Head, {text: 'JavaScript'});
const parent = React.createElement('section', {}, Component, Component2);

const root = document.querySelector('#root');

ReactDOM.render(parent, root);*/

class Nik extends React.Component {
    render() {
        const h1 = React.createElement ('h1', {}, `Привіт, ${this.props.text}`);

        return h1;
    }
}

const Component3 = React.createElement(Nik, {text: 'John'});

const oot = document.querySelector('#root');

ReactDOM.render(Component3, root);


