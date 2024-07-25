using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using LHPet.Models;

namespace LHPet.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {

        //clientes
        Cliente cliente1 = new Cliente(01, "Rafa", "123.123.122-33", "rafa@gmail.com", "Dina");
        Cliente cliente2 = new Cliente(02, "Carla", "234.234.233-44", "carla@hotmail.com", "Bolt");
        Cliente cliente3 = new Cliente(03, "Pedro", "345.345.344-55", "pedro@yahoo.com", "Luna");
        Cliente cliente4 = new Cliente(04, "Ana", "456.456.455-66", "ana@outlook.com", "Max");
        Cliente cliente5 = new Cliente(05, "João", "567.567.566-77", "joao@gmail.com", "Nina");
        Cliente cliente6 = new Cliente(06, "Mariana", "678.678.677-88", "mariana@uol.com.br", "Toby");


        List<Cliente> listaclientes = new List<Cliente>();
        listaclientes.Add(cliente1);
        listaclientes.Add(cliente2);
        listaclientes.Add(cliente3);
        listaclientes.Add(cliente4);
        listaclientes.Add(cliente5);
        listaclientes.Add(cliente6);

        ViewBag.listaclientes = listaclientes;

        //fornecedores
        Fornecedor fornecedor1 = new Fornecedor(01, "Mdias", "123.123/0001-33", "mdias@gmail.com");
        Fornecedor fornecedor2 = new Fornecedor(02, "Alimentos SA", "234.234/0002-44", "alimentos@outlook.com");
        Fornecedor fornecedor3 = new Fornecedor(03, "PetSupplies Ltda", "345.345/0003-55", "petsupplies@hotmail.com");
        Fornecedor fornecedor4 = new Fornecedor(04, "VetCare", "456.456/0004-66", "vetcare@yahoo.com");
        Fornecedor fornecedor5 = new Fornecedor(05, "Distribuidora XYZ", "567.567/0005-77", "distribuidora.xyz@gmail.com");
        Fornecedor fornecedor6 = new Fornecedor(06, "NutriPet", "678.678/0006-88", "nutripet@uol.com.br");

        List<Fornecedor> listafornecedores = new List<Fornecedor>();
        listafornecedores.Add(fornecedor1);
        listafornecedores.Add(fornecedor2);
        listafornecedores.Add(fornecedor3);
        listafornecedores.Add(fornecedor4);
        listafornecedores.Add(fornecedor5);
        listafornecedores.Add(fornecedor6);

        ViewBag.listafornecedores = listafornecedores;

        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
