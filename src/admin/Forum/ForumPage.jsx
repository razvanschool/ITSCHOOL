import React, { useEffect } from "react";
import { ContainerForum, ContainerForumPage } from "./Forum.style";
import { Button } from "react-bootstrap";

const ForumPage = ({ title, content, image, showText, show }) => {
  useEffect(() => {
    console.log("salut");
  }, [showText]);
  return (
    <ContainerForumPage style={{ margin: "10px auto" }}>
      {showText && "Salut"}
      <ContainerForum>
        <h1>{title}</h1>
      </ContainerForum>
      <ContainerForum>
        <img style={{ width: "500px" }} src={image} alt="img"></img>
      </ContainerForum>
      <ContainerForum>
        <h5>{content}</h5>
      </ContainerForum>
      <Button onClick={() => show(!showText)}>Show</Button>
    </ContainerForumPage>
  );
};

export default ForumPage;
