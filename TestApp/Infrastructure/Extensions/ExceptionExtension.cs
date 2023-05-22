using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Extensions;

public static class ExceptionExtension
{
    public static IdentityError[] GetErrors(this Exception ex)
    {
        if (ex.InnerException != null)
            return new IdentityError[] { new IdentityError { Description = ex.InnerException.Message, } };

        return new IdentityError[] { new IdentityError { Description = ex.Message, } };
    }
}
