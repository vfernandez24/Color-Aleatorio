//! Variables y elementos del DOM

const colores = {
    1: {
        1: {
            1: '#FFD700',          // Hexadecimal
            2: 'rgb(255, 215, 0)', // RGB
            3: 'hsl(51, 100%, 50%)', // HSL
            4: 'hwb(51 0% 0%)'    // HWB
        },
        2: 'DORADO'
    },
    2: {
        1: {
            1: '#DAA520',
            2: 'rgb(218, 165, 32)',
            3: 'hsl(43, 74%, 49%)',
            4: 'hwb(43 0% 15%)'
        },
        2: 'ORO VIEJO'
    },
    3: {
        1: {
            1: '#8B0000',
            2: 'rgb(139, 0, 0)',
            3: 'hsl(0, 100%, 27%)',
            4: 'hwb(0 0% 45%)'
        },
        2: 'ROJO OSCURO'
    },
    4: {
        1: {
            1: '#FF6347',
            2: 'rgb(255, 99, 71)',
            3: 'hsl(9, 100%, 64%)',
            4: 'hwb(9 28% 0%)'
        },
        2: 'TOMATE'
    },
    5: {
        1: {
            1: '#20B2AA',
            2: 'rgb(32, 178, 170)',
            3: 'hsl(177, 70%, 41%)',
            4: 'hwb(177 12% 30%)'
        },
        2: 'VERDE AGUAMARINA'
    },
    6: {
        1: {
            1: '#4682B4',
            2: 'rgb(70, 130, 180)',
            3: 'hsl(207, 44%, 49%)',
            4: 'hwb(207 27% 29%)'
        },
        2: 'AZUL ACERO'
    },
    7: {
        1: {
            1: '#6A5ACD',
            2: 'rgb(106, 90, 205)',
            3: 'hsl(248, 53%, 58%)',
            4: 'hwb(248 35% 20%)'
        },
        2: 'AZUL PIZARRA'
    },
    8: {
        1: {
            1: '#FF4500',
            2: 'rgb(255, 69, 0)',
            3: 'hsl(16, 100%, 50%)',
            4: 'hwb(16 0% 0%)'
        },
        2: 'NARANJA ROJIZO'
    },
    9: {
        1: {
            1: '#B22222',
            2: 'rgb(178, 34, 34)',
            3: 'hsl(0, 68%, 42%)',
            4: 'hwb(0 13% 30%)'
        },
        2: 'ROJO FUEGO'
    },
    10: {
        1: {
            1: '#00CED1',
            2: 'rgb(0, 206, 209)',
            3: 'hsl(181, 100%, 41%)',
            4: 'hwb(181 0% 18%)'
        },
        2: 'TURQUESA OSCURO'
    },
    11: {
        1: {
            1: '#F4A460',
            2: 'rgb(244, 164, 96)',
            3: 'hsl(28, 87%, 67%)',
            4: 'hwb(28 38% 4%)'
        },
        2: 'MARRÓN ARENA'
    },
    12: {
        1: {
            1: '#008080',
            2: 'rgb(0, 128, 128)',
            3: 'hsl(180, 100%, 25%)',
            4: 'hwb(180 0% 50%)'
        },
        2: 'VERDE AZULADO'
    },
    13: {
        1: {
            1: '#556B2F',
            2: 'rgb(85, 107, 47)',
            3: 'hsl(82, 39%, 30%)',
            4: 'hwb(82 18% 58%)'
        },
        2: 'VERDE OLIVA OSCURO'
    },
    14: {
        1: {
            1: '#9932CC',
            2: 'rgb(153, 50, 204)',
            3: 'hsl(280, 61%, 50%)',
            4: 'hwb(280 20% 20%)'
        },
        2: 'VIOLETA OSCURO'
    },
    15: {
        1: {
            1: '#FFDAB9',
            2: 'rgb(255, 218, 185)',
            3: 'hsl(28, 100%, 86%)',
            4: 'hwb(28 72% 0%)'
        },
        2: 'DURAZNO'
    },
    16: {
        1: {
            1: '#191970',
            2: 'rgb(25, 25, 112)',
            3: 'hsl(240, 64%, 27%)',
            4: 'hwb(240 10% 56%)'
        },
        2: 'AZUL MEDIANOCHE'
    },
    17: {
        1: {
            1: '#2E8B57',
            2: 'rgb(46, 139, 87)',
            3: 'hsl(147, 50%, 36%)',
            4: 'hwb(147 18% 45%)'
        },
        2: 'VERDE MARINO'
    },
    18: {
        1: {
            1: '#FF8C00',
            2: 'rgb(255, 140, 0)',
            3: 'hsl(33, 100%, 50%)',
            4: 'hwb(33 0% 0%)'
        },
        2: 'NARANJA OSCURO'
    },
    19: {
        1: {
            1: '#00FA9A',
            2: 'rgb(0, 250, 154)',
            3: 'hsl(150, 100%, 49%)',
            4: 'hwb(150 0% 2%)'
        },
        2: 'VERDE PRIMAVERA'
    },
    20: {
        1: {
            1: '#A52A2A',
            2: 'rgb(165, 42, 42)',
            3: 'hsl(0, 59%, 41%)',
            4: 'hwb(0 16% 35%)'
        },
        2: 'MARRÓN'
    },
    21: {
        1: {
            1: '#40E0D0',
            2: 'rgb(64, 224, 208)',
            3: 'hsl(174, 72%, 56%)',
            4: 'hwb(174 25% 12%)'
        },
        2: 'TURQUESA'
    },
    22: {
        1: {
            1: '#CD5C5C',
            2: 'rgb(205, 92, 92)',
            3: 'hsl(0, 53%, 58%)',
            4: 'hwb(0 36% 20%)'
        },
        2: 'ROJO INDIO'
    },
    23: {
        1: {
            1: '#1E90FF',
            2: 'rgb(30, 144, 255)',
            3: 'hsl(210, 100%, 56%)',
            4: 'hwb(210 12% 0%)'
        },
        2: 'AZUL DODGER'
    },
    24: {
        1: {
            1: '#FFB6C1',
            2: 'rgb(255, 182, 193)',
            3: 'hsl(351, 100%, 86%)',
            4: 'hwb(351 71% 0%)'
        },
        2: 'ROSA CLARO'
    },
    25: {
        1: {
            1: '#708090',
            2: 'rgb(112, 128, 144)',
            3: 'hsl(210, 13%, 50%)',
            4: 'hwb(210 44% 44%)'
        },
        2: 'GRIS PIZARRA'
    },
    26: {
        1: {
            1: '#8FBC8F',
            2: 'rgb(143, 188, 143)',
            3: 'hsl(120, 25%, 65%)',
            4: 'hwb(120 56% 26%)'
        },
        2: 'VERDE GRISÁCEO'
    },
    27: {
        1: {
            1: '#FFA07A',
            2: 'rgb(255, 160, 122)',
            3: 'hsl(17, 100%, 74%)',
            4: 'hwb(17 48% 0%)'
        },
        2: 'SALMÓN CLARO'
    },
    28: {
        1: {
            1: '#D2691E',
            2: 'rgb(210, 105, 30)',
            3: 'hsl(25, 75%, 47%)',
            4: 'hwb(25 12% 18%)'
        },
        2: 'CHOCOLATE'
    },
    29: {
        1: {
            1: '#4B0082',
            2: 'rgb(75, 0, 130)',
            3: 'hsl(275, 100%, 25%)',
            4: 'hwb(275 0% 49%)'
        },
        2: 'ÍNDIGO'
    },
    30: {
        1: {
            1: '#FA8072',
            2: 'rgb(250, 128, 114)',
            3: 'hsl(6, 93%, 71%)',
            4: 'hwb(6 45% 2%)'
        },
        2: 'SALMÓN'
    }    
}

