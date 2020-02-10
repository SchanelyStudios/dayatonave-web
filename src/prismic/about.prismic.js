import { renderHtml, renderText, resolveYoutubeId, resolveImage } from "../utils/prismicRenderer";

export default (input) => {
  const page = input.data.prismic.about_page;

  if (!page) {
    return null;
  }

  // Set up belief tiles
  let beliefItems = page && page.beliefs_summary
    ? page.beliefs_summary.map((belief) => {
      return {
        label: renderText(belief.belief_heading),
        content: renderHtml(belief.belief_copy),
        figure: resolveImage(belief.belief_icon),
      }
    }) : [];

  // Set up pastors list
  let pastors = page && page.pastoral_team
    ? page.pastoral_team.map(({ pastoral_team_member: pastor }) => {
      return {
        name: renderText(pastor.name),
        position: renderText(pastor.position),
        figure: resolveImage(pastor.picture),
      };
    }) : [];

  // Set up faqs
  let faqs = page && page.faqs
    ? page.faqs.map(({ question, answer }) => {
      return {
        question: renderText(question),
        answer: renderHtml(answer)
      };
    }) : [];

  return {
    title: renderText(page.page_title),
    intro: {
      title: renderText(page.intro_heading),
      lead: renderHtml(page.intro_lead),
      copy: renderHtml(page.intro_copy),
    },
    videoId: resolveYoutubeId(page.about_us_video),
    beliefs: {
      heading: renderText(page.beliefs_heading),
      items: beliefItems,
      link: {
        label: "Read our Church Doctrines",
        path: page.beliefs_link._meta.uid
      }
    },
    pastoral_team: {
      heading: renderText(page.pastors_heading),
      pastors
    },
    faqs: {
      heading: renderText(page.faqs_heading),
      faqs
    }
  }
}
