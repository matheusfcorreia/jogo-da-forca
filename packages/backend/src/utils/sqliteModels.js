const setInsertLogsValues = log => `
  "${log.identification}",
  "${log.date}",
  "${log.description}"`;

const logsTablePattern = () => `
  IDENTIFICATION TEXT    NOT NULL,
  DATE           TEXT    NOT NULL,
  DESCRIPTION    TEXT    NOT NULL`;

module.exports = {
  setInsertLogsValues,
  logsTablePattern,
};
