'use client';

const ICONS = {
  google: '/google-stars.png',
  star: '/test-stars.png',
};

const testimonials = [
  {
    title: 'Aspiring DJ Brand Identity & Logo Design',
    text:
      'Working with Ian and the Pulse Marketing team was an incredible experience for my DJ brand. They listened carefully, refined every detail, and delivered an iconic logo that truly represents me and feels ready for the big stage.',
  },
  {
    title: 'Complete Website Revamp & Branding',
    text:
      'Ian and the Pulse Marketing team completely transformed our website and overall brand presence. They guided us through every decision, delivered a clean modern design, and backed it with reliable, patient support long after launch.',
  },
  {
    title: 'Fitness Brand Website Launch – J Fitness Edmonton',
    text:
      'Working with Ian and the Pulse Marketing team was amazing from day one. They built a beautiful, high-performing website for J Fitness Edmonton that showcases our services clearly and helps us stand out online with confidence.',
  },
  {
    title: 'Luxury Cottage Rental Website – Nova Scotia',
    text:
      'Ian and the Pulse Marketing team made the entire process simple and stress-free. The website they delivered was stunning, functional, and perfectly aligned with our vision from the first call to the final launch.',
  },
  {
    title: 'Canadian Cleaning Company Transformation',
    text:
      'Pulse Marketing has been instrumental in transforming our Canadian cleaning brand. They clarified our message, elevated our visuals, and built systems that make us look polished, trustworthy, and ready to grow into new markets.',
  },
  {
    title: 'Design Agency Frontend Revamp',
    text:
      'Collaborating with Pulse Marketing on our agency frontend revamp felt effortless and fun. They moved quickly, brought strong creative direction, and delivered a site that finally matches the quality of work we do for our own clients.',
  },
  {
    title: 'Small Business Website Launch',
    text:
      'Ian and his team at Pulse Marketing made launching our small business website straightforward and enjoyable. They captured exactly what we imagined, refined every section, and delivered a site that works beautifully on every device.',
  },
  {
    title: 'Trading Company Web Overhaul',
    text:
      'Working with Pulse Marketing on our trading company website was a refreshing change. They were organized, responsive, and focused on results, delivering a professional platform that supports our clients and long-term partnership.',
  },
  {
    title: 'Custom CRM & Software Solutions',
    text:
      'Pulse Marketing helped us design and implement custom CRM and software tools that fit our workflows perfectly. The system is intuitive, robust, and has already made our daily operations smoother, faster, and far more scalable than before.',
  },
  {
    title: 'E-Commerce Store Design & Optimization',
    text:
      'Pulse Marketing completely reworked our e-commerce store from the ground up. The new design feels modern and intuitive, performance has improved noticeably, and we are already seeing better engagement and more confident buyers.',
  },
  {
    title: 'Startup Brand Identity & Website',
    text:
      'As a startup we needed a strong brand presence quickly, and Pulse Marketing delivered. They crafted a clean visual identity and website that clearly communicates our vision and gives us the confidence to approach new customers.',
  },
  {
    title: 'Real Estate Website & Lead System',
    text:
      'Pulse Marketing built a sleek, easy-to-navigate real estate website that showcases our listings beautifully. The integrated lead capture system works smoothly, and we are now receiving more consistent and higher-quality inquiries.',
  },
  {
    title: 'Restaurant Website & Online Ordering',
    text:
      'Our restaurant website project with Pulse Marketing was smooth from start to finish. They created a beautiful, user-friendly experience that makes online ordering simple and has already helped us attract and delight more customers.',
  },
  {
    title: 'Personal Brand Website for Coach',
    text:
      'Ian and his team took time to understand my coaching style and personality. The website they delivered feels authentic, polished, and aligned with my brand, and it has helped me attract better-fit, higher-value clients.',
  },
  {
    title: 'Medical Clinic Website Redesign',
    text:
      'Pulse Marketing redesigned our clinic website with a focus on clarity and patient trust. Visitors can now find information quickly, navigate with ease, and we have noticed a real uptick in online bookings and positive feedback.',
  },
  {
    title: 'Law Firm Website & Branding',
    text:
      'Working with Pulse Marketing gave our law firm a digital presence that finally matches our reputation. The site feels professional, polished, and trustworthy, giving clients confidence from the moment they land on the homepage.',
  },
  {
    title: 'Mobile App Landing Page',
    text:
      'Pulse Marketing crafted a focused landing page for our mobile app launch that communicated our value clearly. The design was clean, modern, and conversion-oriented, playing a key role in a smooth and successful release.',
  },
  {
    title: 'Construction Company Website',
    text:
      'The Pulse Marketing team delivered a strong, modern website that showcases our construction projects with impact. The layout, imagery, and structure give prospects a clear view of our capabilities and the quality of our work.',
  },
  {
    title: 'Non-Profit Organization Website',
    text:
      'Working with Pulse Marketing on our non-profit website was a thoughtful, collaborative experience. They helped articulate our mission clearly, designed a meaningful layout, and made it easier for supporters to learn, connect, and give.',
  },
  {
    title: 'Digital Marketing Funnel Setup',
    text:
      'Pulse Marketing built a complete digital marketing funnel for us, from landing pages to follow-up flows. Their strategic approach, testing, and refinements have made a visible difference in our campaigns and overall revenue.',
  },
  {
    title: 'Corporate Website & CMS Integration',
    text:
      'The team at Pulse Marketing delivered a scalable corporate website paired with an easy-to-manage CMS. Everything from structure to documentation felt considered, making it simple for our team to keep content updated and consistent.',
  },
  {
    title: 'Fashion Brand Online Presence',
    text:
      'Pulse Marketing brought our fashion brand to life online with a stylish, editorial feel. The visuals, layout, and small details all work together, helping our products stand out and giving customers a premium shopping experience.',
  },
  {
    title: 'Automotive Business Website',
    text:
      'Pulse Marketing refreshed our automotive website into something clean, modern, and user-friendly. Customers comment on how easy it is to browse, and the updated look has strengthened trust in our services and team.',
  },
  {
    title: 'SaaS Website & UI Design',
    text:
      'Pulse Marketing designed a clear, intuitive interface for our SaaS product and marketing site. The experience feels streamlined for new users, and the UI supports our product story instead of getting in the way of it.',
  },
  {
    title: 'Photography Portfolio Website',
    text:
      'The Pulse Marketing team created a portfolio site that lets my photography speak for itself. It loads quickly, looks elegant on every screen, and makes it easy for clients to view, share, and inquire about my work.',
  },
  {
    title: 'Marketing Agency Website Partnership',
    text:
      'Partnering with Pulse Marketing has been a real asset to our agency. Their design and development expertise slots seamlessly into our process, allowing us to deliver stronger, more polished results for our own clients.',
  },
  {
    title: 'Online Course Platform Development',
    text:
      'Pulse Marketing helped us plan and launch our online course platform from end to end. The experience for students is smooth and reliable, and managing content on the backend is far easier than with our previous setup.',
  },
  {
    title: 'Local Business Website Refresh',
    text:
      'Our local business website was completely refreshed by Pulse Marketing. The new design feels welcoming and current, and the process from briefing to launch was organized, friendly, and surprisingly quick for our team.',
  },
  {
    title: 'Enterprise-Level Web Solution',
    text:
      'From discovery through deployment, Pulse Marketing delivered an enterprise-level web solution with precision. Their communication was clear, documentation thorough, and the final product has proven stable and dependable for our team.',
  },
];

const splitIntoThreeRows = (arr) => {
  const third = Math.ceil(arr.length / 3);
  return [
    arr.slice(0, third),
    arr.slice(third, third * 2),
    arr.slice(third * 2),
  ];
};

const Testimonials = () => {
  const [row01, row02, row03] = splitIntoThreeRows(testimonials);

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
        {/* Row 1 */}
        <div className="marquee marquee-ltr">
          <div className="marquee-track">
            {row01.map((t, i) => (
              <Card t={t} key={`r1-${i}`} />
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="marquee marquee-rtl">
          <div className="marquee-track">
            {row02.map((t, i) => (
              <Card t={t} key={`r2-${i}`} />
            ))}
          </div>
        </div>

        {/* Row 3 */}
        <div className="marquee marquee-ltr">
          <div className="marquee-track">
            {row03.map((t, i) => (
              <Card t={t} key={`r3-${i}`} />
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
          animation: 130s linear infinite;
          will-change: transform;
          padding: 2px 0;
        }

        .marquee-ltr .marquee-track {
          animation-name: marquee-ltr;
        }

        .marquee-rtl .marquee-track {
          animation-name: marquee-rtl;
        }

        @keyframes marquee-ltr {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes marquee-rtl {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Testimonials;