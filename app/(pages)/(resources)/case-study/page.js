import React from "react";
import CaseStudyHero from "@/components/Page Components/Case Study/case-study-hero-section";
import ClientContext from "@/components/Page Components/Case Study/case-study-client-context";
import ProblemConstraints from "@/components/Page Components/Case Study/case-study-problem-constraints";
import { SolutionArchitecture } from "@/components/Page Components/Case Study/case-study-solution-architecture";
import { ProcessQuality } from "@/components/Page Components/Case Study/casae-study-process-quality";
import { ChallengesSolved } from "@/components/Page Components/Case Study/casae-study-challenges-solved";

const CaseStudy = () => {
  return (
    <div>
      <CaseStudyHero />
      <ClientContext
        industry="Retail / E-commerce"
        clientName="Anonymous CE Retailer"
        clientType="B2C"
        location="EU"
        goal="Live price tracking across categories with hourly refresh."
        website="https://example.com"
        stats={[
          { label: "Markets", value: "5" },
          { label: "SKU count", value: "48k+" },
        ]}
      />
      <ProblemConstraints
        problems={[
          "Dynamic pricing with frequent changes",
          "CAPTCHA walls on product pages",
          "Geo-blocking & rate limiting",
        ]}
        constraints={[
          "Respect robots.txt & terms of service",
          "Do not scrape PII",
          "Maintain < 1 req/s per host",
        ]}
      />
      <SolutionArchitecture
        title="Solution Architecture"
        nodes={[
          "Crawler (Playwright)",
          "Queue (Redis)",
          "Parser (Node/Python)",
          "QA (GE)",
          "Storage (Postgres/S3)",
          "Dashboard (Metabase)",
        ]}
        highlights={[
          "Rate-aware crawling with backoff & retries",
          "Rotating proxies + geo-routing",
          "Schema validation & dedupe pipeline",
          "DOM-change detection alerts",
        ]}
        stack={[
          "Playwright",
          "Redis",
          "Node.js",
          "Python",
          "PostgreSQL",
          "S3",
          "Metabase",
        ]}
        note="We respect robots.txt & site TOS. No PII is collected or stored."
      />
      <ProcessQuality
        process={[
          {
            title: "Discovery & PoC",
            description: "Scope sources, define schema, sample run.",
            duration: "Week 1",
          },
          {
            title: "Hardening",
            description:
              "Retries, human-like delays, CAPTCHA plan, change-detection.",
            duration: "Weeks 2–3",
          },
          {
            title: "Scale-up",
            description: "Scheduling, monitoring/alerts, docs & handover.",
            duration: "Ongoing",
          },
        ]}
        quality={[
          "Schema validation & null handling",
          "Dedupe & normalization rules",
          "Rate-limit aware crawling + backoff",
          "Robots.txt & TOS respected",
          "No PII collected or stored",
          "Data retention policy (90 days)",
          "Source change detection (DOM hash/diff)",
          "Signed data-sharing agreement",
        ]}
      />
      <ChallengesSolved />
    </div>
  );
};

export default CaseStudy;
