import { RichText } from 'prismic-reactjs';

export default (input) => {
  const page = input.data.prismic.home_page;

  console.log(page);

  // Build What to Expect tiles
  let whatToExpectItems = page.what_to_expect_tiles.map((item, i) => {
    return {
      heading: RichText.asText(item.tile_title),
      content: RichText.render(item.tile_content)
    };
  });

  // TODO: Build Schedule
  let scheduleDays = page.current_schedule.body.map((day) => {
    console.log(day.fields);

    let blocks = day.fields
      ? day.fields.map((block) => {
          return {
            time: RichText.asText(block.times),
            details: RichText.render(block.details)
          };
        })
      : [];

    return {
      label: RichText.asText(day.primary.block_heading),
      blocks
    };
  });


  // TODO: Build carousel

  return {
    title: RichText.asText(page.page_title),
    videoId: page.about_video.embed_url.replace("https://youtu.be/", ""),
    intro: {
      title: RichText.asText(page.intro_heading),
      lead: RichText.asText(page.intro_lead),
      block: RichText.render(page.intro_copy),
    },
    about_link: page.about_link._meta.uid,
    what_to_expect: {
      title: RichText.asText(page.what_to_expect_heading),
      items: whatToExpectItems
    },
    location: page.location,
    current_schedule: {
      name: "Current Schedule", // RichText.asText(page.current_schedule.schedule_name)
      description: RichText.asText(page.current_schedule.schedule_description),
      days: scheduleDays
    }
  };
}
