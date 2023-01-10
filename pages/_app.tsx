import Layout from "../components/Layout";
import "../styles/globals.css";
import store from "../redux/store";
import { Provider } from "react-redux";
import { AppProps } from 'next/app'


const MyApp = ({ Component, pageProps}:AppProps) => {
  return (
    <Provider store={store}>
     <Layout>
       <Component {...pageProps} />
     </Layout>
    </Provider>
  );
}

export default MyApp;
