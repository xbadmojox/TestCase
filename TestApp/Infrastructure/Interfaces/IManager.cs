using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Interfaces;

public interface IManager<T> where T : class
{
    IQueryable<T> Items { get; }

    Task<T?> FindByIdAsync(object id);
    Task<IdentityResult> CreateAsync(T item);
    Task<IdentityResult> UpdateAsync(T item);
    Task<IdentityResult> DeleteAsync(T item);    
}
