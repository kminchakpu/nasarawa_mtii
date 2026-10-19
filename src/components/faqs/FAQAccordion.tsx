
"use client";

import { useMemo, useState } from "react";
import styles from "./FAQAccordion.module.css";

type FAQCategory = "GRM" | "Services";

type FAQ = {
  id: number;
  question: string;
  answer: string;
  category: FAQCategory;
};

const faqs: FAQ[] = [
  {
    id: 1,
    category: "GRM",
    question: "What is the Grievance Redress Mechanism (GRM)?",
    answer:
      "The Grievance Redress Mechanism (GRM) is a structured process through which individuals, businesses, investors, and other stakeholders can submit complaints, report concerns, and seek resolution regarding the activities, services, projects, or interventions of MTII.",
  },
  {
    id: 2,
    category: "GRM",
    question: "What is the purpose of the GRM?",
    answer:
      "The GRM promotes transparency, accountability, fairness, and timely resolution of complaints. It provides an accessible channel for stakeholders to raise concerns and helps the Ministry identify and address service delivery challenges.",
  },
  {
    id: 3,
    category: "GRM",
    question: "Who can submit a grievance to MTII?",
    answer:
      "Any individual or group affected by, or concerned about, the Ministry's services, activities, projects, or interventions may submit a grievance. This includes business owners, traders, investors, entrepreneurs, community members, contractors, and other stakeholders.",
  },
  {
    id: 4,
    category: "GRM",
    question: "What types of complaints can I submit through the GRM?",
    answer:
      "Complaints may relate to delays in service delivery or application processing, concerns about business registration or permits handled by the Ministry, unclear fees or administrative procedures, unfair treatment or discrimination, project implementation concerns, suspected corruption or misconduct, environmental or community concerns associated with relevant projects, and other matters connected to the Ministry's responsibilities.",
  },
  {
    id: 5,
    category: "GRM",
    question: "How do I submit a grievance to MTII?",
    answer:
      "Use the official grievance submission channels published by MTII. These may include an online grievance form, an official email address, a designated office, or another approved reporting channel. Provide a clear description of your complaint and any relevant supporting information.",
  },
  {
    id: 6,
    category: "GRM",
    question: "What information should I include in my complaint?",
    answer:
      "Where applicable, include your name and preferred contact details, the nature of your complaint, the date and location of the incident, the department or project involved, details of the people or organisations involved where known, relevant documents or evidence, and the action or resolution you are requesting.",
  },
  {
    id: 7,
    category: "GRM",
    question: "Can I submit a grievance anonymously?",
    answer:
      "Anonymous reporting may be possible if permitted under MTII's approved GRM procedure. If you submit anonymously, provide enough detail for the Ministry to assess the complaint. Anonymity may limit the Ministry's ability to request clarification or communicate the outcome. Confirm the available anonymous reporting options with MTII.",
  },
  {
    id: 8,
    category: "GRM",
    question: "Is there a fee for submitting a grievance?",
    answer:
      "The proposed GRM should provide a free channel for lodging complaints. Confirm the Ministry's approved procedure before treating this as an official policy. No one should be asked to pay an unofficial fee to have a complaint received or considered.",
  },
  {
    id: 9,
    category: "GRM",
    question: "Will my complaint be kept confidential?",
    answer:
      "Complaints should be handled with appropriate confidentiality, and access to personal information should be restricted to authorised personnel where possible. Information may need to be shared with relevant officials to investigate and resolve a grievance or where disclosure is legally required. The Ministry should publish its approved privacy and confidentiality policy.",
  },
  {
    id: 10,
    category: "GRM",
    question: "Will I face retaliation for submitting a complaint?",
    answer:
      "Stakeholders should be able to raise concerns in good faith without intimidation or improper retaliation. Any allegation of threats or retaliation connected to a grievance should be reported through an appropriate official channel for assessment and action.",
  },
  {
    id: 11,
    category: "GRM",
    question: "How long will it take to resolve my grievance?",
    answer:
      "Resolution time depends on the nature and complexity of the complaint, the evidence available, and any necessary investigation. MTII should communicate the applicable acknowledgement and resolution timelines under its approved GRM procedure.",
  },
  {
    id: 12,
    category: "GRM",
    question: "How can I track the status of my complaint?",
    answer:
      "If the Ministry issues a grievance reference number or acknowledgement, retain it for follow-up. Use the official contact channel provided when submitting the complaint to request an update. A reference number should not be published publicly if it contains confidential information.",
  },
  {
    id: 13,
    category: "GRM",
    question: "What happens after I submit a grievance?",
    answer:
      "Under a typical GRM process, the complaint is received and recorded, assessed to determine the appropriate handling process, referred to the responsible officer or unit, investigated where necessary, and addressed through an appropriate response. The complainant should be informed of the outcome where contact details are available.",
  },
  {
    id: 14,
    category: "GRM",
    question: "What if my complaint is outside MTII's responsibilities?",
    answer:
      "The Ministry may explain why the matter falls outside its mandate and, where appropriate, direct or refer you to the relevant government department or agency. Any referral should follow the Ministry's approved procedure.",
  },
  {
    id: 15,
    category: "GRM",
    question: "What if I am not satisfied with the resolution?",
    answer:
      "You may request a review or appeal if that option is provided under the Ministry's GRM procedure. Explain why you disagree with the outcome and include any additional relevant evidence. Where applicable, you may also seek assistance from the appropriate independent oversight or legally authorised body.",
  },
  {
    id: 16,
    category: "GRM",
    question: "Can I submit additional evidence after filing a complaint?",
    answer:
      "Yes. Contact the designated GRM officer or use the official follow-up channel to provide additional documents or information. Include your grievance reference number, if one was issued, so the information can be linked to your case.",
  },
  {
    id: 17,
    category: "GRM",
    question: "What if I submit a complaint on behalf of another person or business?",
    answer:
      "Explain your relationship to the affected person or organisation and provide any required authorisation. The Ministry may need to verify that you are permitted to act on their behalf before disclosing confidential case information.",
  },
  {
    id: 18,
    category: "GRM",
    question: "Can I report suspected corruption or misconduct?",
    answer:
      "You may report suspected corruption, bribery, abuse of office, or other misconduct connected to the Ministry through an appropriate official reporting channel. Describe what happened and provide supporting evidence where available. Use any designated protected reporting channel where applicable.",
  },
  {
    id: 19,
    category: "GRM",
    question: "How do I report a concern about an MTII project?",
    answer:
      "Identify the project or intervention, describe the issue, state when and where it occurred, and explain how it affects you or your community. Include relevant evidence and submit the complaint through the official GRM channel designated for that project, if one exists.",
  },
  {
    id: 20,
    category: "GRM",
    question: "Can I withdraw a grievance after submitting it?",
    answer:
      "You may request to withdraw your complaint by contacting the designated GRM officer. The Ministry should explain any applicable withdrawal procedure. Matters involving alleged serious misconduct or other obligations may still require further action in accordance with applicable rules.",
  },
  {
    id: 21,
    category: "Services",
    question: "What services does MTII provide?",
    answer:
      "MTII supports trade, industry, investment, and business development in Nasarawa State. Depending on the relevant department and applicable regulations, its services may include business-related registrations, permits, investment facilitation, industrial development initiatives, and support for eligible organisations.",
  },
  {
    id: 22,
    category: "Services",
    question: "How can I find the requirements for a Ministry service?",
    answer:
      "Consult the relevant service page on the MTII website or contact the responsible department. Confirm the required documents, applicable fees, processing steps, and timelines before submitting an application.",
  },
  {
    id: 23,
    category: "Services",
    question: "What should I do if my application is delayed?",
    answer:
      "Contact the responsible department with your application reference number and ask for an update. If the delay remains unresolved or you believe the process has been handled improperly, you may submit a grievance through the approved GRM channel.",
  },
  {
    id: 24,
    category: "Services",
    question: "Where can investors find opportunities in Nasarawa State?",
    answer:
      "Investors can consult the MTII website and contact the Ministry's relevant investment unit for information about investment opportunities, applicable procedures, and available government support. Specific incentives and eligibility requirements should be confirmed with the responsible authority.",
  },
  {
    id: 25,
    category: "Services",
    question: "How can I contact MTII for general enquiries?",
    answer:
      "Use the official contact information published on the Ministry's website, including its verified office address, telephone numbers, and email address. For complaints, use the designated GRM channel where available.",
  },
];

