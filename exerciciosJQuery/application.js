// exercicio 3
jQuery(document).ready(() => {
  // exercicio 1
  $("div > h2").text("Show");

  // exercicio 2
  $("div > p span").text("$100.00");

  // exercise #6
  const cidades = [
    "Estocolmo, Suécia",
    "Oslo, Noruega",
    "Helsinque, Finlândia",
    "Copenhague, Dinamarca",
  ];
  $("#vacations li h2").map((index, element) => {
    $(element).text(cidades[index]);
  });

  // exercicio 7
  $("#vacations li").map((_, listVacation) => {
    console.log(listVacation);
  });

  // exercicio 8
  $("#vacations li.america h2").map((_, { textContent }) => {
    console.log(textContent);
  });
});
