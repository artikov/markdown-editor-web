import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";
import MarkdownDocsCard from "./MarkdownDocsCard.jsx";
import { Col, Row } from "react-bootstrap";

function MarkdownCheatSheet() {
  return (
    <div>
      <h2 className="text-center my-5 fw-bold">Markdown Syntax Cheatsheet</h2>
      <Row>
        <Col className="col-12 col-md-6">
          <MarkdownDocsCard title="Paragraph Format">
            <p>
              <s>Strikethrough:</s>~~Strikethrough~~ <br />
              Horizontal rules: --- (three hyphens),***(three <br />
              asterisks), or ___(three underscores).
            </p>
          </MarkdownDocsCard>

          <MarkdownDocsCard title="Headings">
            <p className="pb-2">
              All heading levels (e.g. H1, H2, etc), are marked by # at the
              beginning of a line. For example, an H1 is # Heading 1 and an H2
              is ## Heading 2. This continues to ###### <br /> Heading 6.
            </p>
          </MarkdownDocsCard>

          <MarkdownDocsCard title="Links">
            <p>
              Links can be created using several methods:
              <br />
              <br /> Links can be [inline](https://markdowntohtml.com) Inline
              links can [have a title](https:// markdowntohtml.com "Awesome
              Markdown...)
            </p>
          </MarkdownDocsCard>
        </Col>
        <Col className="col-12 col-md-6">
          <MarkdownDocsCard title="Lists (Ordered Lists and Unordered Lists)">
            <p>
              Lists are made by using indentation and a beginning-of-line marker
              to indicate a list item. For example, unordered lists are made
              like this: <br /> <br />
              * One item <br /> * Another item <br /> &nbsp;* A sub-item <br />
              &nbsp; &nbsp; * A deeper item <br /> &nbsp;* Back in sub-item land{" "}
              <br /> * And back at the main level <br /> Unordered lists can use
              an asterisk (*), plus (+), <br /> or minus (-) to indicate each
              list item. <br /> <br />
              Ordered lists use a number at the beginning of the line. The
              numbers do not need to be incremented - this will happen for
              you...
            </p>
          </MarkdownDocsCard>

          <MarkdownDocsCard title="Text Format">
            <p>
              <b> Bold:</b> **Bold** <br />
              <em> Emphasized:</em> *Emphasized* <br />
              Highligted text: `Highligted text`
            </p>
          </MarkdownDocsCard>
        </Col>
      </Row>
    </div>
  );
}

export default MarkdownCheatSheet;
