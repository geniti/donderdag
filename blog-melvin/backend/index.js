const nodemailer = require("nodemailer");

const contactEmail = nodemailer.createTransport({
  host: "mail.geniti.nl",
  port: 465,
  auth: {
    user: "testcode@geniti.nl",
    pass: "testcode",
  },
});

async function run() {
  let sendResult = await contactEmail.sendMail({
    from: "Geniti",
    to: "geniti@geniti.nl",
    subject: "Hello from JRM",
    text: "halooooooood allllad emmmenndeo",
    html:
      "<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,",
    attachments: [
      {
        filename: "vodde.pdf",
        path: "../vodde.pdf",
      },
    ],
  });

  console.log(sendResult);
}

run().catch((err) => console.error(err));
