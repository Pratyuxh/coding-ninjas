import readline from 'readline';
import nodemailer from 'nodemailer';
let emailTo = "";
async function sendMail(){
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'codingninjas2k16@gmail.com',
      pass: 'slwvvlczduktvhdj'
    }
  });
  const mailOptions = {
    from: 'codingninjas2k16@gmail.com',
    to: emailTo,
    subject: 'Coding Ninjas',
    text: 'Hello Shubham. Kindly call at 8920226044 for free Fullstack Web Development Course'
  }
  try{
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent to'+ emailTo);
  }
  catch(err){
    console.log('error in sending mail', err);
  }
}

const Solution = () => {
  // Write your code here
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
    rl.question("please enter your mail ", (mailId)=>{
      emailTo = mailId;
      sendMail();
      rl.close();
    });
};

export default Solution;


