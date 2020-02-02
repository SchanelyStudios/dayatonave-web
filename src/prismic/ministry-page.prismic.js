import { renderText } from "../utils/prismicRenderer";
import { transformSlices } from "./slices.prismic";

export default (input) => {
  let page = input.prismic.ministry,
    slices = [];

  if (page.body) {
    slices = page.body.map(transformSlices);
  }

  return {
    slug: page._meta.uid,
    title: renderText(page.ministry_name),
    slices
  };
}
