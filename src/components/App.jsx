import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";
import Container from "react-bootstrap/Container";
import MarkdownCheatSheet from "./MarkdownCheatSheet.jsx";
import MarkdownEditor from "./MarkdownEditor.jsx";
import { ThemeContext } from "../contexts/ThemeContext";

function App() {
  const [colClass, setColClass] = useState("col-md-6");

  return (
    <ThemeContext.Provider value={{ colClass, setColClass }}>
      <Container className="my-5">
        <div className="text-center">
          <h1 className="fw-bold">Convert Markdown to HTML</h1>
          <p>
            Markdown to HTML Converter helps to convert markdown markup language
            to HTML code
          </p>
        </div>

        <MarkdownEditor />

        <MarkdownCheatSheet />
      </Container>
    </ThemeContext.Provider>
  );
}

export default App;
