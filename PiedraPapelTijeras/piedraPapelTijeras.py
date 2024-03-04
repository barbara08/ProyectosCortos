import random

opciones = ["piedra", "papel", "tijera"]
print(opciones)

# Crer dos jugadores (usuario y computadora)
# Pedir al usuario opción (piedra, papel o tijeras)
usuario = input("Introduce su nombre: ")
jugador = input(usuario + " Elige: piedra, papel, tijera  ")

# Seleccionar aleatoriamente una opción (piedra, papel o tijeras)
# para la computadora
computadora = random.choice(opciones)

# Imprimir opción de cada jugador (opcional)
print(jugador)
print(computadora)

# Comparación de opciones entre los dos jugadores

# Esta opción tambié es válida, pero sería más óptimo con "if ... not in ..."
#if jugador != "piedra" and jugador != "papel" and jugador != "tijera":  
#   print( usuario + " No has introducido bien la opción")

if jugador not in opciones:
    print( usuario + " No has introducido bien la opción")

else:    

    if jugador == computadora:
        print("Empate")
    elif jugador == "piedra" and computadora == "tijera":
        print("jugador gana")
    elif jugador == "papel" and computadora == "piedra":
        print("jugador gana")
    elif jugador == "tijera" and computadora == "papel":
        print("jugador gana")
    else:
        print("computadora gana")

# Imprimir que jugador ha ganado y quien ha perdido

# Preguntar si desea jugar de nuevo





