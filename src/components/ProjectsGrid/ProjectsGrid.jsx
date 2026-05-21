import "./ProjectsGrid.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import qrCodePreview from "../../projects/QrCode/preview.png";
import blogCardPreview from "../../projects/BlogCard/preview.png";
import socialLinksPreview from "../../projects/SocialLinks/preview.png";
import recipePreview from "../../projects/RecipePage/preview.png";
import productPreview from "../../projects/ProductCard/preview.png";
import fourCardsPreview from "../../projects/FourCards/preview.png";
import testimonialsPreview from "../../projects/TestimonialsGrid/preview.png";
import meetlandingPreview from "../../projects/MeetLanding/preview.png";

const projects = [
  {
    title: "QR code component",
    image: qrCodePreview,
    tag: "Newbie",
    url: "/qrcode",
  },
  {
    title: "Blog Card",
    image: blogCardPreview,
    tag: "Newbie",
    url: "/blogcard",
  },
  {
    title: "Social Links",
    image: socialLinksPreview,
    tag: "Newbie",
    url: "/sociallinks",
  },
  {
    title: "Recipe Page",
    image: recipePreview,
    tag: "Newbie",
    url: "/recipe",
  },
  {
    title: "Product Card",
    image: productPreview,
    tag: "Newbie",
    url: "/productcard",
  },
  {
    title: "Four Cards",
    image: fourCardsPreview,
    tag: "Newbie",
    url: "/fourcards",
  },
  {
    title: "Testimonials",
    image: testimonialsPreview,
    tag: "Junior",
    url: "/testimonials",
  },
  {
    title: "Meet Landing",
    image: meetlandingPreview,
    tag: "Newbie",
    url: "/meetlanding",
  },
];

function ProjectsGrid() {
  return (
    <div className="projects-grid">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          image={project.image}
          tag={project.tag}
          url={project.url}
        />
      ))}
    </div>
  );
}

export default ProjectsGrid;
