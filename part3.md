#### What is JSX? What is it's function?
JSX stands for JavaScript XML. It transcompiles Javascript and acts as an syntax extension for XML like code. In layman's terms, it adds XML syntax to Javascript. JSX is most commonly used in conjucntion with React. JSX produces react 'elements'. JSX expressions can only be used by embedding the code with curly bracers like this <h1> 2+2 ={2+2} </h1> The output in the browser would be 2+2=4. After compilation, JSX expressions become regular JavaScript objects that can be used in if else statements. 

#### What does reactDOM.render() do?
reactDOM.render() uses React to render whatever is in the parentheses in the browser using DOM manipulation. Since react elements are plain bjects, React DOM updates the DOM to match the virtual DOM.

#### What are components?
Components are like JavaScript. Components allow you to split the UI into reusable, independent pieces. Components accept inputs and return React elements dictate what appears in browser. You can use functions or classes to define components, with the simplest way being functions. Component names are always started with a capital letter. Components can refer to other components in their output. Components defined as classes have some additional features. Local state is exactly that: a feature available only to classes like state which is similar to props but is private and fully controlled by the component.
``` function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
} 
```

#### What are props?
Props are arbitrart inputs; the object produced when React sees an element representing a user defined component and its attributes.

#### What is state?
State is 