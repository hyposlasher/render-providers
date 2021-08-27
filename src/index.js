import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export const FooContext = React.createContext();
export const BarContext = React.createContext();
export const BazContext = React.createContext();

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
