export default {
  home: {
    label: "Home",
    alias: "home",
    path: "/",
  },
  about: {
    label: "About",
    alias: "about",
    path: "/about",
    pages: {
      doctrine: {
        label: "What We Believe",
        alias: "about-doctrine",
        path: "/about/doctrine",
      },
      eGiving: {
        label: "About giving online",
        alias: "about-giving-online",
        path: "/about/giving-online",
      },
    },
  },
  ministries: {
    label: "Ministries",
    alias: "ministries",
    path: "/ministries",
    pages: {
      children: {
        label: "Children",
        alias: "ministries-children",
        path: "/ministries/children",
      },
      lifeGroups: {
        label: "Adult Ministries & LifeGroups",
        alias: "ministries-life-groups",
        path: "/ministries/life-groups",
      },
      pastoralTeaching: {
        label: "Pastoral Teaching",
        alias: "ministries-pastoral-teaching",
        path: "/ministries/pastoral-teaching",
      },
      // worship: {
      //   label: "Worship",
      //   alias: "ministries-worship",
      //   path: "/ministries/worship",
      // },
      youth: {
        label: "Youth",
        alias: "ministries-youth",
        path: "/ministries/youth",
      },
    },
  },
  media: {
    label: "Media",
    alias: "media",
    path: "/media",
  },
  calendar: {
    label: "Calendar",
    alias: "calendar",
    path: "/calendar",
  },
  contact: {
    label: "Contact",
    alias: "contact",
    path: "/contact",
  },
  members: {
    label: "Members' Portal",
    alias: "members",
    path: "/members",
    description: "News and other information for members and regular attendees.",
  },
  terms: {
    label: "Privacy and Terms of Use",
    alias: "terms",
    path: "/terms",
  }
};
