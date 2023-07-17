import { ReactNode } from "react";

function Question({ q, children }: { q: string; children: ReactNode }) {
  return (
    <div className="bg-purple-100 p-3">
      <h3 className="text-xl font-medium">{q}</h3>
      <p className="text-lg">{children}</p>
    </div>
  );
}

export function FAQ() {
  return (
    <div>
      <h2 className="text-4xl font-semibold">Questions?</h2>
      <div className="faq mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <Question q="💻 Hackathon? What's that?">
          A hackathon is a social coding event -- you get 24 hours, mentors and
          workshops, and lots of free food and swag to build anything you want.
          Even if you&apos;ve never written a line of code before, we&apos;d
          love to have you there!
        </Question>
        <Question q="🙋‍♀️ What if I've never coded before?">
          That&apos;s totally fine! We&apos;ll have beginner-friendly workshops
          and mentors to help you out.
        </Question>
        <Question q="📝 How do I sign up?">
          You can fill out the registration form <a href="https://forms.gle/ZvhFctVAAN5W5YaP9" target="_blank" rel="noreferrer">here</a>!
        </Question>
        <Question q="🎒 What do I need to bring?">
          Bring your laptop, charger, toiletries, a sleeping bag, and anything
          else you&apos;ll need for staying overnight.
        </Question>
        <Question q="💵 How much does it cost?">
          Spark is completely free! And (with the support of{" "}
          <a href="https://sentry.io" target="_blank" rel="noreferrer">
            Sentry
          </a>
          ), we&apos;ll be providing all meals, snacks, and swag.
        </Question>
        <Question q="✈️ I can't pay for travel; will there be travel reimbursements?">
          We&apos;re exploring offering travel stipends for hackers from outside
          the Bay Area; there will be a place for you to indicate your interest
          on the application form.
        </Question>
        <Question q="✨ I want to help out! How can I get involved?">
          Spark is being organized in public on the{" "}
          <a
            href="https://hackclub.com/slack/?event=spark"
            target="_blank"
            rel="noreferrer"
          >
            Hack Club Slack
          </a>
          , and we encourage attendees to make the hackathon experience their
          own. Join us in the{" "}
          <a
            href="https://hackclub.slack.com/archives/C05DMATE0E6"
            target="_blank"
            rel="noreferrer"
          >
            #spark
          </a>{" "}
          channel on Slack to get involved!
        </Question>
        <Question q="📧 I have another question!">
          Please contact us! You can find us in the{" "}
          <a
            href="https://hackclub.slack.com/archives/C05DMATE0E6"
            target="_blank"
            rel="noreferrer"
          >
            #spark
          </a>{" "}
          channel on Slack, or email us at{" "}
          <a href="mailto:spark@hackclub.com">spark@hackclub.com</a>.
        </Question>
      </div>
    </div>
  );
}
