using Infrastructure.Extensions;
using Infrastructure.Interfaces;
using Microsoft.AspNetCore.Identity;

public abstract class Manager<T> : IManager<T> where T : class
{
    private readonly IRepository<T> _repository;

    protected Manager(IRepository<T> repository)
    {
        _repository = repository;
    }

    public virtual IQueryable<T> Items => _repository.DbSet;

    public virtual async Task<T?> FindByIdAsync(object id)
    {
        return await _repository.FindByIdAsync(id);
    }

    public virtual async Task<IdentityResult> CreateAsync(T obj)
    {
        try
        {
            await _repository.AddAsync(obj);

            return IdentityResult.Success;
        }
        catch (Exception ex)
        {
            return IdentityResult.Failed(ex.GetErrors());
        }
    }

    public virtual async Task<IdentityResult> UpdateAsync(T obj)
    {
        try
        {
            await _repository.UpdateAsync(obj);

            return IdentityResult.Success;
        }
        catch (Exception ex)
        {
            return IdentityResult.Failed(ex.GetErrors());
        }
    }

    public virtual async Task<IdentityResult> DeleteAsync(T obj)
    {
        try
        {
            await _repository.DeleteAsync(obj);

            return IdentityResult.Success;
        }
        catch (Exception ex)
        {
            return IdentityResult.Failed(ex.GetErrors());
        }
    }    
}
