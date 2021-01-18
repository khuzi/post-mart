import { QueryClient, QueryClientProvider } from "react-query";

import GlobalState from "../context/globalState";
import { Layout } from "../components";

import "../styles/globals.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalState>
        <Layout>
          <div style={{ maxWidth: "1200px", margin: "auto" }}>
            <Component {...pageProps} />
          </div>
        </Layout>
      </GlobalState>
    </QueryClientProvider>
  );
}

export default MyApp;
