import { RichText } from 'prismic-reactjs';

export default (input) => {
  const page = input.data.prismic.ministry_page;
  const ministries = [];

  page.ministries.forEach(({ ministry }, i) => {
    ministries.push({
      name: RichText.asText(ministry.ministry_name),
      intro: RichText.render(ministry.short_description),
      imageURL: ministry.thumbnail.url,
      hasFollowupPage: ministry.has_followup_page === "Yes",
      path: `/ministries/${ministry._meta.uid}`,
    });
  });

  return {
    title: RichText.asText(page.page_title),
    intro: {
      heading: RichText.asText(page.intro_heading),
      copy: RichText.render(page.intro_copy),
      imageURL: page.intro_image.url,
    },
    ministries,
  };
}
