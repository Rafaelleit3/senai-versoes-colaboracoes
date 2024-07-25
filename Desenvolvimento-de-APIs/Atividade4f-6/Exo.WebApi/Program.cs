using Exo.WebApi.Contexts;
using Exo.WebApi.Repositories;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddScoped<ExoContext, ExoContext>();
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = "JwtBearer";
    options.DefaultChallengeScheme = "JwtBearer";
})

.AddJwtBearer("JwtBearer", Options =>
{
    Options.TokenValidationParameters = new TokenValidationParameters
    {
        //valida quem está solicitando.
        ValidateIssuer = true,
        //valida quem está recebendo
        ValidateAudience = true,
        //define se o tempo de expiração será validado.
        ValidateLifetime = true,
        // criptografia e validação da chave de autenticação
        IssuerSigningKey = new
        SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("exoapi-chave-autenticacao")),
        //valida tempo de expiração do token
        ClockSkew = TimeSpan.FromMinutes(30),
        //nome do issuer, da origem.
        ValidIssuer = "exoapi.webapi",
        //nome do audience, para o destino
        ValidAudience = "exoapi.webapi"
    };
});


//services
builder.Services.AddTransient<ProjetoRepository, ProjetoRepository>();
builder.Services.AddTransient<UsuarioRepository, UsuarioRepository>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseRouting();

// habilita a autenticação
app.UseAuthentication();

// habilita a autorização
app.UseAuthorization();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

app.Run();
