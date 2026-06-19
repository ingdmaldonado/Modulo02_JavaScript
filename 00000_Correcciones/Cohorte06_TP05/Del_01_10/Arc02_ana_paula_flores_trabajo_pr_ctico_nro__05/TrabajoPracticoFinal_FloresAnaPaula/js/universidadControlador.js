import { fnRequestAPI } from "./universidadAPI.js";

window.onload = () => {

    const idBtnRecuperar =
        document.querySelector("#idBtnRecuperar");

    const idSelectorPais =
        document.querySelector("#idSelectorPais");

    const idTbody =
        document.querySelector("#idTbody");

    idBtnRecuperar.onclick = async () => {

        const pais = idSelectorPais.value;

        const universidades =
            await fnRequestAPI(
                `http://universities.hipolabs.com/search?country=${pais}`
            );

        idTbody.innerHTML = "";

        universidades.forEach(({ country, name, web_pages, ["state-province"]: provinciaRaw }) => {

            const provincia =
                provinciaRaw ? provinciaRaw : "Sin provincia";

            idTbody.innerHTML += `
                <tr>
                    <td>${country}</td>
                    <td>${name}</td>
                    <td>${provincia}</td>
                    <td>
                        <a href="${web_pages[0]}" target="_blank">
                            ${web_pages[0]}
                        </a>
                    </td>
                </tr>
            `;

        });

    };

};