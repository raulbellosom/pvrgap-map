import React, { useState } from "react";
import FloorPlanSwitcher from "./components/FloorPlanSwitcher";
import FloorPlan from "./components/FloorPlan";
import plantaAlta from "./assets/planta-alta.png";
import plantaBaja from "./assets/planta-baja.png";

import pb_1 from "./assets/pb/1.jpg";
import pb_2 from "./assets/pb/2.jpg";
import pb_3 from "./assets/pb/3.jpg";
import pb_4 from "./assets/pb/4.jpg";
import pb_5 from "./assets/pb/5.jpg";
import pb_6 from "./assets/pb/6.jpg";
import pb_7 from "./assets/pb/7.jpg";
import pb_8 from "./assets/pb/8.jpg";
import pb_9 from "./assets/pb/9.jpg";
import pb_10 from "./assets/pb/10.jpg";
import pb_11 from "./assets/pb/11.jpg";
import pb_12 from "./assets/pb/12.jpg";
import pb_13 from "./assets/pb/13.jpg";
import pb_14 from "./assets/pb/14.jpg";
import pb_15 from "./assets/pb/15.jpg";

import pa_1 from "./assets/pa/1.jpg";
import pa_2 from "./assets/pa/2.jpg";
import pa_3 from "./assets/pa/3.jpg";
import pa_4 from "./assets/pa/4.jpg";
import pa_5 from "./assets/pa/5.jpg";
import pa_6 from "./assets/pa/6.jpg";
import pa_7 from "./assets/pa/7.jpg";
import pa_8 from "./assets/pa/8.jpg";
import pa_9 from "./assets/pa/9.jpg";
import pa_10 from "./assets/pa/10.jpg";
import pa_11 from "./assets/pa/11.jpg";
import pa_12 from "./assets/pa/12.jpg";
import pa_13 from "./assets/pa/13.jpg";
import pa_14 from "./assets/pa/14.jpg";
import pa_15 from "./assets/pa/15.jpg";
import pa_16 from "./assets/pa/16.jpg";
import pa_17 from "./assets/pa/17.jpg";
import pa_18 from "./assets/pa/18.jpg";
import pa_19 from "./assets/pa/19.jpg";
import pa_20 from "./assets/pa/20.jpg";
import pa_21 from "./assets/pa/21.jpg";
import pa_22 from "./assets/pa/22.jpg";
import pa_23 from "./assets/pa/23.jpg";
import pa_24 from "./assets/pa/24.jpg";

