import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import classes from "../TextImageComponent/TextImageComponent.module.scss";
import {BASE_URL} from "../../../helpers/config";

function TextImageComponent(props) {
  const { contentModule } = props;
  return (
    <section key={`${contentModule.__component}-${contentModule.id}`} className={`${classes.oTextImageBlock} oTextImageBlock __alt${contentModule.Image_on_right}`}>
      <div className={`container`}>
        <div className={`row`}>
          <figure className={`${classes.oBlockImage} oBlockImage col-12 col-md-5`}>
            <Image
              className={`${classes.aImage} a-responsive-image`}
              src={`${BASE_URL}${contentModule.image.url}`}
              alt={contentModule.title}
              width={contentModule.image.width}
              height={contentModule.image.height}
            />
          </figure>
          <div className={`${classes.oBlockBody} oBlockBody col-12 col-md-7`}>
            <h2 className={classes.aBlockTitle}>{contentModule.title}</h2>
            <ReactMarkdown>
              {contentModule.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TextImageComponent;