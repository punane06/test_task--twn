import { useEffect, useState } from "react";

function Article() {
  const [articelTitle, setArticelTitle] = useState([]);
  const [articelIntro, setArticelIntro] = useState([]);
  const [articelBody, setArticelBody] = useState("");
  const articleDbUrl = "https://midaiganes.irw.ee/api/list/972d2b8a";

  useEffect(() => {
    fetch(articleDbUrl)
      .then((res) => res.json())
      .then((data) => {
        setArticelTitle(data.title);
        setArticelIntro(data.intro);
        setArticelBody(data.body);
      });
  });

  console.log(articelIntro);

  return (
    <div>
      <div>{articelTitle}</div>
      <div>{articelIntro}</div>
      <div dangerouslySetInnerHTML={{ __html: articelBody }}></div>
    </div>
  );
}

export default Article;