const categories = [
  { label: "All Questions", value: "All" },
  { label: "Grievance Redress", value: "GRM" },
  { label: "Ministry Services", value: "Services" },
] as const;

export default function FAQAccordion() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<number[]>([1]);

  const filteredFAQs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return faqs.filter((faq) => {
      const matchesCategory =
        activeCategory === "All" || faq.category === activeCategory;

      const matchesSearch =
        !query ||
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  function toggleFAQ(id: number) {
    setOpenItems((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  }

  function handleCategoryChange(category: string) {
    setActiveCategory(category);
    setOpenItems([]);
  }

  function expandAll() {
    setOpenItems(filteredFAQs.map((faq) => faq.id));
  }

  function collapseAll() {
    setOpenItems([]);
  }

  return (
    <section className={styles.faqSection} aria-label="Frequently asked questions">
      <div className={styles.toolbar}>
        <label className={styles.searchBox}>
          <span className={styles.searchIcon} aria-hidden="true">
            &#9906;
          </span>
          <span className={styles.visuallyHidden}>Search FAQs</span>
          <input
            type="search"
            placeholder="Search questions or keywords..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
          {searchQuery && (
            <button
              type="button"
              className={styles.clearSearch}
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
            >
              &times;
            </button>
          )}
        </label>

        <div className={styles.filters} aria-label="Filter FAQs by category">
          {categories.map((category) => (
            <button
              key={category.value}
              type="button"
              className={`${styles.filterButton} ${
                activeCategory === category.value ? styles.filterActive : ""
              }`}
              onClick={() => handleCategoryChange(category.value)}
              aria-pressed={activeCategory === category.value}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.resultsBar}>
        <p aria-live="polite">
          Showing <strong>{filteredFAQs.length}</strong>{" "}
          {filteredFAQs.length === 1 ? "question" : "questions"}
        </p>

        <div className={styles.accordionActions}>
          <button type="button" onClick={expandAll}>
            Expand all
          </button>
          <span aria-hidden="true">|</span>
          <button type="button" onClick={collapseAll}>
            Collapse all
          </button>
        </div>
      </div>

      {filteredFAQs.length > 0 ? (
        <div className={styles.accordion}>
          {filteredFAQs.map((faq, index) => {
            const isOpen = openItems.includes(faq.id);
            const answerId = `faq-answer-${faq.id}`;
            const triggerId = `faq-question-${faq.id}`;

            return (
              <article
                className={`${styles.faqItem} ${isOpen ? styles.open : ""}`}
                key={faq.id}
              >
                <h2 className={styles.questionHeading}>
                  <button
                    id={triggerId}
                    type="button"
                    className={styles.questionButton}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    <span className={styles.questionNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className={styles.questionText}>{faq.question}</span>

                    <span className={styles.expandIcon} aria-hidden="true">
                      {isOpen ? "\u2212" : "+"}
                    </span>
                  </button>
                </h2>

                {isOpen && (
                  <div
                    id={answerId}
                    className={styles.answer}
                    role="region"
                    aria-labelledby={triggerId}
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <span className={styles.emptyIcon} aria-hidden="true">
            ?
          </span>
          <h2>No questions found</h2>
          <p>
            Try a different keyword or choose another category to find the
            information you need.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("All");
              setOpenItems([]);
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
}