const App = () => {
  const [currentPlan, setCurrentPlan] = useState("alta");

  const pointsBaja = [
    {
      id: 1,
      x: "92.9%",
      y: "17.4%",
      title: "SUE INTERNACIONAL PB",
      image: pb_1,
      description:
        "Se contempla la colocación de una etiqueta en esta ubicación",
    },
    {
      id: 2,
      x: "94.35%",
      y: "23.9%",
      title: "PB | SUE INTERNACIONAL",
      image: pb_2,
      description:
        "Se contempla la colocación de una etiqueta en esta ubicación",
    },
    {
      id: 3,
      x: "94.8%",
      y: "31.9%",
      title: "PB | SUE INTERNACIONAL",
      image: pb_3,
      description:
        "Se contempla la colocación de una etiqueta en esta ubicación",
    },
    {
      id: 4,
      x: "92.9%",
      y: "36.9%",
      title: "PB | SUE INTERNACIONAL",
      image: pb_4,
      description:
        "Se contempla la colocación de una etiqueta en esta ubicación",
    },
    {
      id: 5,
      x: "88.35%",
      y: "39.9%",
      title: "PB | SUE INTERNACIONAL",
      image: pb_5,
      description:
        "Se contempla la colocación de una etiqueta en esta ubicación",
    },
    {
      id: 6,
      x: "29.85%",
      y: "38.9%",
      title: "PB | CAJEROS AUTOMATICOS",
      image: pb_6,
      description:
        "Se contempla la colocación de una etiqueta en esta ubicación",
    },
    {
      id: 7,
      x: "30.85%",
      y: "32.9%",
      title: "PB | AEROMARKET AMBULATORIO",
      image: pb_7,
      description:
        "Se contempla la colocación de una etiqueta en esta ubicación",
    },
    {
      id: 8,
      x: "28.7%",
      y: "20.9%",
      title: "PB | KIOSKOS FRENTE A MODULO DE INFORMACION",
      image: pb_8,
      description:
        "Se contempla la colocación de una etiqueta en esta ubicación",
    },
    {
      id: 9,
      x: "30%",
      y: "13.5%",
      title: "PB | MOSTRADOR 70",
      image: pb_9,
      description:
        "Se contempla la colocación de una etiqueta en esta ubicación",
    },
    {
      id: 10,
      x: "26.5%",
      y: "13.5%",
      title: "PB | COLUMNA FRENTE MOSTRADOR 60",
      image: pb_10,
      description:
        "Se contempla la colocación de una etiqueta en esta ubicación",
    },
    {
      id: 11,
      x: "20.5%",
      y: "13.5%",
      title: "PB | COLUMNA FRENTE MOSTRADOR 45",
      image: pb_11,
      description:
        "Se contempla la colocación de una etiqueta en esta ubicación",
    },
    {
      id: 12,
      x: "18.6%",
      y: "21.5%",
      title: "PB | KIOSKOS FRENTE A DOCUMENTACION",
      image: pb_12,
      description:
        "Se contempla la colocación de dos etiquetas en esta ubicación",
    },
    {
      id: 13,
      x: "18%",
      y: "16.5%",
      title: "PB | ESCALERAS MANUALES",
      image: pb_13,
      description:
        "Se contempla la colocación de una etiqueta en esta ubicación",
    },
    {
      id: 14,
      x: "15.8%",
      y: "13.5%",
      title: "PB | ESCALERAS MANUALES",
      image: pb_14,
      description:
        "Se contempla la colocación de una etiqueta en esta ubicación",
    },
    {
      id: 15,
      x: "9.2%",
      y: "17%",
      title: "PB | BAÑOS DOCUMENTACION",
      image: pb_15,
      description:
        "Se contempla la colocación de dos etiquetas en esta ubicación",
    },
  ];

  const pointsAlta = [
    {
      id: 1,
      x: "1.4%",
      y: "18%",
      title: "PA | ELEVADORES",
      image: pa_1,
      description:
        "Se contempla la colocación de una etiqueta en esta ubicación",
    },
    {
      id: 2,
      x: "5.7%",
      y: "16%",
      title: "PA | FRENTE CARL'S JR",
      image: pa_2,
      description:
        "Se contempla la colocación de una etiqueta en esta ubicación",
    },
    {
      id: 3,
      x: "8.2%",
      y: "12%",
      title: "PA | AEROMARKET MEZZANINE",
      image: pa_3,
      description:
        "Se contempla la colocación de una etiqueta en esta ubicación",
    },
    {
      id: 4,
      x: "11.2%",
      y: "16%",
      title: "PA | ESCALERAS MECANICAS",
      image: pa_4,
      description:
        "Se contempla la colocación de una etiqueta en esta ubicación",
    },
    {
      id: 5,
      x: "16.2%",
      y: "7%",
      title: "PA | COMEDOR SBARRO",
      image: pa_5,
      description:
        "Se contempla la colocación de una etiqueta en esta ubicación",
    },
    {
      id: 6,
      x: "27%",
      y: "15.8%",
      title: "PA | STARBUCKS & EGATES",
      image: pa_6,
      description:
        "Se contempla la colocación de una etiqueta en esta ubicación",
    },
    {
      id: 7,
      x: "34%",
      y: "71.8%",
      title: "PA | AEROMARKET NACIONAL",
      image: pa_7,
      description:
        "Se contempla la colocación de una etiqueta en esta ubicación",
    },
    {
      id: 8,
      x: "30%",
      y: "80%",
      title: "PA | FOOD COURT - KFC",
      image: pa_8,
      description:
        "Se contempla la colocación de una etiqueta en esta ubicación",
    },
    {
      id: 9,
      x: "34%",
      y: "79.8%",
      title: "PA | FOOD COURT - URBAN CORNER",
      image: pa_9,
      description:
        "Se contempla la colocación de una etiqueta en esta ubicación",
    },
    {
      id: 10,
      x: "36%",
      y: "64.8%",
      title: "PA | SUE NACIONAL - PUERTA 6",
      image: pa_10,
      description:
        "Se contempla la colocación de una etiqueta en esta ubicación",
    },
    {
      id: 11,
      x: "36%",
      y: "51.9%",
      title: "PA | SUE NACIONAL - PUERTA 3",
      image: pa_11,
      description:
        "Se contempla la colocación de una etiqueta en esta ubicación",
    },
    {
      id: 12,
      x: "36%",
      y: "37.8%",
      title: "PA | SUE NACIONAL - FINAL DE RAMPA",
      image: pa_12,
      description:
        "Se contempla la colocación de una etiqueta en esta ubicación",
    },
    {
      id: 13,
      x: "34%",
      y: "30.6%",
      title: "PA | SUE NACIONAL - FRENTE A PUERTA 2",
      image: pa_13,
      description:
        "Se contempla la colocación de una etiqueta en esta ubicación",
    },
    {
      id: 14,
      x: "36.1%",
      y: "26%",
      title: "PA | SUE NACIONAL - ENTRADA A BAÑOS NACIONAL",
      image: pa_14,
    },
    {
      id: 15,
      x: "93.3%",
      y: "84%",
      title: "PA | SUE INTERNACIONAL - COLUMNA TOTEM PUERTA 7",
      image: pa_15,
    },
    {
      id: 16,
      x: "90.3%",
      y: "76%",
      title: "PA | SUE INTERNACIONAL - COLUMNA FRENTE A PUERTA 8",
      image: pa_16,
    },
    {
      id: 17,
      x: "93.8%",
      y: "64%",
      title: "PA | SUE INTERNACIONAL - COLUMNA FRENTE A PUERTA 9",
      image: pa_17,
    },
    {
      id: 18,
      x: "93.8%",
      y: "54.3%",
      title: "PA | SUE INTERNACIONAL - COLUMNA FRENTE A JHONNY ROCKETS",
      image: pa_18,
    },
    {
      id: 19,
      x: "95.8%",
      y: "47.3%",
      title: "PA | SUE INTERNACIONAL - ENTRADA A BAÑOS",
      image: pa_19,
    },
    {
      id: 20,
      x: "88.2%",
      y: "38.3%",
      title: "PA | SUE INTERNACIONAL - BANCAS PUERTA 12",
      image: pa_20,
    },
    {
      id: 21,
      x: "96.2%",
      y: "29.3%",
      title: "PA | SUE INTERNACIONAL - BANCAS PUERTA 11",
      image: pa_21,
    },
    {
      id: 22,
      x: "96%",
      y: "19.8%",
      title: "PA | SUE INTERNACIONAL - BANCAS XOCODIVA",
      image: pa_22,
    },
    {
      id: 23,
      x: "94%",
      y: "9%",
      title: "PA | SUE INTERNACIONAL - BANCAS PUERTA 13",
      image: pa_23,
    },
    {
      id: 24,
      x: "90%",
      y: "12.8%",
      title: "PA | SUE INTERNACIONAL - BANCAS PUERTA 14",
      image: pa_24,
    },
  ];

  return (
    <div className="h-dvh" style={{ backgroundColor: "#212a32" }}>
      <div className="p-4">
        <FloorPlanSwitcher
          currentPlan={currentPlan}
          setCurrentPlan={setCurrentPlan}
        />
        <FloorPlan
          image={currentPlan === "alta" ? plantaAlta : plantaBaja}
          points={currentPlan === "alta" ? pointsAlta : pointsBaja}
        />
      </div>
    </div>
  );
};

export default App;
