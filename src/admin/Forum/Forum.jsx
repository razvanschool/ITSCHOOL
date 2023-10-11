import React, { useEffect, useState } from "react";
import Navbar from "../../common/Navbar/Navbar";
import { ruteAdmin } from "../../constants/rute";
import { ContainerForum } from "./Forum.style";
import ForumPage from "./ForumPage";

const Forum = () => {
  const [articles, setArticles] = useState([]);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3002/forum`)
      .then((response) => response.json())
      .then((articles) => {
        setArticles(articles);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  return (
    <div>
      <Navbar
        numeUser={"Razvan"}
        logo="https://static.vecteezy.com/system/resources/thumbnails/011/161/739/small/motorcycles-logo-design-template-vector.jpg"
        rute={ruteAdmin}
      />
      <h1>{showText ? "E true" : "E False"}</h1>

      <ContainerForum>
        {articles.map((article, index) => (
          <ForumPage
            content={article?.contentForum || "no data found"}
            image={article?.imageForum || "no data found"}
            title={article?.titleForum || "no data found"}
            showText={showText}
            show={setShowText}
            key={index}
          />
        ))}
      </ContainerForum>
    </div>
  );
};

export default Forum;
