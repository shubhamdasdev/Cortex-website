import { motion } from 'framer-motion';

export const Terms = () => {
  return (
    <div className="bg-black min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800"
        >
          <h1 className="text-3xl font-bold text-white mb-8">
            Terms and Conditions
          </h1>

          <div className="space-y-6 text-gray-300">
            {/* 1. Acceptance of Terms */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using Cortex&apos;s services (“Services”), you
                agree to be bound by these Terms and Conditions (“Terms”). Cortex
                is a US-based startup, not yet officially registered, and does not
                currently operate from a physical office location. Your continued
                use of our Services indicates your acceptance of these Terms.
              </p>
            </section>

            {/* 2. Service Description */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                2. Service Description
              </h2>
              <p>
                Cortex provides AI-powered knowledge work assistance through
                document analysis, workflow automation, and insights generation.
                Our Services are offered “as is” and may be modified or discontinued
                at any time without notice.
              </p>
            </section>

            {/* 3. User Obligations */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                3. User Obligations
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate information during sign-up and use.</li>
                <li>
                  Maintain confidentiality of account credentials and notify us of
                  any unauthorized access.
                </li>
                <li>Use the Services in compliance with all applicable laws.</li>
                <li>Refrain from misusing, exploiting, or hacking the Services.</li>
              </ul>
            </section>

            {/* 4. Data Privacy */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                4. Data Privacy
              </h2>
              <p>
                We handle your data in accordance with our Privacy Policy. By using
                our Services, you consent to our data practices, including the
                collection and processing of your personal information.
              </p>
            </section>

            {/* 5. Intellectual Property */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                5. Intellectual Property
              </h2>
              <p>
                All content, features, and functionality of Cortex (excluding
                user-generated content) are owned by or licensed to us, and are
                protected by international copyright laws and treaties.
              </p>
            </section>

            {/* 6. Limitation of Liability */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                6. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, Cortex shall not be liable
                for any indirect, incidental, special, consequential, or punitive
                damages arising from your use of the Services. This limitation
                applies even if we have been advised of the possibility of such
                damages.
              </p>
            </section>

            {/* 7. Changes to Terms */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                7. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify or replace these Terms at any time.
                Your continued use of the Services following any changes indicates
                your acceptance of the new Terms.
              </p>
            </section>

            {/* 8. Governing Law */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                8. Governing Law
              </h2>
              <p>
                These Terms are governed by and construed in accordance with the
                laws of the United States. Any legal action or proceeding related
                to your use of the Services shall be brought exclusively in the
                applicable courts located in the United States.
              </p>
            </section>

            {/* 9. Contact */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                9. Contact
              </h2>
              <p>
                If you have questions, concerns, or requests regarding these Terms,
                please contact us through our website or by email at:
                <br />
                <span className="italic">support@cortex.ai</span>
              </p>
              <p className="mt-2 text-sm text-gray-400">
                (We currently do not operate from a physical office location.)
              </p>
            </section>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-800">
            <p className="text-gray-400 text-sm">Last updated: February 2024</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
