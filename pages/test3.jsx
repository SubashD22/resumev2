import { PDFExport } from "@progress/kendo-react-pdf";
import React, { useRef, useState } from "react";

const Test3 = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [pages, setPages] = useState([[]]);
  const pdfref = useRef(null);
  const downloadPdf = () => {
    pdfref.current.save();
  };

  const addContent = (e) => {
    e.preventDefault();
    const data = {
      title,
      content,
    };

    const pg = document.getElementById(`pg${pages.length}`);
    if (pg === null) {
      const page = pages[pages.length - 1];
      page.push(data);
    } else {
      const child = pg.querySelectorAll("div");
      const childHeight = [...child].reduce(
        (acc, cur) => acc + cur.offsetHeight,
        0
      );
      const pageHeight = pg.offsetHeight;
      if (childHeight + 250 > pageHeight) {
        setPages((prevPages) => [...prevPages, [data]]);
      } else {
        const lastPage = pages.length ? pages.pop() : [];
        setPages((prevPages) => [...prevPages, [...lastPage, data]]);
      }
    }
    // setTitle("");
    // setContent("");
  };

  return (
    <main>
      <form style={{ margin: "2rem 1rem" }} onSubmit={addContent}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          placeholder="title"
        />
        <br />
        <textarea
          name="content"
          value={content}
          id=""
          cols="30"
          rows="10"
          placeholder="content"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <br />
        <button type="submit">add</button>
      </form>
      <PDFExport ref={pdfref} fileName="resume" paperSize="A4">
        {pages.map((page, i) => (
          <div
            style={{
              padding: "2rem",
              border: "6px solid black",
              width: "6.22in",
              height: "8.78in",
            }}
            id={`pg${i + 1}`}
            key={`pg${i + 1}`}
          >
            {page.map((p, j) => (
              <div key={`${i}-${j}`}>
                <h1>{p?.title}</h1>
                <p>{p?.content}</p>
              </div>
            ))}
          </div>
        ))}
      </PDFExport>
      <button onClick={downloadPdf}>Download</button>
    </main>
  );
};

export default Test3;
