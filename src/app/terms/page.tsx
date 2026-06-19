"use client";

import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

export default function TermsPage() {
  return (
    <main className="bg-[#f8fafc] min-h-screen flex flex-col">
      {/* Dark blue header block to provide contrast for the fixed Navbar */}
      <div className="absolute top-0 left-0 right-0 h-[350px] bg-[#0B3C5D] rounded-b-[3rem] z-0" />
      <Navbar disableAnimation={true} />

      <div className="flex-grow w-full max-w-5xl mx-auto px-6 pt-36 md:pt-44 pb-16 relative z-10">
        <div className="bg-white rounded-[2rem] p-8 md:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-100">
          <h1 className="text-4xl md:text-5xl font-black text-[#0B3C5D] mb-8 tracking-tight">Terms & Conditions</h1>
          <div className="prose prose-lg text-gray-700 max-w-none">
            <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
            
            <h2 className="text-2xl font-bold text-[#0B3C5D] mt-10 mb-4 border-b pb-2">Terms and Conditions including Privacy Policy</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Introduction</h3>
            <p>Energy Warehouse (Pty) Ltd (Registration Number: 2020/610595/07) (&quot;Energy Warehouse&quot;, &quot;we&quot;, &quot;us&quot;) respects your privacy and is committed to protecting personal information in accordance with the Protection of Personal Information Act 4 of 2013 (POPIA). This Privacy Policy explains how we collect, use, store, and protect personal information when you use our website and mobile application (the &quot;Platform&quot;).</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Information We Collect</h3>
            <p>We may collect the following categories of personal information:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Identity information (name, ID number, professional registration details)</li>
              <li>Contact details (email address, phone number, physical address)</li>
              <li>Account credentials and authentication data</li>
              <li>Subscription, billing, and token usage data</li>
              <li>COC-related data entered by users</li>
              <li>Technical data (IP address, device type, log data)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3. Purpose of Processing</h3>
            <p>Personal information is processed for the following purposes:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Creating and managing user accounts</li>
              <li>Providing access to subscription services and tokens</li>
              <li>Generating and storing Certificates of Compliance</li>
              <li>Billing, payment processing, and record keeping</li>
              <li>Platform security, maintenance, and improvement</li>
              <li>Compliance with legal and regulatory obligations</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4. Legal Basis for Processing</h3>
            <p>We process personal information based on:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Performance of a contract</li>
              <li>Compliance with legal obligations</li>
              <li>Legitimate business interests</li>
              <li>User consent, where required</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5. Storage and Security</h3>
            <p>We implement appropriate technical and organisational measures to protect personal information against loss, misuse, unauthorised access, or disclosure. Information is stored only for as long as necessary to fulfil the purposes outlined or as required by law.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6. Sharing of Information</h3>
            <p>We do not sell personal information. We may share information with:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Payment service providers</li>
              <li>Cloud hosting and IT service providers</li>
              <li>Regulatory authorities where legally required</li>
            </ul>
            <p>All third parties are required to maintain appropriate data protection standards.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">7. User Responsibilities</h3>
            <p>Users are responsible for ensuring that any personal data of third parties entered into the Platform is lawfully obtained and processed.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">8. Data Subject Rights</h3>
            <p>Under POPIA, you have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access your personal information</li>
              <li>Request correction or deletion</li>
              <li>Object to processing</li>
              <li>Lodge a complaint with the Information Regulator of South Africa</li>
            </ul>
            <p>Requests may be submitted to: <a href="mailto:support@ew.energy" className="text-blue-600 hover:underline">support@ew.energy</a></p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">9. Cookies and Tracking</h3>
            <p>The Platform may use cookies or similar technologies to enhance functionality and performance.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">10. International Transfers</h3>
            <p>Where data is processed outside South Africa, we ensure adequate data protection safeguards are in place.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">11. Changes to This Policy</h3>
            <p>We may update this Privacy Policy from time to time. Continued use of the Platform constitutes acceptance of the updated policy.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">12. Contact Details</h3>
            <p>Energy Warehouse (Pty) Ltd<br/>
            25 Sunlight Peak Crescent, Plot 3333, Midstream, Gauteng, 1692<br/>
            Email: <a href="mailto:support@ew.energy" className="text-blue-600 hover:underline">support@ew.energy</a></p>

            <h2 className="text-2xl font-bold text-[#0B3C5D] mt-12 mb-4 border-b pb-2">Subscription and Refund Policy</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Subscription Structure</h3>
            <p>Energy Warehouse provides access to its Platform on a prepaid subscription basis. Subscriptions include a defined allocation of digital tokens used to generate Certificates of Compliance (COCs).</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Billing and Payment</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Subscription fees are payable in advance.</li>
              <li>Payments are processed via third-party payment providers.</li>
              <li>Prices are displayed inclusive or exclusive of VAT as indicated at checkout.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3. Token Usage</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Tokens are consumed upon submission or completion of a COC.</li>
              <li>Tokens are not transferable, refundable, or redeemable for cash.</li>
              <li>Token usage is final, regardless of whether a COC is accepted by a third party or authority.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4. Renewal and Cancellation</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Subscriptions may be recurring or fixed-term, as selected by the user.</li>
              <li>Users may cancel recurring subscriptions at any time prior to renewal.</li>
              <li>Cancellation prevents future billing but does not refund unused tokens.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5. Refunds</h3>
            <p>Except where required by the Consumer Protection Act 68 of 2008, the following applies:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Subscription fees are non-refundable once access has been granted.</li>
              <li>No refunds are issued for unused tokens.</li>
              <li>No refunds are issued for COCs already generated.</li>
            </ul>
            <p>If a statutory cooling-off right applies, it will be honoured in accordance with South African law.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6. Price Changes</h3>
            <p>Energy Warehouse reserves the right to amend subscription pricing with reasonable prior notice.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">7. Suspension and Termination</h3>
            <p>We may suspend or terminate subscriptions for breach of Terms, misuse, or unlawful activity. No refunds will be issued in such cases.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">8. Contact</h3>
            <p>For billing or subscription queries, contact: <a href="mailto:support@ew.energy" className="text-blue-600 hover:underline">support@ew.energy</a></p>

            <h2 className="text-2xl font-bold text-[#0B3C5D] mt-12 mb-4 border-b pb-2">Energy Warehouse – In-app Terms Acceptance</h2>
            <p className="mb-4">By creating an account, subscribing to a plan, or using the Energy Warehouse platform, you confirm that:</p>
            <ul className="list-disc pl-6 mb-8">
              <li>You have read and agree to the Terms and Conditions, Privacy Policy, and Subscription &amp; Refund Policy;</li>
              <li>You are legally qualified and authorised to issue Certificates of Compliance (COCs);</li>
              <li>You understand that Energy Warehouse is a digital tool only and does not verify or approve COCs;</li>
              <li>Tokens and subscription fees are non-refundable and are consumed or charged when a COC is generated or a subscription period begins;</li>
              <li>You accept full responsibility for compliance with all applicable laws and regulations.</li>
            </ul>
          </div>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}
