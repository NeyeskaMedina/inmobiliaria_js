let rowCards = document.getElementById('rowCard');
let rowCards2 = document.getElementById('rowCard2');
//Redenderizado de propiedades en venta:
    //Array de objeto para 4 propiedades en venta

const arrPropertiesForSale =[ 
    {  
        id: '1',
        title: 'Apartamento de lujo en zona exclusiva', 
        imageSrc: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        imageAlt: 'Imagen del departamento',
        description: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        adress: '123 Luxury Lane, Prestige Suburb, CA 45678',
        bathroom: '4',
        room: '4',
        price: '5.000',
        smoke: false,
        pets: false
    },
    {  
        id: '2',
        title: 'Apartamento acogedor en la montaña', 
        imageSrc: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        imageAlt: 'Imagen del departamento',
        description: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        adress: '789 Mountain Road, Summit Peaks, CA 23456',
        bathroom: '2',
        room: '1',
        price: '1.200',
        smoke: true,
        pets: true
    },
    {  
        id: '3',
        title: 'Penthouse de lujo con terraza panorámica', 
        imageSrc: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        imageAlt: 'Imagen del departamento',
        description: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        adress: '567 Skyline Avenue, Skyview City, CA 56789',
        bathroom: '3',
        room: '3',
        price: '4.500',
        smoke: false,
        pets: true
    }
];

//Redenderizado de propiedades en alquiler:
    //Array de objeto para 3 propiedades en alquiler
const arrRentalProperties = [ 
    {  
        id: '1',
        title: 'Apartamento en el centro de la ciudad', 
        imageSrc: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        imageAlt: 'Imagen del departamento',
        description: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        adress: '123 Main Street, Anytown, CA 91234',
        bathroom: '2',
        room: '2',
        price: '2.000',
        smoke: false,
        pets: true
    },
    {  
        id: '2',
        title: 'Apartamento luminoso con vista al mar', 
        imageSrc: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        imageAlt: 'Imagen del departamento',
        description: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        adress: ' 456 Ocean Avenue, Seaside Town, CA 56789',
        bathroom: '3',
        room: '3',
        price: '2500',
        smoke: true,
        pets: true
    },
    {  
        id: '3',
        title: 'Condominio moderno en zona residencial ', 
        imageSrc: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        imageAlt: 'Imagen del departamento',
        description: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        adress: '123 Main Street, Anytown, CA 91234',
        bathroom: '2',
        room: '2',
        price: '2200',
        smoke: false,
        pets: false
    }
];
if(getPageURL() == "index.html"){
    rowCards.innerHTML = createCards(arrPropertiesForSale,arrPropertiesForSale.length);
    rowCards2.innerHTML = createCards(arrRentalProperties,arrRentalProperties.length);
}else if(getPageURL() == "propiedades_venta.html"){
    rowCards.innerHTML = createCards(arrPropertiesForSale,arrPropertiesForSale.length);
}else if(getPageURL() == "propiedades_alquiler.html"){
    rowCards2.innerHTML = createCards(arrRentalProperties,arrRentalProperties.length);
}else{
    console.log("La pagina no se encuentra");
}