using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using Tunr.Models;
using Tunr.Utilities;

namespace Tunr.Controllers
{
    [Route("Token")]
    public class TokenController: Controller
    {
        private readonly TokenAuthOptions tokenAuthOptions;
        private readonly UserManager<Tunee> userManager;

        public TokenController(TokenAuthOptions tokenAuthOptions, UserManager<Tunee> userManager)
        {
            this.tokenAuthOptions = tokenAuthOptions;
            this.userManager = userManager;
        }

        public class AuthRequest
        {
            [JsonProperty("email")]
            public string Email { get; set; }

            [JsonProperty("password")]
            public string Password { get; set; }
        }

        public class AuthResponse
        {
            [JsonProperty("authenticated")]
            public bool Authenticated { get; set; }

            [JsonProperty("entityId")]
            public Guid EntityId { get; set; }

            [JsonProperty("token")]
            public string Token { get; set; }

            [JsonProperty("tokenExpires")]
            public DateTime? TokenExpires { get; set; }
        }

        /// <summary>
        /// Request a new token for a given username/password pair.
        /// </summary>
        /// <param name="req"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("")]
        public async Task<IActionResult> Post([FromBody] AuthRequest req)
        {
            var user = await userManager.FindByEmailAsync(req.Email);
            if (user != null)
            {
                var correctPassword = await userManager.CheckPasswordAsync(user, req.Password);
                if (correctPassword)
                {
                    DateTime? expires = DateTime.UtcNow.AddDays(1);
                    var claims = await userManager.GetClaimsAsync(user);
                    var identity = new ClaimsIdentity(claims);
                    var token = GetToken(identity, expires);
                    return Ok(new AuthResponse()
                    { 
                        Authenticated = true, 
                        EntityId = user.Id, 
                        Token = token, 
                        TokenExpires = expires 
                    });
                }
            }
            return Unauthorized();
        }

        /// <summary>
        /// GET request to verify that an email address is registered.
        /// TODO: Security risk?
        /// </summary>
        /// <returns>OK if registered - NotFound otherwise</returns>
        [HttpGet]
        [Route("CheckEmail/{email}")]
        [AllowAnonymous]
        public async Task<IActionResult> GetCheckEmailRegistered(string email)
        {
            var user = await userManager.FindByEmailAsync(email);
            if (user != null) {
                return Ok();
            }
            return NotFound();
        }

        private string GetToken(ClaimsIdentity identity, DateTime? expires)
        {
            var handler = new JwtSecurityTokenHandler();
            var securityToken = handler.CreateToken(new SecurityTokenDescriptor() {
                Issuer = tokenAuthOptions.Issuer,
                Audience = tokenAuthOptions.Audience,
                SigningCredentials = tokenAuthOptions.SigningCredentials,
                Subject = identity,
                Expires = expires
            });
            return handler.WriteToken(securityToken);
        }
    }
}