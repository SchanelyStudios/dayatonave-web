import { renderText, renderHtml, resolveImage } from "../utils/prismicRenderer";

export default (input) => {
  let page = input.prismic.resource_page;

  if (!page) {
    return null;
  }

  return {
    title: renderText(page.resource_name),
    description: renderHtml(page.description),
    link: page.resource_link && page.link_label
      ? {
        url: page.resource_link.url,
        label: renderText(page.link_label),
      }
      : null,
    cover_image: resolveImage(page.cover_image),
  };
}
