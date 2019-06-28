import React from "react";

export default {
  title: "Welcome to Dayton Avenue",
  introBlock: (
    <>
      <h2>Coming soon</h2>
      <p>Come worship this Sunday</p>
    </>
  ),
  graphic: (
    <img src="#" alt="" />
  ),
  features: [
    {
      name: "Item 1",
      graphic: (
        <img src="//placehold.it/1620x1000" alt="" />
      ),
      morePath: "calendar",
    },
    {
      name: "Item 2",
      graphic: (
        <img src="//placehold.it/1620x1000" alt="" />
      ),
      morePath: "ministries",
    },
    {
      name: "Item 3",
      graphic: (
        <img src="//placehold.it/1620x1000" alt="" />
      ),
      moreURL: "//philschanely.com",
    },
  ],
  current_schedule: {
    name: "Primary Schedule",
    description: "Description coming soon",
    days: [
      {
        label: "Sunday",
        blocks: [
          {
            time: "9:30 am",
            details: (
              <>
                <p>Worship service</p>
                <p>Sunday school and LifeGroups</p>
                <p>Crew222 (Youth Group)</p>
              </>
            ),
          },
          {
            time: "10:30 am",
            details: (
              <>
                <p>Fellowship time</p>
              </>
            ),
          },
          {
            time: "11:00 am",
            details: (
              <>
                <p>Worship service</p>
                <p>Sunday school and LifeGroups</p>
              </>
            ),
          },
        ],
      },
    ],
  },
};
