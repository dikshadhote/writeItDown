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
import { FilterProvider } from "./Context/filter-notes-context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <FilterProvider>
          <NoteProvider>
            <ArchiveProvider>
              <TrashProvider>
                <App />
              </TrashProvider>
            </ArchiveProvider>
          </NoteProvider>
        </FilterProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
