import { renderHtml, resolveImage, renderText } from "../utils/prismicRenderer";
import { transformSlices } from "./slices.prismic";

export default (input) => {
  const page = input.prismic.ministry;
  if (!page) {
    return null;
  }

  const slices = page.body
    ? page.body.map(transformSlices)
    : [];

  console.log(page);

  return {
    slug: page._meta ? page._meta.uid : "/",
    title: renderText(page.ministry_name),
    summary: renderHtml(page.short_description),
    thumbnail: resolveImage(page.thumbnail),
    slices
  };
}
