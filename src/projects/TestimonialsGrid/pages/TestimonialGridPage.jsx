import "./TestimonialGridPage.css";
import ProjectLayout from "../../../components/ProjectLayout/ProjectLayout";
import usePageTitle from "../../../hooks/usePageTitle";
import usePageBackground from "../../../hooks/usePageBackground";
import TestimonialGrid from "../components/TestimonialGrid";
import { testimonials } from "../data/testimonialData";

function TestimonialGridPage() {
  usePageTitle("Testimonials - Ethan Reynolds");
  usePageBackground("hsl(0, 0%, 100%)");

  return (
    <ProjectLayout>
      <div className="testi-page">
        <section className="grid-container">
          {testimonials.map((testimonial, index) => (
            <TestimonialGrid
              key={testimonial.id}
              index={index}
              user={testimonial.user}
              quote={testimonial.quote}
              subquote={testimonial.subquote}
              backgroundColor={testimonial.backgroundColor}
              textColor={testimonial.textColor}
              isWhite={testimonial.isWhite}
            />
          ))}
        </section>
      </div>
    </ProjectLayout>
  );
}

export default TestimonialGridPage;
