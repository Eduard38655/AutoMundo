// DataBase.js - Autos con datos completamente unidos

const DataBase = [
  {
    autoid: 1,
    tipoauto: "Sedán",
    precio: 25000.0,
    status: "Disponible",
    description: "Toyota Corolla 2022, color blanco, automático",
    year_auto: "2022",
    img: "https://tse1.mm.bing.net/th/id/OIP.G6lJCzID4t0cVsGC3AK2GQHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    type_auto: "Compacto",
    marcas_id: 1, marcas: "Toyota", yearmarca: "1937" ,
      carac_id: 1,
      carac_motor: "1.8L",
      carac_interior: "Tela",
      carac_velocidad: "180 km/h",
      carac_sistemas: "ABS, Airbags"
    
  },
  {
    autoid: 2,
    tipoauto: "SUV",
    precio: 35000.0,
    status: "Vendido",
    description: "Honda CR-V 2021, color negro, tracción 4x4",
    year_auto: "2021",
    img: "https://tse2.mm.bing.net/th/id/OIP.tEdAYZ9bEGKl9yipr16oFwHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    type_auto: "SUV",
     marcas_id: 2, marcas: "Honda", yearmarca: "1948" ,
    
      carac_id: 2,
      carac_motor: "2.0L Turbo",
      carac_interior: "Cuero",
      carac_velocidad: "220 km/h",
      carac_sistemas: "ABS, Airbags, Control de tracción"
 
  },
  {
    autoid: 3,
    tipoauto: "Camioneta",
    precio: 40000.0,
    status: "Disponible",
    description: "Ford F-150 2023, color rojo, cabina doble",
    year_auto: "2023",
    img: "https://tse1.mm.bing.net/th/id/OIP.6tqNAGEBJcRDq2d8xzx5CwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    type_auto: "Pickup",
    marcas_id: 3, marcas: "Ford", yearmarca: "1903" ,
   
      carac_id: 3,
      carac_motor: "3.5L V6",
      carac_interior: "Tela",
      carac_velocidad: "200 km/h",
      carac_sistemas: "ABS, Airbags, Asistente de frenado"
   
  },
  {
    autoid: 4,
    tipoauto: "Deportivo",
    precio: 55000.0,
    status: "Disponible",
    description: "Chevrolet Camaro 2020, color amarillo, V8",
    year_auto: "2020",
    img: "https://th.bing.com/th/id/R.81cb6b33561857f8f9d92b014b68271a?rik=Fhh1FFQQt2tOyQ&pid=ImgRaw&r=0",
    type_auto: "Coupé",
   marcas_id: 4, marcas: "Chevrolet", yearmarca: "1911" ,
   
      carac_id: 4,
      carac_motor: "5.0L V8",
      carac_interior: "Cuero",
      carac_velocidad: "250 km/h",
      carac_sistemas: "ABS, Airbags, Control de estabilidad"
   
  },
  {
    autoid: 5,
    tipoauto: "Hatchback",
    precio: 22000.0,
    status: "Vendido",
    description: "Volkswagen Golf 2019, color azul, manual",
    year_auto: "2019",
    img: "https://tse4.mm.bing.net/th/id/OIP.APnB2VpYr7nhHsYBp6SJ2AHaEn?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    type_auto: "Compacto",
    marcas_id: 5, marcas: "Volkswagen", yearmarca: "1937" ,
   
      carac_id: 5,
      carac_motor: "1.6L",
      carac_interior: "Tela",
      carac_velocidad: "170 km/h",
      carac_sistemas: "ABS, Airbags"
  
  },
  {
    autoid: 6,
    tipoauto: "Sedán",
    precio: 27000.0,
    status: "Disponible",
    description: "Hyundai Elantra 2022, color gris, automático",
    year_auto: "2022",
    img: "https://tse2.mm.bing.net/th/id/OIP.KorVMnkFE2VhvczDyTwoLwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    type_auto: "Sedán",
   marcas_id: 6, marcas: "Hyundai", yearmarca: "1967" ,
    
      carac_id: 6,
      carac_motor: "2.0L",
      carac_interior: "Cuero",
      carac_velocidad: "210 km/h",
      carac_sistemas: "ABS, Airbags, Sensor de punto ciego"
   
  },
  {
    autoid: 7,
    tipoauto: "SUV",
    precio: 38000.0,
    status: "Disponible",
    description: "Toyota RAV4 2021, color blanco, híbrido",
    year_auto: "2021",
    img: "https://th.bing.com/th/id/OIP.xaxniKl405urKb3hRU3zowHaEc?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    type_auto: "SUV",
    marcas_id: 1, marcas: "Toyota", yearmarca: "1937" ,
   
      carac_id: 7,
      carac_motor: "2.5L Híbrido",
      carac_interior: "Tela",
      carac_velocidad: "190 km/h",
      carac_sistemas: "ABS, Airbags, Asistente de mantenimiento de carril"
   
  },
  {
    autoid: 8,
    tipoauto: "Camioneta",
    precio: 42000.0,
    status: "Vendido",
    description: "Chevrolet Silverado 2023, color negro, 4x4",
    year_auto: "2023",
    img: "https://th.bing.com/th/id/R.9457cb829cf653b94ac2c3ea00f3c4f6?rik=lTrmPfHKrF4nQA&pid=ImgRaw&r=0",
    type_auto: "Pickup",
    marcas_id: 4, marcas: "Chevrolet", yearmarca: "1911" ,
   
      carac_id: 8,
      carac_motor: "4.0L V8",
      carac_interior: "Cuero",
      carac_velocidad: "240 km/h",
      carac_sistemas: "ABS, Airbags, Control de crucero adaptativo"
    
  },
  {
    autoid: 9,
    tipoauto: "Deportivo",
    precio: 60000.0,
    status: "Disponible",
    description: "Ford Mustang 2020, color rojo, V8",
    year_auto: "2020",
    img: "https://tse1.mm.bing.net/th/id/OIP.2qum2hlATmz6N5FVUT6DMgHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    type_auto: "Coupé",
     marcas_id: 3, marcas: "Ford", yearmarca: "1903" ,
    
      carac_id: 9,
      carac_motor: "5.2L V8",
      carac_interior: "Cuero",
      carac_velocidad: "260 km/h",
      carac_sistemas: "ABS, Airbags, Suspensión adaptativa"
   
  },
  {
    autoid: 10,
    tipoauto: "Hatchback",
    precio: 23000.0,
    status: "Disponible",
    description: "Kia Rio 2019, color plata, automático",
    year_auto: "2019",
    img: "https://tse3.mm.bing.net/th/id/OIP.FtaFHqRItbtPWGzCOnZBuwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    type_auto: "Compacto",
     marcas_id: 7, marcas: "Kia", yearmarca: "1944" ,
  
      carac_id: 10,
      carac_motor: "1.4L",
      carac_interior: "Tela",
      carac_velocidad: "160 km/h",
      carac_sistemas: "ABS, Airbags"
    
  },
  {
  autoid: 11,
  tipoauto: "Sedán",
  precio: 28000.0,
  status: "Disponible",
  description: "Toyota Corolla 2020, color blanco, automático",
  year_auto: "2020",
  img: "https://i.gaw.to/vehicles/photos/40/22/402204-2020-toyota-corolla.jpg?1024x640",
  type_auto: "Compacto",
  marcas_id: 1, marcas: "Toyota", yearmarca: "1937",

  carac_id: 11,
  carac_motor: "1.8L",
  carac_interior: "Tela premium",
  carac_velocidad: "180 km/h",
  carac_sistemas: "ABS, Airbags, Control de estabilidad"
}
,
{
  autoid: 12,
  tipoauto: "SUV",
  precio: 35000.0,
  status: "Disponible",
  description: "Honda CR-V 2021, color negro, automático",
  year_auto: "2021",
  img: "https://th.bing.com/th/id/R.fbe712ef1ad00a1b99849b78b9a8460a?rik=BVBx8M2G58JNWg&pid=ImgRaw&r=0",
  type_auto: "SUV",
  marcas_id: 2, marcas: "Honda", yearmarca: "1948",

  carac_id: 12,
  carac_motor: "2.4L",
  carac_interior: "Cuero",
  carac_velocidad: "200 km/h",
  carac_sistemas: "ABS, Airbags, Asistente de carril"
}
,
{
  autoid: 13,
  tipoauto: "Pick-Up",
  precio: 42000.0,
  status: "Disponible",
  description: "Ford Ranger 2022, color gris, manual",
  year_auto: "2022",
  img: "https://cdn.motor1.com/images/mgl/zxgpn7/s1/2022-ford-ranger-wildtrak-static.jpg",
  type_auto: "Camioneta",
  marcas_id: 3, marcas: "Ford", yearmarca: "1903",

  carac_id: 13,
  carac_motor: "3.2L",
  carac_interior: "Cuero sintético",
  carac_velocidad: "180 km/h",
  carac_sistemas: "ABS, Airbags, Control de descenso"
}
,
{
  autoid: 14,
  tipoauto: "Coupé",
  precio: 27000.0,
  status: "Disponible",
  description: "Hyundai Veloster 2018, color rojo, automático",
  year_auto: "2018",
  img: "https://tse3.mm.bing.net/th/id/OIP.tL2Gi5QugY6dvdUGXZkwiAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  type_auto: "Deportivo",
  marcas_id: 4, marcas: "Hyundai", yearmarca: "1967",

  carac_id: 14,
  carac_motor: "1.6L Turbo",
  carac_interior: "Tela y cuero",
  carac_velocidad: "210 km/h",
  carac_sistemas: "ABS, Airbags, Control de tracción"
}
,
{
  autoid: 15,
  tipoauto: "Hatchback",
  precio: 19000.0,
  status: "Disponible",
  description: "Chevrolet Spark 2017, color azul, manual",
  year_auto: "2017",
  img: "https://tse2.mm.bing.net/th/id/OIP.oH1kfugUJIuUnmLrxN9JEwHaEP?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  type_auto: "Económico",
  marcas_id: 5, marcas: "Chevrolet", yearmarca: "1911",

  carac_id: 15,
  carac_motor: "1.2L",
  carac_interior: "Tela",
  carac_velocidad: "150 km/h",
  carac_sistemas: "ABS, Airbags"
}

  
]

export default DataBase
