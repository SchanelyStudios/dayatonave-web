import React from "react";

export default {
  title: "Welcome to Dayton Avenue!",
  videoId: "Y-NTQDHWB2M",
  introBlock: (
    <>
      <h2>Welcome to Dayton Avenue!</h2>
      <p className="lead">Dayton Avenue is a genuine church family located in Xenia, Ohio.</p>
      <p>Like other churches in our community we have many programs and ministries. But if you’re looking for more than just programs—if you’re looking for a church home and a church family—you’ll find exactly that at Dayton Avenue.</p>
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
  what_to_expect: {
    title: "What to Expect",
    items: [
      {
        heading: "Expect to worship.",
        content: "Our multi-generational blended worship services are sincere times of praise and communion together."
      },
      {
        heading: "Expect to grow.",
        content: "Our practical, expository preaching ministry is centered on God’s word and geared to challenge us to learn and grow."
      },
      {
        heading: "Come as you are.",
        content: "Most of our church family come comfortably but casually dressed so you won’t feel out of place."
      },
      {
        heading: "Ask questions.",
        content: "Friendly greeters welcome you at the door and help you find your way or answer any questions you have; a variety of Life Groups provide opportunities to dig deep."
      },
      {
        heading: "Enjoy fellowship.",
        content: "We serve free coffee between the services; it’s a great time to meet and greet friends."
      },
      {
        heading: "Get connected.",
        content: "We offer a variety of programs and ministries each week all geared towards learning, growing, and serving together."
      }
    ]
  }
};
