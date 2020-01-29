import about from '../mocks/about';
import home from '../mocks/home';
import calendar from '../mocks/calendar';
import contact from '../mocks/contact';
import media from '../mocks/media';
import MinistriesMocks from '../mocks/ministries';
import MinistriesChildrenMocks from '../mocks/ministries/children';
import MinistriesPrismic from '../prismic/ministries.prismic';
import OpenPagePrismic from '../prismic/open-page.prismic';

export default {
  about,
  calendar,
  contact,
  home,
  media,
  ministries: (input) => {
    return input.useMock
      ? MinistriesMocks
      : MinistriesPrismic(input);
  },
  childrensMinistries: MinistriesChildrenMocks,
  openPage: (input) => {
    return OpenPagePrismic(input);
  }
};
