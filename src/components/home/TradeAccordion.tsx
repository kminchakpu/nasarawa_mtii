"use client";

import { useState } from "react";
import styles from "./TradeAccordion.module.css";

type AccordionItem = {
  id: string;
  title: string;
  content: React.ReactNode;
};

const accordionItems: AccordionItem[] = [
  {
    id: "trade-related-fees",
    title: "Trade Related Fees",
    content: (
      <div>
        <p>
          The Nasarawa State Internal Revenue Service (NSIRS) serves as the official authority for tax and revenue collection in the State. Its operations are governed by the regulations and fee schedules outlined in the Nasarawa State Harmonization and Collection of all Revenues document, encompassing taxes, duties, levies, rates, fees, and charges, as approved by the Governor. For comprehensive details on payment procedures and levies related to inter-state trade in Nasarawa State, download the document on our downloads page.
        </p>
      </div>
    ),
  },
  {
    id: "grievance-redress",
    title: "Grievance Redress Mechanism System",
    content: (
      <div className={styles.content}>
        <h4>Grievance Redress Mechanism (GRM)</h4>

        <p>
          The Grievance Redress Mechanism (GRM) is a system implemented by the
          Nasarawa State Government to enable clients to voice concerns
          regarding services provided by relevant Ministries, Departments, and
          Agencies (MDAs). It offers a platform for seeking redress when
          negative impacts are perceived to arise from the actions or services
          of these MDAs.
        </p>

        <p>
          Designed to monitor, manage, and resolve complaints effectively, the
          GRM specifically addresses issues raised by truckers, transporters,
          and traders involved in inter-state movement of goods. By
          establishing a structured framework for resolving trade grievances,
          the State Government aims to foster fair and equitable trade
          practices at both local and international levels.
        </p>

        <h4>Submission of Trade Grievances</h4>

        <p>
          Any business, industry, or individual—such as traders and
          truckers/transporters—can submit trade grievances to the TGRM Panel
          regarding acts or omissions related to the collection and payment of
          trade-related fees and levies for inter-state goods movement.
        </p>

        <p>Grievances can be submitted through the following channels:</p>

        <ul>
          <li>
            <strong>Verbal Complaints:</strong> Contact the designated hotline
            at <strong>+2348038213845</strong>.
          </li>

          <li>
            <strong>Written Complaints:</strong> Send an SMS or fill out the{" "}
            <a href="/grievance-redress">
              Grievance Redress Form
            </a>{" "}
            online.
          </li>

          <li>
            Alternatively, download the grievance redress form.
          </li>
        </ul>

        <p>
          The verbal or written complaints shall detail the complainant&apos;s name
          and contact, date of complaints, type of complaint, the
          description/nature of the grievance, relevant supporting evidence,
          and the desired resolution.
        </p>

        <h4>Resolution of Trade Grievances</h4>

        <p>
          The Trade Grievance Redress Mechanism (TGRM) will conduct a
          comprehensive review of each submitted trade grievance, engaging
          relevant stakeholders and experts as necessary. Following its review,
          the TGRM will provide recommendations for resolving the grievance.
        </p>

        <p>
          These may include negotiations with foreign governments, initiating
          dispute settlement proceedings, or taking other appropriate actions.
          The TGRM is committed to transparency and will provide regular
          updates to the grievance submitter on the review&apos;s progress and any
          proposed resolutions.
        </p>

        <p>
          All complaints will be resolved within thirty (30) days of receipt.
          Appropriate actions or remedies will be recommended to address
          disputes in accordance with applicable laws and international
          agreements.
        </p>

        <p>
          The Ministry of Trade, Industry, and Investment will ensure that
          reports on trade grievance activities and resolution statuses are
          regularly published on the State&apos;s official website(s).
        </p>
      </div>
    ),
  },
  {
  id: "export-strategy",
  title: "Nasarawa State Export Strategy & Guidelines",
  content: (
    <div className={styles.content}>
      <h4>
        Export Strategy and Guidelines 
      </h4>

      <p>
        The export strategy for Nasarawa State Ministry of Trade, Industry,
        and Investment aims to enhance the State&apos;s export potential,
        promote local industries, and create a sustainable framework for
        international trade. This strategy aligns with global trade practices
        while leveraging Nasarawa State&apos;s unique resources and
        opportunities.
      </p>

      <h4>Export Strategy</h4>

      <h5>1. Identify Priority Sectors</h5>

      <ul>
        <li>
          <strong>Agriculture:</strong> Sesame seeds, ginger, yams, and
          cashew nuts.
        </li>
        <li>
          <strong>Mining and Natural Resources:</strong> Solid minerals like
          limestone, tin, and gemstones.
        </li>
        <li>
          <strong>Handicrafts and Local Products:</strong> Unique handcrafted
          items and cultural artifacts.
        </li>
      </ul>

      <h5>2. Enhance Export Readiness</h5>

      <ul>
        <li>
          Conduct export-readiness assessments for local businesses.
        </li>
        <li>
          Offer training programs on export processes, compliance, and
          international trade standards.
        </li>
        <li>
          Facilitate certification and quality assurance programs for export
          goods.
        </li>
      </ul>

      <h5>3. Develop Trade Infrastructure</h5>

      <ul>
        <li>
          Establish export hubs and warehouses to streamline logistics.
        </li>
        <li>
          Partner with stakeholders to improve transportation and shipping
          facilities.
        </li>
        <li>
          Ensure access to reliable power and water supply in industrial
          zones.
        </li>
      </ul>

      <h5>4. Leverage Technology and Innovation</h5>

      <ul>
        <li>
          Create an online platform to showcase Nasarawa&apos;s export-ready
          products.
        </li>
        <li>
          Utilize digital tools for market research, pricing analysis, and
          connecting exporters with buyers.
        </li>
        <li>
          Introduce an e-trade portal for easy registration and tracking of
          export activities.
        </li>
      </ul>

      <h5>5. Strengthen Trade Relationships</h5>

      <ul>
        <li>
          Collaborate with national and international trade bodies.
        </li>
        <li>
          Organize trade fairs, expos, and business delegations to promote
          Nasarawa&apos;s products globally.
        </li>
        <li>
          Negotiate bilateral agreements with key international markets.
        </li>
      </ul>

      <h5>6. Promote Sustainable Practices</h5>

      <ul>
        <li>
          Encourage environmentally friendly production methods.
        </li>
        <li>
          Support fair trade practices to enhance the reputation of
          Nasarawa&apos;s exports.
        </li>
      </ul>

      <h4>Export Guidelines</h4>

      <h5>1. Registration and Licensing</h5>

      <ul>
        <li>
          Businesses must register with the Nasarawa State Ministry of Trade,
          Industry, and Investment.
        </li>
        <li>
          Obtain necessary export licenses and permits as per State and
          Federal regulations.
        </li>
      </ul>

      <h5>2. Quality Assurance</h5>

      <ul>
        <li>
          Ensure products meet international quality and safety standards.
        </li>
        <li>
          Acquire certifications such as ISO, HACCP, or Organic Certification
          where applicable.
        </li>
      </ul>

      <h5>3. Documentation Requirements</h5>

      <ul>
        <li>Proforma invoice and commercial invoice.</li>
        <li>Packing list, bill of lading, and certificate of origin.</li>
        <li>Export declaration forms and permits.</li>
      </ul>

      <h5>4. Trade Financing and Incentives</h5>

      <ul>
        <li>
          Access financial support through export loans and credit facilities.
        </li>
        <li>
          Leverage incentives like tax rebates for export-oriented industries.
        </li>
      </ul>

      <h5>5. Compliance and Legal Framework</h5>

      <ul>
        <li>
          Adhere to international trade laws, including WTO agreements.
        </li>
        <li>
          Resolve trade disputes through the Trade Grievance Redress
          Mechanism (TGRM).
        </li>
      </ul>

      <h5>6. Market Research and Entry</h5>

      <ul>
        <li>
          Use Nasarawa&apos;s trade data and export portals for market
          insights.
        </li>
        <li>
          Engage in export promotion activities organized by the Ministry.
        </li>
      </ul>

      <h4>Implementation Plan</h4>

      <h5>Short-term Goals</h5>

      <ul>
        <li>Establish export readiness training programs.</li>
        <li>Launch an online export portal.</li>
        <li>
          Host an inaugural trade expo featuring priority sectors.
        </li>
      </ul>

      <h5>Mid-term Goals</h5>

      <ul>
        <li>Build export hubs and improve trade logistics.</li>
        <li>
          Formulate bilateral agreements with strategic markets.
        </li>
      </ul>

      <h5>Long-term Goals</h5>

      <ul>
        <li>
          Achieve a 20% increase in Nasarawa&apos;s export revenue within five
          years.
        </li>
        <li>
          Position Nasarawa as a top exporter of agricultural and mining
          products in Nigeria.
        </li>
      </ul>
    </div>
  ),
},
];

export default function TradeAccordion() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem((current) => (current === id ? null : id));
  };

  return (
    <div className={styles.accordion}>
      {accordionItems.map((item) => {
        const isOpen = openItem === item.id;

        return (
          <div
            key={item.id}
            className={`${styles.accordionItem} ${
              isOpen ? styles.open : ""
            }`}
          >
            <h3 className={styles.accordionHeader}>
              <button
                type="button"
                className={styles.accordionButton}
                onClick={() => toggleItem(item.id)}
                aria-expanded={isOpen}
                aria-controls={`accordion-panel-${item.id}`}
              >
                <span>{item.title}</span>

                <span className={styles.icon} aria-hidden="true">
                  +
                </span>
              </button>
            </h3>

            <div
              id={`accordion-panel-${item.id}`}
              className={styles.accordionCollapse}
              role="region"
            >
              <div className={styles.accordionBody}>
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}