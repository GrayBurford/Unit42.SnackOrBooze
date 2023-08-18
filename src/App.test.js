import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

it("mounts without crashing", function () {
    render(
        <MemoryRouter >
            <App />
        </MemoryRouter>
    )
})

