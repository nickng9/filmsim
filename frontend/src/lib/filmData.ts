// src/lib/filmData.ts
interface FilmData {
  bw: {
    ilford: string[];
    kodak_bw: string[];
  };
  colour: {
    fuji: string[];
    kodak: string[];
  };
}


// src/lib/filmData.ts
const filmData: FilmData = {
  bw: {
    ilford: [
      'bw/ilford/Ilford_Delta_100.png',
      'bw/ilford/Ilford_Delta_400.png',
      'bw/ilford/Ilford_FP4_Plus_125.png',
      'bw/ilford/Ilford_HP5_1.png',
      'bw/ilford/Ilford_HP5_Plus_400.png',
      'bw/ilford/Ilford_HPS_800.png',
      'bw/ilford/Ilford_XP2.png',
    ],
    kodak_bw: [
      'bw/kodak_bw/Kodak_T-Max_100.png',
      'bw/kodak_bw/Kodak_T-Max_400.png',
      'bw/kodak_bw/Kodak_TMAX_3200.png',
      'bw/kodak_bw/Kodak_TRI-X_400.png',
    ],
  },
  colour: {
    fuji: [
      'colour/fuji/Fuji_160C_1.png',
      'colour/fuji/Fuji_160C_2.png',
      'colour/fuji/Fuji_400H_1.png',
      'colour/fuji/Fuji_400H_2.png',
      'colour/fuji/Fuji_800Z_1.png',
      'colour/fuji/Fuji_800Z_2.png',
      'colour/fuji/Fuji_Astia_100_Generic.png',
      'colour/fuji/Fuji_Astia_100F.png',
      'colour/fuji/Fuji_Provia_100F.png',
      'colour/fuji/Fuji_Provia_400F.png',
      'colour/fuji/Fuji_Sensia_100.png',
      'colour/fuji/Fuji_Superia_100.png',
      'colour/fuji/Fuji_Superia_200.png',
      'colour/fuji/Fuji_Superia_200_XPRO.png',
      'colour/fuji/Fuji_Superia_400.png',
      'colour/fuji/Fuji_Superia_800.png',
      'colour/fuji/Fuji_Superia_1600.png',
      'colour/fuji/Fuji_Superia_HG_1600.png',
      'colour/fuji/Fuji_Superia_X-Tra_800.png',
    ],
    kodak: [
      'colour/kodak/Kodak_Ektachrome_100.png',
      'colour/kodak/Kodak_Ektar_100.png',
      'colour/kodak/Kodak_Elite_100_XPRO.png',
      'colour/kodak/Kodak_Elite_Color_200.png',
      'colour/kodak/Kodak_Elite_Color_400.png',
      'colour/kodachrome/Kodachrome_25.png',
      'colour/kodachrome/Kodachrome_64.png',
      'colour/kodachrome/Kodachrome_200.png',
      'colour/kodak/Kodak_Portra_160.png',
      'colour/kodak/Kodak_Portra_400.png',
      'colour/kodak/Kodak_Portra_800.png',
    ],
  },
};

export default filmData;
export type { FilmData };
