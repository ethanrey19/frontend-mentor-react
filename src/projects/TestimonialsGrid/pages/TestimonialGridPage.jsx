import "./TestimonialGridPage.css";
import usePageTitle from "../../../hooks/usePageTitle";
import usePageBackground from "../../../hooks/usePageBackground";
import HomeButton from "../../../components/HomeButton/HomeButton";
import TestimonialGrid from "../components/TestimonialGrid";
import { testimonials } from "../data/testimonialData";

function TestimonialGridPage() {
  usePageTitle("Testimonials - Ethan Reynolds");
  usePageBackground("hsl(0, 0%, 100%)");

  return (
    <div className="testi-page">
      <main className="grid-container">
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
      </main>

      <HomeButton />
    </div>
  );
}

export default TestimonialGridPage;
