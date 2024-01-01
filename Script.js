let xhr = new XMLHttpRequest();
// console.log(xhr);
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
  const data = JSON.parse(xhr.response);
  console.log(data);

  console.log(
    "-------------------------------------------Task 1-----------------------------------------------------"
  );

  //1.Filter Countries in Asia
  const asiaCountries = data
    .filter((country) => {
      return country.continents.includes("Asia");
    })
    .map((country) => {
      console.log(`${country.name.common} in ${country.continents}`);
    });

  console.log(
    "-------------------------------------------------Task 2-----------------------------------------------"
  );
  //2.Get all the countries with a population of less than 2 lakhs using Filter function

  const populationTracker = data
    .filter((country) => {
      return country.population < 200000;
    })
    .map((country) => {
      console.log(
        `${country.name.common}'s population is ${country.population}`
      );
    });

  console.log(
    "-------------------------------------------------Task 3-----------------------------------------------"
  );

  //3. Print the following details name, capital, flag, using forEach function

  const printCountries = data.forEach((country) => {
    console.log(
      `Country: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flag}`
    );
  });
  console.log(
    "-------------------------------------------------Task 4-----------------------------------------------"
  );

  //4.Print the total population of countries using reduce function
  const totalPopulation = data.reduce((acc, country) => {
    return acc + (country.population || 0);
  }, 0);

  console.log(`Total Population is ${totalPopulation}`);

  console.log(
    "-------------------------------------------------Task 5-----------------------------------------------"
  );

  //5.Print the country that uses US dollars as currency.

  const currencyUs = data
    .filter((country) => {
      const currencies = country.currencies;
      return currencies && currencies.USD;
    })
    .map((country) => {
      console.log(`${country.name.common} has USD currency`);
    });
};
