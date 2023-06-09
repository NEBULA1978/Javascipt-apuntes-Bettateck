#!/bin/bash

while :; do
    #Menu
    clear
    echo -e "\e[1;32m"
    echo " MENU SCRIPT V.1 "
    echo ""
    echo "1. Mostrar directorio"
    echo "2. Mostrar calendario"
    echo "3. Mostrar dato"
    echo "5. Dentro de bloque0 hola mundo ejecutamos script js"
    echo "6. Dentro de bloque1 hola mundo ejecutamos 01variables.js"
    echo "7. Dentro de bloque1 hola mundo ejecutamos destructuring.js"
    echo "4. Salir"
    echo ""
    #Escoger menu
    echo -n "Escoger opcion: "
    read opcion
    #Seleccion de menu
    case $opcion in
    1)
        echo "Mostrando directorio"
        ls
        read foo
        ;;
    2)
        echo "Mostrando calendario"
        cal
        read foo
        ;;
    3)
        echo "Mostrando datos"
        date
        read foo
        ;;
    5)
        echo "Dentro de bloque0 hola mundo ejecutamos script js"
        cd bloque0
        node hello-world.js
        read foo
        ;;
    6)
        echo "Dentro de bloque1 hola mundo ejecutamos 01variables.js"
        cd bloque1
        node 01variables.js
        read foo
        ;;
    7)
        echo "Dentro de bloque1 hola mundo ejecutamos destructuring.js"
        cd bloque1
        node destructuring.js
        read foo
        ;;
    4) exit 0 ;;
    #Alerta
    *)
        echo "Opcion invalida..."
        sleep 1
        ;;
    esac
done
