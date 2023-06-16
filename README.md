### 4º Proyecto GeekHubs Academy: 
# Backend Clinica Dental con base de datos.
<details>
  <summary>Contenido 📝</summary>
  <ol>
    <li><a href="#finalidad">Objetivo</a></li>
    <li><a href="#acerca-de">Acerca de</a></li>
    <li><a href="#diagrama-er">Diagrama Entidad Relación</a></li>
    <li><a href="#tecnologías-utilizadas">Tecnologías utilizadas</a></li>
    <li><a href="#instalación-en-local">Instalación en local</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#agradecimientos">Agradecimientos</a></li>
    <li><a href="#repositorio">Contacto</a></li>
    <li><a href="#licencia">Licencia</a></li>
  </ol>
</details>

## Finalidad
Este proyecto requería una API funcional conectada a una base de datos en la que poder hacer consultas como ver, crear, modificar y eliminar usuarios y citas.

## Acerca de
He desarroyado esta API para el 4º proyecto del **Bootcamp de Full Stack Developer de Geekshubs Academy**. Se basa en un backend de una app de una clínica dental. Se usa postman para hacer las consultas y es totalmente funcional.
## Diagrama Entidad Relación
![diagramaFlujo](./img/diagramaTablas.png)

## Tecnologías utilizadas
<img src="https://camo.githubusercontent.com/8286a45a106e1a3c07489f83a38159981d888518a740b59c807ffc1b7b1e2f7b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f657870726573732e6a732d2532333430346435392e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d65787072657373266c6f676f436f6c6f723d253233363144414642" data-canonical-src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&amp;logo=express&amp;logoColor=%2361DAFB" style="max-width: 100%;"> <img src="https://camo.githubusercontent.com/a101467fe68ef07bba498b3e4a62a62e861ef0fe93302a1076b01ae7893af544/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6f64652e6a732d3032364530303f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/node.js-026E00?style=for-the-badge&amp;logo=node.js&amp;logoColor=white" style="max-width: 100%;"> <img src="https://camo.githubusercontent.com/aeddc848275a1ffce386dc81c04541654ca07b2c43bbb8ad251085c962672aea/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d2532333332333333302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145" alt="JavaScript" data-canonical-src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&amp;logo=javascript&amp;logoColor=%23F7DF1E" style="max-width: 100%;"> <img src="https://user-images.githubusercontent.com/121863208/227808612-8d3f0fee-99d9-45d8-8274-6584c9ac0b38.svg" style="max-width: 100%;"> <img src="https://user-images.githubusercontent.com/121863208/227808620-cd6e5d5c-dd63-4a9d-b19d-0983807cae95.svg" style="max-width: 100%;"> <img src="https://camo.githubusercontent.com/b184cf7adbab9f5464e80c0f5dd32c85393f6248499a57d743e619f4214391c4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f646f636b65722d3234393645443f7374796c653d666f722d7468652d6261646765266c6f676f3d646f636b6572266c6f676f436f6c6f723d7768697465" alt="DOCKER" data-canonical-src="https://img.shields.io/badge/docker-2496ED?style=for-the-badge&amp;logo=docker&amp;logoColor=white" style="max-width: 100%;"> <img src="https://camo.githubusercontent.com/902ef9f04d190cba77c41b8dc217260698573f992a2d46bf37e75161912caadd/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6d7973716c2d3345364539333f7374796c653d666f722d7468652d6261646765266c6f676f3d6d7973716c266c6f676f436f6c6f723d7768697465" alt="MYSQL" data-canonical-src="https://img.shields.io/badge/mysql-3E6E93?style=for-the-badge&amp;logo=mysql&amp;logoColor=white" style="max-width: 100%;"> <img src="https://camo.githubusercontent.com/c0303b8bf28065067be013ecbfa1447392b6d328a38362de9beb6d14f810544f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f73657175656c697a652d3343373643333f7374796c653d666f722d7468652d6261646765266c6f676f3d73657175656c697a65266c6f676f436f6c6f723d7768697465" alt="SEQUELIZE" data-canonical-src="https://img.shields.io/badge/sequelize-3C76C3?style=for-the-badge&amp;logo=sequelize&amp;logoColor=white" style="max-width: 100%;"> <img src="https://camo.githubusercontent.com/3f0e26b0951bab845a1bb9a7198ecca0da272e462921b6edd85879f3673b6927/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f506f73746d616e2d4646364333373f7374796c653d666f722d7468652d6261646765266c6f676f3d706f73746d616e266c6f676f436f6c6f723d7768697465" alt="Postman" data-canonical-src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&amp;logo=postman&amp;logoColor=white" style="max-width: 100%;"> <img src="https://camo.githubusercontent.com/4590c0af4aeb1b75233885f86e80c1da8cb2afd401173a40e41370f5cad5db20/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a57542d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f3d4a534f4e253230776562253230746f6b656e73" alt="JWT" data-canonical-src="https://img.shields.io/badge/JWT-black?style=for-the-badge&amp;logo=JSON%20web%20tokens" style="max-width: 100%;">

## Instalación en local
1. Clonar el repositorio
2. ` $ npm install `
3. Conectamos nuestro repositorio con la base de datos
4. Ejecutamos las migraciones
` $ sequelize db:migrate `
5. Ejecutamos los seeders
` $ sequelize db:seed:all `
6. Levantamos el servidor de express
` $ npm run dev `

## <summary>Endpoints</summary>

<details>
<summary>Endpoints</summary>

- **auth**
    - **/register**
    ![registerSintaxis](./img/sintaxisRegistroUsuario.png)
    ![register](./img/usuarioCreado.png)


    - **/login**
    ![loginSintaxis](./img/sintaxisLoginUsuario.png)
    ![login](./img/loginUsuario.png)

    **Token**
    ![generateToken](./img/token.png)
    Copias el token y lo pegas aqui: 
    ![addToken](./img/a%C3%B1adirToken.png)

    **/getProfile**
    Una vez introducido el token de ese usuario:
    ![getProfileSintaxis](./img/sintaxisBuscarUsuario.png)
    ![getProfile](./img/busquedaUsuario.png)

    **/getAllProfiles**
    Debes logearte como admin previamente:
    ![getAllProfilesSintaxis](./img/sintaxisGetAllUsers.png)
    ![getAllProfiles](./img/allUsers.png)

    **/updateProfile**
    ![updateProfileSintaxis](./img/updateProfile.png)

    **/createAppointmet**
    ![createAppointments](./img/crearCita.png)

    **/getAllAppointments**
    Todas las citas de un usuario:
    ![getAllAppointments](./img/allAppointments.png)

    **/updateAppointment**
    Has de poner el id de la cita en la ruta:
    ![updateAppointment](./img/updateAppointment.png)

    **/deleteAppointments**
    ![deleteAppointments](./img/deleteAppointment.png)

    **/getAllAppointmentsByDoctor**
    Debes logearte como Doctor previamente:
    ![getAllAppointmentsByDoctor](./img/getAllDoctorAppointments.png)

            
</details>

## Agradecimientos
**Agradezco a mis profesores, sobre todo a DANI el tiempo dedicado a mis dudas y problemas que han ido surgiendo.**


**También agradezco la ayuda recibida por todos mis compañeros, sobre todo a Marta, Edu, Jesus, Alex y Carlos por su gran apoyo en momentos difíciles del proyecto, son los que mas me han apoyado. Muchas gracias.**

## Repositorio
https://github.com/xIMet3/baseDatosDentista

## Licencia
Este proyecto se ha realizado bajo la **licencia MIT**.