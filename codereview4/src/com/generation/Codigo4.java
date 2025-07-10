package com.generation;

import java.util.Scanner; //* Se utiliza Scanner para leer datos desde la consola

public class Codigo4 {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in); //* Entrada de datos desde teclado

        System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
        String j1 = s.nextLine();

        System.out.print("Turno del jugador 2 (introduzca piedra, papel o tijeras): ");
        String j2 = s.nextLine();

        //* Se compara el contenido de las cadenas con el método equals
        if (j1.equals(j2)) {
            System.out.println("Empate");
        } else {
            int g = 2;

            //* Se emplea switch para evaluar la jugada del jugador 1
            switch (j1) {
                case "piedra":
                    if (j2.equals("tijeras")) {
                        g = 1;
                    }
                    break;

                case "papel":
                    if (j2.equals("piedra")) {
                        g = 1;
                    }
                    break;

                case "tijeras":
                    if (j2.equals("papel")) {
                        g = 1;
                    }
                    break;

                default:
                    System.out.println("Entrada no válida del jugador 1");
                    return;
            }

            System.out.println("Gana el jugador " + g);
        }

        s.close(); //* Se finaliza el uso del Scanner para liberar recursos
    }
}
