import React from "react";

import { RichText } from 'prismic-reactjs';

function renderText(value, fallback) {
  if (value) {
    return RichText.asText(value);
  }

  return fallback ? fallback : "";
}

function renderHTML(value, fallback) {
  if (value) {
    return (
      <RichText render={value} />
    );
  }

  return fallback ? fallback : "";
}

export default (input) => {
  const page = input.prismic.test_open_page;

  let { body } = page;
  const slices = [];

  body.forEach((rawSlice, i) => {
    let slice = {};

    switch (rawSlice.type) {
      // Spreads are two-up layouts typically showing a figure and content
      case "spread":
        slice = {
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
      break;
      // Fliers are a variation of spreads but with a wider content block
      case "flier":
        slice = {
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
      break;
      // Tiles are smaller repeating components that can have figures or not,
      // and have an Avatar variation
      case "tiles":
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
        slice = {
          type: rawSlice.type,
          title: renderText(rawSlice.primary.title1),
          introduction: renderHTML(rawSlice.primary.introduction),
          tiles,
        };
      break;
      // Blobs are large blocks of rich content
      default: // Blob
        slice = {
          type: rawSlice.type,
          title: renderText(rawSlice.primary.title),
          content: renderHTML(rawSlice.primary.content),
          cta: {
            label: "More",
            href: "http://example.com"
          }
        };
      break;
    }

    slices.push(slice);
  });

  return {
    title: renderText(page.title1),
    slices,
  }
}
