import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { NoteProvider } from "./Context/notes-context";
import { AuthProvider } from "./Context/auth-context";
import { ArchiveProvider } from "./Context/archive-context";
import { TrashProvider } from "./Context/trash-context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <NoteProvider>
          <ArchiveProvider>
            <TrashProvider>
              <App />
            </TrashProvider>
          </ArchiveProvider>
        </NoteProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
