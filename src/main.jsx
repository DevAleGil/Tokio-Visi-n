import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ContextoProvaider } from "./MiContexto/Contexto";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ContextoProvaider>
          <App />
        </ContextoProvaider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
