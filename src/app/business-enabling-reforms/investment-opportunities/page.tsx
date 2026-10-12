import Link from "next/link";
import BusinessReformsTabs from "@/components/business-reforms/BusinessReformsTabs";
import styles from "@/components/business-reforms/BusinessReformsTabs.module.css";
import Footer from "@/components/layout/Footer";

export default function InvestmentOpportunitiesPage() {
  return (
    <>
      <BusinessReformsTabs>
        <div className={styles.businessReformsContent}>
          <span className={styles.contentLabel}>
            BUSINESS ENABLING REFORMS
          </span>

          <h2>Investment Opportunities</h2>

          {/* Overview */}
          <div className={styles.contentBlock}>
            <h3>Overview</h3>

            <p>
              Nasarawa State offers a wide range of investment opportunities
              across agriculture, mining, manufacturing, infrastructure,
              tourism, trade, and other emerging sectors. The State Government
              is committed to creating an enabling environment that attracts
              both local and foreign investors while supporting sustainable
              economic growth.
            </p>

            <p>
              Through the Ministry of Trade, Industry and Investment (MTII),
              investors are supported with information, guidance, and
              facilitation services to help them identify viable opportunities
              and establish successful businesses within the State.
            </p>
          </div>

          {/* Investment Climate */}
          <div className={styles.contentBlock}>
            <h3>Investment Climate</h3>

            <p>
              Nasarawa State is strategically positioned within Nigeria and
              benefits from its proximity to major commercial and industrial
              markets. The State&apos;s natural resources, agricultural potential,
              growing population, and developing infrastructure provide a
              strong foundation for investment.
            </p>

            <p>
              The Government continues to implement reforms aimed at reducing
              barriers to doing business, improving regulatory processes,
              developing infrastructure, and strengthening public-private
              partnerships.
            </p>
          </div>

          {/* Priority Sectors */}
          <div className={styles.contentBlock}>
            <h3>Priority Investment Sectors</h3>

            <p>
              Investors can explore opportunities across several priority
              sectors with significant potential for growth and economic
              diversification.
            </p>

            <ul className={styles.contentList}>
              <li>
                <strong>Agriculture and Agro-Processing:</strong> Opportunities
                exist in crop production, livestock, food processing,
                agricultural storage, packaging, and value-added agricultural
                products.
              </li>

              <li>
                <strong>Mining and Mineral Resources:</strong> The State has
                significant mineral resources that provide opportunities for
                responsible exploration, processing, and value addition.
              </li>

              <li>
                <strong>Manufacturing:</strong> Investors can establish
                manufacturing facilities that transform locally available raw
                materials into finished and semi-finished products.
              </li>

              <li>
                <strong>Industrial Development:</strong> Opportunities exist
                in industrial parks, industrial layouts, processing facilities,
                and supporting infrastructure.
              </li>

              <li>
                <strong>Trade and Commerce:</strong> The growing commercial
                environment creates opportunities in wholesale, retail,
                logistics, distribution, and market development.
              </li>

              <li>
                <strong>Infrastructure:</strong> Public-private partnerships
                can support the development of transportation, energy, water,
                logistics, and other critical infrastructure.
              </li>

              <li>
                <strong>Tourism and Hospitality:</strong> Investors can
                explore opportunities in hotels, resorts, recreation,
                hospitality services, and tourism-related infrastructure.
              </li>

              <li>
                <strong>Technology and Innovation:</strong> The State offers
                opportunities for technology-enabled businesses, digital
                services, innovation hubs, and ICT infrastructure.
              </li>
            </ul>
          </div>

          {/* Agriculture */}
          <div className={styles.contentBlock}>
            <h3>Agriculture and Agro-Processing</h3>

            <p>
              Agriculture remains one of the most important sectors of the
              Nasarawa State economy. The State&apos;s fertile land and agricultural
              resources provide opportunities for commercial farming,
              processing, storage, packaging, and agricultural value chains.
            </p>

            <p>
              Investors can participate in the development of modern
              agricultural enterprises that increase productivity, create
              employment, strengthen food security, and improve the value of
              locally produced agricultural commodities.
            </p>
          </div>

          {/* Mining */}
          <div className={styles.contentBlock}>
            <h3>Mining and Mineral Resources</h3>

            <p>
              Nasarawa State is endowed with a variety of mineral resources,
              creating opportunities for investors interested in responsible
              mineral exploration, processing, and value addition.
            </p>

            <p>
              Investment in mineral processing and related industries can
              contribute significantly to job creation, government revenue,
              industrial development, and economic diversification.
            </p>
          </div>

          {/* Manufacturing */}
          <div className={styles.contentBlock}>
            <h3>Manufacturing and Industrial Development</h3>

            <p>
              The State is encouraging investment in manufacturing and
              industrial activities that utilize locally available raw
              materials and create employment opportunities.
            </p>

            <p>
              Opportunities include food and beverage processing, agricultural
              processing, light manufacturing, building materials, packaging,
              and other industries that support the development of local value
              chains.
            </p>
          </div>

          {/* SMEs */}
          <div className={styles.contentBlock}>
            <h3>Small and Medium-Sized Enterprises</h3>

            <p>
              Small and Medium-Sized Enterprises (SMEs) play a vital role in
              employment creation, innovation, and economic development.
              Investors and entrepreneurs can take advantage of opportunities
              in a wide range of emerging and established business sectors.
            </p>

            <ul className={styles.contentList}>
              <li>
                <strong>Business Development:</strong> Establishment and
                expansion of small and medium-sized enterprises.
              </li>

              <li>
                <strong>Value Addition:</strong> Processing and transformation
                of locally produced goods.
              </li>

              <li>
                <strong>Technology:</strong> Development of innovative and
                technology-enabled businesses.
              </li>

              <li>
                <strong>Services:</strong> Provision of professional,
                commercial, logistics, and other business services.
              </li>
            </ul>
          </div>

          {/* Public Private Partnerships */}
          <div className={styles.contentBlock}>
            <h3>Public-Private Partnerships</h3>

            <p>
              The Nasarawa State Government recognizes the importance of
              collaboration with the private sector in delivering
              infrastructure and economic development projects.
            </p>

            <p>
              Public-private partnerships provide opportunities for investors
              to participate in projects that support industrial development,
              infrastructure expansion, service delivery, and economic growth.
            </p>
          </div>

          {/* Investor Support */}
          <div className={styles.contentBlock}>
            <h3>Investor Support and Facilitation</h3>

            <p>
              MTII works with relevant government institutions to support
              investors throughout the investment process. The Ministry
              facilitates access to information and helps investors navigate
              relevant government processes and requirements.
            </p>

            <ul className={styles.contentList}>
              <li>
                <strong>Investment Information:</strong> Providing information
                about available investment opportunities and sectors.
              </li>

              <li>
                <strong>Regulatory Guidance:</strong> Supporting investors in
                understanding applicable regulatory requirements.
              </li>

              <li>
                <strong>Investment Facilitation:</strong> Assisting investors
                in navigating relevant government procedures.
              </li>

              <li>
                <strong>Stakeholder Coordination:</strong> Connecting
                investors with relevant government agencies and private-sector
                stakeholders.
              </li>

              <li>
                <strong>Aftercare Support:</strong> Supporting existing
                investors and helping address challenges that may affect their
                operations.
              </li>
            </ul>
          </div>

          {/* Why Invest */}
          <div className={styles.contentBlock}>
            <h3>Why Invest in Nasarawa State?</h3>

            <p>
              Nasarawa State provides investors with opportunities to
              participate in a growing economy while benefiting from its
              strategic location, natural resources, agricultural potential,
              and expanding business environment.
            </p>

            <ul className={styles.contentList}>
              <li>
                Strategic location with access to major Nigerian markets.
              </li>

              <li>
                Abundant agricultural and mineral resources.
              </li>

              <li>
                Growing opportunities for industrial and commercial
                development.
              </li>

              <li>
                Government commitment to improving the business environment.
              </li>

              <li>
                Opportunities for public-private partnerships.
              </li>

              <li>
                Potential for job creation and sustainable economic growth.
              </li>
            </ul>
          </div>

          {/* Investment Enquiries */}
          <div className={styles.contentBlock}>
            <h3>Investment Enquiries</h3>

            <p>
              Investors interested in exploring opportunities in Nasarawa
              State are encouraged to contact the Ministry for additional
              information, investment guidance, and facilitation support.
            </p>

            <p>
              MTII is committed to working with investors and other
              stakeholders to create mutually beneficial partnerships that
              contribute to the economic development of the State.
            </p>

            <div className={styles.resourceButtons}>
              <Link
                href="/contact"
                className={styles.resourceButton}
              >
                <span>Contact MTII</span>
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/business-enabling-reforms/faqs"
                className={styles.resourceButton}
              >
                <span>View FAQs</span>
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/business-enabling-reforms/application-guidelines"
                className={styles.resourceButton}
              >
                <span>Application Guidelines</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </BusinessReformsTabs>

      <Footer />
    </>
  );
}