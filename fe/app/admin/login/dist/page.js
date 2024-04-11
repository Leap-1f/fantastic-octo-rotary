"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
        React.createElement(material_1.Button, __assign({ variant: "contained", sx: { widtg: widtg } }, )),
        "} size=\"large\" > Submit"));
    material_1.Stack >
    ;
    ;
}
exports["default"] = Page;