const max = 30,
min = 1;

const background = document.getElementById('background'),
color = document.getElementById('color'),
colorInfo = {
    1: document.getElementById('li1'),
    2: document.getElementById('li2'),
    3: document.getElementById('li3'),
    4: document.getElementById('li4')
},
button = document.getElementById('button'),
name_h1 = document.getElementById('color-name');

let randomNum = 0,
colorNum = 0,
colorNumNum = 0,
colorName = 'Dorado',
colorHexa = '#FFD900',
colorRGB = 'rgb(255, 217, 0)',
colorHSL = 'hsl(51, 100%, 50%)',
colorHWB = 'hwb(51 0% 0%)'

//! Funcionamiento

function change() {
    console.log('change')

    //? SubVariables
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min; //Numero random
    console.log(randomNum) //Lo pongo para señaliar

    colorNum = colores[randomNum] //Pongo el objeto del color ordenado
    console.log(colorNum)

    colorNumNum = colorNum[1] //Selecciono la propiedad color (1)

    colorHexa = colorNumNum[1] //Selecciono el color hexadecimal
    colorRGB = colorNumNum[2] //Selecciono el color hexadecimal
    colorHSL = colorNumNum[3] //Selecciono el color hexadecimal
    colorHWB = colorNumNum[4] //Selecciono el color hexadecima

    colorNumNum = colorNum[2] //Selecciono la propiedad nombre (2)

    colorName = colorNumNum //Selecciono el nombre del color

    //? Cambio de estilos y textcontent's
    background.style.backgroundColor = colorHexa;
    color.style.backgroundColor = colorHexa
    button.style.backgroundColor = colorHexa
    button.style.boxShadow = '0px 0px 15px '+colorHexa 

    name_h1.textContent = colorName
    colorInfo[1].textContent = colorHexa
    colorInfo[2].textContent = colorRGB
    colorInfo[3].textContent = colorHSL
    colorInfo[4].textContent = colorHWB
}

//? Color inicial aleatorio por defecto
change();