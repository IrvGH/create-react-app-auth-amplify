/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAlumnosOctank = /* GraphQL */ `
  query GetAlumnosOctank($id: ID!) {
    getAlumnosOctank(id: $id) {
      id
      Matricula
      Nombre
      Correo
      Semestre
      Carrera
      Materia
      Clase
      Description
      createdAt
      updatedAt
    }
  }
`;
export const listAlumnosOctanks = /* GraphQL */ `
  query ListAlumnosOctanks(
    $filter: ModelAlumnosOctankFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlumnosOctanks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Matricula
        Nombre
        Correo
        Semestre
        Carrera
        Materia
        Clase
        Description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
