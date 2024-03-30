const data = [
    {
        id : 1,
        question : "What is the reason to choose the name let as a keyword ?",
        answer : "let is a mathematical statement that was adopted by early programming languages like Scheme and Basic. It has been borrowed from dozens of other languages that use let already as a traditional keyword as close to var as possible."
    },
    {
        id : 2,
        question : "What is the Temporal Dead Zone ?",
        answer : "The Temporal Dead Zone is a behavior in JavaScript that occurs when declaring a variable with the let and const keywords, but not with var. In ECMAScript 6, accessing a let or const variable before its declaration (within its scope) causes a ReferenceError. The time span when that happens, between the creation of a variable’s binding and its declaration, is called the temporal dead zone."
    },
    {
        id : 3,
        question : "What are modules ?",
        answer : "Modules refer to small units of independent, reusable code and also act as the foundation of many JavaScript design patterns. Most of the JavaScript modules export an object literal, a function, or a constructor."
    },
    {
        id : 4,
        question : "What is scope in javascript ?",
        answer : "Scope is the accessibility of variables, functions, and objects in some particular part of your code during runtime. In other words, scope determines the visibility of variables and other resources in areas of your code."
    },
    {
        id : 5,
        question : "How do you manipulate DOM using a service worker ?",
        answer : "Service worker can't access the DOM directly. But it can communicate with the pages it controls by responding to messages sent via the postMessage interface, and those pages can manipulate the DOM."
    },
    {
        id : 6,
        question : "What is IndexedDB ?",
        answer : "IndexedDB is a low-level API for client-side storage of larger amounts of structured data, including files/blobs. This API uses indexes to enable high-performance searches of this data."
    }

]
export default data;