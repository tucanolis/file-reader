const nodemailer = require('nodemailer');

// Configurações do servidor SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'seuemail@example.com',
    pass: 'suasenha',
  },
});

// Opções do email
const mailOptions = {
  from: 'seuemail@example.com',
  to: 'destinatario@example.com',
  subject: 'Assunto do Email',
  text: 'Conteúdo do Email',
};

// Enviando o email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Erro ao enviar o email:', error);
  } else {
    console.log('Email enviado com sucesso:', info.response);
  }
});
