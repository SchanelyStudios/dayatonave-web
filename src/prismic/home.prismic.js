import { renderHtml, renderText, resolveYoutubeId } from "../utils/prismicRenderer";

export default (input) => {
  const page = input.data.prismic.home_page;

  // Build What to Expect tiles
  let whatToExpectItems = page.what_to_expect_tiles.map((item, i) => {
    return {
      heading: renderText(item.tile_title),
      content: renderHtml(item.tile_content)
    };
  });

  // TODO: Build Schedule
  let scheduleDays = page.current_schedule.body.map((day) => {
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
  });

  // TODO: Build carousel

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
    }
  };
}
