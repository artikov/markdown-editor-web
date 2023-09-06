import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";
import { Col, Row, Badge, Form } from "react-bootstrap";
import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "./../contexts/ThemeContext";
import MarkdownIt from "markdown-it";

function MarkdownEditor() {
  const [inputMarkdown, setInputMarkdown] = useState("");
  const [outputHtml, setOutputHtml] = useState("");

  // Task 4: Define your state here
  const { colClass, setColClass } = useContext(ThemeContext);

  const topDown = (isChecked) => {
    return isChecked ? setColClass(`col-12`) : setColClass(`col-6`);
  };

  useEffect(() => {
    const md = new MarkdownIt();
    const parsedValue = md.render(inputMarkdown);
    setOutputHtml(parsedValue);
  }, [inputMarkdown]);

  // Task 3: Add Layout code below
  return (
    <>
      <Form className="d-flex justify-content-end gap-2 mb-3">
        <label htmlFor="">top-down</label>
        <Form.Check
          type="switch"
          id="custom-switch"
          onClick={(e) => topDown(e.target.checked)}
        />
      </Form>
      <Row>
        <Col className={`mb-4 ${colClass}`}>
          <Badge className="bg-success text-white active text-nowrap fw-bold">
            Enter Markdown
          </Badge>
          <textarea
            value={inputMarkdown}
            onChange={(e) => setInputMarkdown(e.target.value)}
            className="markdown-editor form-control rounded-bottom"
          />
        </Col>
        <Col className={`mb-4 ${colClass}`}>
          <Badge className="bg-success text-white active text-nowrap fw-bold">
            Preview
          </Badge>
          <div
            dangerouslySetInnerHTML={{ __html: outputHtml }}
            className="markdown-editor form-control rounded-bottom"
          ></div>
        </Col>
      </Row>
    </>
  );
}

export default MarkdownEditor;
