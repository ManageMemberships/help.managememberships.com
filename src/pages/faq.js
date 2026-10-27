import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import FaqItem from '@site/src/components/FaqItem';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function FAQHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBannerSecondary)}>
      <div className="container">
        <Heading as="h1">
          FAQ
        </Heading>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} : FAQ`}
      description="ManageMemberships Knowledge Base">
      <FAQHeader />
      <div className={clsx(styles.innerContainer)}>
        <p>Frequently asked questions about the platform.  You can add to this list by <a href="mailto:jon@managememberships.com">Emailing a Question</a></p>
        <h2>Accounts</h2>
        <FaqItem question="How do I add sub/family accounts?">
          <ul>
            <li>If they are going to require their own login, such as an adult dependent or someone in the house with their own email, a sub account is the best fit</li>
            <li>If they are going to be a minor or someone who will not require their own login, such as a spouse or child, a bundle account is the best fit</li>
          </ul>
          <ol>
            <li>Navigate to Members &rarr; Members</li>
            <li>Find the member and click 'manage'</li>
            <li>Scroll down to 'Manage Accounts'</li>
            <li>Add the bundle account or the sub account depending on the situation</li>
            <li>If this additional member should incur an additional monthly fee, you will have to navigate to "Manage Subscriptions" and add the appropriate subscription</li>
          </ol>
        </FaqItem>
        <FaqItem question="Can I charge members for add-ons?">
          If it's a monthly fee such as locker rental, you can create the locker rental as a membership level and <a href="/docs/membership/membership-levels#-visibility-options">make it not visible publicly</a>.  After that, you can add it as an additional subscription <a href="/docs/membership/members#-manage-edit">in their member profile</a>.
        </FaqItem>
        <FaqItem question="What’s the difference between a sub-account and a bundle account?">
          Sub-accounts have their own login and can register for classes independently. Bundle accounts are managed under the main profile — ideal for minors or shared emails — and don’t have separate logins.
        </FaqItem>
        <h2>Billing</h2>
        <FaqItem question="When are my members charged?">
          Members are charged immediately upon signup (if they choose a paid membership) and then on the same day each month thereafter. For example, if a member signs up on the 15th of the month, they will be charged on the 15th of each subsequent month.
        </FaqItem>
        <FaqItem question="How are failed payments handled?">
          The system checks the grace period that you set in your portal settings.  If the number of failed payments exceeds the grace period, the member will be automatically be set to inactive.  Even if they are set to inactive, the system will try to rebill the up to 8 times in a 30 day period.  If they do make a successful payment, their billing cycle remains the same.  
        </FaqItem>
      </div>
    </Layout>
  );
}