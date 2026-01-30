import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "./components/theme-provider.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <SnackbarProvider maxSnack={4}>
      <ThemeProvider defaultTheme="dark">
        <App />
      </ThemeProvider>
    </SnackbarProvider>
  </Provider>,
);
