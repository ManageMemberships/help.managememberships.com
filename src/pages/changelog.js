import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import FaqItem from '@site/src/components/FaqItem';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function ChangeLogHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBannerSecondary)}>
      <div className="container">
        <Heading as="h1">
          Change Log
        </Heading>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} : Change Log`}
      description="ManageMemberships Knowledge Base">
      <ChangeLogHeader />
      <div className={clsx(styles.innerContainer)}>
        <p>All notable changes to the platform will be documented here.</p>
        <hr/>

        <h2>[Upcoming]</h2>

<h3>Added</h3>
<ul>
  <li><strong>Gift Card Sync</strong> &mdash; ManageRegister can now push gift card balances (credits, debits) into ManageMemberships in real-time with overdraft protection and idempotent transactions</li>
  <li><strong>Charge Card on File (POS)</strong> &mdash; ManageRegister can charge a member's saved payment method for merchandise purchases. Works with both Stripe and CardPointe. Toggled per-portal.</li>
  <li><strong>Citizenship Verification</strong> &mdash; owners can mark members as citizenship-verified from the member detail page, exposed via member API</li>
  <li><strong>Birth Date in Member API</strong> &mdash; member search and detail API endpoints now include birth_date for age verification workflows</li>
  <li><strong>First Class Booking Trigger</strong> &mdash; new automation trigger fires when a member books their first-ever class, with a pre-built template and deduplication</li>
  <li><strong>Advanced Registration Limits</strong> &mdash; membership levels can set a monthly limit on advance class bookings (more than 7 days out). Same-week bookings are unlimited.</li>
  <li><strong>Automatic Certificate Generation</strong> &mdash; certificates are automatically created when a member is marked as attended in class reports</li>
  <li><strong>PDF Certificates</strong> &mdash; downloadable branded PDF certificates with portal logo, gold border, official seal, and certificate number</li>
  <li><strong>Sub-Account Breakout</strong> &mdash; owners can promote a child/sub-account into a standalone member, preserving all history</li>
  <li><strong>Privacy/Visibility Controls</strong> &mdash; resources can be set to public, members-only, or staff-only. Trainers can be marked as sensitive staff. Toggled per-portal.</li>
  <li><strong>Walk-In Queue</strong> &mdash; manage walk-in queues via ManageRegister with real-time dashboard and member queue position display</li>
  <li><strong>Guest resource viewing</strong> &mdash; resources can now be viewed by guests without signing in</li>
  <li><strong>Minimum booking lead time for resources</strong> &mdash; per-resource configurable lead time that prevents last-minute bookings</li>
  <li><strong>Resource booking options</strong> &mdash; resources can now have multiple pricing options (e.g. &quot;Single Rider&quot;, &quot;Double Rider&quot;)</li>
  <li><strong>Door Access Debugger</strong> &mdash; test why a member is granted or denied door access with step-by-step diagnostics</li>
  <li><strong>New IP login alerts for staff</strong> &mdash; email alerts when staff accounts are accessed from unrecognized IP addresses</li>
  <li><strong>Kiosk password protection</strong> &mdash; optional password gate for kiosk access</li>
  <li><strong>CardPointe (Fiserv) integration</strong> &mdash; card-not-present via hosted iFrame tokenizer, card-on-file support, recurring billing</li>
  <li><strong>Searchable portal settings</strong> &mdash; search bar on the settings page to quickly find any setting</li>
  <li><strong>Instant renewal refresh</strong> &mdash; renewal status updates immediately when a payment is settled, so door access reflects the latest payment state without waiting for the scheduled sync</li>
  <li><strong>Manual renewal refresh button</strong> &mdash; &quot;Refresh Renewal&quot; button on member subscriptions page to force-sync renewal status from Stripe on demand</li>
</ul>

<h3>Fixed</h3>
<ul>
  <li>Door access not recognizing subscription item add-ons</li>
  <li>Resource booking crash for members without membership level</li>
  <li>Invoice processing fee double-charge</li>
  <li>Google Wallet generation failures no longer block notification emails</li>
  <li>Invoice backfill N+1 query replaced with bulk insert</li>
  <li>Server IP logging no longer generates false-positive security alerts</li>
  <li>Triggers page error when template contained Blade-like syntax</li>
</ul>

<h3>Improved</h3>
<ul>
  <li>WCAG 2.2 AA accessibility improvements</li>
</ul>

<hr/>

<h2>[1.23.0] - 2026-05-20</h2>

<h3>Added</h3>
<ul>
  <li>Product images on store items</li>
  <li>New product page for purchases</li>
  <li>Can now set unpause date for memberships</li>
  <li>Owner now gets email when accounts upgrade</li>
  <li>Owner can now text member from member details page</li>
  <li>Bundle membership levels are now more easily editable</li>
  <li>Charge card on file or mark unpaid on manual event registration</li>
  <li>Total tickets purchased now shows on event report</li>
  <li>Enhanced logging for privileged account access</li>
  <li>CRM prospect detail now shows linked customer's texts, emails, and class bookings</li>
  <li>Global task/todo list view across all prospects and members</li>
  <li>Custom fields inside agreements</li>
  <li>Failed payment notifications now sent to member, owner, and additional recipients</li>
  <li>Clickable student names on class registrations report</li>
  <li>CSV export on class registrations roster</li>
  <li>Attendance tracking on class registrations &mdash; mark attended/no-show per booking</li>
  <li>&quot;Last Accessed&quot; sortable column on member list</li>
</ul>

<h3>Improved</h3>
<ul>
  <li>Calendar view added to class management</li>
  <li>Manually added class tickets can now be marked unpaid</li>
  <li>Contact info now required on waiver</li>
  <li>Tooltip helpers for more guidance</li>
  <li>Improved flow for multiple copies of waivers</li>
  <li>Bundle account relationship is easier to edit</li>
  <li>ManageRegister inventory sync now respects source-of-truth setting</li>
</ul>

<h3>Fixed</h3>
<ul>
  <li>MRR calculation bug after manual member charging</li>
  <li>Registration crash when sub-account fields are empty</li>
  <li>Product sync marking items out of stock incorrectly</li>
  <li>Duplicate email blocking on kiosk waiver &mdash; now assigns placeholder email</li>
  <li>Quote from calendar reservation not attaching customer name</li>
  <li>Chrome autofill treating search inputs as password fields</li>
  <li>Kiosk waiver unique email check was globally scoped instead of tenant-scoped</li>
</ul>

<hr/>

        <h2>[1.22.0] - 2026-03-17</h2>

<h3>Added</h3>
<ul>
  <li>Date and time now in Events</li>
  <li>Easier booking of classes and events directly from POS (ManageRegister)</li>
  <li>Text notifications on invalid door scans</li>
  <li>Limited available text on events and visitor count</li>
  <li>Subscription change logging for better transparency</li>
  <li>Sports South integration (ManageRegister)</li>
  <li>Quota now visible in member dashboard</li>
  <li>New "approval required" style memberships</li>
  <li>Can now require email verification</li>
</ul>

<h3>Fixed</h3>
<ul>
  <li>Members can onboard multi-member plans now</li>
  <li>Z-Report timezone behaves more consistently</li>
  <li>Improved handling for asking manually created members for waiver (ManageRegister)</li>
</ul>

<h3>Improved</h3>
<ul>
  <li>Easier deletion of POS reservations</li>
  <li>Quote name save functionality improved</li>
  <li>Security patches</li>
  <li>Easier to remove sub accounts</li>
  <li>Add item to subscription/add subscription now more clear</li>
  <li>Easier staff management and account updates</li>
  <li>Kiosk now supports updating waivers rather than giving error that account already exists</li>
  <li>Adding subscription asks if user wants to update their main membership level</li>
  <li>Event has improved sharing preview image</li>
  <li>Member upgrade options are now displayed more prominently on the dashboard</li>
  <li>Better messaging when trying to restore a previously deleted user</li>
  <li>Improved invoice layout</li>
</ul>

<h2>[1.21.0] - 2026-03-17</h2>

<h3>Fixed</h3>
<ul>
  <li>Login from member content now redirects back to the blog post</li>
  <li>Unmark resource unavailable now fixed</li>
  <li>CRM prospects from website source now automatically assigned to "New" status instead of "Nurture"</li>
</ul>

<h3>Added</h3>
<ul>
  <li>Orientation workflow with class check-in</li>
  <li>Orientation Queue added to navigation (shown when orientation is enabled)</li>
  <li>Orientation Queue now displays bundled members/minors with parent account information</li>
  <li>Custom split fee percentage &mdash; can now pass on any arbitrary percent to customers as a processing fee</li>
  <li>Additional notification emails for resource booking</li>
  <li>Member insights added to dashboard</li>
  <li>Anchor date shows up by default when editing next invoice date</li>
  <li>Task tracking now in CRM</li>
  <li>Quick add customer and product to ManageRegister</li>
</ul>

<h3>Improved</h3>
<ul>
  <li>Inactive/cancelled members are now excluded from all email campaigns, text campaigns, drip campaigns, and automation triggers</li>
  <li>Enhanced orientation workflow to prevent duplicate completions</li>
  <li>Security updates and patches</li>
</ul>

<h2>[1.20.0] - 2026-03-02</h2>

<h3>Fixed</h3>
<ul>
  <li>Cancelled registrations no longer show on class roster or class calendar</li>
  <li>Bug fixes</li>
  <li>Add manual subscription now syncs agreements properly</li>
  <li>ACH checkout glitch</li>
  <li>Fix issue with updating images</li>
</ul>

<h3>Improved</h3>
<ul>
  <li>Security patches</li>
  <li>Fixes to membership changes report</li>
  <li>Improved public calendar feed performance</li>
  <li>Quota no longer shows "/ period"</li>
  <li>Easier addition of minors on waiver section</li>
</ul>

<h3>Added</h3>
<ul>
  <li>Calendar billing &mdash; prorate until the end of the month, full amount on the first</li>
  <li>Can now edit quantities on subscription items</li>
  <li>Can now configure color and portal settings</li>
  <li>Door state logging</li>
  <li>Can now merge parent/child accounts directly from member portal</li>
  <li>Can now autocomplete addresses</li>
  <li>Can now hide resources from public calendar</li>
  <li>Can now limit blog posts to exclude specific memberships</li>
  <li>Can now add subscription quantities directly</li>
  <li>Can now schedule door unlocks</li>
</ul>

<h2>[1.19.0] - 2026-02-02</h2>

<h3>Improved</h3>
<ul>
  <li>Dashboard speed improvements</li>
  <li>Invoice functionality improved to send reminder emails</li>
  <li>Classes now use proper title when shared on social media</li>
  <li>Convert to member in CRM checks for existing member email</li>
  <li>Prospect status is now "sticky" and is not moved to "contact" directly from a drip campaign</li>
  <li>Simplified CRM functionality, no longer need stages, just steps</li>
  <li>Significant redesign to member details section</li>
</ul>

<h3>Added</h3>
<ul>
  <li>Owners can now merge duplicate member accounts from the Members page</li>
  <li>Referral code support in registration forms</li>
  <li>Can now download shareable feedback for classes in image format</li>
  <li>Users can now subscribe to public and private content</li>
  <li>Waiver compliance report</li>
  <li>Social sharing</li>
  <li>Log who is sending invoice reminders</li>
  <li>Can add existing members to CRM</li>
  <li>Can now bulk add existing members to CRM</li>
  <li>Action triggers now available in settings</li>
</ul>

<h2>[1.18.0] - 2026-01-16</h2>

<h3>Added</h3>
<ul>
  <li>Admin can now directly set the user's password from member details</li>
  <li>New workorder integration directly with WordPress (ManageRegister)</li>
  <li>New help integration directly into admin panel</li>
  <li>Dedicated /upgrade route for easier funneling of users to upgrade their accounts</li>
  <li>Easier bulk assign to drip campaign</li>
  <li>Trello Integration</li>
  <li>CRM now includes sponsorship pipeline tracking</li>
  <li>Short URL and QR code generator</li>
  <li>Booking protection to avoid users double clicking and being charged twice</li>
  <li>Can now more easily apply promo codes to members in member dashboard</li>
  <li>Hourly rates are now editable (ManageShifts)</li>
  <li>Classes can now show as badges in ManageRegister for "mandatory" or "privilege" classes like safety courses</li>
  <li>Tax and processing fees can now be charged on manually created invoices</li>
</ul>

<h3>Improved</h3>
<ul>
  <li>Syncing from ManageRegister no longer deletes existing entries, only updates and creates new ones</li>
  <li>Security enhancements</li>
  <li>Classes, events, resources now use color gradients to help visually differentiate them</li>
  <li>Can now have new free/trial class members automatically populate the CRM</li>
  <li>Viewing users who have redeemed a discount code is now possible</li>
  <li>Z-Report now defaults to session's register (ManageRegister)</li>
</ul>

<h3>Fixed</h3>
<ul>
  <li>Bug fixes related to class feedback</li>
  <li>Bug fixes related to cash member collection</li>
  <li>Fixed issue regarding Kiosk Waiver and promotional email signup</li>
  <li>Fixed issue with trial class</li>
  <li>Password reset bug fixed</li>
  <li>Issue with sticky member search when checking from class calendar</li>
</ul>

<h2>[1.17.0] - 2026-01-01</h2>

<h3>Added</h3>
<ul>
  <li>Presence Analytics report combining check-ins, door scans, and GPS data for comprehensive attendance insights</li>
  <li>Week-over-week comparison charts for tracking facility usage trends</li>
  <li>Visitor breakdown by activity type (full participation, facility use, GPS-only)</li>
  <li>Smart dwell time calculations</li>
  <li>Credit card surcharge option for POS (ManageRegister)</li>
  <li>Can now add multiple reservations per resource on calendar (ManageRegister)</li>
  <li>New CRM functionality</li>
  <li>Drip campaigns</li>
  <li>Can now set a date range for facility closures</li>
  <li>Merch-only filter on revenue report</li>
  <li>Class/event bookings show in ManageRegister calendar</li>
  <li>Event and resource cancellation</li>
  <li>Can now edit individual subscription fees per member</li>
  <li>Can now add coupon codes to subscriptions</li>
</ul>

<h3>Improved</h3>
<ul>
  <li>Welcome email message more resilient</li>
  <li>Text dashboard interface improved</li>
  <li>App banner now appears on portal</li>
  <li>Security patches</li>
  <li>Proper typography styling</li>
  <li>Better password requirement visibility for registration</li>
  <li>Bug fixes</li>
</ul>

<h3>Fixed</h3>
<ul>
  <li>Class discount now properly applied</li>
  <li>Coupon application error</li>
</ul>

<h2>[1.16.0] - 2025-12-17</h2>

<h3>Improved</h3>
<ul>
  <li>Flat rate pricing for multi-member memberships &mdash; e.g. $300/yr for 2-5 members rather than per-member pricing</li>
  <li>Member-only content now filters for active subscriptions</li>
  <li>Better filtering in membership area for drop-in/trial members</li>
  <li>Class report now more efficient</li>
  <li>Kiosk no longer times out</li>
  <li>Now easier to add multiple discount levels on classes and events</li>
  <li>More generous window for manual future class bookings</li>
</ul>

<h3>Fixed</h3>
<ul>
  <li>Blog post links let users see member-only blog posts</li>
  <li>Modal title on class calendar shows proper date</li>
  <li>Fixed incorrect agreement count issue per member</li>
  <li>Free code only applies to 1 ticket now for classes</li>
  <li>Improved handling of subscriptions in an error state</li>
  <li>Tightened up reporting of one-time fees</li>
  <li>Publish-after blog functionality</li>
</ul>

<h3>Added</h3>
<ul>
  <li>Z-Report (Cash Report) functionality (ManageRegister)</li>
  <li>Work order functionality (ManageRegister)</li>
  <li>Layaway functionality (ManageRegister)</li>
  <li>Backorder/zero stock functionality (ManageRegister)</li>
  <li>Time clock audits</li>
  <li>Can sort class roster by last name</li>
  <li>SMS responses are properly forwarded to owner</li>
  <li>Can now track manually created products outside of ManageRegister</li>
  <li>GPS daily summaries for location-based attendance</li>
  <li>Portal settings now support latitude/longitude for location tracking</li>
  <li>App notifications from dashboard</li>
  <li>Can now manage App Banner messages for customers using the branded app</li>
  <li>Manual registration in events report</li>
  <li>Can now push out next invoice date</li>
</ul>

<h2>[1.15.0] - 2025-11-27</h2>

<h3>Improved</h3>
<ul>
  <li>Improved user management interface</li>
  <li>Member table actions now use icon buttons with tooltips for better space efficiency</li>
  <li>Door access log now allows filtering by date and showing summary of check-ins</li>
  <li>Subscriptions report shows number breakdown</li>
  <li>Similar products are grouped in dashboard</li>
  <li>Discount code can now be for 3, 6, or 12 months</li>
  <li>Added tags to blog posts</li>
</ul>

<h3>Added</h3>
<ul>
  <li>Can now filter by class/event on revenue report</li>
  <li>Kiosk waiver page now supports embedded video with confirmation checkbox</li>
  <li>Marketing email opt-in checkbox on kiosk waiver</li>
  <li>Cash Member column now hidden by default in members table</li>
  <li>Column visibility preferences now persist across sessions</li>
  <li>Membership level now shows when searching for members in ManageRegister</li>
  <li>Tax now shows up as a line item in cash register and on receipt (ManageRegister)</li>
  <li>2-person lane reservation support (ManageRegister)</li>
  <li>Inactive members are now blocked from transactions (ManageRegister)</li>
  <li>Product purchases in the mobile app</li>
  <li>Custom member fields can be applied to all memberships</li>
  <li>Customizable class reminder timing with multiple reminder hours</li>
</ul>

<h3>Fixed</h3>
<ul>
  <li>Paused memberships no longer show as failed collections</li>
  <li>Transaction table now mobile friendly in member details</li>
  <li>Improved error handling for card declines during registration with user-friendly messages</li>
  <li>Kiosk waiver form no longer expires on long-open forms</li>
  <li>Fixed issue with trainer multi-day unavailability</li>
</ul>

<h2>[1.14.0] - 2025-11-21</h2>

<h3>Added</h3>
<ul>
  <li>Unsubscribe and email blacklist functionality</li>
  <li>Guests can view classes</li>
  <li>Portal navigation is now editable</li>
  <li>Bulk mark resources unavailable</li>
  <li>Improved WYSIWYG editor in portal settings and other places</li>
  <li>Owners can now define their own coupon/discount codes</li>
  <li>Improved class roster viewing</li>
  <li>Enriched waiver-only and kiosk system</li>
  <li>Class survey/feedback functionality</li>
  <li>Full member change report</li>
  <li>Product sync with ManageRegister</li>
  <li>Easier member search on cash collection screen</li>
  <li>Blog posts can now be duplicated</li>
  <li>Push notifications from dashboard for app users</li>
</ul>

<h3>Fixed</h3>
<ul>
  <li>Members can now see agreements on the front-end</li>
  <li>Miscellaneous notification bug fixes</li>
  <li>Bug on cash collection page</li>
  <li>Fee reporting on cash transactions clarified</li>
</ul>

<h3>Improved</h3>
<ul>
  <li>General layout improvements</li>
  <li>Improved email campaign page performance</li>
  <li>More robust logging of paused memberships</li>
  <li>Subscription report improvements</li>
  <li>Blog posts can now be scheduled</li>
  <li>Can now collect arbitrary payment amount on cash collection screen</li>
  <li>Can now filter by membership level on check-in report</li>
  <li>Revenue report now gives breakdown of cash versus non-cash transactions</li>
</ul>

<h2>[1.13.0] - 2025-11-04</h2>

<h3>Added</h3>
<ul>
  <li>Can now link existing accounts to parent accounts</li>
  <li>Can now email/text class participants directly</li>
  <li>Registration page reloads after 5 minutes of inactivity to prevent stale session</li>
  <li>Can now remove participants from the class roster directly from the class calendar</li>
  <li>Trend analysis on dashboard</li>
  <li>Birthday Report: View members with upcoming birthdays and create targeted campaigns</li>
  <li>Dashboard now tracks recurring vs drop-in members separately</li>
  <li>Member Changes Widget: Shows daily new and lapsed recurring members</li>
  <li>Referrals and referral report</li>
</ul>

<h3>Fixed</h3>
<ul>
  <li>Fixed freezing with too many users selected</li>
  <li>Issue with agreement signing giving a 404 from admin panel fixed</li>
  <li>Image preview on classes now works</li>
</ul>

<h3>Improved</h3>
<ul>
  <li>Customer upgrade is more resilient, shows specific message on payment issues</li>
  <li>Class view improved on mobile layouts</li>
  <li>Enriched management for cash/other subscriptions and changes to subscription end dates</li>
</ul>

<h2>[1.12.0] - 2025-09-30</h2>

<h3>Added</h3>
<ul>
  <li>Users can now opt to type their e-signature</li>
  <li>Can now generate custom invoices for customers</li>
  <li>Can now assign members trials until a certain period</li>
  <li>Class cancellation</li>
  <li>Ability to create "charge card on file" buttons for merchandise purchases</li>
  <li>Can now download draft invoices</li>
</ul>

<h3>Fixed</h3>
<ul>
  <li>Ending cash/free subscriptions now properly removes from the list</li>
  <li>Issue with sub accounts not showing in email campaigns</li>
  <li>Class registration total now displays correct amount paid</li>
  <li>Free events now function properly</li>
  <li>Member dashboard class list fixed for removed classes</li>
</ul>

<h3>Improved</h3>
<ul>
  <li>More robust payment method handling</li>
  <li>Improved error handling for invalid dates on member detail page</li>
</ul>

<h2>[1.11.0] - 2025-08-29</h2>

<h3>Fixed</h3>
<ul>
  <li>Credit validation on membership edit form no longer prevents other edits</li>
  <li>Notes show in correct timezone</li>
  <li>Turning off fixed time period now still shows start and end</li>
  <li>Class calendar on admin end can now properly navigate different classes</li>
</ul>

<h3>Added</h3>
<ul>
  <li>Can now add class quotas to members directly</li>
  <li>You can now set a first-class-free code on classes</li>
  <li>Free classes no longer require payment info even if time-period based</li>
  <li>Can now toggle staff on/off for ManageShifts</li>
  <li>Can now download payment receipts</li>
  <li>Easier to preview past emails</li>
  <li>24-hour reminder for upcoming classes and events</li>
  <li>Multiple days off can be requested at once and they can be approved or denied</li>
  <li>Members can now text themselves a login link from the kiosk</li>
  <li>Can now delete members</li>
  <li>Can now void invoices</li>
</ul>

<h3>Improved</h3>
<ul>
  <li>Mobile view: clicking a membership level automatically scrolls down to the form</li>
  <li>Tightened up duplicate checking on sub account additions</li>
</ul>

<h2>[1.10.0] - 2025-08-17</h2>

<h3>Improved</h3>
<ul>
  <li>Door access debouncing for accidental double scans</li>
  <li>Agreement logic improved to avoid edge cases requiring more waivers than necessary</li>
  <li>Resource page now defaults to today's date or future dates</li>
  <li>Cancellation fee description on transaction</li>
  <li>Added "select all" for membership levels on classes with warning about availability selection</li>
  <li>Greatly improved the look and feel of the membership level and member management screens</li>
  <li>Greatly improved dashboard view for users</li>
  <li>Classes, packages, and events can now be viewed before logging in</li>
  <li>Improved branding/notification on cancellation confirmation</li>
</ul>

<h3>Added</h3>
<ul>
  <li>Class calendar view with bookings</li>
  <li>Cancellation alert goes out to user and additional notification recipients</li>
  <li>Auto log out on dashboard</li>
  <li>Credit balances can now be adjusted via member dashboard</li>
</ul>

<h3>Fixed</h3>
<ul>
  <li>Class pricing for fixed time events now calculates correctly</li>
  <li>Post-class-purchase view shows the proper amount paid</li>
  <li>Emails sent out reflect correct amount paid</li>
  <li>Subscriptions show proper status if expiration date is in the future</li>
  <li>Email case validation on registration form</li>
  <li>Financial report date select now functions properly on mobile</li>
</ul>

<h2>[1.9.0] - 2025-08-04</h2>

<h3>Improved</h3>
<ul>
  <li>Toggle for door lock status now says "locked" and "unlocked"</li>
  <li>Date/time now visible on event registration report</li>
  <li>Quick kiosk now shows membership level</li>
  <li>Additional agreements for added subscriptions now show in dashboard and affect door status</li>
  <li>Doors can now have no membership level associated at all</li>
</ul>

<h3>Fixed</h3>
<ul>
  <li>Child account payment required issues fixed</li>
  <li>Improved admin signature signing</li>
  <li>Fixed glitches with event registration and financial transaction booking</li>
  <li>Fixed delay in agreement count update after subscriptions changed</li>
</ul>

<h3>Added</h3>
<ul>
  <li>Max billing cycles on membership levels for limited-term packages (e.g. 3-month personal training)</li>
  <li>Events and classes have a special notifications email field</li>
  <li>Manual class registration</li>
  <li>From last checked-in report you can now generate email campaigns for outreach</li>
  <li>You can now edit email campaign drafts</li>
  <li>Class checked into shows up in member info</li>
  <li>Clock-in entries for ManageShifts are now auditable</li>
</ul>

<h2>[1.8.0] - 2025-07-14</h2>

<h3>Fixed</h3>
<ul>
  <li>Resources now show all available resources for that day in the list of resources</li>
  <li>Sort order for resources is now honored on frontend as well as backend</li>
  <li>Double recording of cancellation fee is fixed</li>
  <li>Adding child accounts are now properly initialized with parent account info</li>
  <li>Timeoff requests now properly shows name in manageshifts</li>
  <li>Email campaign scheduling fixed</li>
  <li>Sunday resource availability fix</li>
</ul>

<h3>Added</h3>
<ul>
  <li>Can now delete resources</li>
  <li>Collection and failed payment chart on dashboard</li>
  <li>Now you can link directly to specific class</li>
  <li>Now you can link directly to specific resource</li>
  <li>Unavailability now shows up in the backend calendar more obviously</li>
  <li>Bulk mark active/inactive in member dashboard now</li>
  <li>You can now add external registration links to events</li>
  <li>Owner can turn off new member registration notifications to reduce number of incoming emails</li>
  <li>Mechanism for blocking bounced email addresses from sending emails put in place</li>
</ul>

<h3>Improved</h3>
<ul>
  <li>Registration form a bit more explicit with validation requirements and strips out non-digits in mobile</li>
  <li>Signature and printed name enforced on waiver page</li>
  <li>Remove aggressive hover on event calendar for UX concerns</li>
  <li>Sorting on last checkin report is now based on date</li>
  <li>You can now filter for membership levels on last checkin report</li>
  <li>Timezone mismatch on resource reservation and mutation of end time fixed</li>
  <li>Members now show parent account if it's child</li>
  <li>Non manager can start kiosk mode in manageshifts</li>
  <li>Start and end date on financial transactions, now searches from midnight to 11:59:59 instead of midnight to midnight</li>
</ul>

<h2>[1.7.0] - 2025-06-27</h2>

<h3>Improved</h3>
<ul>
  <li>'Renewal date' for day passes now displays properly</li>
  <li>Decluttered past subscription views</li>
  <li>Free class registration is more streamlined</li>
  <li>Branding settings are applied to class confirmation emails</li>
  <li>Minimum character length to avoid confusion kiosk</li>
  <li>Removed toggle button on members table to reduce risk of accidental click</li>
  <li>Require confirmation when changing member's active status in edit</li>
  <li>Membership card generation instructions are now more clear</li>
</ul>

<h3>Fixed</h3>
<ul>
  <li>Error on drop-in payers fixed</li>
  <li>Paused subscriptions display properly on member detail page</li>
  <li>Dollar input on available classes bug fixed</li>
  <li>Adding CC to account that previously didn't have payment account glitch fixed</li>
  <li>Fixed calendar calculation issue on recurring dates</li>
</ul>

<h3>Added</h3>
<ul>
  <li>Confirmation box on updating subscriptions and improved explanation</li>
  <li>Quick kiosk mode added</li>
  <li>Can now duplicate events for easy creation</li>
  <li>Closed dates are now in the settings</li>
  <li>Can now duplicate classes</li>
  <li>Classes can now span non-contiguous days such as a 4 week training class every Wednesday</li>
  <li>Bundled members show in member search output</li>
  <li>Users can now manage past-due invoices and view paid invoices</li>
  <li>Last Checked In report so you can see who hasn't checked in in a while</li>
</ul>

<h2>[1.6.0] - 2025-06-11</h2>

<h3>Added</h3>
<ul>
  <li>Time clock for ManageShifts.com</li>
  <li>Can now delete pages</li>
  <li>Staff availability for ManageShifts.com</li>
  <li>Resources are now sortable</li>
  <li>Resources are synced with ManageRegister.com</li>
  <li>Can now send emails directly to individual member from management panel</li>
  <li>Can now manage invoices from the member management area, including marking as paid and initiating payment with default payment method</li>
  <li>Can now manage payment methods, add, delete, and mark as default from the admin panel</li>
</ul>

<h3>Improved</h3>
<ul>
  <li>Now default to descending creation date for member sort order on admin side</li>
</ul>

<h3>Fixed</h3>
<ul>
  <li>Error on cash members in management section</li>
  <li>Page editing error for marketing pages</li>
  <li>Fixed issue with decimal point on alternative pricing</li>
  <li>Subscription pause error</li>
  <li>Staff can now update/edit their availability and trainers can see check in reports</li>
  <li>Birthday output on membership form</li>
</ul>

<h2>[1.5.0] - 2025-06-02</h2>

<h3>Added</h3>
<ul>
  <li>Better mobile support for calendar</li>
  <li>Can now toggle whether or not to send payment failure notifications</li>
  <li>You can now update a subscription to add line items rather than create multiple subscriptions. This is handy for lower priced items such as locker rentals</li>
  <li>You can now associate agreements directly at the membership level form</li>
</ul>

<h3>Improved</h3>
<ul>
  <li>Better invoice/payment history details</li>
  <li>Better output if there are issues with entering payment method</li>
  <li>Improved general layout/visual order of membership option page</li>
  <li>Better output on frontend for when there are multiple payment periods (ie annual, semiannual)</li>
  <li>Transaction log now shows reason for failure</li>
</ul>

<h3>Fixed</h3>
<ul>
  <li>Inactivate cash payer logic now more reliable, avoids false positives</li>
  <li>Multimember now says "/person" to differentiate normal monthly</li>
  <li>Disabled engagement stats sorting on email campaigns which was causing error</li>
</ul>

<h2>[1.4.0] - 2025-05-23</h2>

<h3>Added</h3>
<ul>
  <li>Renewal dates now sync properly</li>
  <li>Bulk update to members to mark/unmark as team athletes</li>
  <li>Bundle account management</li>
  <li>Birthday reminder functionality</li>
</ul>

<h3>Changed</h3>
<ul>
  <li>Improved portal settings organization</li>
</ul>

<h3>Fixed</h3>
<ul>
  <li>Refund issue on Admin dashboard</li>
  <li>Kiosk scanned QR code not populating data</li>
</ul>

<h2>[1.3.2] – 2025-05-18</h2>
<ul>
  <li>Formal changelog process is put in place</li>
</ul>

      </div>
    </Layout>
  );
}
