var fs = require('fs');

let dropArea = [
    { id: 1, area: 'Downtown Dubai' },
    { id: 2, area: 'Palm Jumeirah' },
    { id: 3, area: 'Business Bay' },
    { id: 4, area: 'Dubai Marina' },
    { id: 5, area: 'Jebel Ali' },
    { id: 6, area: 'Al Barari' },
    { id: 7, area: 'Dubai Creek Harbour' },
    { id: 8, area: 'Emirates Hills' },
    { id: 9, area: 'Jumeirah Lake Towers' },
    { id: 10, area: 'Al Barsha' },
    { id: 11, area: 'Arabian Ranches' },
    { id: 12, area: 'Dubai Hills Estate' },
    { id: 13, area: 'Al Ain' },
    { id: 14, area: 'Al Jaddaf' },
    { id: 15, area: 'Abu Dhabi' },
    { id: 16, area: 'Al Furjan' },
    { id: 17, area: 'Al Sufouh' },
    { id: 18, area: 'Bur Dubai' },
    { id: 19, area: 'Deira' },
    { id: 20, area: 'Jumeirah Village Circle' },
    { id: 21, area: 'Ajman' },
    { id: 22, area: 'Al Baraha' },
    { id: 23, area: 'Al Karama' }
  ]
fs.writeFile('Object.txt', JSON.stringify(dropArea, null, 4), function (err) {
  if (err) throw err;
  console.log('Saved!');
});