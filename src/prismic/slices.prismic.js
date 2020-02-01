import { renderHtml, renderText, resolveImage } from "../utils/prismicRenderer";

// Spreads are two-up layouts typically showing a figure and content
const transformSpread = (rawSlice) => {
  return {
    type: rawSlice.type,
    title: renderText(rawSlice.primary.title1),
    lead: renderHtml(rawSlice.primary.lead),
    content: renderHtml(rawSlice.primary.content),
    figure: resolveImage(rawSlice.primary.figure),
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
    content: renderHtml(rawSlice.primary.content),
    figure: resolveImage(rawSlice.primary.figure),
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
    content: renderHtml(rawSlice.primary.content),
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
    tiles.push({
      title: renderText(field.label),
      subtitle: renderText(field.sublabel),
      content: renderHtml(field.content),
      type,
      figure: resolveImage(field.figure),
      cta: {
        label: "More",
        href: "http://example.com"
      }
    });
  });

  return {
    type: rawSlice.type,
    title: renderText(rawSlice.primary.title1),
    introduction: renderHtml(rawSlice.primary.introduction),
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

export { transformSlices, transformTiles, }
