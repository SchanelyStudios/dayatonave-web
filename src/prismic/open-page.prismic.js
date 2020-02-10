import { renderText } from "../utils/prismicRenderer";
import { transformSlices } from "./slices.prismic";

export default (input) => {
  const page = input.prismic.test_open_page;

  if (!page) {
    return null;
  }

  const slices = page.body
    ? page.body.map(transformSlices)
    : [];

  return {
    title: renderText(page.title1),
    slug: page._meta ? page._meta.uid : "/",
    slices
  };
}
