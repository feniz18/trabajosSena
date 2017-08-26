using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace lista
{
    class Program
    {

        public struct Persona
        {

            public string nombre;
            public string apellido;
            public string fecha;



        }
        static void Main(string[] args)
        {

            

            List<Persona> listaPersona = new List<Persona>();

            Persona estudiante = new Persona();

            for (int i = 1; i < 11; i++)
            {

                DateTime fecha = DateTime.Now;
                Console.WriteLine("-----------------------------------------------------------------");

                Console.WriteLine("Por favor digite el nombre del estudiante " + i.ToString());

                estudiante.nombre = Console.ReadLine();

                Console.WriteLine("Por favor digite el apellido del estudiante " + i.ToString());

                estudiante.apellido = Console.ReadLine();

                estudiante.fecha = fecha.ToString();

                listaPersona.Add(estudiante);

                Console.WriteLine("------------------------------------------------------------------");
                Console.WriteLine();
            }


            Console.WriteLine();
            Console.WriteLine("--------------------------------------------------");
            Console.WriteLine("La lista de estudiantes es:");
            Console.WriteLine("--------------------------------------------------");


            foreach (var item in listaPersona)

            {

             
                Console.WriteLine();
                Console.WriteLine("--------------------------------------------------");
                Console.WriteLine("el nombre del estudiante");
                Console.WriteLine("--------------------------------------------------");
                Console.WriteLine("{0} {1}",item.nombre,item.apellido);
                Console.WriteLine("Fecha de almacendado fue");
                Console.WriteLine("{0}",item.fecha);
                Console.WriteLine("--------------------------------------------------");
                Console.WriteLine();

            }
            

            Console.ReadKey();

        }
    }
}
