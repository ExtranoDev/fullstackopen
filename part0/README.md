## New note diagram

```mermaid
sequenceDiagram
    participant student
    participant browser
    participant server

    student->>browser: Input new note name and press enter

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the CSS file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ content: "yo", date: "2024-10-28T06:41:05.712Z" }, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes
```

## New note diagram

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ content: "yo", date: "2024-10-28T06:41:05.712Z" }, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes
```

## New note in Single page app diagram

```mermaid
sequenceDiagram
    participant student
    participant browser
    participant server

    student->>browser: Input new note name and press enter

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa [{content: "single page app does not reload the whole page", date: "2019-05-25T15:15:59.905Z"}]
    activate server
    server-->>browser: {message:"note created"}
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server
    Note right of browser: The browser executes the callback function that renders the notes in real time
```
