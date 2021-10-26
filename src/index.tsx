import { QueryClientProvider } from "react-query";
import ReactDOM from "react-dom";
import { StrictMode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import { queryClient } from "~/src/queryClient";
import { App } from "~/src/App";

ReactDOM.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  </StrictMode>,
  document.getElementById("root")
);
