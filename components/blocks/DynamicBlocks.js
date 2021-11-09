import React from "react";
import Hero from "./Hero/Hero";
import RichTextComponent from "./RichTextComponent/RichTextComponent";

function DynamicBlocks(props) {
  const {contentModule} = props;
  switch (contentModule.__component) {
    case 'blocks.hero':
      return <Hero contentModule={contentModule}/>
    case 'blocks.rich-text-componet':
      return <RichTextComponent contentModule={contentModule}/>
    default:
      return <div><h1>component not found</h1></div>
  }
  return (
    <p>contentModule={contentModule.__component}</p>
  )
}

export default DynamicBlocks;