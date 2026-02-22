using API.Data;
using API.Data.Repository;
using API.Data.Repository.IRepository;
using API.Interfaces;
using API.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
        {
            //services.AddDbContextPool<DataContext>(options =>
            //        options.UseSqlServer(
            //            config.GetConnectionString("DefaultConnection")));
            services.AddDbContext<DataContext>(options =>
            {
                var env = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");

                string connStr;

                // Depending on if in development or production, use either Heroku-provided
                // connection string, or development connection string from env var.
                if (env == "Development")
                {
                    // Use connection string from file.
                    connStr = config.GetConnectionString("DefaultConnection");
                }
                else
                {
                    connStr = config.GetConnectionString("DefaultConnection");
                }

                options.UseSqlite(connStr);
            });
            services.AddScoped<ITokenService, TokenService>();
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddHttpClient();
            services
               .AddFluentEmail("admin@fastflashcards.com", "Fast Flash Cards")
               .AddRazorRenderer()
               .AddSmtpSender(new SmtpClient("smtp.sendgrid.net")
               {
                   UseDefaultCredentials = false,
                   Port = 587,
                   Credentials = new NetworkCredential("apikey", config["SENDGRID_API_KEY"]),
                   EnableSsl = true
               });
            services.AddScoped<IMailService, MailService>();

            return services;
        }
    }
}
