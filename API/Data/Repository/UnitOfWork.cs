using API.Data.Repository.IRepository;
using API.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Data.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly DataContext _context;

        public UnitOfWork(DataContext context)
        {
            _context = context;
            Decks = new GenericRepository<Deck>(context);
            Cards = new GenericRepository<Card>(context);
            Users = new UserRepository(context);
        }

        public IGenericRepository<Deck> Decks { get; private set; }
        public IGenericRepository<Card> Cards { get; private set; }
        public IUserRepository Users { get; private set; }

        public void Dispose()
        {
            _context.Dispose();
        }

        public async Task<bool> Save()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}
