import './App.css';
import { ApolloProvider } from '@apollo/client';
import client from '../src/config/client';
import Inicio from '../src/views/index';
function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Inicio></Inicio>
      </div>
    </ApolloProvider>
  );
}

export default App;
