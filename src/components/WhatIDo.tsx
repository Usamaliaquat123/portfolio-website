import "./styles/WhatIDo.css";
import HoverLinks from "./HoverLinks";

const WhatIDo = () => {
  return (
    <div className="whatido-section section-container">
      <div className="whatido-container">
        <h2>
          What I <span>do</span>
        </h2>
        <div className="whatido-info">
          <div className="whatido-info-box">
            <h4>
              <HoverLinks text="FULL STACK DEVELOPMENT" />
            </h4>
            <p>
              Building scalable web applications with React, Next.js, Vue.js,
              Node.js, NestJS, and Go. Expert in both frontend and backend
              architecture with REST and GraphQL APIs.
            </p>
          </div>
          <div className="whatido-info-box">
            <h4>
              <HoverLinks text="AI INTEGRATION" />
            </h4>
            <p>
              Integrating Claude, GPT-4, and LangChain into production apps.
              Building RAG systems with vector databases like Milvus and
              Weaviate. Prompt engineering and semantic search.
            </p>
          </div>
          <div className="whatido-info-box">
            <h4>
              <HoverLinks text="CLOUD & DEVOPS" />
            </h4>
            <p>
              Deploying on AWS, GCP, and Azure with Docker, Kubernetes, and
              Terraform. CI/CD pipelines with GitHub Actions. Infrastructure
              as code and monitoring with Sentry and Datadog.
            </p>
          </div>
          <div className="whatido-info-box">
            <h4>
              <HoverLinks text="MOBILE DEVELOPMENT" />
            </h4>
            <p>
              Cross-platform mobile apps with React Native. 10+ apps
              published on Play Store and App Store. Redux state management
              and Firebase integration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
