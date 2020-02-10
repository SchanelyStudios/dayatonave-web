import { renderHtml, renderText, resolveImage } from "../utils/prismicRenderer";

export default (input) => {
  const page = input.data.prismic.ministry_page;

  if (!page) {
    return null;
  }

  const ministries = page.ministries
    ? page.ministries.map(({ ministry }) => {
      return {
        name: renderText(ministry.ministry_name),
        intro: renderHtml(ministry.short_description),
        figure: resolveImage(ministry.thumbnail),
        hasFollowupPage: ministry.has_followup_page === "Yes",
        path: `/ministries/${ministry._meta.uid}`,
      };
    }) : [];

  return {
    title: renderText(page.page_title),
    intro: {
      heading: renderText(page.intro_heading),
      copy: renderHtml(page.intro_copy),
      figure: resolveImage(page.intro_image),
    },
    ministries,
  };
}
