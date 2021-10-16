import icondecouverte from "../assets/icons/decouverte.svg"
import iconconception from "../assets/icons/conception.svg"
import iconlancement from "../assets/icons/lancement.svg"
import iconconstruction from "../assets/icons/construction.svg"
import imgDev from "../assets/icons/developpement.svg"

import imgDesign from "../assets/icons/box_tools.svg"
import imgRef from "../assets/icons/seo.svg"

export const boxProcess = [
  {
    id: 1,
    icon: icondecouverte,
    title: "Découverte",
    color: "var(--violet)",
    text: "Avant de pouvoir concevoir votre site internet, je dois me plonger dans votre univers afin de cerner vos objectifs et votre public.",
  },
  {
    id: 2,
    icon: iconconception,
    title: "Conception",
    color: "var(--blue)",
    text: "Après avoir cerné besoins je concoie un site Web sur mesure, tout en respectant avec précision votre marque.",
  },
  {
    id: 3,
    icon: iconconstruction,
    title: "Construction",
    color: "var(--orange)",
    text: "Lorsque vous êtes satisfait de la conception, je procéde à la construction du site en m'assurant que tout est optimisé pour suivre les pratiques Web modernes.",
  },
  {
    id: 4,
    icon: iconlancement,
    title: "Phase de lancement",
    color: "var(--pink)",
    text: "Votre site Web est mise en ligne ! Je fourni également une formation sur la façon dont vous pouvez ajouter du contenu à votre site afin que vous puissiez le faire vous-même.",
  },
]

export const services = [
  {
    id: 10,
    img: imgDesign,
    title: "Web design",
    text: "Votre identité visuelle est crée sur mesure pour atteindre la cible désirée.",
  },
  {
    id: 20,
    img: imgDev,
    title: "Développement",
    text: "La création de votre site web indispensable pour améliorer la visibilité de votre activité.",
  },
  {
    id: 30,
    img: imgRef,
    title: "Référencement",
    text: "Optimisation du contenu votre site afin qu’il apparaisse dans les moteurs de recherche.",
  },
]
