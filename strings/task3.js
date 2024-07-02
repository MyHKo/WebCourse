'use strict';

function truncate(string) {
    return string.length > 20 ? string.slice(0, 19) + '...' : string;
}


console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Всем привет!", 20))