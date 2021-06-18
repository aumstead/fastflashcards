using API.Email;
using API.Interfaces;
using MailKit.Net.Smtp;
using Microsoft.Extensions.Configuration;
using MimeKit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Services
{
    public class EmailService : IEmailService
    {
        private readonly IConfiguration _config;

        public EmailService(IConfiguration config)
        {
            _config = config;
        }

        public void SendEmail(EmailMessage emailMessage)
        {
            var message = CreateEmailMessage(emailMessage);
            Send(message);
        }

        private MimeMessage CreateEmailMessage(EmailMessage emailMessage)
        {
            var message = new MimeMessage();
            message.From.Add(new MailboxAddress("From", "dgifolios@gmail.com"));
            message.To.Add(emailMessage.To);
            message.Subject = message.Subject;
            message.Body = new TextPart(MimeKit.Text.TextFormat.Text) { Text = emailMessage.Content };
            return message;
        }

        private void Send(MimeMessage mailMessage)
        {
            using (var client = new SmtpClient())
            {
                try
                {
                    client.Connect("smtp.gmail.com", 587, true);
                    client.AuthenticationMechanisms.Remove("XOAUTH2");
                    client.Authenticate("dgifolios@gmail.com", _config["EmailConfigPassword"]);
                    client.Send(mailMessage);
                }
                catch
                {
                    //log an error message or throw an exception or both.
                    throw;
                }
                finally
                {
                    client.Disconnect(true);
                    client.Dispose();
                }
            }
        }
    }
}
