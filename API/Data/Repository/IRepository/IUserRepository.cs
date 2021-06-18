using API.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Data.Repository.IRepository
{
    public interface IUserRepository : IGenericRepository<AppUser>
    {
        Task<AppUser> GetUserWithDecksAndCards(string id);
    }
}
