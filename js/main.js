const busqueda = document.getElementById("busqueda"),
  btnSearch = document.getElementById("btn-search"),
  contenedor = document.querySelector(".contenedor");

function crearHTML(result) {
  const resultado = result.data.results;
  contenedor.innerHTML = "";
  resultado.forEach((element) => {
    const { name, thumbnail } = element;

    contenedor.innerHTML += `
                            <div class="tarjeta">
                              <h3>${name}</h3>
                              <img src="${thumbnail.path}.${thumbnail.extension}"/>
                            </div>
                            `;
  });
}

function fetchApi(word) {
  const hash = "6cc92a00ace73cfc4753867d8313103e",
    apikey = "4cd8d8fed41757a8278a70a3b9ea5c2b",
    URI = `https://gateway.marvel.com/v1/public/characters?limit=100&nameStartsWith=${word}&ts=1&apikey=${apikey}&hash=${hash}`;

  fetch(URI)
    .then((res) => res.json())
    .then((result) => crearHTML(result));
}

btnSearch.addEventListener("click", () => {
  fetchApi(busqueda.value);
});
