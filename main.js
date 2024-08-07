
        //DOM
        const users = [
            {
                id: 1,
                user_name: 'User1',
                description: 'lorem ipsum',
                age: '46',
                fav_music: {
                    bands: [
                        'Band 1', 'Band 2', 'Band 3', 'Band 4'
                    ]
                }
            },
            {
                id: 2,
                user_name: 'User LastName',
                description: 'Lorem lorem lorem',
                age: '23',
                fav_music: {
                    bands: [
                       'Band 1', 'Band 2', 'Band 3', 'Band 4'
                    ]
                }
            }
        ];


        //

        document.addEventListener('DOMContentLoaded', () => { // Se va asegurar que el código se ejecute cuanod el dominio este totalmente cargado
            const userContainer = document.getElementById('user-container');//para indicarnos en donde se insertarán las tarjetas
            createUserCards(users, userContainer);//se llama a la función
        });

        function createUserCards(users, container) {//para recibir una array de usuarios[] y un contenedor 
            users.forEach(user => { //para hacer la iteración en cada usuario del array
                const userCard = createUserCard(user);//se crea una tarjeta para el usuario actual
                container.appendChild(userCard);//ya con la tarjeta creada se agrega al contenedor 
            });
        }

        function createUserCard(user) {//se se resive un user y se devuelve un div que es la tarjeta del usuario
            const card = document.createElement('div');//el div para la tarjeta
           
            const userName = document.createElement('h2');// Se crea h2 para el nombre del usuario y establece su texto.
            userName.textContent = user.user_name;

            const description = document.createElement('p');// Se crea elemento p y lo mismo 
            description.textContent = user.description;

            const age = document.createElement('p');//se crea elemento p 
            age.textContent = `Age: ${user.age}`;

            const favMusic = document.createElement('p');//se crea un elemento p para el título de las bandas favoritas
            favMusic.textContent = 'Favorite Bands:';
            const bandsList = document.createElement('ul');// se crea una lista ul
            user.fav_music.bands.forEach(band => {//se itera por cada banda favorita del usuario 
                const bandItem = document.createElement('li');//li para acda banda 
                bandItem.textContent = band;
                bandsList.appendChild(bandItem);//aña cada li (banda) a la lista (li)
            });

            card.appendChild(userName);
            card.appendChild(description);
            card.appendChild(age);  //se añaden toda la información ingresada a las tarjetas del usuario 
            card.appendChild(favMusic);
            card.appendChild(bandsList);

            return card;//tarjeta lista!
        }


