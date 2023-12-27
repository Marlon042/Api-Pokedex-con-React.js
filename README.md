Poke API / Pokedex
![image](https://github.com/Marlon042/Api-Pokedex-con-React.js/assets/127366345/fe4378dc-c928-4cb0-8f88-893188091c92)


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Pasos para crear la aplicacion:

Crear un nuevo proyecto en React utilizando create-react-app y crear una estructura de carpetas básica en la que puedas trabajar.

Usar javascript ,eslint, el directorio src, sin el directorio experimental "app"
crear los 3 componentes dentro de la carpeta "components"

Crear un componente llamado PokemonList.js que sea el encargado de mostrar la lista de los primeros 100 Pokémon obtenidos a través del API. Para esto, necesitarás utilizar el hook useEffect para hacer una llamada a la API y el hook useState para almacenar la lista de los Pokémon.

Crear un componente llamado PokemonDetail.js que muestre los detalles de un Pokémon seleccionado por el usuario. Para esto, necesitarás hacer una nueva llamada a la API utilizando el ID del Pokémon seleccionado y utilizar el hook useState para almacenar los detalles del Pokémon.

Crear un componente de orden superior (HOC) llamado withDataFetching.js que reciba una URL como parámetro y devuelva un nuevo componente que se encargue de hacer la llamada a la API y manejar los estados de carga y error. Este componente se puede reutilizar en PokemonList.js y PokemonDetail.js.

Crear un componente llamado SearchBar.js que permita al usuario buscar un Pokémon por su nombre o número. Para esto, necesitarás utilizar el hook useRef para obtener el valor del input y el hook useState para almacenar el resultado de la búsqueda.
Nota: **Esta parte ya está implementada dentro de PokemonList.jsx** sin haber creado el componente SearchBar por aparte.

Agregar una función de búsqueda en PokemonList.js que utilice el resultado de la búsqueda del componente SearchBar.js para agregar el nuevo Pokémon a la lista de los primeros 100.
Implementar SSR (Server Side Rendering) en PokemonList.js y PokemonDetail.js para mejorar la carga inicial de la aplicación. **Falta implementar esta parte**

DETALLES DE COMO FUNCIONA LA APP SEGÚN LOS CONCEPTOS DADOS:

qué hace cada uno de los componentes y cómo interactúan entre sí.

"useRef":
"useRef" es un hook de React que permite crear una referencia mutable que puede ser actualizada sin necesidad de volver a renderizar el componente. En este código, "useRef" se utiliza para obtener una referencia al input de búsqueda de la lista de Pokémon. Después, se utiliza en el useEffect para darle el foco automáticamente.

"DataFetching":
"DataFetching" es un patrón común en React para manejar la obtención de datos de una API. Este componente HOC (High Order Component) se encarga de hacer la llamada a la API de Pokémon y gestionar el estado de los datos (loading, error, y data) a través de los hooks de React useState y useEffect. Luego, "DataFetching" pasa los datos a su componente hijo como props.

"PokemonDetail":
"PokemonDetail" es un componente que muestra los detalles de un solo Pokémon, como su nombre, imagen y tipo. Se utiliza para renderizar un único elemento en la lista de Pokémon.

"PokemonList":
"PokemonList" es un componente que muestra una lista de Pokémon y un campo de búsqueda. Utiliza el patrón "DataFetching" para obtener los datos de la API de Pokémon. Después, utiliza los hooks de useState y useEffect para gestionar el estado de los datos de los Pokémon y el estado de búsqueda. Finalmente, renderiza un conjunto de componentes "PokemonDetail" para cada Pokémon que coincida con la búsqueda.

En resumen, los componentes "useRef", "DataFetching" y "PokemonDetail" se utilizan para crear una lista de Pokémon con la capacidad de buscar y ver detalles de cada Pokémon individual. El componente "PokemonList" utiliza el patrón "DataFetching" para obtener los datos de la API de Pokémon y renderiza los componentes "PokemonDetail" para mostrar los detalles de cada Pokémon en la lista.
