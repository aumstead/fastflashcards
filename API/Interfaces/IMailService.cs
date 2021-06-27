using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Interfaces
{
    public interface IMailService
    {
        void SendPlainTextSendGrid(string recipientEmail, string confirmationLink);
        void SendHTMLSendGrid(string recipientEmail, string link, string subject, string text, string buttonText);
    }
}
