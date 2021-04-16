export const escapeRegExp = string => {
  return string
    .trimLeft()
    .trimRight()
    .replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

export const paramMaker = (fieldName, fieldValues) => {
  let concat = '';

  fieldValues.forEach((e, i) => {
    if (i !== 0) {
      concat += '&';
    }
    concat += fieldName + '[]=' + escapeRegExp(e);
  });

  return concat;
};

export const hasUppercaseLetter = text => !!text.match(/[A-ZÁÉÍÓÚÀÈÌÒÙÃÕÂÊÎÔÛÑÄËÏÖÜÇ]/g);

export const hasSymbol = text => !!text.match(/[_@!#\\$\s%^~;:.,@|+&*?\][´`=\-()ªº§¬"']/g);

export const isEmpty = text => text.replace(/\s/g, '').length === 0;

export const isFullName = text =>
  !!text.match(/[a-záéíóúàèìòùãõâêîôûñäëïöüç]+\s[a-záéíóúàèìòùãõâêîôûñäëïöüç\s]+/gi);

export const isEmail = text =>
  !!text.match(
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/gi
  );
