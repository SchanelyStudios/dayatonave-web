// import { renderHtml, renderText, resolveYoutubeId } from "../utils/prismicRenderer";

export default (input) => {
  const page = input.data.prismic.home_page;

  if (!page) {
    return null;
  }

  console.log(page);

  return {
    location: page.location
  };
}
