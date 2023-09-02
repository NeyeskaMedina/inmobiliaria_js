const getPageURL = () => {
    const pageLocation = location.href.split('/');
    return pageLocation[pageLocation.length -1].toLowerCase();
};
const createCards = (objects, index) => {
    let html ="";
        objects.forEach(element => {
            let smokeRspt = (element.smoke === false ? `<span style="color: red"><i class="fas fa-smoking-ban"></i> No se permite fumar</span>` : `<span span style="color: green"><i class="fas fa-smoking"></i> Permitido fumar</span>`);
            let petsRspt = (element.pets === false ? `<span style="color: red"><i class="fa-solid fa-ban"></i> No se permiten mascotas</span>` : `<span span style="color: green"><i class="fas fa-paw"></i> Mascotas permitidas</span>`)  
            html += `
            <div class="col-md-4 mb-4">
                <div class="card">   
                    <img
                        src = '${element.imageSrc}'
                        alt = '${element.imageAlt}'
                    />
                    <div class="card-body">
                        <h5 class="card-title">
                            ${element.title}
                        </h5>
                        <p class="card-text">
                            ${element.description}
                        </p>
                        <p>
                            <i class="fas fa-map-marker-alt"></i> ${element.adress}
                        </p>
                        <p>
                            <i class="fas fa-bed"></i> ${element.room} Habitaciones |
                            <i class="fas fa-bath"></i> ${element.bathroom} Baños
                        </p>
                        <p><i class="fas fa-dollar-sign"></i> ${element.price}</p>
                        <p class="text-danger">
                            ${smokeRspt}
                        </p>
                        <p class="text-danger">
                            ${petsRspt}
                        </p>
                    </div>
                </div>
            </div>`;
        });
        return html;
};
