/*
 * Este programa genera 20 números aleatorios entre 20 y 400.
 * Luego pregunta al usuario si quiere resaltar los múltiplos de 5 o los múltiplos de 7.
 * Imprime los números, y los que cumplen la condición los muestra entre corchetes.
 */

import java.util.Scanner; //Importamos Scanner para leer datos del usuario

public class Codigo6 {
    public static void main(String[] args) { //Se agregó el metodo main (era necesario para que el programa funcione)

        int[] n = new int[20]; //Se corrigió "int[20]" → ahora tiene "new" y el tipo correcto

        //Se corrigió el bucle "i+" → ahora es "i++"
        for (int i = 0; i < 20; i++) {
            n[i] = (int)(Math.random() * 381) + 20;
            System.out.print(n[i] + " "); //"System.print" corregido a "System.out.print"
        }

        System.out.println(); //Se agregó para que el salto de línea funcione correctamente

        // Se usó Scanner para leer la opción (System.console() no siempre funciona)
        Scanner sc = new Scanner(System.in);

        System.out.println("\n¿Qué números quiere resaltar?");
        System.out.print("(1 – los múltiplos de 5, 2 – los múltiplos de 7): ");
        int opcion = sc.nextInt(); //Reemplazamos "System.console().readLine()" por Scanner

        int multiplo = (opcion == 1) ? 5 : 7; //Se corrigió el operador ternario, estaba mal escrito

        // Se corrigió "foreach" → ahora es "for-each" válido en Java
        for (int e : n) {
            if (e % multiplo == 0) {
                System.out.print("[" + e + "] ");
            } else {
                System.out.print(e + " "); //Se corrigió "System.in.print" → era error, debía ser "System.out.print"
            }
        }

        sc.close(); //Cerramos el Scanner por buenas prácticas
    }
}
