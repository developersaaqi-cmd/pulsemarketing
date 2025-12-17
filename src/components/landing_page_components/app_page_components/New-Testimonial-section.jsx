'use client';

const ICONS = {
  google: '/google-stars.png',
  star: '/test-stars.png',
};

const testimonials = [
  {
    title: 'Aspiring DJ Brand Identity & Logo Design',
    text:
      'As an aspiring DJ, having an iconic logo was very important to me — something that represents who I am. Pulse Marketing did an incredible job meeting with me and coming up with amazing ideas. Fairly priced. Professional and creative throughout the process.',
  },

   {
    title: 'Complete Website Revamp & Branding',
    text:
      'I hired Pulse Marketing to revamp my website, and they exceeded my expectations. Not only did they deliver a fantastic site, but their after-service support has been outstanding. The team has been incredibly helpful every step of the way.',
  },

  {
    title: 'Fitness Brand Website Launch – J Fitness Edmonton',
    text:
      'Working with Ian and the team at Pulse Marketing was amazing. They worked above and beyond to create a beautiful, functional website for J Fitness and Training. Highly recommend their services for anyone looking to stand out online.',
  },

  {
    title: 'Luxury Cottage Rental Website – Nova Scotia',
    text:
      'Working with Ian from Pulse Marketing has been an absolute pleasure. Despite my not knowing all the technical terms associated with web design, he was able to translate my directions to produce and deliver an absolutely stunning and functional site.',
  },

  {
    title: 'Canadian Cleaning Company Transformation',
    text:
      'Pulse Marketing has been instrumental in transforming my Canadian cleaning company. Their personalized branding and tailored systems have not only propelled our growth but also infused our brand with professionalism and trust.',
  },

  {
    title: 'Design Agency Frontend Revamp',
    text:
      'Working with Pulse Marketing to revamp our agency’s website was like catching up with an old friend who just happens to be incredibly talented at web design. They were quick on their feet, creative, and delivered far beyond expectations.',
  },

   {
    title: 'Small Business Website Launch',
    text:
      'Great experience from start to finish! Ian and his team at Pulse Marketing went above and beyond to deliver the exact website I wanted. Absolute best service and support! Definitely recommend Pulse to any business owner.',
  },

  {
    title: 'Trading Company Web Overhaul',
    text:
      'Ian and the team at Pulse Marketing are top-notch. I’ve worked with many agencies and more often than not, it’s a letdown — NOT the case with Pulse! Looking forward to our continued partnership. Professional, dependable, and results-driven.',
  },

  {
    title: 'Custom CRM & Software Solutions',
    text:
      'Pulse Marketing offers excellent CRM and software solutions for businesses. Their tools are robust, user-friendly, and tailored to meet the diverse needs of modern enterprises. Highly recommended for anyone serious about scaling efficiently.',
  },
  {
    title: 'Aspiring DJ Brand Identity & Logo Design',
    text:
      'As an aspiring DJ, having an iconic logo was very important to me — something that represents who I am. Pulse Marketing did an incredible job meeting with me and coming up with amazing ideas. Fairly priced. Professional and creative throughout the process.',
  },

   {
    title: 'Complete Website Revamp & Branding',
    text:
      'I hired Pulse Marketing to revamp my website, and they exceeded my expectations. Not only did they deliver a fantastic site, but their after-service support has been outstanding. The team has been incredibly helpful every step of the way.',
  },

  {
    title: 'Fitness Brand Website Launch – J Fitness Edmonton',
    text:
      'Working with Ian and the team at Pulse Marketing was amazing. They worked above and beyond to create a beautiful, functional website for J Fitness and Training. Highly recommend their services for anyone looking to stand out online.',
  },

  {
    title: 'Luxury Cottage Rental Website – Nova Scotia',
    text:
      'Working with Ian from Pulse Marketing has been an absolute pleasure. Despite my not knowing all the technical terms associated with web design, he was able to translate my directions to produce and deliver an absolutely stunning and functional site.',
  },

  {
    title: 'Canadian Cleaning Company Transformation',
    text:
      'Pulse Marketing has been instrumental in transforming my Canadian cleaning company. Their personalized branding and tailored systems have not only propelled our growth but also infused our brand with professionalism and trust.',
  },

  {
    title: 'Design Agency Frontend Revamp',
    text:
      'Working with Pulse Marketing to revamp our agency’s website was like catching up with an old friend who just happens to be incredibly talented at web design. They were quick on their feet, creative, and delivered far beyond expectations.',
  },

   {
    title: 'Small Business Website Launch',
    text:
      'Great experience from start to finish! Ian and his team at Pulse Marketing went above and beyond to deliver the exact website I wanted. Absolute best service and support! Definitely recommend Pulse to any business owner.',
  },

  {
    title: 'Trading Company Web Overhaul',
    text:
      'Ian and the team at Pulse Marketing are top-notch. I’ve worked with many agencies and more often than not, it’s a letdown — NOT the case with Pulse! Looking forward to our continued partnership. Professional, dependable, and results-driven.',
  },

  {
    title: 'Custom CRM & Software Solutions',
    text:
      'Pulse Marketing offers excellent CRM and software solutions for businesses. Their tools are robust, user-friendly, and tailored to meet the diverse needs of modern enterprises. Highly recommended for anyone serious about scaling efficiently.',
  },

];

const splitIntoTwoRows = (arr) => {
  const mid = Math.ceil(arr.length / 2);
  return [arr.slice(0, mid), arr.slice(mid)];
};

const Testimonials = () => {
  const [row01, row02] = splitIntoTwoRows(testimonials);

  const Card = ({ t }) => (
    <div className="item">
      <div className="heading-img">
        <h3>{t.title}</h3>
        <div className="icons-text">
          <img src={ICONS.google} alt="Google" />
          <img src={ICONS.star} alt="Rating" />
        </div>
      </div>
      <p>{t.text}</p>
    </div>
  );

  return (
    <div id="newtestimonailsection">
      <div className="ct-container">
        <div className="heading-wrapper" id="center">
          <h3>What Our Happy Clients Say About Us</h3>
        </div>
      </div>

      <div className="testimonial-wrapper">
        {/* Row 1: Left -> Right */}
        <div className="marquee marquee-ltr">
          <div className="marquee-track">
            {row01.map((t, i) => (
              <Card t={t} key={`r1-${i}`} />
            ))}
          </div>
        </div>

        {/* Row 2: Right -> Left */}
        <div className="marquee marquee-rtl">
          <div className="marquee-track">
            {row02.map((t, i) => (
              <Card t={t} key={`r2-${i}`} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonial-wrapper {
          display: flex;
          flex-direction: column;
          gap: 24px;
          overflow: hidden;
        }

        .marquee {
          overflow: hidden;
          width: 100%;
        }

        .marquee-track {
          display: flex;
          gap: 18px;
          width: max-content;
          animation: 50s linear infinite;
          will-change: transform;
        }

        .marquee-ltr .marquee-track {
          animation-name: marquee-ltr;
        }

        .marquee-rtl .marquee-track {
          animation-name: marquee-rtl;
        }

        .marquee-track {
            padding: 2px 0;
        }

        @keyframes marquee-rtl {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-ltr {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Testimonials;