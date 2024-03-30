import { TBrand } from "../../../types/brand";

// Reorganize
const PreparedBrands: TBrand[] = [
  {
    name: "L'Illa",
    pattern: /(?:\s|^)l'?illa/gi,
  },
  {
    name: "Iberia",
    pattern: /iberia/gi,
  },
  {
    name: "Norit",
    pattern: /norit/gi,
  },
  {
    name: "Botanical origin",
    pattern: /botanical origin/gi,
  },
  {
    name: "Elena",
    pattern: /elena/gi,
  },
  {
    name: "Flota",
    pattern: /flota/gi,
  },
  {
    name: "Luzil",
    pattern: /luzil/gi,
  },
  {
    name: "Micolor",
    pattern: /micolor/gi,
  },
  {
    name: "Perlan",
    pattern: /perlan/gi,
  },
  {
    name: "Skip",
    pattern: /skip/gi,
  },
  {
    name: "Wipp",
    pattern: /wipp/gi,
  },
  {
    name: "Puntomatic",
    pattern: /puntomatic/gi,
  },
  {
    name: "Polenghi",
    pattern: /polenghi/gi,
  },
  {
    name: "Solimon",
    pattern: /solimon/gi,
  },
  {
    name: "La Barca",
    pattern: /la barca/gi,
  },
  {
    name: "Amalur",
    pattern: /amalur/gi,
  },
  {
    name: "Ducros",
    pattern: /ducros/gi,
  },
  {
    name: "Fortaleza",
    pattern: /fortaleza/gi,
  },
  {
    name: "Mccormick",
    pattern: /mc\s?cormick/gi,
  },
  {
    name: "Las Hermanas",
    pattern: /las hermanas/gi,
  },
  {
    name: "Safrina",
    pattern: /safrina/gi,
  },
  {
    name: "Trevijano",
    pattern: /trevijano/gi,
  },
  {
    name: "Zelva",
    pattern: /zelva/gi,
  },
  {
    name: "Janubio",
    pattern: /janubio/gi,
  },
  {
    name: "Más que dos",
    pattern: /más que dos/gi,
  },
  {
    name: "Roca",
    pattern: /roca\s/gi,
  },
  {
    name: "La Comadre",
    pattern: /la comadre/gi,
  },
  {
    name: "Maggie",
    pattern: /(?:\s|^)maggie?/gi,
  },
  {
    name: "Ponti",
    pattern: /ponti/gi,
  },
  {
    name: "Galileo",
    pattern: /galileo/gi,
  },
  {
    name: "Beefeater",
    pattern: /beefeater/gi,
  },
  {
    name: "Brockmans",
    pattern: /brockmans/gi,
  },
  {
    name: "Bulldog",
    pattern: /bulldog/gi,
  },
  {
    name: "Legendario",
    pattern: /legendario/gi,
  },
  {
    name: "Santa Cruz",
    pattern: /santa cruz/gi,
  },
  {
    name: "Hero",
    pattern: /[\^\s]hero[\$\s]/gi,
  },
  {
    name: "Hero Baby",
    pattern: /hero(?:\sbaby)?(?:\s|$)/gi,
  },
  {
    name: "Puleva",
    pattern: /puleva(?:\s|$)(?!peques)/gi,
  },
  {
    name: "Puleva Peques",
    pattern: /puleva peques/gi,
  },
  {
    name: "Be Plus",
    pattern: /be plus/gi,
  },
  {
    name: "Beech nut",
    pattern: /beech nut/gi,
  },
  {
    name: "Gerber",
    pattern: /gerber/gi,
  },
  {
    name: "Pascual",
    pattern: /pascual/gi,
  },
  {
    name: "Smileat",
    pattern: /smileat/gi,
  },
  {
    name: "Big Ben",
    pattern: /big ben/gi,
  },
  {
    name: "Boom",
    pattern: /boom(?:\s|$)/gi,
  },
  {
    name: "Bounty",
    pattern: /bounty/gi,
  },
  {
    name: "Kinder",
    pattern: /kinder/gi,
  },
  {
    name: "Lacasa",
    pattern: /lacasa|patrulla canina/gi,
  },
  {
    name: "M&M",
    pattern: /m&m/gi,
  },
  {
    name: "Maltesers",
    pattern: /maltesers/gi,
  },
  {
    name: "Mars",
    pattern: /mars/gi,
  },
  {
    name: "Mikado",
    pattern: /mikado/gi,
  },
  {
    name: "Milky Way",
    pattern: /milky way/gi,
  },
  {
    name: "Pecosos",
    pattern: /pecosos/gi,
  },
  {
    name: "Peppa Pig",
    pattern: /pepp?a pig/gi,
  },
  {
    name: "Smarties",
    pattern: /smarties/gi,
  },
  {
    name: "Snickers",
    pattern: /snickers/gi,
  },
  {
    name: "Twix",
    pattern: /twix/gi,
  },
  {
    name: "Ritter Sport",
    pattern: /ritter sport/gi,
  },
  {
    name: "London",
    pattern: /^london/gi,
  },
  {
    name: "Mariebel",
    pattern: /mariebel/gi,
  },
  {
    name: "Obradoiro",
    pattern: /obradoiro/gi,
  },
  {
    name: "Ensalandia",
    pattern: /ensalandia/gi,
  },
  {
    name: "Popp",
    pattern: /popp/gi,
  },
  {
    name: "Pom'bel",
    pattern: /pom'?bel/gi,
  },
  {
    name: "Bens Original",
    pattern: /bens original/gi,
  },
  {
    name: "Bonnatura",
    pattern: /bonnatura/gi,
  },
  {
    name: "Casa Más",
    pattern: /casa m[aá]s/gi,
  },
  {
    name: "Fatti Bene",
    pattern: /fatti bene/gi,
  },
  {
    name: "Panna Pomodoro",
    pattern: /panna[\s&]pomodoro/gi,
  },
  {
    name: "Artesana",
    pattern: /^artesana/gi,
  },
  {
    name: "Revulgreen",
    pattern: /revulgreen/gi,
  },
  {
    name: "Bonchef",
    pattern: /bonchef/gi,
  },
  {
    name: "Campo Rico",
    pattern: /campo rico/gi,
  },
  {
    name: "Gesprocarn",
    pattern: /gesprocarn/gi,
  },
  {
    name: "Go Vegg",
    pattern: /go vegg/gi,
  },
  {
    name: "O'lysee",
    pattern: /o'?lysee/gi,
  },
  {
    name: "Ultrex",
    pattern: /ultrex/gi,
  },
  {
    name: "Eidetesa",
    pattern: /eidetesa/gi,
  },
  {
    name: "Monells",
    pattern: /monells/gi,
  },
  {
    name: "Moltex",
    pattern: /moltex/gi,
  },
  {
    name: "La Toja",
    pattern: /la toja/gi,
  },
  {
    name: "Lea",
    pattern: /(?:\s|^)lea(?:\s|$)/gi,
  },
  {
    name: "Wilkinson",
    pattern: /wilkinson/gi,
  },
  {
    name: "Old Spice",
    pattern: /old spice/gi,
  },
  {
    name: "Bic",
    pattern: /(?:\s|^)bic(?:\s|$)/gi,
  },
  {
    name: "Cocomi",
    pattern: /cocomi/gi,
  },
  {
    name: "El Cantero de Letur",
    pattern: /(?:el\s)?cantero(?:\sde)?\sletur/gi,
  },
  {
    name: "Naturlan",
    pattern: /nar?turlan/gi,
  },
  {
    name: "Lindahls",
    pattern: /lindahls/gi,
  },
  {
    name: "Royal Greenland",
    pattern: /royal greenland/gi,
  },
  {
    name: "El Sibarita",
    pattern: /el sibarita/gi,
  },
  {
    name: "Green Cuisine",
    pattern: /green cuisine?/gi,
  },
  {
    name: "Amura",
    pattern: /amura/gi,
  },
  {
    name: "Byly",
    pattern: /byly/gi,
  },
  {
    name: "Palmolive",
    pattern: /palmolive/gi,
  },
  {
    name: "Sanex",
    pattern: /sanex/gi,
  },
  {
    name: "Lactovit",
    pattern: /lactovit/gi,
  },
  {
    name: "Mum",
    pattern: /mum/gi,
  },
  {
    name: "Axe",
    pattern: /axe/gi,
  },
  {
    name: "Rexona",
    pattern: /rexona/gi,
  },
  {
    name: "Falke",
    pattern: /falke/gi,
  },
  {
    name: "Maredeus",
    pattern: /maredeus/gi,
  },
  {
    name: "Nortindal",
    pattern: /nortindal/gi,
  },
  {
    name: "Crabss",
    pattern: /crabss/gi,
  },
  {
    name: "Marcillat",
    pattern: /marcillat/gi,
  },
];

export default PreparedBrands;
