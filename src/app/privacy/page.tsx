// src/app/privacy/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'FileConvertTool privacy policy. Learn how we collect, use, and protect your personal information and uploaded files.',
  alternates: { canonical: 'https://www.fileconverttool.com/privacy' },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-extrabold mb-2" style={{ color: 'var(--text-primary)' }}>Privacy Policy</h1>
      <p className="text-sm mb-8" style={{ color: 'var(--text-muted)' }}>Last updated: 1 March 2026</p>

      <div className="space-y-8 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        <section>
          <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>1. Introduction</h2>
          <p>FileConvertTool ("we", "our", "us") is committed to protecting the privacy of every user who visits our website at fileconverttool.com and uses our online file conversion services. This Privacy Policy explains what information we collect, why we collect it, how we use it, and the choices you have regarding your data.</p>
          <p className="mt-3">By using FileConvertTool, you agree to the practices described in this policy. If you do not agree, please do not use our services. We may update this policy from time to time, and the "Last updated" date above reflects the most recent revision.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>2. Information We Collect</h2>
          <p><strong style={{ color: 'var(--text-primary)' }}>2.1 Files You Upload</strong></p>
          <p className="mt-2">When you use our conversion service, you upload files to our servers for processing. These files are transmitted over an encrypted HTTPS connection, stored temporarily for the sole purpose of conversion, and automatically deleted from our servers immediately after the conversion is complete or within a maximum of one hour, whichever comes first. We do not access, view, share, sell, or analyse the contents of your uploaded files under any circumstances.</p>
          <p className="mt-3"><strong style={{ color: 'var(--text-primary)' }}>2.2 Usage Data</strong></p>
          <p className="mt-2">We automatically collect certain non-personal information when you visit our website, including your IP address (anonymised), browser type and version, operating system, referring URL, pages visited, time spent on pages, and the date and time of your visit. This data is collected to improve our service, monitor performance, and detect abuse.</p>
          <p className="mt-3"><strong style={{ color: 'var(--text-primary)' }}>2.3 Cookies and Similar Technologies</strong></p>
          <p className="mt-2">We use cookies and similar tracking technologies to enhance your experience, remember your preferences (such as theme settings), and collect aggregate analytics. We also use third-party analytics services, including Google Analytics 4, which may set their own cookies. You can control cookie preferences through your browser settings.</p>
          <p className="mt-3"><strong style={{ color: 'var(--text-primary)' }}>2.4 Information You Provide</strong></p>
          <p className="mt-2">If you contact us via our contact form or email, we collect your name, email address, and any information you include in your message. This is used solely to respond to your enquiry.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>3. How We Use Your Information</h2>
          <p>We use the information we collect to: provide and maintain our file conversion service; improve, personalise, and expand our website and features; understand and analyse usage trends and patterns; detect, prevent, and address technical issues or abuse; communicate with you in response to your enquiries; and comply with legal obligations.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>4. Third-Party Services</h2>
          <p>We use the following third-party services that may collect information as described in their respective privacy policies:</p>
          <p className="mt-2"><strong style={{ color: 'var(--text-primary)' }}>Google Analytics 4:</strong> We use Google Analytics to understand how visitors interact with our website. Google Analytics collects data such as pages visited, session duration, and general geographic location. Google may use this data in accordance with their privacy policy. You can opt out by installing the Google Analytics Opt-Out Browser Add-on.</p>
          <p className="mt-2"><strong style={{ color: 'var(--text-primary)' }}>Google AdSense:</strong> We may display advertisements served by Google AdSense on our website. Google AdSense uses cookies and similar technologies to serve ads based on your prior visits to our website and other websites. You can opt out of personalised advertising by visiting Google's Ads Settings or by visiting aboutads.info.</p>
          <p className="mt-2"><strong style={{ color: 'var(--text-primary)' }}>Hosting and Infrastructure:</strong> Our website and API are hosted on Vercel and Railway, respectively. These providers may process your data as part of their normal hosting operations in accordance with their own privacy policies.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>5. Data Retention</h2>
          <p>Uploaded files are deleted from our servers immediately after conversion or within one hour, whichever comes first. We do not retain copies of your files. Usage analytics data is retained in an anonymised and aggregated form for up to 26 months. Contact form submissions are retained for as long as necessary to resolve your enquiry, after which they are deleted.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>6. Data Security</h2>
          <p>We implement appropriate technical and organisational measures to protect your data. All file transfers use TLS/HTTPS encryption. Our servers are protected by firewalls and access controls. However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>7. Your Rights</h2>
          <p>Depending on your jurisdiction, you may have the right to: access the personal data we hold about you; request correction of inaccurate data; request deletion of your data; object to or restrict processing of your data; data portability; and withdraw consent where processing is based on consent. To exercise any of these rights, please contact us at our contact page.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>8. Children's Privacy</h2>
          <p>FileConvertTool is not directed to children under the age of 13 (or the applicable age of digital consent in your jurisdiction). We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will take steps to delete it.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>9. International Data Transfers</h2>
          <p>Our servers may be located in different countries. By using our service, you consent to the transfer of your information to countries that may have different data protection laws than your country of residence. We take appropriate safeguards to ensure your data is treated securely and in accordance with this policy.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>10. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. When we make material changes, we will update the "Last updated" date at the top of this page. We encourage you to review this policy periodically. Your continued use of FileConvertTool after any changes constitutes acceptance of the updated policy.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>11. Contact Us</h2>
          <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
          <p className="mt-2">Via our contact page at fileconverttool.com/contact</p>
          <p>Website: fileconverttool.com/contact</p>
        </section>
      </div>
    </div>
  );
}
