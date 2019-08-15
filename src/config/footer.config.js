import ContactInforConfigs from "./contact-info.config";
import NavigationConfigs from "./navigation.config";
import SocialConfigs from "./socials.config";
import EGivingConfig from "./e-giving.config";

export default {
  navGroups: [
    {
      label: NavigationConfigs.home.label,
      path: NavigationConfigs.home.path,
      alias: "main",
      pages: [
        NavigationConfigs.about,
        NavigationConfigs.about.pages.doctrine,
        NavigationConfigs.media,
        NavigationConfigs.calendar,
      ]
    },
    {
      label: NavigationConfigs.ministries.label,
      path: NavigationConfigs.ministries.path,
      alias: "ministries",
      pages: [
        NavigationConfigs.ministries.pages.pastoralTeaching,
        NavigationConfigs.ministries.pages.lifeGroups,
        NavigationConfigs.ministries.pages.youth,
        NavigationConfigs.ministries.pages.children,
      ]
    },
  ],
  contactInfo: {
    web: NavigationConfigs.contact,
    phone: ContactInforConfigs.phone,
    address: ContactInforConfigs.address,
  },
  socials: [
    SocialConfigs.youtube,
    SocialConfigs.podcast,
    SocialConfigs.facebook,
  ],
  eGiving: {
    label: EGivingConfig.label,
    url: EGivingConfig.url,
    more: NavigationConfigs.about.pages.eGiving,
  },
  members: NavigationConfigs.members,
  terms: NavigationConfigs.terms,
  copyright: "© 2019 by Dayton Avenue Baptist Church. All rights reserved.",
};
