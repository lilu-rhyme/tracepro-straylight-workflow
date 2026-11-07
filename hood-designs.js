// Calculated using Rohrbach (NASA/Goddard, 2023), Figure 3 inputs.
const hoodDesigns = [
  {
    "total_length_mm": 252.9357646898245,
    "wall_inner_radius_at_mouth_mm": 104.06108952845645,
    "wall_inner_radius_at_pupil_mm": 56,
    "apertures": [
      {
        "role": "mouth",
        "z_mm": 0.0,
        "aperture_radius_mm": 66.06108952845645
      },
      {
        "role": "pupil",
        "z_mm": 252.9357646898245,
        "aperture_radius_mm": 26
      }
    ],
    "internal_vanes": [
      {
        "z_mm": 106.7951006468148,
        "aperture_radius_mm": 49.14640728310817,
        "next_wall_shadow_z_mm": 134.08281197316987,
        "stage": "inner"
      },
      {
        "z_mm": 180.8693612700603,
        "aperture_radius_mm": 37.4141969718416,
        "next_wall_shadow_z_mm": 223.22446456428315,
        "stage": "inner"
      },
      {
        "z_mm": 234.30792885454937,
        "aperture_radius_mm": 28.95035935322739,
        "next_wall_shadow_z_mm": 285.6741661794139,
        "stage": "inner"
      }
    ]
  },
  {
    "total_length_mm": 872.1229304634553,
    "wall_inner_radius_at_mouth_mm": 329.4267873097107,
    "wall_inner_radius_at_pupil_mm": 56,
    "apertures": [
      {
        "role": "mouth",
        "z_mm": 0.0,
        "aperture_radius_mm": 291.4267873097107
      },
      {
        "role": "intermediate",
        "z_mm": 619.1871657736308,
        "aperture_radius_mm": 66.06108952845645
      },
      {
        "role": "pupil",
        "z_mm": 872.1229304634553,
        "aperture_radius_mm": 26
      }
    ],
    "internal_vanes": [
      {
        "z_mm": 138.30714154870134,
        "aperture_radius_mm": 241.08710459954105,
        "next_wall_shadow_z_mm": 149.10939051146482,
        "stage": "outer"
      },
      {
        "z_mm": 269.57020729211746,
        "aperture_radius_mm": 193.31125581041,
        "next_wall_shadow_z_mm": 294.00553200542936,
        "stage": "outer"
      },
      {
        "z_mm": 386.8947014726364,
        "aperture_radius_mm": 150.6086321783628,
        "next_wall_shadow_z_mm": 426.39874153013625,
        "stage": "outer"
      },
      {
        "z_mm": 486.2695392757236,
        "aperture_radius_mm": 114.43914918300729,
        "next_wall_shadow_z_mm": 540.7327573007592,
        "stage": "outer"
      },
      {
        "z_mm": 566.6774942251064,
        "aperture_radius_mm": 85.17304698321419,
        "next_wall_shadow_z_mm": 634.7586771475724,
        "stage": "outer"
      },
      {
        "z_mm": 763.6375307789335,
        "aperture_radius_mm": 43.18239931241659,
        "next_wall_shadow_z_mm": 807.4123381621129,
        "stage": "inner"
      },
      {
        "z_mm": 835.5628072100734,
        "aperture_radius_mm": 31.790554659682954,
        "next_wall_shadow_z_mm": 882.1469012206885,
        "stage": "inner"
      }
    ]
  }
];
