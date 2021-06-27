using API.Interfaces;
using FluentEmail.Core;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace API.Services
{
    public class MailService : IMailService
    {
        private readonly IServiceProvider _serviceProvider;

        public MailService(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async void SendHTMLSendGrid(string recipientEmail, string link, string subject, string text, string buttonText)
        {
            using (var scope = _serviceProvider.CreateScope())
            {
                var mailer = scope.ServiceProvider.GetRequiredService<IFluentEmail>();
                var email = mailer
                .To(recipientEmail)
                .Subject(subject)
                .UsingTemplateFromFile($"{Directory.GetCurrentDirectory()}\\wwwroot\\EmailTemplates\\OneButtonTemplate.cshtml", new { Link = link, Text = text, ButtonText = buttonText });

                await email.SendAsync();
            }
        }

        public async void SendPlainTextSendGrid(string recipientEmail, string confirmationLink)
        {
            using (var scope = _serviceProvider.CreateScope())
            {
                var mailer = scope.ServiceProvider.GetRequiredService<IFluentEmail>();
                var email = mailer
                .To(recipientEmail)
                .Subject("Email Verification Link")
                .Body($"Click the link to verify your email. {confirmationLink}");

                await email.SendAsync();
            }
        }
    }
}
