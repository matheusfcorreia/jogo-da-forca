export const documentFormater = document => {
  if (!document) return;
  const formatedDocument =
    document.length === 14
      ? `${document.slice(0, 2)}.${document.slice(2, 5)}.${document.slice(5, 8)}/${document.slice(
          8,
          12
        )}-${document.slice(12)}`
      : `${document.slice(0, 3)}.${document.slice(3, 6)}.${document.slice(6, 9)}-${document.slice(
          9
        )}`;

  return formatedDocument;
};

export const phoneNumberFormater = phoneNumber => {
  if (!phoneNumber) return;
  const formatedPhoneNumber = `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 3)}
  ${phoneNumber.slice(3, 7)}-${phoneNumber.slice(7)}`;

  return formatedPhoneNumber;
};