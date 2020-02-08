import React from "react";
import { RichText, Date } from "prismic-reactjs";
import moment from "moment";
import linkResolver from "./linkResolver";

const renderHtml = (content) => {
  if (!content) {
    return (
      <>""</>
    );
  }

  return (
    <RichText
      render={content}
      linkResolver={linkResolver}
    />
  );
};

const resolveDate = (date) => {
  return moment(date);
}

const renderText = (content) => {
  return content
    ? RichText.asText(content)
    : "";
};

const resolveYoutubeId = (video) => {
  return video && video.embed_url
    ? video.embed_url.replace("https://youtu.be/", "")
    : null;
};

const resolveImage = (image) => {
  return image ? {
    src: image.url,
    alt: image.alt
  } : null;
};

const resolveCTA = (link) => {
  console.log(link);

  let linkObj = null;
  if (!link || !link._linkType || link._meta) {
    return null;
  }

  let prefix;
  switch (link.__typename) {
    case "PRISMIC__ExternalLink":
      prefix = "";
      break;
    case "PRISMIC_Event_page":
      prefix = "/events/";
      break;
    case "PRISMIC_Ministry":
      prefix = "/ministries/";
      break;
    case "PRISMIC_Resource_page":
      prefix = "/resources/";
      break;
    case "PRISMIC_Empoyee":
      prefix = "/staff/";
      break;
    default:
      prefix = "/";
      break;
  }

  switch(link._linkType) {
    case "Link.web":
      linkObj = {
        label: "More",
        href: link.url
      };
      break;
    case "Link.document":
      linkObj = {
        label: "More",
        href: prefix + link._meta.uid
      };
      break;

    // TODO: Discover other types
    default:
      linkObj = null;
      break;
  }
  return linkObj;
};

export { renderHtml, renderText, resolveYoutubeId, resolveImage, resolveCTA, resolveDate };
