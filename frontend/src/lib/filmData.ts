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

const filmData: FilmData = {
  bw: {
    ilford: [
      'ilford/Ilford_Delta_100.png',
      'ilford/Ilford_Delta_400.png',
      'ilford/Ilford_FP4_Plus_125.png',
      'ilford/Ilford_HP5_1.png',
      'ilford/Ilford_HP5_Plus_400.png',
      'ilford/Ilford_HPS_800.png',
      'ilford/Ilford_XP2.png',
    ],
    kodak_bw: [
      'kodak_bw/Kodak_T-Max_100.png',
      'kodak_bw/Kodak_T-Max_400.png',
      'kodak_bw/Kodak_TMAX_3200.png',
      'kodak_bw/Kodak_TRI-X_400.png',
    ],
  },
  colour: {
    fuji: [
      'fuji/Fuji_160C_1.png',
      'fuji/Fuji_160C_2.png',
      'fuji/Fuji_400H_1.png',
      'fuji/Fuji_400H_2.png',
      'fuji/Fuji_800Z_1.png',
      'fuji/Fuji_800Z_2.png',
      'fuji/Fuji_Astia_100_Generic.png',
      'fuji/Fuji_Astia_100F.png',
      'fuji/Fuji_Provia_100F.png',
      'fuji/Fuji_Provia_400F.png',
      'fuji/Fuji_Sensia_100.png',
      'fuji/Fuji_Superia_100.png',
      'fuji/Fuji_Superia_200.png',
      'fuji/Fuji_Superia_200_XPRO.png',
      'fuji/Fuji_Superia_400.png',
      'fuji/Fuji_Superia_800.png',
      'fuji/Fuji_Superia_1600.png',
      'fuji/Fuji_Superia_HG_1600.png',
      'fuji/Fuji_Superia_X-Tra_800.png',
    ],
    kodak: [
      'kodak/Kodak_Ektachrome_100.png',
      'kodak/Kodak_Ektar_100.png',
      'kodak/Kodak_Elite_100_XPRO.png',
      'kodak/Kodak_Elite_Color_200.png',
      'kodak/Kodak_Elite_Color_400.png',
      'kodak/Kodak_Kodachrome_25.png',
      'kodak/Kodak_Kodachrome_64.png',
      'kodak/Kodak_Kodachrome_200.png',
      'kodak/Kodak_Portra_160.png',
      'kodak/Kodak_Portra_400.png',
      'kodak/Kodak_Portra_800.png',
    ],
  },
};

export default filmData;
export type { FilmData };
