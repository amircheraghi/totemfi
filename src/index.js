import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// StyleGuides (Font)
import "./Styles/index.css";
import "./Styles/Fonts/Lato-Regular.ttf";

//Web3
import Web3 from "web3";
import { Web3ReactProvider } from "@web3-react/core";
import { MetaMaskProvider } from "./Hooks/useMetaMask";

const getLibrary = (provider, connector) => {
    return new Web3(provider);
};

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Web3ReactProvider getLibrary={getLibrary}>
                <MetaMaskProvider>
                    <App />
                </MetaMaskProvider>
            </Web3ReactProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
