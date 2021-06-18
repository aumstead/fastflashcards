using API.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Data.Repository.IRepository
{
    public interface IUnitOfWork : IDisposable
    {
        IGenericRepository<Deck> Decks { get; }
        IGenericRepository<Card> Cards { get; }
        IUserRepository Users { get; }
        Task<bool> Save();
    }
}
