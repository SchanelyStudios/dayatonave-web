import { renderText, renderHtml, resolveImage } from "../utils/prismicRenderer";
import { transformSlices } from "./slices.prismic";

export default (input) => {
  let page = input.prismic.event_page,
    slices = [];

  if (page.body) {
    slices = page.body.map(transformSlices);
  }

  return {
    slug: page._meta.uid,
    title: renderText(page.event_title),
    summary: renderHtml(page.event_summary),
    cover: resolveImage(page.cover),
    date: page.event_date,
    time_details: renderText(page.event_time_details),
    slices
  };
}
