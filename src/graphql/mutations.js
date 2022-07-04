/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAlumnosOctank = /* GraphQL */ `
  mutation CreateAlumnosOctank(
    $input: CreateAlumnosOctankInput!
    $condition: ModelAlumnosOctankConditionInput
  ) {
    createAlumnosOctank(input: $input, condition: $condition) {
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
export const updateAlumnosOctank = /* GraphQL */ `
  mutation UpdateAlumnosOctank(
    $input: UpdateAlumnosOctankInput!
    $condition: ModelAlumnosOctankConditionInput
  ) {
    updateAlumnosOctank(input: $input, condition: $condition) {
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
export const deleteAlumnosOctank = /* GraphQL */ `
  mutation DeleteAlumnosOctank(
    $input: DeleteAlumnosOctankInput!
    $condition: ModelAlumnosOctankConditionInput
  ) {
    deleteAlumnosOctank(input: $input, condition: $condition) {
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
