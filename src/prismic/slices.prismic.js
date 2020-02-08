import { renderHtml, renderText, resolveImage, resolveCTA } from "../utils/prismicRenderer";

// Spreads are two-up layouts typically showing a figure and content
const transformSpread = (rawSlice) => {
  return {
    type: rawSlice.type,
    title: renderText(rawSlice.primary.title1),
    lead: renderHtml(rawSlice.primary.lead) || null,
    content: renderHtml(rawSlice.primary.content) || null,
    figure: resolveImage(rawSlice.primary.figure),
    cta: resolveCTA(rawSlice.primary.call_to_action)
  };
};

// Fliers are a variation of spreads but with a wider content block
const transformFlier = (rawSlice) => {
  return {
    type: rawSlice.type,
    title: renderText(rawSlice.primary.title1) || null,
    content: renderHtml(rawSlice.primary.content),
    figure: resolveImage(rawSlice.primary.figure) || null,
    cta: resolveCTA(rawSlice.primary.call_to_action)
  };
};

// Blobs are large blocks of rich content
const transformBlob = (rawSlice) => {
  return {
    type: rawSlice.type || null,
    title: renderText(rawSlice.primary.title) || null,
    content: renderHtml(rawSlice.primary.content),
    cta: resolveCTA(rawSlice.primary.call_to_action)
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
      subtitle: renderText(field.sublabel) || null,
      content: renderHtml(field.content),
      type,
      figure: resolveImage(field.figure) || null,
      cta: resolveCTA(field.call_to_action)
    });
  });

  return {
    type: rawSlice.type,
    title: renderText(rawSlice.primary.title1) || null,
    introduction: renderHtml(rawSlice.primary.introduction) || null,
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
