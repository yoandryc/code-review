/*
 * Este programa te pide un número por teclado y analiza sus dígitos.
 * Si tiene más cifras afortunadas (3, 7, 8 o 9) que no afortunadas,
 * te dice que el número es afortunado. Si no, dice que no lo es.
 */

import java.util.Scanner; // Se agregó esta línea para poder usar Scanner y leer datos del usuario

public class Codigo5 {
    public static void main(String[] args) { //Se agregó el método main (antes el código estaba fuera de un método)
        Scanner s = new Scanner(System.in); // Se corrigió Scanner() → ahora tiene "System.in" para funcionar correctamente

        System.out.print("Introduzca un número: "); //Se corrigió una comilla simple mal escrita en el mensaje
        String ni = s.nextLine();

        int c = Integer.parseInt(ni); //Antes intentaban guardar un String directamente en un int, ahora se hace conversión

        int temp = c; //Se creó una variable temporal para no modificar el valor original del número
        int afo = 0;
        int noAfo = 0;

        while (temp > 0) {
            int digito = temp % 10;

            if (digito == 3 || digito == 7 || digito == 8 || digito == 9) {
                afo++;
            } else {
                noAfo++;
            }

            temp /= 10;
        }

        if (afo > noAfo) {
            System.out.println("El " + c + " es un número afortunado."); // Se corrigió error de sintaxis, antes decía "prinln"
        } else {
            System.out.println("El " + c + " no es un número afortunado.");
        }

        s.close(); // Se agregó para cerrar el Scanner, buena práctica para liberar recursos
    }
}
