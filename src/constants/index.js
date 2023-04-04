const route = {
  home: "/",
  men: "/men",
  women: "/women",
  unisex: "/unisex",
  cart: "/cart",
  404: "*",
  authentication: "authentication",
};

const ExperienceCodemonk = [
  {
    companyName: "Codemonk",
    duration: ["Sep 2021 - Feb 2023"],
    projectNames: ["GreytHR"],
    projectType: ["HRMS mobile application - (React Native)"],
    aboutApp: [
      "The App offers productivity tools for better delivery of HR services such as pay roll, attendance management,leave management, helpdesk to 15K+ small and medium businesses across 150+ cities.",
    ],
    techStack: [
      "React Native",
      "Google Analytics",
      "Jira",
      "Gitlab",
      "Bugsnag",
    ],
    otherInfo: (
      <text className="otherInfo">
        Also worked on login flow, performance optimization, attendance override
        & document center module.
      </text>
    ),
    module: ["Google Analytics", "Feeds", "Helpdesk", "Quick-links"],
    moduleInfo: [
      <ul>
        <li>
          <text>
            Integrated Google Analytics for tracking more than
            <b> 1 million user’s </b>
            behaviour such as screen tracking, campaigns and traffic sources
            (APK download source), company URL, users by country, state, mobile
            platform (iOS / android), average user engagement time etc.
          </text>
        </li>
      </ul>,

      <ul>
        <li>
          <text>
            Implemented “Create a post” feature with text, links and attachments
            (supports docs, image & gif)
          </text>
        </li>
        <li>
          <text>
            Implemented functionalities such as scrolling pagination, delete
            post, like / dislike post, add / delete comment & “New post
            available” feature.
          </text>
        </li>
        <li>
          <text>
            Filter the feeds based on latest interacted & most recent feed, view
            comments / liked by users and download attachment attached to post.
          </text>
        </li>
      </ul>,
      <ul>
        <li>
          <text>
            The Helpdesk module allow employee to raise requests for their
            queries from different categories and the reviewers review the
            raised tickets in order to resolve them.
          </text>
        </li>
        <li>
          <text>
            Implemented functionalities such as raise a new request, view
            pending and resolved requests with scrolling pagination.
          </text>
        </li>
      </ul>,
      <ul>
        <li>
          <text>
            Add / remove / update quick links based on a user’s priority &
            easily switch between screens
          </text>
        </li>
      </ul>,
    ],
  },
];

const ExperienceMetasys = [
  {
    companyName: "Metasys",
    duration: ["Jul 2019 - Sept 2021"],
    projectNames: ["Timesheet", "IBC"],
    projectType: [
      "Web application - (React js)",
      "Courier service - (React Native)",
    ],
    aboutApp: [
      "This web app allows project members to record their time usage each day.",
      "A package tracking app for IBC staff to perform day-to-day operations on their courier business.",
    ],
    otherInfo: (
      <text className="otherInfo">
        Also worked on <b>10mins Question</b> web App (React js) and
        <b> Analogic </b>
        mobile App (React native).
      </text>
    ),
    moduleInfo: [
      <ul>
        <li>
          <text>Converted class components into functional components.</text>
        </li>
        <li>
          <text>
            Added Different types of employee reports with filter, search and
            export to excel feature (Billable hours, non-billable hours, filter
            based on employee or project).
          </text>
        </li>
        <li>
          <text>
            Improved the performance and implemented responsive design.
          </text>
        </li>
      </ul>,

      <ul>
        <li>
          <text>
            Published app on App Store and Play Store, Created common re-useable
            components etc.
          </text>
        </li>
        <li>
          <text>
            Added multiple screen and functionalities such as "Search package
            using tracking id", submit feedback etc
          </text>
        </li>
        <li>
          <text>Implemented responsive design.</text>
        </li>
      </ul>,
    ],
  },
];
export { route, ExperienceCodemonk, ExperienceMetasys };
