"use client";
"use strict";
exports.__esModule = true;
var material_1 = require("@mui/material");
function Page() {
    return (React.createElement(material_1.Stack, { spacing: 4, sx: {
            width: "20vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }, direction: "column" },
        React.createElement(material_1.Typography, { variant: "h4" }, "\u0411\u04AF\u0440\u0442\u0433\u04AF\u04AF\u043B\u044D\u0445"),
        React.createElement(material_1.TextField, { label: "Name", variant: "outlined" }),
        React.createElement(material_1.Button, { variant: "contained", size: "small" }, "Submit")));
}
exports["default"] = Page;
