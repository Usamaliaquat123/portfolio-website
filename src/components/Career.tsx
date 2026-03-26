import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />
          experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Codistan</h5>
              </div>
              <h3>2016</h3>
            </div>
            <p>
              Built backend services for hospitality platforms using Node.js,
              PHP (Laravel), and Java (Spring MVC). Migrated workflows to Go
              microservices. Integrated Stripe and PayPal billing with
              multi-currency support. Improved response times by 30% with Redis
              caching.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Engineer</h4>
                <h5>xantrum</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Spearheaded a geo-distributed luggage platform using Next.js and
              NestJS with sub-150ms search across 20+ cities. Engineered
              multi-tenant microfrontend architecture using Webpack Module
              Federation, reducing cross-service dependencies by 40%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Epack General Trading L.L.C</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Led full-stack development of a healthcare platform integrating
              GPT AI as a medical chatbot. Implemented semantic search using
              Voyage AI embeddings and Milvus vector database. Built frontend
              in Next.js with Stripe integration for payments.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Full Stack Developer</h4>
                <h5>uptx</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building high-concurrency APIs in Go (Gin), frontend features in
              React 18 and Vue 3. Integrating Claude and GPT-4 for AI-powered
              quiz generation and content moderation. Managing CI/CD with
              GitHub Actions, Docker, and Terraform on AWS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
