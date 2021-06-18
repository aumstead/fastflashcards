using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace API.Data.SeedData
{
    public class Seed
    {
        public static async Task SeedUsers(UserManager<AppUser> userManager)
        {
            if (await userManager.Users.AnyAsync()) return;

            var adminClaim = new Claim("IsAdmin", "");

            var admin = new AppUser
            {
                UserName = "admin@fastflashcards.com",
                Email = "admin@fastflashcards.com",
                EmailConfirmed = true
            };

            var demo = new AppUser
            {
                UserName = "demo@fastflashcards.com",
                Email = "demo@fastflashcards.com",
                EmailConfirmed = true
            };

            await userManager.CreateAsync(admin, "Gandalf1");
            await userManager.CreateAsync(demo, "Gandalf1");
            await userManager.AddClaimAsync(admin, adminClaim);
        }

        public static async Task SeedDecks(UserManager<AppUser> userManager, DataContext context)
        {
            if (await context.Decks.AnyAsync()) return;

            var demoUser = await userManager.FindByNameAsync("demo@fastflashcards.com");
            var andrewUser = await userManager.FindByNameAsync("admin@fastflashcards.com");

            var deckOneA = new Deck
            {
                Name = "CSharp / OOP",
                AppUserId = demoUser.Id
            };

            var deckOneB = new Deck
            {
                Name = "CSharp / OOP",
                AppUserId = andrewUser.Id
            };

            var deckTwoA = new Deck
            {
                Name = "ASP.NET Core / EF Core",
                AppUserId = demoUser.Id
            };

            var deckTwoB = new Deck
            {
                Name = "ASP.NET Core / EF Core",
                AppUserId = andrewUser.Id
            };

            var spanish = new Deck
            {
                Name = "Spanish",
                AppUserId = demoUser.Id
            };

            context.Decks.Add(deckOneA);
            context.Decks.Add(deckOneB);
            context.Decks.Add(deckTwoA);
            context.Decks.Add(deckTwoB);
            context.Decks.Add(spanish);

            await context.SaveChangesAsync();
        }

        public static async Task SeedCards(UserManager<AppUser> userManager, DataContext context)
        {
            if (await context.Cards.AnyAsync()) return;

            var cSharpCardsData = await System.IO.File.ReadAllTextAsync("./Data/SeedData/CSharpCards.json");
            var dotnetCardsData = await System.IO.File.ReadAllTextAsync("./Data/SeedData/DotnetCards.json");
            var spanishEncoding = Encoding.GetEncoding(28591);
            var spanishCardsData = await System.IO.File.ReadAllTextAsync("./Data/SeedData/SpanishCards.json", spanishEncoding);

            var demoCSharpCards = JsonSerializer.Deserialize<List<Card>>(cSharpCardsData);
            var andrewCSharpCards = JsonSerializer.Deserialize<List<Card>>(cSharpCardsData);
            var demoDotnetCards = JsonSerializer.Deserialize<List<Card>>(dotnetCardsData);
            var andrewDotnetCards = JsonSerializer.Deserialize<List<Card>>(dotnetCardsData);
            var spanishCards = JsonSerializer.Deserialize<List<Card>>(spanishCardsData);

            var demoUser = await userManager.FindByNameAsync("demo@fastflashcards.com");
            var andrewUser = await userManager.FindByNameAsync("admin@fastflashcards.com");


            foreach (var card in demoCSharpCards)
            {
                card.DeckId = 1;
                card.AppUserId = demoUser.Id;
                context.Cards.Add(card);
            }

            foreach (var card in andrewCSharpCards)
            {
                card.DeckId = 2;
                card.AppUserId = andrewUser.Id;
                context.Cards.Add(card);
            }

            foreach (var card in demoDotnetCards)
            {
                card.DeckId = 3;
                card.AppUserId = demoUser.Id;
                context.Cards.Add(card);
            }

            foreach (var card in andrewDotnetCards)
            {
                card.DeckId = 4;
                card.AppUserId = andrewUser.Id;
                context.Cards.Add(card);
            }

            foreach (var card in spanishCards)
            {
                card.DeckId = 5;
                card.AppUserId = demoUser.Id;
                context.Cards.Add(card);
            }

            await context.SaveChangesAsync();
        }
    }
}
