import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.css';
import type { AppProps } from 'next/app'
import {Provider} from 'react-redux';
import store from '../redux/store';
import withRedux from "next-redux-wrapper";

function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
            <Component {...pageProps}/>
          </Provider>

}
//makeStore function that returns a new store for every request
const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(MyApp);
