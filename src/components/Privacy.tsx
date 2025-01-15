import { motion } from 'framer-motion';

export const Privacy = () => {
  return (
    <div className="bg-black min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800"
        >
          <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>

          <div className="space-y-6 text-gray-300">
            {/* 1. Introduction */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                1. Introduction
              </h2>
              <p>
                This Privacy Policy explains how <strong>Cortex</strong> (“we,”
                “us,” or “our”), a US-based startup not yet officially registered
                and without a physical office location, collects, uses, discloses,
                and safeguards your information when you use our services
                (“Services”). By accessing or using our Services, you agree to the
                collection and use of information in accordance with this Privacy
                Policy.
              </p>
            </section>

            {/* 2. Information We Collect */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                2. Information We Collect
              </h2>
              <p>
                We collect information you provide directly to us—such as your
                name, email address, and usage data—to improve our Services. This
                may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Registration details (e.g., username, email)</li>
                <li>Feedback, messages, or other communications you send us</li>
                <li>Usage data (e.g., how you navigate our website or app)</li>
              </ul>
            </section>

            {/* 3. How We Use Your Information */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                3. How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and maintain our Services</li>
                <li>To notify you about changes or updates to our Services</li>
                <li>To provide customer support or respond to inquiries</li>
                <li>To gather analytics and improve our Services</li>
                <li>To send promotional or informational communications, where permitted</li>
              </ul>
            </section>

            {/* 4. Data Security */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                4. Data Security
              </h2>
              <p>
                We implement reasonable administrative, technical, and physical
                security measures to protect against unauthorized access,
                alteration, disclosure, or destruction of your personal data.
                However, no method of transmission over the internet or electronic
                storage is 100% secure. We cannot guarantee absolute security.
              </p>
            </section>

            {/* 5. Data Retention */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                5. Data Retention
              </h2>
              <p>
                We retain your data only as long as necessary to provide our
                Services or to comply with legal obligations. When your data is no
                longer needed, we will delete or anonymize it in a secure manner.
              </p>
            </section>

            {/* 6. Your Rights */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                6. Your Rights
              </h2>
              <p>
                Depending on your jurisdiction, you may have rights regarding your
                personal data, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Accessing the personal data we hold about you</li>
                <li>Correcting or updating inaccurate information</li>
                <li>Requesting deletion of your personal data</li>
                <li>Objecting to or restricting certain data processing</li>
              </ul>
              <p className="mt-2">
                If you wish to exercise any of these rights, please contact us at
                <span className="italic"> support@cortex.ai</span>.
              </p>
            </section>

            {/* 7. Third-Party Services */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                7. Third-Party Services
              </h2>
              <p>
                We may employ third-party service providers to facilitate our
                Services, perform tasks on our behalf, or assist us in analyzing
                how our Services are used. These third parties only have access to
                your data to perform specific tasks for us and are obligated not to
                disclose or use it for other purposes.
              </p>
            </section>

            {/* 8. International Transfers (Optional) */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                8. International Transfers
              </h2>
              <p>
                As a US-based startup, your data may be transferred to and
                processed in the United States, where data protection laws may
                differ from those in your jurisdiction. By using our Services, you
                consent to the transfer of your information to the U.S.
              </p>
            </section>

            {/* 9. Changes to this Privacy Policy */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                9. Changes to this Privacy Policy
              </h2>
              <p>
                We may update our Privacy Policy from time to time. Any changes
                will be posted on this page with a revised “Last updated” date. Your
                continued use of the Services after such changes constitute your
                acceptance of the updated policy.
              </p>
            </section>

            {/* 10. Contact Us */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                10. Contact Us
              </h2>
              <p>
                If you have any questions or concerns about this Privacy Policy,
                please reach out to us at:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  Website: <span className="italic">www.cortex.ai</span>
                </li>
                <li>
                  Email: <span className="italic">support@cortex.ai</span>
                </li>
              </ul>
              <p className="mt-2 text-sm text-gray-400">
                (Cortex is not yet officially registered and does not maintain a
                physical office location.)
              </p>
            </section>
          </div>

          {/* Last Updated */}
          <div className="mt-8 pt-6 border-t border-gray-800">
            <p className="text-gray-400 text-sm">Last updated: February 2024</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
