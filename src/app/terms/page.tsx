// src/app/terms/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'FileConvertTool terms of service. Read the terms and conditions that govern your use of our online file conversion service.',
  alternates: { canonical: 'https://www.fileconverttool.com/terms' },
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-extrabold mb-2" style={{ color: 'var(--text-primary)' }}>Terms of Service</h1>
      <p className="text-sm mb-8" style={{ color: 'var(--text-muted)' }}>Last updated: 1 March 2026</p>

      <div className="space-y-8 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        <section>
          <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>1. Acceptance of Terms</h2>
          <p>By accessing or using FileConvertTool (the "Service"), available at fileconverttool.com, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you must not use the Service. These Terms constitute a legally binding agreement between you and FileConvertTool ("we", "our", "us").</p>
          <p className="mt-3">We reserve the right to modify these Terms at any time. Material changes will be reflected by updating the "Last updated" date above. Your continued use of the Service after changes are posted constitutes acceptance of the revised Terms.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>2. Description of Service</h2>
          <p>FileConvertTool provides an online file conversion service that allows users to convert files between various image, video, and audio formats. The Service is provided "as is" and "as available" without warranties of any kind. We offer both free and paid subscription tiers with different usage limits, file size caps, and features as described on our Pricing page.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>3. User Responsibilities</h2>
          <p>You are solely responsible for: the files you upload to our Service; ensuring you have the legal right to convert and download the files you submit; using the Service in compliance with all applicable local, national, and international laws and regulations; and not uploading files that contain malware, viruses, or any malicious code.</p>
          <p className="mt-3">You agree not to: use the Service for any unlawful purpose; upload files that infringe upon the intellectual property rights of others; attempt to interfere with, compromise, or disrupt the Service or its servers; circumvent any usage limits, access controls, or security measures; use automated scripts or bots to access the Service without prior written permission; or resell, redistribute, or commercially exploit the Service without authorisation.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>4. Intellectual Property</h2>
          <p>The FileConvertTool name, logo, website design, and all associated content are the intellectual property of FileConvertTool and are protected by applicable copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works based on our intellectual property without express written consent.</p>
          <p className="mt-3">You retain full ownership of any files you upload to and download from our Service. We do not claim any intellectual property rights over your files. By uploading a file, you grant us a limited, temporary licence to process that file solely for the purpose of performing the requested conversion.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>5. Subscription Plans and Payment</h2>
          <p>FileConvertTool offers free and paid subscription plans. Free users are subject to daily conversion limits and file size restrictions as described on our Pricing page. Paid subscriptions (Pro and Business) provide enhanced features including higher file size limits, unlimited conversions, and additional capabilities.</p>
          <p className="mt-3">Paid subscriptions are billed on a monthly recurring basis. You may cancel your subscription at any time. Cancellation takes effect at the end of the current billing period, and no refunds are provided for partial months. We reserve the right to change subscription pricing with 30 days' notice to existing subscribers.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>6. File Handling and Privacy</h2>
          <p>Files uploaded to FileConvertTool are processed on our secure servers and are automatically deleted immediately after conversion is complete or within one hour, whichever comes first. We do not access, view, store, share, or analyse the contents of your files beyond what is technically necessary to perform the conversion. For full details on how we handle your data, please refer to our Privacy Policy.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>7. Limitation of Liability</h2>
          <p>To the maximum extent permitted by applicable law, FileConvertTool and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of data, loss of profits, or business interruption, arising out of or in connection with your use of the Service, whether based on warranty, contract, tort, or any other legal theory.</p>
          <p className="mt-3">Our total liability to you for any claims arising from your use of the Service shall not exceed the amount you have paid to us in the 12 months preceding the claim, or £50, whichever is greater.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>8. Disclaimer of Warranties</h2>
          <p>The Service is provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Service will be uninterrupted, error-free, or secure, or that any defects will be corrected. We do not guarantee the accuracy, quality, or integrity of any file conversions.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>9. Indemnification</h2>
          <p>You agree to indemnify, defend, and hold harmless FileConvertTool, its affiliates, officers, directors, employees, and agents from and against any and all claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising from your use of the Service, your violation of these Terms, or your violation of any third-party rights.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>10. Termination</h2>
          <p>We reserve the right to suspend or terminate your access to the Service at any time, with or without cause, and with or without notice. Reasons for termination may include, but are not limited to, violation of these Terms, abuse of the Service, or conduct that we determine to be harmful to other users or our business.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>11. Governing Law</h2>
          <p>These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to conflict of law principles. Any disputes arising from these Terms or your use of the Service shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>12. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at: our contact page at fileconverttool.com/contact</p>
        </section>
      </div>
    </div>
  );
}
