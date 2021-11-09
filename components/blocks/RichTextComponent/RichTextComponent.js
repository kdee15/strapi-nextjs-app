import React from "react";
import ReactMarkdown from "react-markdown";
import classes from "../RichTextComponent/RichTextComponent.module.scss";

function RichTextComponent(props) {
  const { contentModule } = props;
  return (
    <section key={`${contentModule.__component}-${contentModule.id}`} className={classes.oContent}>
      <ReactMarkdown class="container">
        {contentModule.content}
      </ReactMarkdown>
    </section>
  )
}

export default RichTextComponent;