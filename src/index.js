import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export const FooContext = React.createContext()
export const BarContext = React.createContext()
export const BazContext = React.createContext()

const Providers = ({providers, children}) => {
  const renderProvider = (providers, children) => {
    const [provider, ...restProviders] = providers;
    
    if (provider) {
      return React.cloneElement(
        provider,
        null,
        renderProvider(restProviders, children)
      )
    }

    return children;
  }

  return renderProvider(providers, children)
}

ReactDOM.render(
  <Providers providers={[
   <FooContext.Provider value="foo" />,
    <BarContext.Provider value="bar" />,
    <BazContext.Provider baz="baz" />
  ]}>
    <App />
  </Providers>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
