/**
 * @jest-environment jsdom
 */
const { createTestScheduler } = require("jest");
const buttonClick = require("../button");
// Note we don't include a location to index.html - this is because by
// default the node.fs runs from the nodes root directory, which is 
// where index.html is.
beforeEach(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("DOME tests", () => {
    test("expects p content to change", () => {
        buttonClick();
        expect(document.getElementById('par').innerHTML).toEqual("You Clicked");
    });
    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
});

