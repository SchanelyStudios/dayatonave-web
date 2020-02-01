import { renderText } from "../utils/prismicRenderer";
import { transformSlices } from "./slices.prismic";

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
