import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.css';
import type { AppProps } from 'next/app'
import {Provider} from 'react-redux';
import store from '../redux/store';
import withRedux from "next-redux-wrapper";
import client from './graphQl';
import { ApolloProvider } from '@apollo/client';

function MyApp({ Component, pageProps }: AppProps) {
  return <ApolloProvider client={client}>
        <Provider store={store}>
            <Component {...pageProps}/>
          </Provider>
        </ApolloProvider>
  }
//makeStore function that returns a new store for every request
const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(MyApp);
