// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const peopleApi = createApi({
  reducerPath: 'people',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  tagTypes: [],
  endpoints: (builder) => ({
    getPeople: builder.query({
      query: () => 'people',
    }),
  }),
})

export const { useGetPeopleQuery } = peopleApi

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import IPeople  from '../models/people';

// // Define a service using a base URL and expected endpoints
// export const pokemonApi = createApi({
//   reducerPath: 'pokemonApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
//   endpoints: (builder) => ({
//     getPokemonByName: builder.query({
//       query: (name) => `pokemon/${name}`,
//     }),
//   }),
// })

// // Export hooks for usage in functional components, which are
// // auto-generated based on the defined endpoints
// export const { useGetPokemonByNameQuery } = pokemonApi