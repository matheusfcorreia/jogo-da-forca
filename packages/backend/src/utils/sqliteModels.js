const setInsertLogsValues = log => `
  "${log.name}",
  "${log.date}",
  "${log.description}"`;

const logsTablePattern = () => `
  NAME           TEXT    NOT NULL,
  DATE           TEXT    NOT NULL,
  DESCRIPTION    TEXT    NOT NULL`;

module.exports = {
  setInsertLogsValues,
  logsTablePattern,
};
