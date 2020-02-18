import { renderHtml, renderText, resolveImage, resolveYoutubeId } from "../utils/prismicRenderer";

export default (input) => {
  const page = input.data.prismic.home_page;

  if (!page) {
    return null;
  }

  // Build What to Expect tiles
  let whatToExpectItems = page.what_to_expect_tiles
    ? page.what_to_expect_tiles.map((item, i) => {
      return {
        heading: renderText(item.tile_title),
        content: renderHtml(item.tile_content)
      };
    }): [];

  // TODO: Build Schedule
  let scheduleDays = page.current_schedule
    ? page.current_schedule.body.map((day) => {
      let blocks = day.fields
        ? day.fields.map((block) => {
            return {
              time: renderText(block.times),
              details: renderHtml(block.details)
            };
          })
        : [];

      return {
        label: renderText(day.primary.block_heading),
        blocks
      };
    }): [];

  // TODO: Build carousel
  const features = page
    ? page.carousel.map(({ linked_item }, i) => {
      let feature;
      switch(linked_item.__typename) {
        case "PRISMIC_Resource_page":
          feature = {
            slug: "/resources/" + linked_item._meta.uid,
            name: renderText(linked_item.resource_name),
            cover: resolveImage(linked_item.cover_image)
          };
          break;
        case "PRISMIC_Event_page":
          feature = {
            slug: "/events/" + linked_item._meta.uid,
            name: renderText(linked_item.event_title),
            cover: resolveImage(linked_item.cover)
          };
          break;
        default:
          feature = {
            slug: "/",
            name: "Unknown",
            cover: {
              src: "#",
              alt: ""
            }
          };
          break;
      }

      return feature;
    })
    : [];

  return {
    title: renderText(page.page_title),
    videoId: resolveYoutubeId(page.about_video),
    intro: {
      title: renderText(page.intro_heading),
      lead: renderText(page.intro_lead),
      block: renderHtml(page.intro_copy),
    },
    about_link: page.about_link._meta.uid,
    what_to_expect: {
      title: renderText(page.what_to_expect_heading),
      items: whatToExpectItems
    },
    location: page.location,
    current_schedule: {
      name: "Current Schedule", // renderText(page.current_schedule.schedule_name)
      description: renderText(page.current_schedule.schedule_description),
      days: scheduleDays
    },
    features
  };
}
