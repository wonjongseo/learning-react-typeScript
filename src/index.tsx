import React from "react";
import ReactDOM from "react-dom";
import {QueryClient, QueryClientProvider} from "react-query";
import {ThemeProvider} from "styled-components";

import App from "./App";
import {theme} from "./theme";
//npm install --save typescript @types/node @types/react @types/react-dom @types/jest

// when use react-query, must it.
const queryClient = new QueryClient();

ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
