export const stack = [
    {
        type: 'Front',
        list: [
            {
                name: 'JavaScript',
                icon: require('../utils/icons/javascript-original.png').default,
            },
            {
                name: 'HTML5',
                icon: require('../utils/icons/html-original.png').default,
            },
            {
                name: 'CSS3',
                icon: require('../utils/icons/css-original.png').default,
            },
            {
                name: 'React',
                icon: require('../utils/icons/react-original.png').default,
            },
            {
                name: 'Redux',
                icon: require('../utils/icons/redux-original.png').default,
            },
            {
                name: 'TypeScript',
                icon: require('../utils/icons/typescript-original.png').default,
            },
        ]
    },
    {
        type: 'Back',
        list: [
            {
                name: 'NodeJs',
                icon: require('../utils/icons/nodejs-original.png').default,
            },
            {
                name: 'PostgreSQL',
                icon: require('../utils/icons/postgresql-original.png').default,
            },
            /* {
                name: 'ExpressJs',
                icon: require('../utils/icons/expressjs-original.png').default,
            }, */
            {
                name: 'Sequelize',
                icon: require('../utils/icons/sequelize-original.png').default,
            },
            {
                name: 'Postman',
                icon: require('../utils/icons/postman-original.png').default,
            },
            {
                name: 'Swagger',
                icon: require('../utils/icons/swagger-original.png').default,
            },
        ]
    },
]

export const imageStack = [
    {
        icon: require('../utils/icons/javascript-original.png').default,
        position: 0,
        name: 'javascript',
    },
    {
        icon: require('../utils/icons/html-original.png').default,
        position: 1,
        name: 'html',
    },
    {
        icon: require('../utils/icons/css-original.png').default,
        position: 2,
        name: 'css',
    },
    {
        icon: require('../utils/icons/react-original.png').default,
        position: 3,
        name: 'react',
    },
    {
        icon: require('../utils/icons/redux-original.png').default,
        position: 4,
        name: 'redux',
    },
    {
        icon: require('../utils/icons/typescript-original.png').default,
        position: 5,
        name: 'typescript',
    },
    {
        icon: require('../utils/icons/nodejs-original.png').default,
        position: 6,
        name: 'node',
    },
    {
        icon: require('../utils/icons/postgresql-original.png').default,
        position: 7,
        name: 'postgresql',
    },
    {
        icon: require('../utils/icons/socialIcons/github-logos1.png').default,
        position: 8,
        name: 'github',
    },
    {
        icon: require('../utils/icons/sequelize-original.png').default,
        position: 9,
        name: 'sequelize',
    },
    {
        icon: require('../utils/icons/postman-original.png').default,
        position: 10,
        name: 'postman',
    },
    {
        icon: require('../utils/icons/swagger-original.png').default,
        position: 11,
        name: 'swagger',
    },
]

export const mixCards = (cards) => {
    let cardOnGame = [];

    for (let i = 0; i < cards.length; i++) {
        cardOnGame.push({icon: cards[i].icon, position: cards[i].position, name: cards[i].name})
        cardOnGame.unshift({icon: cards[i].icon, position: cards[i].position, name: cards[i].name + 'copy'})
    }
    cardOnGame.forEach(card => {
        card.position = Math.random();
    })
    return cardOnGame.sort((a, b) => a.position - b.position);
}

export const questions = [
    {
        question: '??Cu??nto es 2 x 15 x 3 + 0 x 2?',
        options: ['180', '51', '0', '90'],
        correct: '90'
    },
    {
        question: '??Qui??n es John Frusciante?',
        options: ['Actor', 'M??sico', 'Futbolista', 'Pintor'],
        correct: 'M??sico'
    },
    {
        question: '??Qu?? es Audioslave ?',
        options: ['Banda de Rock', 'Marca de amplificadores', 'Marca de radios', 'Canal musical'],
        correct: 'Banda de Rock'
    },
    {
        question: '??Cu??l es la capital de Checoslovaquia?',
        options: ['Viedma', 'Se??l', 'Kiev', 'Praga'],
        correct: 'Praga'
    },
    {
        question: '??Cu??l es mi velocidad si hago 1km en aproximadamente 33 segundos?',
        options: ['100km/h', '105km/h', '110km/h', '95km/h'],
        correct: '110km/h'
    },
    {
        question: 'Seg??n Spinetta, la risa no va a surgir a menos que...',
        options: ['te subas al ??rbol', 'te pongas zapatos', 'descanses un rato', 'te quieras a diario'],
        correct: 'te subas al ??rbol'
    },
    {
        question: '??Cu??l de estos temas NO es de Pink Floyd?',
        options: ['Dogs', 'Another brick in the wall', 'Marooned', 'Money for nothing'],
        correct: 'Money for nothing'
    },
    {
        question: '??Qu?? es un Yunque?',
        options: ['Un animal patag??nico', 'Un instrumento musical', 'Una herramienta de herrer??a', 'Un ??rbol'],
        correct: 'Una herramienta de herrer??a'
    },
    {
        question: '??Cu??ntas veces puede doblarse una hoja por la mitad?',
        options: ['5 veces', '7 veces', 'seg??n el tama??o del papel', 'depende la fuerza del sujeto'],
        correct: '7 veces'
    },
    {
        question: '??Adem??s de una serpiente, qu?? es Pit??n?',
        options: ['Una parte de la montura de un caballo', 'Un planeta', 'La poda corta de un sarmiento en la vid', 'La raza de un perro'],
        correct: 'La poda corta de un sarmiento en la vid'
    }
]