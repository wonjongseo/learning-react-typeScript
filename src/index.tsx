import React from "react";
import ReactDOM from "react-dom";
import {ThemeProvider} from "styled-components";

import App from "./App";
import {dartTheme} from "./theme";
//npm install --save typescript @types/node @types/react @types/react-dom @types/jest

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={dartTheme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
