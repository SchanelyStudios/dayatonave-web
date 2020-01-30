import React from "react";

import { RichText } from 'prismic-reactjs';

const renderText = (value, fallback) => {
  if (value) {
    return RichText.asText(value);
  }

  return fallback ? fallback : "";
};

const renderHTML = (value, fallback) => {
  if (value) {
    return (
      <RichText render={value} />
    );
  }

  return fallback ? fallback : "";
};

// Spreads are two-up layouts typically showing a figure and content
const transformSpread = (rawSlice) => {
  return {
    type: rawSlice.type,
    title: renderText(rawSlice.primary.title1),
    lead: renderHTML(rawSlice.primary.lead),
    content: renderHTML(rawSlice.primary.content),
    figure: {
      src: rawSlice.primary.figure.url,
      alt: rawSlice.primary.figure.alt,
    },
    cta: {
      label: "More",
      href: "http://example.com"
    }
  };
};

// Fliers are a variation of spreads but with a wider content block
const transformFlier = (rawSlice) => {
  return {
    type: rawSlice.type,
    title: renderText(rawSlice.primary.title1),
    content: renderHTML(rawSlice.primary.content),
    figure: {
      src: rawSlice.primary.figure.url,
      alt: rawSlice.primary.figure.alt,
    },
    cta: {
      label: "More",
      href: "http://example.com"
    }
  };
};

// Blobs are large blocks of rich content
const transformBlob = (rawSlice) => {
  return {
    type: rawSlice.type,
    title: renderText(rawSlice.primary.title),
    content: renderHTML(rawSlice.primary.content),
    cta: {
      label: "More",
      href: "http://example.com"
    }
  };
};

// Tiles are smaller repeating components that can have figures or not,
// and have an Avatar variation
const transformTiles = (rawSlice) => {
  let type;
  switch(rawSlice.primary.tile_type) {
    case "Illustrations":
      type = "illustration";
      break;
    case "Avatars":
      type = "facehole";
      break;
    default:
      type = null;
      break;
  }

  let tiles = [];
  rawSlice.fields.forEach((field, i) => {
    let { url, alt } = field.figure
      ? field.figure
      : {
        url: "#",
        alt: ""
      };

    tiles.push({
      title: renderText(field.label),
      subtitle: renderText(field.sublabel),
      content: renderHTML(field.content),
      type,
      figure: {
        src: url,
        alt,
      },
      cta: {
        label: "More",
        href: "http://example.com"
      }
    });
  });

  return {
    type: rawSlice.type,
    title: renderText(rawSlice.primary.title1),
    introduction: renderHTML(rawSlice.primary.introduction),
    tiles,
  };
};

const transformSlices = (rawSlice, i) => {
  let slice = {};

  switch (rawSlice.type) {
    case "spread":
      slice = transformSpread(rawSlice);
    break;
    case "flier":
      slice = transformFlier(rawSlice);
    break;
    case "tiles":
      slice = transformTiles(rawSlice);
    break;
    default: // Blob
      slice = transformBlob(rawSlice);
    break;
  }

  return slice;
};

export default (input) => {
  let page = input.prismic.test_open_page;

  if (!page) {
    page = {
      title1: "",
      body: []
    }
  }

  let { body, title1: title } = page;
  let slices = [];

  if (body) {
    slices = body.map(transformSlices);
  }

  return {
    title: renderText(title),
    slices
  };
}
