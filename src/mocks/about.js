import React from "react";

export default {
  title: "More About Us",
  intro: (
    <>
      <p className="lead">Dayton Avenue Baptist Church is a church family made of people that... </p>
      <ul>
        <li>love Jesus.</li>
        <li>love and care for each other.</li>
        <li>grow in our walk with the Lord.</li>
        <li>serve our community and the world in His name.</li>
      </ul>
    </>
  ),
  beliefs: {
    heading: "What We Believe",
    items: [
      {
        label: "Bible",
        content: "The Bible is the true, authoritative, and trustworthy source for knowing God.",
        moreLink: "/doctrine/#scripture",
      },
      {
        label: "God",
        content: "There is only one God who exists eternally as the Father, Son, and Holy Spirit.",
        moreLink: "/doctrine/#trinity",
      },
      {
        label: "Nature of Man",
        content: "Man is sinful by nature and in need of salvation.",
        moreLink: "/doctrine/#humanity",
      },
      {
        label: "Salvation",
        content: "Jesus paid the price for our sins providing salvation for all who believe in Him.",
        moreLink: "/doctrine/#salvation",
      },
      {
        label: "Distinctives",
        content: "We practice believer’s baptism and the Lord Supper and await Jesus’ second coming.",
        moreLink: "/doctrine/#distinctives",
      },
    ],
  },
  pastoral_team: {
    heading: "Pastoral Team",
    pastors: [
      {
        name: "Jon Young",
        title: "Senior Pastor",
      },
      {
        name: "John Chavies",
        title: "Executive Pastor",
      },
      {
        name: "Bruce Traeger",
        title: "Associate Pastor",
      },
      {
        name: "Adama Mabe",
        title: "Pastor to Students and their Families",
      },
      {
        name: "Robert Walker",
        title: "Pastor to Children and their Families",
      },
      {
        name: "Caleb Peterson",
        title: "Worship Pastor",
      },
    ],
  },
};
