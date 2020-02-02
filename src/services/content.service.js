// Static/mocks
import about from '../mocks/about';
import home from '../mocks/home';
import calendar from '../mocks/calendar';
import contact from '../mocks/contact';
import MinistriesMocks from '../mocks/ministries';

// Prismic singleton parsers
import AboutPrismic from '../prismic/about.prismic';
import HomePrismic from '../prismic/home.prismic';
import MinistriesPrismic from '../prismic/ministries.prismic';

// Prismic repeatable parsers
import EventPagePrismic from '../prismic/event-page.prismic';
import MinistryPagePrismic from '../prismic/ministry-page.prismic';
import OpenPagePrismic from '../prismic/open-page.prismic';
import ResourcePagePrismic from '../prismic/resource-page.prismic';
import StaffPagePrismic from '../prismic/staff-page.prismic';

export default {
  // Static pages
  calendar,
  contact,

  // Prismic Singletons
  about: (input) => {
    return input.useMock
    ? about
    : AboutPrismic(input);
  },
  home: (input) => {
    return input.useMock
    ? home
    : HomePrismic(input);
  },
  ministries: (input) => {
    return input.useMock
    ? MinistriesMocks
    : MinistriesPrismic(input);
  },

  // Prismic Repeatables
  eventPage: (input) => {
    return EventPagePrismic(input);
  },
  ministryPage: (input) => {
    return MinistryPagePrismic(input);
  },
  openPage: (input) => {
    return OpenPagePrismic(input);
  },
  resourcePage: (input) => {
    return ResourcePagePrismic(input);
  },
  staffPage: (input) => {
    return StaffPagePrismic(input);
  }
};
