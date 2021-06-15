const setInsertPlayerValues = player => `
  "${player.connection_id}",
  "${player.name}",
  0`;

const playerTablePattern = () => `
  CONNECTION_ID  TEXT   NOT NULL,
  NAME           TEXT   NOT NULL,
  SCORE          INT    NOT NULL`;

const wordsTablePattern = () => `
  WORD           TEXT      NOT NULL,
  SELECTED       TEXT      NOT NULL`;

const wordsList = [
  'BANANA',
  'LARANJA',
  'MAÇA',
  'TANGERINE',
  'KIWI',
  'MORANGO',
  'UVA',
  'PESSEGO',
  'AMEIXA',
  'TOMATE',
  'ABACAXI',
  'FRAMBOESA',
  'CEREJA',
  'MELANCIA',
  'JABUTICABA',
];

module.exports = {
  wordsList,
  setInsertPlayerValues,
  playerTablePattern,
  wordsTablePattern,
};
