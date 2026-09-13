import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage({ onBack }: { onBack: () => void }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 py-16 px-4 md:px-8 selection:bg-primary selection:text-white">
      <div className="max-w-4xl mx-auto bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative">
        
        {/* Vissza gomb a főoldalra */}
        <button 
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-colors mb-8 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        <div className="space-y-6 text-sm md:text-base leading-relaxed text-slate-300">
          <h1 className="text-3xl md:text-4xl font-black text-white border-b border-white/10 pb-4">
            Privacy Policy - Coolkids Bt.
          </h1>
          <p className="italic text-slate-400">Effective Date: 2026. 09. 13.</p>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">1. Introduction</h2>
<p className="mb-4">
  This Privacy Policy describes how Coolkids Bt. ("we," "us," or "our") collects, uses, and discloses your personal information when you use our online store and services available at <a href="https://for-vercel-alpha.vercel.app/" target="_blank" rel="noreferrer" className="text-primary underline hover:text-opacity-80">https://for-vercel-alpha.vercel.app/</a> (the "Service").
</p>
<p className="mb-4">
  We are committed to protecting your personal information and your right to privacy. We process your personal data in accordance with the General Data Protection Regulation (GDPR) (EU) 2016/679 and applicable local data protection laws. When you visit our online store and services and use our products, you trust us with your personal information. We take your privacy very seriously. In this Privacy Policy, we seek to explain to you in the clearest way possible what information we collect, how we use it, and what rights you have in relation to it.
</p>
<p className="mb-4">
  This Privacy Policy applies to all information collected through our online store and services, as well as any related services, sales, marketing, or events, where we act as a data controller under the GDPR.
</p>
<p className="mb-4">
  Please read this Privacy Policy carefully as it will help you understand what we do with the information we collect.
</p>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">2. Definitions</h2>
          <p>To help explain things as clearly as possible in this Privacy Policy, every time any of these terms are referenced, they are strictly defined as:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Cookie</strong>: a small file placed on your device to enable certain features and functionality.</li>
            <li><strong>Company</strong>: when this policy mentions "Company," "we," "us," or "our," it refers to Coolkids Bt..</li>
            <li><strong>Country</strong>: where Coolkids Bt. or the owners/founders of Coolkids Bt. are based, in this case Hungary.</li>
            <li><strong>Customer</strong>: refers to the company, organization, or person that signs up to use the Coolkids Bt. Service.</li>
            <li><strong>Device</strong>: any internet-connected device such as a phone, tablet, computer, or any other device that can be used to visit Coolkids Bt. and use the services.</li>
            <li><strong>Personal Data</strong>: any information that directly, indirectly, or in connection with other information allows for the identification of a natural person.</li>
            <li><strong>Service</strong>: refers to the online store and services provided by Coolkids Bt. as described in the relative terms and on this platform.</li>
            <li><strong>Third-party service</strong>: refers to advertisers, contest sponsors, promotional and marketing partners, and others who provide our content or whose products or services we think may interest you.</li>
            <li><strong>Website</strong>: Coolkids Bt.'s site, which can be accessed via <a href="https://for-vercel-alpha.vercel.app/" target="_blank" rel="noreferrer" className="text-primary underline hover:text-opacity-80">https://for-vercel-alpha.vercel.app/</a></li>
            <li><strong>You</strong>: a person or entity that is registered with Coolkids Bt. to use the Services.</li>
          </ul>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">3. Information We Collect</h2>
          <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
          
          <h3 className="text-lg font-semibold text-white mt-4">3.1 Personal Data</h3>
          <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to:</p>
          
          <ul className="list-disc pl-6 space-y-2">
          <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Address, State, Province, ZIP/Postal code, City</li>
            <li>Cookies and Usage Data</li>
          </ul>

          <h3 className="text-lg font-semibold text-white mt-6 mb-2">3.2 Financial Data</h3>
<p className="mb-4">
  Financial information such as payment method details (including credit card numbers and banking information) is collected and stored directly by our third-party payment processor, <strong>Stripe</strong>. We may receive certain non-sensitive confirmation information from Stripe to facilitate and verify your payments. 
</p>
<p className="mb-4">
  All actual payment data is stored securely by <strong>Stripe, Inc.</strong>, and we do not store, access, or collect your payment card details on our own servers. You should review their privacy policy to understand their specific privacy practices.
</p>

          <h3 className="text-lg font-semibold text-white mt-4">3.3 Usage Data</h3>
          <p>We may also collect information about how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>

          <h3 className="text-lg font-semibold text-white mt-8 mb-4">3.4 Tracking Technologies and Cookies</h3>
<p className="mb-4">We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</p>
<p className="mb-4">Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.</p>
<p className="mb-4">You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
<p className="mb-2 text-white font-medium">Examples of Cookies we use:</p>

<ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
  <li><strong>Session Cookies</strong>: We use Session Cookies to operate our Service and keep you authenticated.</li>
  <li><strong>Preference Cookies</strong>: We use Preference Cookies to remember your preferences and various settings.</li>
  <li><strong>Security Cookies</strong>: We use Security Cookies for security purposes (such as protecting your account sessions via Clerk).</li>
  <li><strong>Advertising Cookies</strong>: Advertising Cookies are used to serve you with advertisements that may be relevant to you and your interests.</li>
</ul>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">4. How We Use Your Information</h2>
          <p>Coolkids Bt. uses the collected data for various purposes:</p>
          
          <ul className="list-disc pl-6 space-y-2">
          <li>To provide and maintain our Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our Service</li>
            <li>To monitor the usage of our Service</li>
            <li>To detect, prevent and address technical issues</li>
            <li>To fulfill any other purpose for which you provide it</li>
            <li>To provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information</li>
            <li>In any other way we may describe when you provide the information</li>
            <li>For any other purpose with your consent</li>
          </ul>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">5. Legal Basis and Global Compliance for Processing Personal Data</h2>
<p className="mb-4">Coolkids Bt. provides digital services worldwide, including to customers in the United States (USA), the European Economic Area (EEA), and other global jurisdictions. To ensure a unified and secure experience, we apply high data protection standards globally. If you are a resident of the EEA or the EU, our processing of your Personal Data is grounded in specific legal bases under the General Data Protection Regulation (GDPR).</p>
<p className="mb-2 text-white font-medium">Regardless of your location, Coolkids Bt. processes your Personal Data because:</p>

<ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
  <li>We need to perform a contract with you, such as processing international payments via Stripe and delivering our digital services to your account worldwide.</li>
  <li>You have given us permission to do so, such as creating your user profile via Clerk or accepting tracking cookies.</li>
  <li>The processing is in our legitimate business interests—such as analyzing store traffic via Google Analytics, ensuring cybersecurity, and preventing fraudulent transactions—and it is not overridden by your privacy rights.</li>
  <li>To comply with applicable international, federal, and local laws, including digital tax and financial reporting obligations.</li>
</ul>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">6. Retention of Your Personal Data</h2>
          <p>Coolkids Bt. will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
          <p>Coolkids Bt. will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer time periods.</p>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">7. Transfer of Your Personal Data</h2>
<p className="mb-4">Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.</p>
<p className="mb-4">If you are located outside Hungary and choose to provide information to us, please note that we process data in Hungary. However, because we use global digital services like <strong>Clerk</strong> for account management and <strong>Stripe</strong> for payments, your data may also be transferred to and processed on secure servers in the United States and other global locations.</p>
<p className="mb-4">Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
<p className="mb-4">Coolkids Bt. will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including standard contractual clauses (SCCs), ensuring the security of your data and other personal information.</p>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">8. Disclosure of Your Personal Data</h2>
          <h3 className="text-lg font-semibold text-white mt-4">Business Transactions</h3>
          <p>If Coolkids Bt. is involved in a merger, acquisition or asset sale, your Personal Data may be transferred. We will provide notice before your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>
          
          <h3 className="text-lg font-semibold text-white mt-4">Disclosure for Law Enforcement</h3>
          <p>Under certain circumstances, Coolkids Bt. may be required to disclose your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>
          
          <h3 className="text-lg font-semibold text-white mt-4">Legal Requirements</h3>
          <p>Coolkids Bt. may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
          
          <ul className="list-disc pl-6 space-y-2">
          <li>Comply with a legal obligation</li>
            <li>Protect and defend the rights or property of Coolkids Bt.</li>
            <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
            <li>Protect the personal safety of users of the Service or the public</li>
            <li>Protect against legal liability</li>
          </ul>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">9. Third-Party Disclosure</h2>
          <h3 className="text-lg font-semibold text-white mt-4">9.1 Analytics</h3>
          <p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>
          <p><strong>Google Analytics</strong>: Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network. You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript from sharing information with Google Analytics about visits activity. For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page: <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="text-primary underline">https://policies.google.com/privacy</a></p>

          <h3 className="text-lg font-semibold text-white mt-4">9.2 Affiliate Programs</h3>
<p className="mb-4">We participate in affiliate marketing programs, which means we may display affiliate links or promotional banners on our Service. If you click on an affiliate link and make a purchase on the partner's platform, we may receive a financial commission at no additional cost to you.</p>
<p className="mb-4"><strong>carVertical</strong>: We partner with carVertical to promote their vehicle history check services. When you click on a carVertical link or banner on our Website, you will be redirected to their platform. carVertical uses their own tracking cookies and technologies to track purchases originating from our site. The data processed during your visit to their website is strictly governed by their own privacy practices.</p>
<p className="mb-4">For more information on how your data is handled by our affiliate partner, please visit the carVertical Privacy Policy:{' '}
  <a href="https://carvertical.com" target="_blank" rel="noreferrer" className="text-primary underline hover:text-opacity-80">
    https://carvertical.com
  </a>.
</p>

          <h3 className="text-lg font-semibold text-white mt-4">9.3 Payments</h3>
          <p>We may provide paid products and/or services within the Service. In that case, we use third-party services for payment processing (e.g. payment processors).</p>
          <p>We will not store or collect your payment card details. That information is provided directly to our third-party payment processors whose use of your personal information is governed by their Privacy Policy. These payment processors adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, Mastercard, American Express and Discover. PCI-DSS requirements help ensure the secure handling of payment information.</p>
          <p>The payment processor we work with is:</p>
          
          <p>
  <strong>Stripe</strong>: Their Privacy Policy can be viewed at{' '}
  <a href="https://stripe.com/us/privacy" target="_blank" rel="noreferrer" className="text-primary underline">
    https://stripe.com/us/privacy
  </a>
</p>          

<h4 className="text-lg font-semibold text-white mt-4">9.4 Hosting Services</h4>
<p className="mb-4">We use third-party infrastructure and hosting providers to host our Website and ensure its global availability and security.</p>
<p className="mb-4 text-slate-300">
  <strong>Vercel</strong>: We use Vercel Inc. to host and deploy our digital Service worldwide. Vercel automatically processes certain operational infrastructure logs (such as your IP address and request timestamps) necessary to securely deliver our Website content to your browser. Their Privacy Policy can be viewed at{' '}
  <a 
    href="https://vercel.com" 
    target="_blank" 
    rel="noreferrer" 
    className="text-primary underline hover:text-opacity-80"
  >
    https://vercel.com
  </a>.
</p>
          

<h2 className="text-xl font-bold text-white mt-8 mb-4">10. Security of Your Personal Data</h2>
<p className="mb-4">The security of your Personal Data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
<p className="mb-4">By using our platform, you acknowledge that you transmit personal information through our Service at your own discretion. You are solely responsible for maintaining the security of your own device and authentication sessions (such as your login via Clerk). Coolkids Bt. cannot accept liability for security breaches resulting from user-side negligence.</p>

<h2 className="text-xl font-bold text-white mt-8 mb-4">11. Children's Privacy</h2>
<p className="mb-4">Our Service does not address anyone under the age of 13 (or under the age of 16 for residents within the European Economic Area). We do not knowingly collect personally identifiable information from anyone under these statutory age limits. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from anyone under the required age without verification of parental consent, we take steps to remove that information from our servers promptly.</p>
<p className="mb-4">If we need to rely on consent as a legal basis for processing your information and your country requires consent from a parent, we may require your parent's consent before we collect and use that information.</p>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">12. Your Data Protection Rights</h2>
          <p>Depending on your location and applicable laws, you may have certain rights regarding your personal information, including rights to access, correct, delete, or restrict use of your information. We honor these rights regardless of your location and are committed to providing reasonable access to the information that you have shared with us.</p>
          
          <h3 className="text-lg font-semibold text-white mt-4">12.1 General Data Access & Deletion Rights</h3>
          <p>Regardless of your location, you can make the following requests regarding your personal data:</p>
          <p>- <strong>Access Your Data</strong>: You can request a copy of the personal information we have about you. We will provide this information in a structured, commonly used, and machine-readable format.</p>
          <p>- <strong>Delete Your Data</strong>: You can request that we delete your personal information from our systems. We will comply with this request unless there is a legal requirement for us to keep certain information.</p>
          <p>To submit a data access or deletion request, please contact us using the contact information provided at the end of this Privacy Policy. We will respond to your request within 30 days. We may need to verify your identity before processing your request.</p>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">13. Service Providers</h2>
          <p>We may employ third-party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</p>
          <p>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">14. Links to Other Sites</h2>
<p className="mb-4">Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site (such as our affiliate partner platforms). We strongly advise you to review the Privacy Policy of every site you visit.</p>
<p className="mb-4">We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">15. Changes to This Privacy Policy</h2>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
          <p>We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.</p>
          <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">16. Contact Us</h2>
<p className="mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
          
<ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
  <li>By email: <a href="mailto:makaidavidlevente@gmail.com" className="text-primary underline hover:text-opacity-80">makaidavidlevente@gmail.com</a></li>
  <li>By visiting this page on our website: <a href="https://for-vercel-alpha.vercel.app/" target="_blank" rel="noreferrer" className="text-primary underline hover:text-opacity-80">https://for-vercel-alpha.vercel.app/</a></li>
  <li>By phone number: +36 30 354 5744</li>
  <li>By mail: Coolkids Bt., Hungary, 5600, Bekescsaba, Jokai street 20 4/14</li>
</ul>
        </div>
      </div>
    </div>
  );
}