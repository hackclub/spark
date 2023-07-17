const getProperty = (propertyName) =>
  PropertiesService.getScriptProperties().getProperty(propertyName);

const onSubmit = (e) => {
  const email = e.response.getRespondentEmail();
  const responses = e.response.getItemResponses();
  let firstName;
  let lastName;
  let parentName;
  let parentEmail;
  let age;
  for (const res of responses) {
    const question = res.getItem().getTitle();
    if (question.trim() === "First Name") {
      firstName = res.getResponse().trim();
    } else if (question.trim() === "Last Name") {
      lastName = res.getResponse().trim();
    } else if (question.trim() === "Parent/Guardian Name") {
      parentName = res.getResponse().trim();
    } else if (question.trim() === "Parent/Guardian Email") {
      parentEmail = res.getResponse().trim();
    } else if (question.trim() === "Age") {
      age = parseInt(res.getResponse().trim());
    }
  }
  const sendEmail = {
    url: "https://spark-mail.mliu.workers.dev",
    method: "post",
    contentType: "application/json",
    headers: {
      Authorization: `Bearer ${getProperty("MAIL_AUTH_TOKEN")}`,
    },
    payload: JSON.stringify({
      email,
      textMessage: `Hi ${firstName}!

Thanks for registering for Spark <https://spark.hackclub.com>; we're excited to see you there!

Here's what you need to do to make sure you're all set for the event:
    - Sign the *mandatory* event liability release (emailed to you from RabbitSign).${
      age < 18
        ? " After you sign, your parent/guardian will receive an email to sign and complete the rest of the waiver."
        : ""
    } If you didn't receive the waiver in your email, reach out to us at spark@hackclub.com.
    - Join the Hack Club Slack and the #spark channel to chat with us and other attendees: https://hackclub.com/slack/?event=spark! We want this event to be crafted by you, so if you have any ideas of what you'd like to see at Spark (workshops, food, swag), let us know.

Spark will take place from noon on August 12 to noon on August 13, at Sentry HQ (45 Fremont St., 8th Floor, San Francisco, CA 94105). Please invite your friends to join us -- we welcome everyone, with no coding experience required.

✨ The Spark Team`,
      htmlMessage: `<div>Hi ${firstName}!</div>
<br />
<div>
Thanks for registering for <a href="https://spark.hackclub.com">Spark</a>; we're excited to see you there!
</div>
<br />
<div>
Here's what you need to do to make sure you're all set for the event:
  <ul>
    <li>
      Sign the <b>mandatory</b> event liability waiver (emailed to you from RabbitSign).${
        age < 18
          ? " After you sign, your parent/guardian will receive an email to sign and complete the rest of the waiver."
          : ""
      } If you didn't receive the waiver in your email, reach out to us at spark@hackclub.com.
    </li>
    <li>
    Join the Hack Club Slack and the #spark channel to chat with us and other attendees: https://hackclub.com/slack/?event=spark! We want this event to be crafted by you, so if you have any ideas of what you'd like to see at Spark (workshops, food, swag), let us know.
    </li>
  </ul>
</div>
<div>
Spark will take place from noon on August 12 to noon on August 13, at Sentry HQ (45 Fremont St., 8th Floor, San Francisco, CA 94105). Please invite your friends to join us -- we welcome everyone, with no coding experience required.
</div>
<br />
<div>
✨ The Spark Team 
</div>`,
      subject: "✨ Can't wait to see you at Spark -- thanks for registering!",
    }),
  };

  const waiver = {
    url: age < 18 ? getProperty("MINOR_WAIVER") : getProperty("ADULT_WAIVER"),
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(
      age < 18
        ? {
            roles: {
              Participant: {
                email,
                name: `${firstName} ${lastName}`,
              },
              Parent: {
                email: parentEmail,
                name: parentName,
              },
            },
          }
        : {
            roles: {
              Participant: {
                email,
                name: `${firstName} ${lastName}`,
              },
            },
          }
    ),
  };
  UrlFetchApp.fetchAll([sendEmail, waiver]);
};
