let listaPracownikow = `{
  "pracownicy":[
      {"firstName": "Krystian", "lastName": "Dziopa"}, 
      {"firstName": "Anna", "lastName": "Szapiel"},
      {"firstName": "Piotr", "lastName": "Żmuda"}
  ]
}`;

console.log(listaPracownikow);

JSON.parse(listaPracownikow).pracownicy.forEach(function(element, index) {
  console.log('Pracownik o indeksie: ' + index + ', ma imie: ' + element.firstName + ', nazwisko: ' + element.lastName + '.');
});