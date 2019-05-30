import ContactInforConfigs from "./contact-info.config";
import NavigationConfigs from "./navigation.config";
import SocialConfigs from "./socials.config";
import EGivingConfig from "./e-giving.config";

export default {
  navLinks: [
    NavigationConfigs.home,
    NavigationConfigs.about,
    NavigationConfigs.ministries,
    NavigationConfigs.media,
    NavigationConfigs.calendar,
    NavigationConfigs.contact,
  ],
  contactInfo: [
    ContactInforConfigs.phone,
    ContactInforConfigs.address,
  ],
  socials: [
    SocialConfigs.youtube,
    SocialConfigs.podcast,
    SocialConfigs.facebook,
  ],
  eGiving: EGivingConfig
};
