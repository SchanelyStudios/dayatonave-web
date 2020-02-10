import { renderText, renderHtml, resolveImage } from "../utils/prismicRenderer";
import { transformSlices } from "./slices.prismic";

export default (input) => {
  let page = input.prismic.empoyee;

  if (!page) {
    return null;
  }

  const slices = page.body
    ? page.body.map(transformSlices)
    : [];

  return {
    slug: page._meta ? page._meta.uid : "/",
    biography: renderHtml(page.biography),
    name: renderText(page.name),
    picture: resolveImage(page.picture),
    position: renderText(page.position),
    slices
  };
}
