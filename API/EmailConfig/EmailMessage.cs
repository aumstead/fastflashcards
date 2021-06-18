﻿using MimeKit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Email
{
    public class EmailMessage
    {
        public MailboxAddress To { get; set; }
        public string Subject { get; set; }
        public string Content { get; set; }

        public EmailMessage(string to, string subject, string content)
        {
            To = new MailboxAddress("to", to);
            Subject = subject;
            Content = content;
        }
    }
}
