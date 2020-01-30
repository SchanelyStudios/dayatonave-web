import React from "react";

import ContactInforConfigs from "./contact-info.config";
import NavigationConfigs from "./navigation.config";
import SocialConfigs from "./socials.config";
import EGivingConfig from "./e-giving.config";

export default {
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
  copyright: (
    <p>
      © 2019 by Dayton Avenue Baptist Church.
      <br/>
      All rights reserved.
    </p>
  ),
};
