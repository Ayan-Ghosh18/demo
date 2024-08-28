
import Wrapper from "@/layout/wrapper/wraper";
import "@/styles/globals.css";
import { store } from "@/Toolkit/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
    return (
        <div>
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <Wrapper>
                        <Component {...pageProps} />
                    </Wrapper>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </Provider>
            </QueryClientProvider>
        </div>
    );
}
