import { renderText, renderHtml, resolveImage } from "../utils/prismicRenderer";

export default (input) => {
  let page = input.prismic.resource_page;

  return {
    title: renderText(page.resource_name),
    description: renderHtml(page.description),
    link: {
      url: page.resource_link.url,
      label: renderText(page.link_label),
    },
    cover_image: resolveImage(page.cover_image),
  };
}
