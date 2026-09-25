import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // 1. Importáld ezt

export default function TermsOfServicePage() {
  const navigate = useNavigate(); // 2. Hozd létre a navigációt

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 py-16 px-4 md:px-8 selection:bg-primary selection:text-white">
      <div className="max-w-4xl mx-auto bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative">
        
        {/* Vissza gomb a főoldalra */}
        <button 
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-colors mb-8 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        <div className="space-y-6 text-sm md:text-base leading-relaxed text-slate-300">
          <h1 className="text-3xl md:text-4xl font-black text-white border-b border-white/10 pb-4">
            Terms of Service for Coolkids Bt.
          </h1>
          <p className="italic text-slate-400">Last Updated: 2026. 09. 22.</p>




          <h2 className="text-xl font-bold text-white mt-12 mb-6 tracking-wide">Legal Disclaimer</h2>
        
        <div className="bg-slate-950/40 border border-white/5 rounded-2xl p-6 md:p-8 my-8 space-y-6 shadow-inner">
          
          <div>
            <h3 className="text-sm font-semibold text-white mb-2 tracking-wider uppercase text-slate-400">
              1. Educational and Entertainment Purposes Only
            </h3>
            <p className="text-slate-300 text-sm md:text-[15px] leading-relaxed">
              The engine profiles, specifications, data, and 3D models provided through our Services are for educational, informational, and entertainment purposes only. While we strive to present accurate technical information regarding any engine code, Coolkids Bt. does not warrant or guarantee the absolute accuracy, completeness, or up-to-date nature of this data. This information does not constitute official mechanical, manufacturing, or professional repair advice, and should not be used as a substitute for official manufacturer documentation or certified mechanic consultations. Any reliance you place on such information is strictly at your own risk.
            </p>
          </div>

          <div className="border-t border-white/5 pt-4">
            <h3 className="text-sm font-semibold text-white mb-2 tracking-wider uppercase text-slate-400">
              2. Disclaimer of Warranties ("As-Is") and Technical Compatibility
            </h3>
            <p className="text-slate-300 text-sm md:text-[15px] leading-relaxed">
              To the maximum extent permitted by applicable law, all services, data, and 3D models are provided on an "as-is" and "as-available" basis, without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. Coolkids Bt. does not guarantee that the interactive 3D renderings, animations, or databases will function without interruption, remain error-free, or be fully compatible with your specific hardware, operating system, or browser environment.
            </p>
          </div>

          <div className="border-t border-white/5 pt-4">
            <h3 className="text-sm font-semibold text-white mb-2 tracking-wider uppercase text-slate-400">
              3. Proprietary Rights and Reverse-Engineering Prohibition
            </h3>
            <p className="text-slate-300 text-sm md:text-[15px] leading-relaxed">
              All custom-built 3D models, user-interface designs, proprietary database structures, and organized engine profiles are the exclusive intellectual property of Coolkids Bt. or its licensors. Users are strictly prohibited from downloading, extracting, scraping, copying, replicating, or reverse-engineering any 3D meshes, textures, source codes, or technical data sheets from our platform for commercial use, redistribution, or independent application without our explicit prior written consent.
            </p>
          </div>

          <div className="border-t border-white/5 pt-4">
            <h3 className="text-sm font-semibold text-white mb-2 tracking-wider uppercase text-slate-400">
              4. Limitation of Liability
            </h3>
            <p className="text-slate-300 text-sm md:text-[15px] leading-relaxed font-medium">
              In no event shall Coolkids Bt., its directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your access to or use of (or inability to access or use) the services, specifications, or 3D models. In no event shall Coolkids Bt.’s total liability exceed the total amount you actually paid to us for the specific service or product in question.
            </p>
          </div>

          <div className="border-t border-white/5 pt-4">
            <h3 className="text-sm font-semibold text-white mb-2 tracking-wider uppercase text-slate-400">
              5. Trademark & Intellectual Property Disclaimer
            </h3>
            <p className="text-slate-300 text-sm md:text-[15px] leading-relaxed mb-3">
              All product names, logos, brands, and trademarks (including "BMW", "Mercedes-Benz", and "Audi") are the property of their respective owners. The use of these names, logos, and brands is for identification and informational purposes only, and does not imply endorsement, affiliation, or sponsorship by the trademark holders. Coolkids Bt. asserts no claim of ownership over official manufacturer designations or proprietary vehicle specifications.
            </p>
            <p className="text-slate-300 text-sm md:text-[15px] leading-relaxed mb-3">
              Certain 3D models and digital assets utilized within our Services are the property of third-party creators and are used in accordance with their respective licenses, including Creative Commons attribution frameworks. Proper credit, licensing details, and links to the original creators are maintained and fully complied with.
            </p>
            <p className="text-slate-300 text-sm md:text-[15px] leading-relaxed italic bg-white/5 p-4 rounded-xl border border-white/5">
              <strong>Notice regarding inadvertent omissions:</strong> We highly respect intellectual property rights. If you believe that any 3D model, credit, attribution, or trademark has been incorrectly displayed, omitted, or lacks proper licensing information due to an inadvertent oversight, please notify us immediately at <a href="mailto:info@coolkids.hu" className="text-primary underline hover:text-opacity-80">info@coolkids.hu</a>. Upon verification, we will promptly correct the omission, update the attribution, or remove the content in question in good faith.
            </p>
          </div>

        </div>





        <h2 className="text-xl font-bold text-white mt-8 mb-4">1. Introduction</h2>
<p className="mb-4">
  These Terms of Service ("Terms") govern your access to and use of the Coolkids Bt. website, available at{" "}
  <a href="pistondna.com" target="_blank" rel="noreferrer" className="text-primary underline hover:text-opacity-80">
    pistondna.com
  </a>
  , whether accessed via computer, mobile device, or any other technology, including our online store, digital engine profiles, 
  and interactive 3D models (collectively, the "Services").
</p>
<p className="mb-4">
  These Terms constitute a legally binding agreement between you ("User", "you", or "your") and <strong>Coolkids Bt.</strong>, 
  a legal entity registered under the laws of Hungary, with company registration number <strong>Cg.04-06-009292</strong>, 
  having its registered office address at <strong>Hungary, 5600, Bekescsaba, Jokai street 20 4/14</strong>, represented by 
  its Owner <strong>Szilvia Medovarszki</strong>, acting in accordance with the bylaws, with the official corporate email address 
  <strong> info@coolkids.hu</strong> (hereinafter – “Service Provider”, "we", "us", or "our").
</p>
<p className="mb-4">
  By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms. 
  If you do not agree to these Terms, you must immediately cease all access to and use of our Services.
</p>





          <h2 className="text-xl font-bold text-white mt-8 mb-4">2. Definitions</h2>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>"User," "you," and "your"</strong> refer to the individual or entity accessing or using our Services.</li>
            <li><strong>"Services"</strong> refers to the online platform, store, technical engine databases, user management dashboard, and lookup systems provided by Coolkids Bt. via our website.</li>
            <li><strong>"Content"</strong> refers to any text, technical data sheets, automotive specifications, graphics, code, interactive features, user-interface designs, and proprietary 3D models that appear on or through our platform.</li>
            <li><strong>"Products"</strong> refers to the digital assets and access passes offered for sale, including but not limited to individual automotive engine profiles (such as BMW, Mercedes-Benz, Audi, and other manufacturers) and multi-brand discounted bundles.</li>
            <li><strong>"Intellectual Property Rights"</strong> means all copyright rights, moral rights, trademark rights, trade dress, proprietary database rights, 3D mesh structure and rendering rights, trade secret rights, and all other intellectual property rights protecting our platform and products.</li>
          </ul>




          <h2 className="text-xl font-bold text-white mt-8 mb-4">3. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing or using our Services, creating a user account managed via Clerk, or making a digital purchase processed through Stripe, you agree to be bound by these Terms and our Privacy Policy, which is fully incorporated herein by reference. If you are using our Services on behalf of a business entity, automotive workshop, or organization, you represent and warrant that you possess the official authority to bind that organization to these Terms. If you do not agree to these Terms, you must immediately cease all access to and use of our Services.
          </p>



          <h2 className="text-xl font-bold text-white mt-8 mb-4">4. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify, update, or replace these Terms at any time at our sole discretion. If a revision is material—such as significant changes to subscription tiers, digital product pricing, bundle configurations, or refund policies—we will provide notice by posting a prominent update on our Services or by sending an email to your registered address. 
          </p>
          <p className="mb-4">
            The "Last Updated" date at the top of this page indicates when the latest modifications were made. Your continued access to or use of our Services after any such revisions go into effect constitutes your explicit acceptance of the updated Terms. If you do not agree to the revised Terms, you must stop using our Services immediately.
          </p>




          <h2 className="text-xl font-bold text-white mt-8 mb-4">5. Eligibility</h2>
          <p className="mb-4">
            To create a user account via Clerk, access our database, or purchase any digital engine profiles or bundles through Stripe, you must be at least 18 years old or the age of legal majority in your jurisdiction. By utilizing our Services, you explicitly represent and warrant that you possess the full legal capacity to enter into this binding agreement and meet all eligibility criteria. 
          </p>
          <p className="mb-4">
            Coolkids Bt. does not knowingly collect data from or market to individuals under the age of 18. If you are under 18 years old, you are strictly prohibited from creating an account or conducting any financial transactions on our platform. Any unauthorized use of the Services by minors automatically breaches these Terms, and Coolkids Bt. reserves the right to terminate such accounts immediately without prior notice or liability.
          </p>




          <h2 className="text-xl font-bold text-white mt-8 mb-4">6. User Accounts</h2>
          <p className="mb-4">
            To access certain premium features of our Services, including purchasing digital engine profiles, viewing technical data sheets, or accessing interactive 3D models, you are required to create a user account managed via our authentication provider, Clerk. You are solely responsible for:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Providing accurate, current, and complete profile information during registration.</li>
            <li>Maintaining the absolute confidentiality of your password, account credentials, and login sessions.</li>
            <li>All activities, transactions, and purchases that occur under your specific account.</li>
            <li>Notifying us immediately at info@coolkids.hu of any unauthorized use or security breach of your account.</li>
          </ul>
          <p className="mb-4">
            Your user account is strictly personal and non-transferable. You are expressly prohibited from sharing, selling, or leasing your login credentials to any third party. Coolkids Bt. reserves the right, at its sole discretion, to suspend, restrict, or permanently terminate your account without notice or liability if we believe you have violated these Terms, engaged in fraudulent activity, shared your account access, or if your account poses a security risk to our Services or other users.
          </p>




          <h2 className="text-xl font-bold text-white mt-8 mb-4">7. Product Information and Digital Specifications</h2>
          <p className="mb-4">
    We strive to provide the most accurate technical descriptions, pricing, compatibility data, 
    and availability information for our engine profiles. However, typographical errors, inaccuracies, 
    or omissions may occur. We reserve the right to correct any errors, inaccuracies, or omissions 
    and to change, update, or refine technical information at any time without prior notice. **For the 
    avoidance of doubt, if such changes occur after you have submitted an order but before it is processed, 
    we will notify you and reserve the right to cancel the order and provide a full refund if the 
    core specifications or prices have substantially changed.**
  </p>
          <p className="mb-4">
            All 3D models, visual renderings, and animations displayed on our platform are for illustrative and educational purposes only. While they represent specific BMW, Mercedes-Benz, and Audi engine architectures, they may differ slightly from the actual physical components due to digital rendering limitations. We do not warrant that the engine specifications, profiles, data sheets, or interactive 3D models available through our Services are absolutely accurate, complete, reliable, current, or entirely error-free.
          </p>




          <h2 className="text-xl font-bold text-white mb-4">8. Order Acceptance and Digital Fulfillment</h2>
  <p className="mb-4">
    The contract between you and Coolkids Bt. is officially concluded only when your payment is 
    successfully processed through Stripe and access to the purchased digital Content is successfully 
    provisioned within your Clerk-managed user account. We reserve the right to reject or cancel 
    any order prior to or during processing under exceptional circumstances, including but not limited 
    to obvious pricing errors, severe database or technical system failures, or potential fraudulent 
    activity flagged by Stripe or our automated security systems.
  </p>
  <p className="mb-4">
    Due to the purely digital nature of our Products, fulfillment is completed automatically upon 
    a successful transaction. Access to the purchased engine profiles or brand bundles will be 
    granted immediately within your registered user account. While no physical shipments, delivery 
    notes, or physical media will be provided, an official electronic invoice (e-invoice) detailing 
    your purchase will be automatically generated and sent to the email address associated with your 
    Clerk account, in compliance with applicable tax regulations.
  </p>
  <p className="mb-4">
    If we cancel your order after a successful payment due to a system error, obvious pricing defect, 
    or security flag, we will notify you immediately via email and promptly issue a full refund to the 
    original payment method through Stripe.
  </p>





  <h2 className="text-xl font-bold text-white mt-8 mb-4">9. Pricing, Payment Methods, and Brand Packages</h2>
<p className="mb-4">
  Coolkids Bt. provides customized tier-based digital access to its automotive engine database. We do not operate 
  under an automatically renewing monthly or annual subscription model. Instead, all digital purchases processed 
  through Stripe represent <strong>one-time payments granting permanent or specific non-recurring access</strong> to the selected data package.
</p>

<h3 className="text-lg font-semibold text-white mt-4 mb-2">9.1 Product Packages and Pricing</h3>
<p className="mb-4">
  Our standard product configurations, pricing structures, and database limitations are established as follows:
</p>
<ul className="list-disc pl-6 space-y-2 mb-4">
  <li>
    <strong>Individual Brand Access Passes:</strong> Available separately for <strong>BMW</strong>, <strong>Mercedes-Benz</strong>, 
    and <strong>Audi</strong> engine lines. The commercial price for any single individual brand pass is fixed at 
    <strong> €2.99 (gross price, subject to local EU VAT adjustments at checkout)</strong>. Purchasing an individual brand 
    pass unlocks all interactive 3D models, technical profiles, and lookups strictly for that specific manufacturer.
  </li>
  <li>
    <strong>The Multi-Brand Bundle Pass:</strong> A comprehensive, all-inclusive package unlocking the complete automotive engine 
    database across all available manufacturers (BMW, Mercedes-Benz, Audi, and any future extensions included in the bundle scope). 
    The discounted commercial price for the Multi-Brand Bundle is fixed at <strong>€5.99 (gross price, subject to local EU VAT 
    adjustments at checkout)</strong>.
  </li>
</ul>
<p className="mb-4">
  All prices for brand passes or bundles are subject to change at any time without prior notice at our sole discretion. 
  However, any price changes will not affect orders that have already been successfully processed, completed, and confirmed. 
  We reserve the right to modify, update, or temporarily suspend any digital product or bundle configuration without liability. 
</p>

<h3 className="text-lg font-semibold text-white mt-4 mb-2">9.2 Payment Methods and Security via Stripe</h3>
<p className="mb-4">
  We accept various payment methods through our secure third-party gateway, which may include credit cards, 
  debit cards, Apple Pay, Google Pay, and other localized digital payment services as dynamically indicated 
  during the checkout process via <strong>Stripe</strong>. You agree to provide current, complete, and accurate billing 
  information and to promptly maintain your Clerk-managed user account profiles.
</p>
<p className="mb-4">
  By providing your payment information during checkout, you explicitly represent and warrant that you possess 
  the legal right to utilize the designated payment method and that the financial data supplied is fully accurate and complete. 
  You authorize Coolkids Bt., through Stripe, to charge your chosen payment method for the total amount of your purchase. 
  If Stripe cannot successfully process your payment, or flags the transaction for potential security, fraud, or chargeback risks, 
  we reserve the right to automatically cancel your order, deny access to the digital Content, and suspend or terminate your associated 
  Clerk account without liability.
</p>
<p className="mb-4">
  Coolkids Bt. does not directly capture, process, view, or store any raw credit card numbers or sensitive financial credentials 
  on its servers. All payment transactions are handled entirely by Stripe using advanced PCI-DSS compliant tokenization. Coolkids Bt. is not 
  responsible for any currency conversion fees, foreign transaction fees, or cross-border processing charges issued by your financial institution.
</p>

<h3 className="text-lg font-semibold text-white mt-4 mb-2">9.3 Tax and VAT Regulations (EU OSS)</h3>
<p className="mb-4">
  All pricing displayed on our platform is explicitly presented as gross prices, inclusive of value-added tax (VAT) 
  and digital services taxes in accordance with applicable tax regulations. The price displayed on the product page at the time 
  of purchase represents the final total amount charged at checkout. In strict compliance with the European Union 
  VAT One Stop Shop (OSS) framework, the exact final VAT rate is dynamically calculated and allocated at checkout 
  based on your verified geographical location or country of residence.
</p>
<p className="mb-4">
  If you are accessing our Services on behalf of a business entity or automotive workshop located within the European Union 
  and supply a valid, verifiable EU VAT identification number during checkout, you may be eligible to purchase the brand 
  passes under the zero-rated VAT cross-border mechanism (Reverse Charge). Business entities remain solely responsible for 
  self-accounting and declaring any such taxes within their respective national tax jurisdictions.
</p>

<h3 className="text-lg font-semibold text-white mt-4 mb-2">9.4 Refunds</h3>
<p className="mb-4">
  In alignment with Section 10 of these Terms, all digital purchases for brand passes and multi-brand bundles 
  are strictly non-refundable due to the instant delivery and consumption of our digital Content. Once the payment clears, 
  the digital access tokens are instantly and permanently provisioned to your Clerk user profile.
</p>
<p className="mb-4">
  In exceptional circumstances involving severe technical database failures or permanent unresolvable access limitations, 
  Coolkids Bt. may, at its sole and absolute discretion, review a transactional dispute in good faith. If a partial or 
  full refund is explicitly authorized by us, it will be processed and returned to the original payment method securely through Stripe.
</p>






      

  <h2 className="text-xl font-bold text-white mb-4">10. Right of Withdrawal and Refund Policy</h2>
  <p className="mb-4">
    Due to the purely digital nature of our Products (including instant-access brand passes, multi-brand bundles, 
    and technical engine profiles), <strong>all sales are final, and Coolkids Bt. maintains a strict no-refunds 
    and no-returns policy.</strong> Once access to the digital Content is provisioned within your Clerk-managed 
    account, the product is deemed fully delivered and consumed.
  </p>
  <p className="mb-4">
    In accordance with European Union consumer protection laws and Directive 2011/83/EU on Consumer Rights, 
    by making a purchase on our platform and checking the acknowledgment box at checkout, you explicitly 
    consent to the immediate performance of the contract and <strong>acknowledge that you lose your 14-day right 
    of withdrawal once the digital content provisioning has begun.</strong>
  </p>
  <p className="mb-4">
    If you experience severe technical difficulties or database rendering errors that prevent you from accessing 
    the purchased digital models, you must report the issue to us within 14 days of purchase at 
    <a href="mailto:info@coolkids.hu" className="text-blue-400 underline ml-1">info@coolkids.hu</a>. 
    Coolkids Bt. will investigate the technical discrepancy in good faith. Refunds or account credits will be 
    issued solely at our absolute discretion if we determine that a severe backend system failure caused 
    permanent unresolvable access limitations.
  </p>






  <h2 className="text-xl font-bold text-white mb-4">11. Product Reviews and User Content</h2>
  <p className="mb-4">
    By submitting product reviews, technical comments, feedback, or other content (collectively, "User Content") 
    to our Services, you grant Coolkids Bt. a worldwide, non-exclusive, royalty-free, perpetual, and fully 
    sublicensable license to use, copy, reproduce, process, adapt, modify, publish, transmit, display, 
    and distribute such content in any and all media or distribution methods for promotional or analytical purposes. 
    You represent and warrant that you possess all necessary intellectual property rights to grant us this license 
    and that your User Content does not violate any third-party rights, trademarks, or applicable laws.
  </p>
  <p className="mb-4">
    In compliance with the European Union Consumer Rights Directive and Omnibus Directive regulations regarding 
    product reviews, Coolkids Bt. ensures the authenticity of consumer ratings. Product reviews and technical feedback 
    may only be submitted by registered users managed via Clerk who have successfully completed a verified commercial 
    transaction processed through Stripe for the specific Product in question. Automated bots or non-purchasing 
    accounts are strictly prohibited from submitting ratings.
  </p>
  <p className="mb-4">
    Coolkids Bt. does not arbitrarily suppress legitimate negative consumer reviews. However, we reserve the right 
    to monitor, restrict, or permanently remove any User Content that we determine, in our objective assessment, 
    contains profanity, hate speech, defamatory statements, advertising, spam, links to malicious third-party websites, 
    or any unauthorized exposure of official manufacturer proprietary blueprints or trade secrets.
  </p>






  <h2 className="text-xl font-bold text-white mb-4">12. Prohibited Conduct</h2>
  <p className="mb-4">
    You agree to utilize our Services strictly for lawful purposes and in accordance with these Terms. 
    You are expressly prohibited from engaging in, attempting to engage in, or facilitating any of the following activities:
  </p>
  <ul className="list-disc pl-6 space-y-2 mb-4">
    <li>Violating any applicable local, national, or international law or regulation.</li>
    <li>Infringing, misappropriating, or violating the intellectual property rights, trademarks, or proprietary boundaries of Coolkids Bt. or any third party.</li>
    <li>Harassing, abusing, threatening, defaming, or harming any other person or user of our platform.</li>
    <li>Interfering with, disrupting, or compromising the proper technical functioning, availability, or integrity of our Services.</li>
    <li>Attempting to breach, bypass, test, or circumvent any security measures, firewalls, or authentication protocols established by us, Clerk, or Stripe.</li>
    <li>Accessing, tampering with, or attempting to exploit other users' accounts, personal profiles, or billing information without explicit authorization.</li>
    <li>Injecting, posting, or transmitting malicious code, viruses, Trojan horses, worms, or any other technologically harmful computer software.</li>
    <li>
      <strong>Scraping, crawling, harvesting, or executing automated data extraction from our platform without our prior written consent. 
      This explicitly includes a strict prohibition on using any text and data mining, automated tools, or scrapers to extract our engine profiles, 
      technical data, or 3D models for the purpose of training machine learning models or Artificial Intelligence (AI) systems.</strong>
    </li>
    <li>
      <strong>Extracting, ripping, downloading, or executing memory dumps of proprietary 3D meshes, textures, animations, or underlying 3D engine 
      source code directly from web browsers, interactive players, or application interfaces.</strong>
    </li>
    <li>Impersonating Coolkids Bt. personnel, certified mechanics, official car manufacturers, or misrepresenting your affiliation with any person or entity.</li>
    <li>Submitting intentionally false, fraudulent, malicious, or misleading information within product reviews or communication channels.</li>
    <li>Engaging in fraudulent financial activities, utilizing unauthorized payment methods through Stripe, or attempting illegal credit card testing.</li>
  </ul>
  <p className="mb-4">
    Any violation of this section constitutes a material breach of these Terms. Coolkids Bt. reserves the right, at its sole and absolute discretion, 
    to immediately terminate or suspend your Clerk account, block your IP address, revoke your digital brand passes, and pursue full legal and 
    financial remedies without prior notice or liability.
  </p>






  <h2 className="text-xl font-bold text-white mb-4">13. Intellectual Property Rights</h2>
  <p className="mb-4">
    All content provided through our Services, including but not limited to text, technical data sheets, automotive 
    specifications, graphics, logos, icons, user-interface designs, proprietary database structures, source code, 
    interactive animations, 3D meshes, geometries, and textures (collectively, the "Company IP"), is the exclusive 
    property of Coolkids Bt. or its content suppliers and is protected by international copyright, trademark, 
    database protection, and other intellectual property laws. The compilation, organization, and digital arrangement 
    of all technical data on our Services is the exclusive property of Coolkids Bt. and is protected by international copyright laws.
  </p>
  <p className="mb-4">
    Subject to your strict compliance with these Terms and successful payment via Stripe, Coolkids Bt. grants you a 
    limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access, view, and interact with the 
    purchased digital Content solely for your personal, educational, or internal informational purposes via our platform. 
    This license does not transfer any ownership rights in the Company IP to you. You may not extract, replicate, distribute, 
    or exploit any 3D models or specifications for commercial application, resale, or software engineering without 
    our explicit prior written consent.
  </p>
  <p className="mb-4">
    Our trademarks, corporate designations, and trade dress may not be used in connection with any product or service 
    without the prior written consent of Coolkids Bt. All third-party automotive manufacturer trademarks, brand names, 
    and engine designations (such as "BMW", "Mercedes-Benz", "Audi", etc.) visible within our database are used strictly 
    for identification and informational purposes, and remain the sole property of their respective trademark holders.
  </p>






  <h2 className="text-xl font-bold text-white mb-4">14. DMCA & International Copyright Policy</h2>
  <p className="mb-4">
    Coolkids Bt. highly respects the intellectual property rights of others and expects its users to do the same. 
    We will promptly respond to notices of alleged copyright infringement that comply with applicable international 
    laws and regulations. Depending on your geographical jurisdiction, intellectual property disputes and removal requests 
    are handled under the United States Digital Millennium Copyright Act ("DMCA") or the European Union Digital Services Act 
    ("DSA") alongside the relevant Hungarian e-commerce framework (Act CVIII of 2001).
  </p>
  <p className="mb-4">
    If you are a copyright owner or an authorized agent thereof and believe in good faith that any 3D models, data sheets, 
    or Content accessible on or through our Services infringe upon your intellectual property rights, you may submit a formal 
    written DMCA or DSA notification to our designated Copyright Agent via email at: 
    {" "}<a href="mailto:info@coolkids.hu" className="text-blue-400 underline">info@coolkids.hu</a> or by mail directed to 
    our registered office address at Hungary, 5600, Bekescsaba, Jokai street 20 4/14.
  </p>
  <p className="mb-4">
    To be legally effective under the DMCA and EU regulations, your notice must be written in English or Hungarian and include the following details:
  </p>
  <ul className="list-disc pl-6 space-y-2 mb-4">
    <li>A physical or electronic signature of a person authorized to act on behalf of the owner of the infringed right.</li>
    <li>Clear identification of the copyrighted work or proprietary asset claimed to have been infringed.</li>
    <li>Identification of the specific material on our Services that is claimed to be infringing, including URL links or precise database references to enable us to locate it.</li>
    <li>Your complete contact information, including full name, physical mailing address, telephone number, and email address.</li>
    <li>A statement that you have a good faith belief that the utilization of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
    <li>A statement that the information in the notification is fully accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner.</li>
  </ul>
  <p className="mb-4">
    Upon receiving a valid and fully compliant DMCA or DSA infringement notice, Coolkids Bt. will act in good faith to expeditiously 
    remove, disable access to, or correct the disputed Content. We reserve the right to permanently terminate the Clerk 
    user accounts of repeat infringers at our sole discretion.
  </p>






  <h2 className="text-xl font-bold text-white mb-4">15. Privacy Policy</h2>
  <p className="mb-4">
  Your privacy is important to us. Our{' '}
  <button 
    type="button" 
    onClick={() => navigate('/privacypolicy')} // <--- Itt javítsd át erre!
    className="text-primary underline hover:text-opacity-80 cursor-pointer font-medium bg-transparent border-none p-0 inline"
  >
    Privacy Policy
  </button>
  , which is a separate document incorporated into these Terms by reference, explains in detail how we collect, use, and process your personal and technical information in compliance with the European Union General Data Protection Regulation (GDPR) and applicable Hungarian data protection laws.
</p>
<p className="mb-4">
  By accessing or using our Services, you acknowledge that you have read and understood our{' '}
  <button 
    type="button" 
    onClick={() => navigate('/privacypolicy')} // <--- Itt javítsd át erre!
    className="text-primary underline hover:text-opacity-80 cursor-pointer font-medium bg-transparent border-none p-0 inline"
  >
    Privacy Policy
  </button>{' '}
  and the data processing practices associated with our third-party infrastructure providers, including Clerk for identity management and Stripe for secure payment processing.
</p>







<h2 className="text-xl font-bold text-white mb-4">16. Third-Party Links and Services</h2>
  <p className="mb-4">
    Our Services may contain links to third-party websites, or deeply integrate core external technologies 
    and platforms that are not owned, operated, or controlled by Coolkids Bt. This explicitly includes, 
    but is not limited to, user authentication and registration systems managed by <strong>Clerk</strong>, 
    payment processing and secure billing gateways operated by <strong>Stripe</strong>, and specific external 
    hyperlinks directing users to the <strong>carVertical</strong> platform for vehicle history reports.
  </p>
  <p className="mb-4">
    Coolkids Bt. has absolutely no control over, and assumes no responsibility or legal liability for, the content, 
    accuracy of vehicle data, pricing, privacy policies, technical uptime, or practices of any third-party websites 
    or integrated infrastructure services. By clicking on external links, such as the carVertical referral link, or 
    by interacting with our integrated systems, you acknowledge and agree that you leave our platform and become subject 
    to the respective terms of service and privacy agreements of those specific third-party providers. 
  </p>
  <p className="mb-4">
    You further acknowledge and agree that Coolkids Bt. shall not be responsible or liable, directly or indirectly, 
    for any damage, financial loss, operational disruption, or data discrepancy caused or alleged to be caused by or 
    in connection with the use of or reliance on any such content, goods, vehicle reports, infrastructure, or services 
    available on or through any such external websites, services, or system providers.
  </p>








  <h2 className="text-xl font-bold text-white mb-4">17. Disclaimer of Warranties</h2>
  <p className="mb-4 text-justify font-mono text-sm uppercase">
    **TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, OUR SERVICES AND PRODUCTS ARE PROVIDED 
    "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, 
    BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, 
    TITLE, AND NON-INFRINGEMENT. COOLKIDS BT. DOES NOT WARRANT THAT OUR SERVICES ARE ACCURATE, 
    COMPLETE, RELIABLE, CURRENT, OR ERROR-FREE, OR THAT THE PRODUCTS SOLD THROUGH OUR SERVICES WILL 
    MEET YOUR REQUIREMENTS OR EXPECTATIONS. COOLKIDS BT. DISCLAIMS ALL LIABILITY FOR ANY ERRORS, 
    OMISSIONS, OR INACCURACIES IN THE CONTENT, 3D MODELS, AND AUTOMOTIVE SPECIFICATIONS PROVIDED 
    THROUGH OUR SERVICES.**
  </p>
  <p className="mb-4">
    Nothing in this section shall affect or restrict any statutory consumer rights or implied warranties 
    that cannot be excluded or limited under mandatory provisions of applicable local law, including 
    the European Union digital content conformity directives.
  </p>





  <h2 className="text-xl font-bold text-white mb-4">18. Limitation of Liability</h2>
  <p className="mb-4 text-justify font-mono text-sm uppercase">
    **TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL COOLKIDS BT., ITS DIRECTORS, 
    EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE 
    DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS 
    OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF 
    (OR INABILITY TO ACCESS OR USE) THE SERVICES, SPECIFICATIONS, OR 3D MODELS.**
  </p>
  <p className="mb-4 text-justify font-mono text-sm uppercase">
    **IN NO EVENT SHALL COOLKIDS BT.’S TOTAL LIABILITY EXCEED THE TOTAL AMOUNT YOU ACTUALLY PAID TO 
    US FOR THE SPECIFIC SERVICE OR PRODUCT IN QUESTION.**
  </p>
  <p className="mb-4">
    Nothing in these Terms shall limit or exclude Coolkids Bt.’s liability for intentional misconduct, 
    gross negligence, or any other liability that cannot be lawfully limited or excluded under mandatory 
    provisions of applicable Hungarian or European Union consumer protection laws.
  </p>






  <h2 className="text-xl font-bold text-white mb-4">19. Indemnification</h2>
  <p className="mb-4">
    You agree to indemnify, defend, and hold harmless Coolkids Bt., its officers, directors, employees, 
    agents, and affiliates from and against any and all third-party claims, liabilities, damages, losses, 
    costs, expenses, or fees (including reasonable attorneys' fees) arising from or relating to your material 
    violation of these Terms, your unauthorized commercial exploitation of our 3D models, or your intentional 
    infringement of any intellectual property rights through the utilization of our Services.
  </p>
  <p className="mb-4">
    To the extent permitted by applicable European Union and Hungarian consumer protection laws, your 
    indemnification obligation is limited to damages and costs directly caused by your negligent or willful 
    misconduct. Coolkids Bt. reserves the right, at its own expense, to assume the exclusive defense and control 
    of any matter otherwise subject to indemnification by you, in which event you fully agree to cooperate 
    with Coolkids Bt. in asserting any available legal defenses.
  </p>





  <h2 className="text-xl font-bold text-white mb-4">20. Governing Law and Dispute Resolution</h2>
  <p className="mb-4">
    These Terms, your utilization of our Services, and all legal relationships arising between you and Coolkids Bt. 
    shall be governed by, construed, and enforced in accordance with the laws of <strong>Hungary</strong>, without 
    regard to its conflict of law principles. The application of the United Nations Convention on Contracts for the 
    International Sale of Goods (CISG) is expressly excluded.
  </p>
  <p className="mb-4">
    For business entities, automotive workshops, and non-consumer users (B2B), any dispute, controversy, or claim 
    arising out of or relating to these Terms, including their formation, validity, or breach, shall be subject to the 
    exclusive jurisdiction of the competent courts of <strong>Hungary</strong> having jurisdiction over the registered 
    seat of Coolkids Bt. (specifically the courts in Békéscsaba or Gyula, depending on the material jurisdiction).
  </p>
  <p className="mb-4">
    If you are a consumer residing within the European Union (B2C), mandatory statutory consumer protection laws of your 
    home country remain unaffected. In compliance with European Union Regulation No 524/2013 on consumer Online Dispute 
    Resolution (ODR), the European Commission provides an online arbitration platform for resolving cross-border digital 
    disputes without going to court. You can access the official ODR platform via the following link: 
    {" "}<a href="https://europa.eu" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
      https://europa.eu
    </a>. 
    In the event of a dispute, Hungarian consumers are also entitled to turn to the competent local Alternative Dispute 
    Resolution body having competence over the registered office of Coolkids Bt.
  </p>





  <h2 className="text-xl font-bold text-white mb-4">21. Dispute Resolution and Alternative Methods</h2>
  <p className="mb-4">
    In the event of any controversy, dispute, or claim arising out of or relating to these Terms, you and Coolkids Bt. 
    agree to first attempt to resolve the matter through informal, good-faith negotiations by contacting us directly at 
    {" "}<a href="mailto:info@coolkids.hu" className="text-blue-400 underline">info@coolkids.hu</a>.
  </p>
  <p className="mb-4">
    For business entities, automotive workshops, and corporate users (B2B), if an informal resolution cannot be reached 
    within thirty (30) days, <strong>any dispute shall be finally settled through binding arbitration in Hungary, 
    conducted in the English or Hungarian language, in accordance with the Arbitration Rules of the Hungarian Chamber of 
    Commerce and Industry.</strong> The decision 
    of the arbitrator(s) shall be final and binding upon both parties.
  </p>
  <p className="mb-4">
    For consumer users residing within the European Union (B2C), binding arbitration is not mandatory, and you retain your 
    statutory right to bring a claim before the competent state courts of your country of residence. Consumers are highly 
    encouraged to submit their complaints to the competent local Alternative Dispute Resolution body (such as the 
    <strong> Bekes County Conciliation Body</strong>, address: 5600 Békéscsaba, 
    Penza lakótelep 5.) to resolve financial or delivery disputes out of court.
  </p>




  <h2 className="text-xl font-bold text-white mt-8 mb-4">22. Entire Agreement</h2> 
<p className="mb-4">
  These Terms, together with our{' '}
  <button 
    type="button" 
    onClick={() => navigate('/privacypolicy')} // <--- Itt javítsd át erre! fwfa
    className="text-primary underline hover:text-opacity-80 cursor-pointer font-medium bg-transparent border-none p-0 inline"
  >
    Privacy Policy
  </button>{' '}
  and any official electronic invoices, order confirmations, or transaction receipts issued by Coolkids Bt. upon a successful transaction through Stripe, constitute the entire and exclusive agreement between you and Coolkids Bt. regarding your access to and utilization of our Services. This agreement completely supersedes and replaces any prior or contemporaneous oral or written agreements, communications, marketing promises, or understandings between you and Coolkids Bt. relating to your use of our Services.
</p>





<h2 className="text-xl font-bold text-white mt-8 mb-4">23. Waiver and Severability</h2>
<p className="mb-4">
  The failure or delay of Coolkids Bt. to exercise or enforce any right, power, or provision of these Terms shall not constitute or be construed as a present or future waiver of such right or provision, nor shall it limit our right to enforce such provision at a later time. Any waiver of any provision of these Terms by Coolkids Bt. shall only be legally effective if executed in an official written statement signed by an authorized representative of the company.
</p>
<p className="mb-4">
  If any provision of these Terms is determined by a court of competent jurisdiction, relevant arbitrator, or Alternative Dispute Resolution body to be invalid, illegal, or completely unenforceable under applicable Hungarian or European Union law, such invalidity shall be strictly confined to that specific provision. The remaining provisions of these Terms shall remain unaffected and continue in full force and effect to the maximum extent permitted by law, with the unenforceable provision deemed modified to the minimum extent necessary to make it valid and enforceable.
</p>




  <h2 className="text-xl font-bold text-white mb-4">24. Assignment and Transfer</h2>
  <p className="mb-4">
    These Terms, along with any rights, multi-brand access passes, and licenses granted hereunder, are strictly 
    personal to you and may not be transferred, assigned, or sublicensed by you to any third party, business entity, 
    or automotive workshop without the prior written consent of Coolkids Bt. Any attempted assignment or transfer 
    by you in violation of this section shall be deemed null and void.
  </p>
  <p className="mb-4">
    Coolkids Bt. reserves the right to freely assign, transfer, or delegate its rights and obligations under these 
    Terms without restriction, including but not limited to cases of corporate restructuring, merger, acquisition, 
    or the sale of substantially all of its platform assets. For consumer users residing within the European Union (B2C), 
    such assignment shall only be executed provided that it does not result in the reduction or impairment of any statutory 
    guarantees, consumer rights, or privacy protections guaranteed to you under mandatory applicable laws.
  </p>




  <h2 className="text-xl font-bold text-white mb-4">25. Termination of Services</h2>
  <p className="mb-4">
    You may terminate these Terms at any time by permanently ceasing all use of our Services or by requesting the 
    deletion of your registered account through our authentication provider, Clerk. 
  </p>
  <p className="mb-4">
    Coolkids Bt. reserves the right, at its sole and objective discretion, to suspend, restrict, or permanently 
    terminate your access to our Services and your Clerk-managed user account immediately, without prior notice 
    or financial liability, if we determine that you have committed a material breach of these Terms. Material 
    breaches include, but are not limited to, engaging in unauthorized data scraping, browser-based 3D mesh ripping, 
    sharing or leasing your personal login credentials, committing financial fraud via Stripe, or utilizing the 
    Services for unlawful purposes.
  </p>
  <p className="mb-4">
    For non-paying or free tier accounts, Coolkids Bt. reserves the right to terminate service to anyone or discontinue 
    any part of the platform at any time for operational reasons. Upon termination for a verified material breach, your 
    right to access the digital engine profiles, database lookup tools, and interactive 3D models will cease immediately, 
    and you will not be entitled to any refunds for active digital brand passes.
  </p>
  <p className="mb-4">
    Upon termination of your account or these Terms for any reason, all provisions which by their nature should logically 
    survive termination shall continue in full force and effect, including but not limited to 
    <strong> Section 2 & 13 (Definitions & Intellectual Property Rights), Section 12 (Prohibited Conduct), 
    Section 18 (Limitation of Liability), and Section 20 & 21 (Governing Law and Dispute Resolution)</strong>.
  </p>





  <h2 className="text-xl font-bold text-white mb-4">26. Force Majeure</h2>
  <p className="mb-4">
    Coolkids Bt. shall not be liable for any delay, operational disruption, failure to perform, or temporary 
    unavailability of the Services resulting from causes completely outside its reasonable control. These causes 
    include, but are not limited to: acts of God, war, terrorism, riots, embargoes, acts of civil or military authorities, 
    fire, floods, accidents, pandemics, epidemics, or widespread disease outbreaks.
  </p>
  <p className="mb-4">
    <strong>In addition to physical events, Force Majeure explicitly includes digital and technological catastrophes 
    outside our direct operational boundaries, such as: massive distributed denial-of-service (DDoS) attacks, 
    regional or global internet backbone routing failures, core electrical grid blackouts, or critical system 
    outages affecting our third-party infrastructure providers (including Clerk, Stripe, and Cloudflare Pages hosting environments).</strong>
  </p>
  <p className="mb-4">
    During the continuation of a verified Force Majeure event, Coolkids Bt.’s performance obligations under these Terms 
    shall be suspended without liability. If a Force Majeure event persists continuously for a period exceeding 
    thirty (30) days and permanently prevents us from providing access to your purchased digital brand passes, 
    either party may terminate the agreement, and any potential remedies or credits shall be evaluated in good faith 
    solely at our discretion.
  </p>





  <h2 className="text-xl font-bold text-white mb-4">27. Contact Information</h2>
  <p className="mb-4">
    If you have any questions, complaints, or feedback regarding these Terms, or if you need to submit an official 
    legal notice to the Service Provider, please contact us immediately through any of the following official channels:
  </p>
  <ul className="list-none space-y-2 mb-4 pl-0">
    <li>
      <strong>Company Name:</strong> Coolkids Bt.
    </li>
    <li>
      <strong>Registered Office:</strong> Hungary, 5600, Békéscsaba, Jókai street 20 4/14
    </li>
    <li>
      <strong>Company Registration Number:</strong> Cg.04-06-009292
    </li>
    <li>
      <strong>Official Representative:</strong> Szilvia Medovarszki (Owner)
    </li>
    <li>
      <strong>Official Email Address:</strong>{" "}
      <a href="mailto:info@coolkids.hu" className="text-blue-400 underline">
        info@coolkids.hu
      </a>
    </li>
  </ul>
 


  <h2 className="text-xl font-bold text-white mt-8 mb-4">Regulatory Compliance</h2>
<h3 className="text-lg font-semibold text-white mt-4">General Data Protection Regulation (GDPR) Compliance</h3>
<p className="mb-4">The following provisions apply to users protected by European Union regulations:</p>

<h3 className="text-lg font-semibold text-white mt-4">Data Collection and Lawful Basis Under GDPR</h3>
<p className="mb-4">
  In compliance with the General Data Protection Regulation (GDPR) (EU) 2016/679, Coolkids Bt. collects and processes 
  your personal data only when we have a valid lawful basis to do so under GDPR Article 6. This processing is strictly 
  limited to: fulfilling our contract with you (managing your user profile via <strong>Clerk</strong> and delivering 
  digital engine profiles), complying with our legal tax obligations (generating invoices for the Hungarian tax 
  authority following transactions through <strong>Stripe</strong>), or pursuing our legitimate interests in securing 
  our platform and protecting our 3D assets, provided these do not override your fundamental rights and freedoms.
</p>
<p className="mb-4">
  We collect only the minimum data necessary for the performance of our Services and the purposes specified in this policy. 
  When we explicitly request your consent to process data for optional activities (such as marketing communications or 
  non-essential cookies), you possess the absolute right to withdraw that consent at any time.
</p>

<h3 className="text-lg font-semibold text-white mt-4">Data Processing Under GDPR</h3>
<p className="mb-4">
  We process personal data strictly in accordance with the core principles outlined in GDPR Article 5:
</p>
<ul className="list-disc pl-6 space-y-2 mb-4">
  <li>
    <strong>Lawfulness, fairness, and transparency:</strong> We process your data lawfully, fairly, and in a fully 
    transparent manner, ensuring you are always aware of how your information is utilized via Clerk and Stripe.
  </li>
  <li>
    <strong>Purpose limitation:</strong> We collect data solely for the specified, explicit, and legitimate automotive 
    database and e-commerce purposes outlined in this policy, and we never process it in a manner incompatible with those goals.
  </li>
  <li>
    <strong>Data minimization:</strong> We strictly limit data collection to the absolute technical minimum required to 
    maintain your user sessions and clear financial transactions.
  </li>
  <li>
    <strong>Accuracy:</strong> We take all reasonable steps to ensure personal data is accurate, complete, and kept up to date 
    through your personal Clerk user management dashboard.
  </li>
  <li>
    <strong>Storage limitation:</strong> We retain your registration data only as long as your account remains active. 
    <strong> However, in compliance with mandatory legal frameworks, specifically Section 169 of the Hungarian Act C of 2000 
    on Accounting, all transactional records, electronic invoices, and billing data processed through Stripe must be securely 
    retained for a mandatory period of eight (8) years.</strong>
  </li>
  <li>
    <strong>Integrity and confidentiality:</strong> We ensure optimal security by relying on enterprise-grade infrastructure. 
    Your authentication data is managed by <strong>Clerk</strong> using advanced encryption protocols, and all financial transactions 
    are processed by <strong>Stripe</strong> via fully secure, PCI-DSS compliant tokenization layers, protecting against unauthorized 
    access, accidental loss, or destruction.
  </li>
</ul>
<p className="mb-4">
  We maintain comprehensive, up-to-date internal records of our data processing activities and conduct rigorous data 
  protection impact assessments whenever mandated by applicable data protection laws.
</p>

<h3 className="text-lg font-semibold text-white mt-4">Your Rights Under GDPR</h3>
<p className="mb-4">
  If you are located within the European Economic Area (EEA), you possess the following comprehensive rights 
  with respect to your personal data under the GDPR:
</p>
<ul className="list-disc pl-6 space-y-2 mb-4">
  <li>
    <strong>Right to access:</strong> You can request an official copy of the personal data we hold about you 
    and verify how it is being processed.
  </li>
  <li>
    <strong>Right to rectification:</strong> You can request that we correct inaccurate or incomplete personal data. 
    <strong> Most of your registration data can be updated instantly by you at any time via your Clerk user dashboard.</strong>
  </li>
  <li>
    <strong>Right to erasure ("Right to be forgotten"):</strong> You can request that we delete your personal data 
    in certain circumstances, provided that the data is no longer mandated to be stored by financial or accounting laws 
    (such as our 8-year statutory invoice retention obligation).
  </li>
  <li>
    <strong>Right to restrict processing:</strong> You can request that we limit the processing of your data under specific conditions 
    (e.g., if you dispute the accuracy of the data).
  </li>
  <li>
    <strong>Right to data portability:</strong> You can request to receive the personal data you provided to us in a structured, 
    commonly used, and machine-readable format to transfer it to another provider.
  </li>
  <li>
    <strong>Right to object:</strong> You possess the absolute right to object to the processing of your personal data 
    at any time for direct marketing purposes or when processing is based on our legitimate interests.
  </li>
  <li>
    <strong>Rights related to automated decision-making:</strong> You can request human intervention regarding any automated decisions 
    (such as automated fraud mitigation filters via Stripe) that produce significant legal or financial effects on you.
  </li>
</ul>
<p className="mb-4">
  To exercise any of these rights, please submit your formal request to our data compliance team at:
  {" "}<a href="mailto:info@coolkids.hu" className="text-blue-400 underline">info@coolkids.hu</a>. 
  We will verify your identity and respond to your application without undue delay, and at the latest within thirty (30) days of receipt.
</p>
<p className="mb-4">
  If you believe that Coolkids Bt. has processed your data in violation of applicable privacy laws, you possess the right to 
  lodge an official complaint with your local EU data protection authority, or directly with the lead supervisory authority 
  in Hungary: <strong>Hungarian National Authority for Data Protection and Freedom of Information (NAIH in Hungary)</strong>, address: H-1055 Budapest, Falk Miksa utca 9-11., website: 
  {" "}<a href="https://naih.hu" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">https://naih.hu</a>.
</p>

<h3 className="text-lg font-semibold text-white mt-4">California Consumer Privacy Act (CCPA) Compliance</h3>
<p className="mb-4">The following provisions apply to users protected by California, United States regulations:</p>

<h3 className="text-lg font-semibold text-white mt-4">Information Collection Notice for California Residents</h3>
<p className="mb-4">
  Under the California Consumer Privacy Act (CCPA), as amended by the California Privacy Rights Act (CPRA), we are 
  required to inform California residents about the categories of personal information we collect and the purposes for which we use this information.
</p>
<p className="mb-4">In the past 12 months, we have collected the following categories of personal information:</p>
<ul className="list-disc pl-6 space-y-2 mb-4">
  <li>Identifiers (such as legal name, email address, unique account IDs managed via <strong>Clerk</strong>, and network identifiers including your IP address)</li>
  <li>Commercial information (such as transaction histories, digital brand passes purchased, and billing logs processed securely through <strong>Stripe</strong>)</li>
  <li>Internet or other electronic network activity (such as interactive 3D database rendering events, browser types, and system interaction data)</li>
  <li>Geolocation data (such as IP-based coarse geographic location utilized strictly for regional tax and VAT calculations at checkout)</li>
</ul>
<p className="mb-4">
  We use this information for the business, security, and commercial purposes described in our Privacy Policy. 
  <strong> Coolkids Bt. does not sell your personal information, nor do we share your personal data with third parties for cross-context 
  behavioral advertising purposes. We do not process or disclose Sensitive Personal Information for any purpose other than to safely 
  maintain your login credentials via Clerk and process your explicit purchases via Stripe.</strong>
</p>

<h3 className="text-lg font-semibold text-white mt-4">California Privacy Rights</h3>
<p className="mb-4">If you are a California resident, you possess the following specific rights under the CCPA/CPRA:</p>
<ul className="list-disc pl-6 space-y-2 mb-4">
  <li>
    <strong>Right to know:</strong> You can request information regarding the specific categories and pieces of personal information 
    we have collected about you, as well as the commercial purposes for which we have used and disclosed it.
  </li>
  <li>
    <strong>Right to delete:</strong> You can request the deletion of your personal information, subject to certain statutory exceptions 
    (such as our mandatory European and Hungarian 8-year accounting retention obligations for Stripe transactions).
  </li>
  <li>
    <strong>Right to opt-out:</strong> You possess the right to opt out of the sale or sharing of your personal information. 
    <strong> However, because Coolkids Bt. does not sell or share your personal data with third parties for marketing purposes, 
    this right is currently not applicable to our Services.</strong>
  </li>
  <li>
    <strong>Right to non-discrimination:</strong> We will absolutely not discriminate against you (such as by denying access 
    or charging different prices) for exercising any of your CCPA/CPRA privacy rights.
  </li>
</ul>
<p className="mb-4">
  To exercise your rights, you can submit a verifiable consumer request by contacting our data protection team directly via email at: 
  {" "}<a href="mailto:info@coolkids.hu" className="text-blue-400 underline">info@coolkids.hu</a>. 
  You may make a consumer request up to twice within a twelve (12) month period. We will verify your identity using your Clerk credentials 
  and respond to your request within forty-five (45) days, with a possible extension of up to forty-five (45) additional days 
  when reasonably necessary due to technical complexity.
</p>

<h3 className="text-lg font-semibold text-white mt-4">California "Do Not Sell or Share My Personal Information" Notice</h3>
<p className="mb-4">
  Under the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA), California residents 
  possess the absolute statutory right to opt-out of the sale or sharing of their personal information to third parties.
</p>
<p className="mb-4">
  <strong>Coolkids Bt. DOES NOT sell personal information, nor do we share your personal data with third-party networks 
  for cross-context behavioral advertising purposes, as defined under the CCPA/CPRA frameworks.</strong> 
  All data processed through our platform is utilized strictly to maintain your user sessions via Clerk and handle secure 
  billing operations through Stripe.
</p>
<p className="mb-4">
  Because we do not engage in any form of personal data monetization or targeted third-party advertising tracking, 
  a dedicated "Do Not Sell My Personal Information" opt-out web link is not required on our platform. However, if you have 
  any questions or seek further verifiable confirmation regarding our data restriction policies, you are welcome to contact 
  our data compliance officer at any time via email at: 
  {" "}<a href="mailto:info@coolkids.hu" className="text-blue-400 underline">info@coolkids.hu</a>.
</p>

<h2 className="text-xl font-bold text-white mt-8 mb-4">Additional Terms</h2>

<h3 className="text-lg font-semibold text-white mt-4">Changes to this Privacy Policy</h3>
<p className="mb-4">
  Coolkids Bt. reserves the right to modify, update, or refine this Privacy Policy at any time to reflect changes in our 
  operational practices, tech-stack upgrades, or evolving legal frameworks. When updates occur, we will revise the 
  "Last Updated" date at the bottom of this document. For significant material changes that impact your privacy rights, 
  we will notify you either by placing a prominent notice on our website or by sending a direct electronic notification 
  to the email address associated with your <strong>Clerk</strong> account prior to the change becoming effective. 
  Your continued utilization of our Services after the publication of an updated version constitutes your acknowledgment 
  of the revised data processing practices.
</p>

<h3 className="text-lg font-semibold text-white mt-4">International Data Transfers</h3>
<p className="mb-4">
  Coolkids Bt. operates from Hungary (European Union). However, because we utilize industry-standard global infrastructure 
  providers, including <strong>Clerk</strong> for secure identity management and <strong>Stripe</strong> for payment processing, 
  your personal and technical data may be transferred to, stored, or processed in servers located outside the European Economic Area (EEA), 
  specifically in the United States. We ensure that all such cross-border data transfers comply with mandatory GDPR safeguards, 
  relying strictly on the EU-U.S. Data Privacy Framework or validated Standard Contractual Clauses (SCCs) to guarantee an equivalent 
  level of data protection.
</p>

<h3 className="text-lg font-semibold text-white mt-4">Essential Cookies and Local Storage</h3>
<p className="mb-4">
  Our platform utilizes strictly necessary technical cookies and local storage tokens deployed by Clerk and Stripe. 
  These essential identifiers are mandatory to securely maintain your user authentication sessions, protect your account from 
  unauthorized access, and prevent transactional fraud at checkout. Because these cookies are strictly necessary for the technical 
  delivery of the Services, they do not require prior user consent under EU ePrivacy regulations.
</p>






          

        

        </div>
      </div>
    </div>
  );
}