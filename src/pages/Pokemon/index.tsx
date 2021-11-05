import React from 'react';
import { useParams } from 'react-router';

export const Pokemon = () => {
  const { id } = useParams<{ id: string }>();
  return <h1>Pokemon com id {id}</h1>;
};
