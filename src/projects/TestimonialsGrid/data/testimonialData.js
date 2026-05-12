import danielAvatar from "../images/image-daniel.jpg";
import johnAvatar from "../images/image-jonathan.jpg";
import kiraAvatar from "../images/image-kira.jpg";
import jeanAvatar from "../images/image-jeanette.jpg";
import patrickAvatar from "../images/image-patrick.jpg";

export const testimonials = [
  {
    id: 1,
    user: {
      name: "Daniel Clifford",
      avatar: danielAvatar,
    },
    quote: `I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. 
      I honestly feel like I got every penny's worth.`,
    subquote: `I was an EMT for many years before I joined the bootcamp. 
    I've been looking to make a transition and heard some people who had an amazing experience here.
    I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter.
    The next 12 weeks was the best - and most grueling - time of my life. 
    Since completing the course, I've successfully switched careers, working as a Software Engineer at a VR startup.
    `,
    backgroundColor: "hsl(263, 55%, 52%)",
    textColor: "hsl(0, 0%, 100%)",
  },
  {
    id: 2,
    user: {
      name: "Jonathan Walters",
      avatar: johnAvatar,
    },
    quote: `The team was very supportive and kept me motivated`,
    subquote: `I started as a total newbie with virtually no coding skills.
    I now work as a mobile engineer for a big company. This was one of the best investments I've made in myself.`,
    backgroundColor: "hsl(217, 19%, 35%)",
    textColor: "hsl(0, 0%, 100%)",
  },
  {
    id: 3,
    user: {
      name: "Jeanette Harmon",
      avatar: jeanAvatar,
    },
    quote: `An overall wonderful and rewarding experience`,
    subquote: `Thank you for the wonderul experience! I now have a job I really enjoy, and make a good living while doing something I love`,
    backgroundColor: "hsl(0, 0%, 100%)",
    textColor: "hsl(217, 19%, 35%)",
  },
  {
    id: 4,
    user: {
      name: "Patrick Abrams",
      avatar: patrickAvatar,
    },
    quote: `Awesome teaching support from TAs who did the bootcamp themselves.
    Getting Guidance from them and learning from their experiences was easy.`,
    subquote: `The staff seem genuinely concered about my progress which I find really refreshing.
    The program gave me the confidence necessary to be able to go out in the world and present myhself as a capable junior developer.
    The standard is above the rest.
    You will get ther personal attention you need from an incredible community of smart and amazing people`,
    backgroundColor: "hsl(219, 29%, 14%)",
    textColor: "hsl(0, 0%, 100%)",
  },
  {
    id: 5,
    user: {
      name: "Kira Whittle",
      avatar: kiraAvatar,
    },
    quote: `Such a life-chaning experience. Highly recommended!`,
    subquote: `Before joining the bootcamp. I've never written a line of code. 
    I needed some structure from professionals who can help me learn programming step by step.
    I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program.
    The entire curriculum and staff did not disappoint.
    They were very hands-on and I never had to wait long for assistance.
    The agile team project, in particular, was outstanding.
    It took my learning to the next level in a way that no tutorial could ever have.
    In fact, I've often referred to it during interviews as an example of my development experience.
    It certainly helped me land a job as a full-stack developer after receiving multiple offers.
    100% recommend!
    `,
    backgroundColor: "hsl(0, 0%, 100%)",
    textColor: "hsl(217, 19%, 35%)",
  },
];
