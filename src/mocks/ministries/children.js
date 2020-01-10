import React from "react";

export default {
  title: "Avenue Kids",
  overview: "Our mission is to equip and support families in making, maturing, and multiplying disciples.",
  values: (
    <>
      <p>
        In everything we do, we strive to uphold the following values:
      </p>
      <ul>
        <li>Gospel Grounded</li>
        <li>Christ-Centered</li>
        <li>Family Focused</li>
        <li>Missions Minded</li>
      </ul>
    </>
  ),
  details: (
    <>
      <p>
        We believe that God has tasked parents with the primary responsibility for the spiritual growth of their children.  We, as a church, seek to assist in this spiritual development with interactive Bible lessons, exciting games, hands-on application, and participation in worship.
      </p>
    </>
  ),
  visitors: {
    title: "First Time Guests",
    content: (
      <>
        <p>Welcome! We’re happy that you’re going to visit! Please stop by the Children’s Welcome Desk in the middle of the building to check your child in.</p>
        <ul>
          <li>Complete an information card, and then we’ll print two tags for you: One tag will print with your child’s name, any allergies they may have, and the class they are in. Place the name tag on your child and keep the other to present when picking up your child.</li>
          <li>We’ll show you where your child’s class is located and introduce you to his or her teachers.</li>
        </ul>
      </>
    ),
  },
  current_schedule: {
    name: "Current Schedule",
    days: [
      {
        label: "Sunday",
        events: [
          {
            time: "9:30 am",
            details: (
              <>
                <p>
                  Nursery<br />
                  Preschool Life Groups<br />
                  Kids Life Groups (through 5th grade)
                </p>
              </>
            ),
          },
          {
            time: "11:00 am",
            details: (
              <>
                <p>
                  Nursery<br />
                  Preschool Life Groups<br />
                  Avenue Kids Worship Hour (through 3rd grade)
                </p>
              </>
            ),
          },
        ],
      },
      {
        label: "Wednesday",
        events: [
          {
            time: "6:15 pm",
            details: (
              <>
                <p>
                  Awana and classes for parents
                </p>
              </>
            ),
          },
        ],
      },
    ],
  },
  programs: [
    {
      title: "Life groups",
      description: "This is a designated time for all children to get a closer look at the story of the Bible, with an emphasis on how it points to Jesus. The Gospel Project for Kids immerses kids and preschoolers in the gospel through every story, theological concept, and call to mission from Genesis to Revelation. Ultimately, kids and preschoolers will understand the Bible is not just a collection of stories, but one unified story—God’s story of redemption.",
    },
    {
      title: "Avenue Kids Worship",
      description: "During our 11:00 hour, 1st–3rd graders dive into studies from books of the Bible. At all times, we seek to answer three questions: What does this story teach us about God? Where is Jesus in this story? How does this story change how we live?",
    },
    {
      title: "AWANA",
      description: "During the school year, we offer Awana for children ages 4 through 6th grade. Awana is an International Bible-centered program. The kids will learn the importance of God’s Word through Bible memorization as well as hearing stories from the Bible and having game time.",
    },
  ],
  resources: {
    title: "Resources",
    content: (
      <ul>
        <li>
          <strong>Email</strong> – <a href="/contact">Contact Robert Walker</a> the Pastor to the Children and their Families
        </li>
        <li>
          <strong>Facebook</strong> – Subscribe to <a href="#facebook">our Facebook page</a>
        </li>
      </ul>
    ),
  },
};
