// Метод stringify позволяет преобразовать наши данные в строку
let data = { key: 'value' };
JSON.stringify(data);
// результатом преобразования станет строка '{"key":"value"}'

// parse - используется для парсинга (чтения) JSON и преобразования его в JavaScript данные
let jsonData = '{"key":"value"}';
JSON.parse(jsonData);
// результатом чтения станет обычный объект {key: 'value}