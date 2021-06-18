using API.Data.Repository.IRepository;
using API.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Data.Repository
{
    public class UserRepository : GenericRepository<AppUser>, IUserRepository
    {
        private readonly DataContext _context;

        public UserRepository(DataContext context) : base(context)
        {
            _context = context;
        }

        public async Task<AppUser> GetUserWithDecksAndCards(string id)
        {
            return await _context.AppUsers.Include(user => user.Decks).ThenInclude(deck => deck.Cards).SingleOrDefaultAsync(x => x.Id == id);
        }
    }
}
