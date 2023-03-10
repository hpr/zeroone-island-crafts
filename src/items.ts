import { Item } from './types';

export const items: { [k in Item]: { [k in Item]?: Item | Item[] } } = {
  r_battery_empty: {
    c_electricity: 'c_battery_charged',
  },
  r_guano: {
    f_water: 'c_nitrate_potassium',
  },
  r_magnet: {
    c_plate: 'c_compass',
  },
  r_palm: {
    c_stone_cut: 'c_wood',
    t_hammer: 'c_coconut',
    t_knife: 'c_resin',
    t_axe: 'c_trunk',
    r_stone: 'c_branch',
  },
  r_rocks: {
    t_pickaxe: ['c_stone_gold', 'c_stone_diamond', 'c_stone_iron'],
  },
  r_sand: {
    x_oven: 'c_glass',
    c_carbonate_calcium: 'c_mortar',
    r_water_salted: 'c_castle_sand',
    c_paper: 'c_sandpaper',
    c_jar: 'c_hourglass',
    t_shovel: ['c_chest_blue_locked', 'c_chest_green_locked', 'c_seed_germinated'],
  },
  r_shells: {
    t_hammer: 'c_carbonate_calcium',
  },
  r_soil: {
    c_nitrate_potassium: 'c_loam',
    r_water_salted: 'c_mud',
    t_shovel: ['c_chest_red_locked', 'c_seed_germinated'],
  },
  r_stone: {
    r_stone: 'c_stone_cut',
    t_axe: 'c_spike',
    c_sandpaper: 'c_stone_polished',
    c_handle: 't_hammer',
    r_palm: 'c_branch',
  },
  r_sulfur: {},
  r_sun: {
    c_leaf: 'c_leaf_dried',
    c_cube_ice: 'f_water',
    f_juice_berry: 'f_sugar',
    f_juice_mango: 'f_sugar',
    f_juice_pinapple: 'f_sugar',
    f_juice_carrot: 'f_sugar',
    c_seaweed: 'f_sheet_seaweed',
    r_water_salted: 'c_salt',
  },
  r_water_salted: {
    p_filter_water: 'f_water',
    t_pan_hot: 'c_steam',
    c_fire: 'c_steam',
    x_campfire: 'c_steam',
    r_soil: 'c_mud',
    r_sand: 'c_castle_sand',
    c_fishnet: 'f_shrimp',
    t_rod_fishing: 'c_fish',
    c_rod_larva_fishing: 'c_cod',
    c_rod_silkworm_fishing: 'c_shark',
    t_knife: 'c_seaweed',
    r_sun: 'c_salt',
    t_spear: 'c_octopus_dead',
  },
  r_wind: {
    c_bag: 'c_buoy',
    c_leather: 'c_volleyball',
    c_glass: 'c_jar',
    p_turbine_wind: 'c_electricity',
  },
  r_wire_electric: {
    r_wire_electric: 'c_coil',
    c_jar: 'c_off_bulb',
  },
  h_box_plan: {},
  h_brassiere_blue: {},
  h_brassiere_green: {},
  h_cloth: {},
  h_clue: {},
  h_combi: {},
  h_micro: {},
  h_pack_breeder: {},
  h_pack_islander: {},
  h_pack_paradise: {},
  h_pack_starter: {},
  h_pearls_10: {},
  h_pearls_200: {},
  h_pearls_35: {},
  h_pearls_70: {},
  h_pet_common: {},
  h_pet_epic: {},
  h_pet_rare: {},
  t_axe: {
    c_wood: 'c_peak_wood',
    c_ring_iron: 'c_spring',
    r_stone: 'c_spike',
    c_trunk: 'c_board',
    c_branch: 'c_peak_wood',
    c_shark: 'c_shark_steak',
    r_palm: 'c_trunk',
    c_coconut: 'f_coconut_eatable',
    c_parrot_dead: 'f_chicken',
    c_rabbit_dead: 'c_leg_rabbit',
    c_pig_dead: 'c_meat',
    c_octopus_dead: 'f_tentacle',
    c_stone_iron: 't_axe',
    c_stone_gold: 't_axe',
    c_stone_diamond: 't_axe',
  },
  t_bow: {
    c_arrow_stone: ['c_arrow_broken', 'c_rabbit_dead'],
    c_arrow_iron: ['c_rabbit_dead', 'c_pig_dead'],
    c_arrow_gold: ['c_pig_dead', 'c_parrot_dead'],
    c_arrow_diamond: 'c_parrot_dead',
  },
  t_hammer: {
    f_berry: 'f_juice_berry',
    f_carrot: 'f_juice_carrot',
    f_mango: 'f_juice_mango',
    f_pineapple: 'f_juice_pinapple',
    c_iron_hot: 'c_plate_iron',
    c_plate_iron: 'c_plate',
    c_insect_yellow: 'c_dye_yellow',
    c_insect_blue: 'c_dye_blue',
    c_board: 'c_box',
    c_bark: 'c_bark_crushed',
    r_palm: 'c_coconut',
    r_shells: 'c_carbonate_calcium',
  },
  t_knife: {
    c_coconut: 'f_water_coconut',
    c_urchin_sea: 'f_urchin_open',
    c_shellfish: 'f_shellfish_open',
    c_oyster: 'f_oyster_open',
    c_egg: 'f_egg_broken',
    c_rabbit_dead: 'c_wool',
    c_shark: 'c_shark_teeth',
    c_coral: 'c_pipe',
    c_cob: 'c_mold_nail',
    c_brick: 'c_mold_ring',
    c_pig_dead: 'c_leather',
    c_octopus_dead: 'c_ink',
    c_parrot_dead: 'c_feather',
    f_coconut_eatable: 'c_coconut_opened',
    c_fish: 'c_bone_fish',
    c_cod: 'c_bone_fish',
    c_meat: 'c_blood',
    c_trunk: 'c_bark',
    r_palm: 'c_resin',
    r_water_salted: 'c_seaweed',
    c_tire: 'c_belt',
    c_branch: 'c_leaf',
    c_leather: 'c_leather_cut',
  },
  t_pan_hot: {
    c_shark_steak: 'f_shark_steak_grilled',
    f_shellfish_open: 'f_shellfish_grilled',
    f_egg_broken: 'f_egg_cooked',
    f_water_coconut: 'c_steam',
    r_water_salted: 'c_steam',
    c_meat: 'f_meat_grilled',
    c_crab: 'f_crab_grilled',
    c_egg: 'f_omelette',
    c_leg_rabbit: 'f_rabbit_grilled',
    c_fish: 'f_fish_grilled',
    f_chicken: 'f_chicken_grilled',
    f_shrimp: 'f_shrimp_grilled',
  },
  t_pickaxe: {
    r_rocks: ['c_stone_gold', 'c_stone_diamond', 'c_stone_iron'],
  },
  t_rod_fishing: {
    c_larva: 'c_rod_larva_fishing',
    c_silkworm: 'c_rod_silkworm_fishing',
    r_water_salted: 'c_fish',
  },
  t_shovel: {
    r_sand: ['c_chest_blue_locked', 'c_chest_green_locked', 'c_seed_germinated'],
    r_soil: ['c_chest_red_locked', 'c_seed_germinated'],
  },
  t_spear: {
    r_water_salted: 'c_octopus_dead',
  },
  c_aquarius_blue: {
    c_aquarius_blue: 'f_eggs_fish',
  },
  c_arrow_broken: {
    c_arrow_broken: 'c_arrow_stone',
  },
  c_arrow_diamond: {
    t_bow: 'c_parrot_dead',
  },
  c_arrow_gold: {
    t_bow: ['c_pig_dead', 'c_parrot_dead'],
  },
  c_arrow_iron: {
    t_bow: ['c_rabbit_dead', 'c_pig_dead'],
  },
  c_arrow_stone: {
    t_bow: ['c_arrow_broken', 'c_rabbit_dead'],
  },
  c_bag: {
    c_wool: 'c_pillow',
    r_wind: 'c_buoy',
    f_carrot: 'c_bag_carrots',
  },
  c_bag_carrots: {},
  c_bandage: {
    c_blood: 'c_bandage_blood',
    c_resin: 'c_bandage_resin',
    f_water: 'c_bandage_water',
  },
  c_bandage_blood: {},
  c_bandage_resin: {
    c_handle: 'c_torch',
  },
  c_bandage_water: {},
  c_bark: {
    c_feather: 'u_mask',
    t_hammer: 'c_bark_crushed',
  },
  c_bark_crushed: {
    c_resin: 'c_cork',
  },
  c_barrel: {
    f_water: 'c_barrel_water',
  },
  c_barrel_water: {},
  c_battery_charged: {},
  c_bee: {
    c_box: 'c_hive',
  },
  c_belt: {},
  c_blood: {
    c_dye_blue: 'c_dye_purple',
    c_dye_yellow: 'c_dye_orange',
    c_bandage: 'c_bandage_blood',
    c_leather_cut: 'c_leather_red_cut',
    c_feather: 'c_pen_red',
    c_stone_polished: 'c_stone_polished_red',
    c_volleyball: 'c_wilson',
    c_weaving: 'c_weaving_red',
  },
  c_board: {
    c_glass: 'c_window',
    c_board: 'c_panel_wood',
    c_ring_iron: 'c_bucket',
    c_steam: 'c_board_folded',
    c_nail: 'c_board_studded',
    t_hammer: 'c_box',
    c_peak_wood: 'c_oar',
  },
  c_board_folded: {
    c_board_folded: 'c_tube',
    c_board_studded: 'c_barrel',
  },
  c_board_studded: {
    c_board_folded: 'c_barrel',
  },
  c_bone_fish: {
    c_thread_spool: 'c_theard_needle',
  },
  c_bottle: {
    c_letter: 'c_bottle_message',
    f_banana: 'f_bottle_banana',
    f_juice_berry: 'f_bottle_berry',
    f_water_coconut: 'f_bottle_coco',
    f_juice_mango: 'f_bottle_mango',
    f_juice_pinapple: 'f_bottle_pineapple',
    f_water: 'f_bottle_water',
  },
  c_bottle_message: {},
  c_box: {
    c_fish: 'c_box_fish',
    c_bee: 'c_hive',
  },
  c_box_fish: {},
  c_branch: {
    c_branch: 'c_weaving_leaf',
    t_knife: 'c_leaf',
    c_stone_cut: 'c_fiber',
    t_axe: 'c_peak_wood',
  },
  c_brick: {
    c_brick: 'c_wall_brick',
    t_knife: 'c_mold_ring',
  },
  c_bucket: {
    f_water: 'c_bucket_water',
  },
  c_bucket_water: {},
  c_buoy: {},
  c_carbonate_calcium: {
    r_sand: 'c_mortar',
  },
  c_castle_sand: {},
  c_chest_blue_locked: {},
  c_chest_green_locked: {},
  c_chest_red_locked: {},
  c_cigar: {
    c_fire: 'c_smoke',
  },
  c_coal: {},
  c_cob: {
    c_cob: 'c_wall_cob',
    t_knife: 'c_mold_nail',
  },
  c_coconut: {
    t_axe: 'f_coconut_eatable',
    f_banana: 'f_banana_coconut',
    t_knife: 'f_water_coconut',
  },
  c_coconut_opened: {},
  c_cod: {
    t_knife: 'c_bone_fish',
    x_campfire: 'f_cod_grilled',
  },
  c_coil: {},
  c_compass: {},
  c_coral: {
    t_knife: 'c_pipe',
    c_theard_needle: 'u_necklace_coral',
    c_thread_spool: 'u_bracelet_coral',
  },
  c_cork: {
    c_jar: 'c_bottle',
  },
  c_crab: {
    t_pan_hot: 'f_crab_grilled',
  },
  c_cracker_bat: {},
  c_cracker_monkey: {},
  c_cracker_turtle: {},
  c_cube_ice: {
    r_sun: 'f_water',
    f_water_jar: 'f_drink_cold',
  },
  c_diamond: {
    c_ring_gold: 'u_bracelet_gold_diamond',
    c_ring_iron: 'u_bracelet_iron_diamond',
  },
  c_door: {},
  c_drop_oil: {},
  c_dye_blue: {
    c_dye_yellow: 'c_dye_green',
    c_blood: 'c_dye_purple',
    c_leather_cut: 'c_leather_blue_cut',
    c_stone_polished: 'c_stone_polished_blue',
    c_weaving: 'c_weaving_blue',
    f_water_jar: 's_hair_blue',
  },
  c_dye_green: {
    c_leather_cut: 'c_leather_green_cut',
    c_weaving: 'c_weaving_green',
    f_water_jar: 's_hair_green',
  },
  c_dye_orange: {
    c_leather_cut: 'c_leather_orange_cut',
    c_weaving: 'c_weaving_orange',
    f_water_jar: 's_hair_ginger',
  },
  c_dye_purple: {
    c_leather_cut: 'c_leather_purple_cut',
    c_weaving: 'c_weaving_purple',
    f_water_jar: 's_hair_purple',
  },
  c_dye_yellow: {
    c_blood: 'c_dye_orange',
    c_dye_blue: 'c_dye_green',
    c_leather_cut: 'c_leather_yellow_cut',
    c_weaving: 'c_weaving_yellow',
    f_water_jar: 's_hair_blond',
  },
  c_egg: {
    t_knife: 'f_egg_broken',
    t_pan_hot: 'f_omelette',
  },
  c_electricity: {
    r_battery_empty: 'c_battery_charged',
    c_off_bulb: 'c_on_bulb',
  },
  c_emerald: {
    c_ring_gold: 'u_bracelet_gold_emerald',
    c_ring_iron: 'u_bracelet_iron_emerald',
  },
  c_fan: {},
  c_feather: {
    c_ink: 'c_pen',
    c_blood: 'c_pen_red',
    c_bark: 'u_mask',
  },
  c_fiber: {
    c_fiber: 'c_rope',
    f_water: 'c_paper',
    c_mud: 'c_cob',
  },
  c_fire: {
    c_trunk: 'x_campfire',
    c_cigar: 'c_smoke',
    c_wood: 'c_coal',
    r_water_salted: 'c_steam',
    c_torch: 'c_torch_lit',
  },
  c_firefly: {},
  c_fish: {
    f_sheet_seaweed: 'f_fish_maki',
    t_pan_hot: 'f_fish_grilled',
    f_water_jar: 'c_aquarius_blue',
    t_knife: 'c_bone_fish',
    c_box: 'c_box_fish',
    c_smoke: 'f_salmon_smoked',
  },
  c_fishnet: {
    c_handle: 'c_net',
    r_water_salted: 'f_shrimp',
  },
  c_flower: {
    c_net: 'c_bee',
    c_theard_needle: 'u_necklace_flower',
  },
  c_glass: {
    c_wood: 'u_glasses_wood',
    r_wind: 'c_jar',
    c_board: 'c_window',
    c_plate_iron: 'c_window_metal',
  },
  c_gold_molten: {
    c_mold_ring: 'c_ring_gold',
  },
  c_grip: {
    c_panel_wood: 'c_door',
  },
  c_handle: {
    c_bandage_resin: 'c_torch',
    c_plate: 'c_pan',
    c_rope: 'c_grip',
    c_plate_iron: 't_shovel',
    c_spike: 't_pickaxe',
    r_stone: 't_hammer',
    c_fishnet: 'c_net',
  },
  c_hibiscus: {
    c_theard_needle: 'u_necklace_hibiscus',
  },
  c_hive: {
    c_jar: 'f_honey',
  },
  c_hourglass: {},
  c_ink: {
    c_leather_cut: 'c_leather_black_cut',
    c_feather: 'c_pen',
    c_stone_polished: 'c_stone_polished_black',
    c_weaving: 'c_weaving_black',
    f_water_jar: 's_hair_black',
  },
  c_insect_blue: {
    t_hammer: 'c_dye_blue',
  },
  c_insect_yellow: {
    t_hammer: 'c_dye_yellow',
  },
  c_iron_hot: {
    t_hammer: 'c_plate_iron',
  },
  c_iron_molten: {
    c_mold_nail: 'c_nail',
    c_mold_ring: 'c_ring_iron',
  },
  c_jar: {
    r_sand: 'c_hourglass',
    r_wire_electric: 'c_off_bulb',
    c_cork: 'c_bottle',
    c_hive: 'f_honey',
    f_water: 'f_water_jar',
  },
  c_jellyfish: {},
  c_key_blue: {},
  c_key_green: {},
  c_key_red: {},
  c_larva: {
    t_rod_fishing: 'c_rod_larva_fishing',
  },
  c_leaf: {
    r_sun: 'c_leaf_dried',
  },
  c_leaf_dried: {
    c_leaf_dried: 'c_cigar',
  },
  c_leather: {
    r_wind: 'c_volleyball',
    t_knife: 'c_leather_cut',
  },
  c_leather_black_cut: {
    u_scissors: 'c_strip_black_leather',
    c_theard_needle: 'u_loincloth_leather_black',
    c_strip_black_leather: 'u_eyepatch_black_leather',
  },
  c_leather_blue_cut: {
    u_scissors: 'c_strip_blue_leather',
    c_theard_needle: 'u_loincloth_leather_blue',
    c_strip_blue_leather: 'u_eyepatch_blue_leather',
  },
  c_leather_cut: {
    c_strip_leather: 'u_eyepatch_leather',
    c_ink: 'c_leather_black_cut',
    c_dye_blue: 'c_leather_blue_cut',
    c_dye_green: 'c_leather_green_cut',
    c_dye_orange: 'c_leather_orange_cut',
    c_dye_purple: 'c_leather_purple_cut',
    c_blood: 'c_leather_red_cut',
    c_dye_yellow: 'c_leather_yellow_cut',
    u_scissors: 'c_strip_leather',
    c_theard_needle: 'u_loincloth_leather',
  },
  c_leather_green_cut: {
    c_theard_needle: 'u_loincloth_leather_green',
  },
  c_leather_orange_cut: {
    c_theard_needle: 'u_loincloth_leather_orange',
  },
  c_leather_purple_cut: {
    c_theard_needle: 'u_loincloth_leather_purple',
  },
  c_leather_red_cut: {
    u_scissors: 'c_strip_red_leather',
    c_theard_needle: 'u_loincloth_leather_red',
    c_strip_red_leather: 'u_eyepatch_red_leather',
  },
  c_leather_yellow_cut: {
    c_theard_needle: 'u_loincloth_leather_yellow',
  },
  c_leg_rabbit: {
    t_pan_hot: 'f_rabbit_grilled',
  },
  c_letter: {
    c_bottle: 'c_bottle_message',
  },
  c_loam: {
    c_seed_germinated: 'c_shoot',
  },
  c_meat: {
    c_peak_wood: 'c_skewer',
    t_knife: 'c_blood',
    f_banana: 'f_meat_banana',
    f_berry: 'f_meat_berry',
    f_carrot: 'f_meat_carrot',
    f_mango: 'f_meat_mango',
    f_mushroom: 'f_meat_mushroom',
    f_pineapple: 'f_meat_pineapple',
    t_pan_hot: 'f_meat_grilled',
    c_smoke: 'f_ham_smoked',
  },
  c_mold_nail: {
    c_iron_molten: 'c_nail',
  },
  c_mold_ring: {
    c_iron_molten: 'c_ring_iron',
    c_gold_molten: 'c_ring_gold',
  },
  c_mortar: {
    x_oven: 'c_brick',
  },
  c_mud: {
    c_fiber: 'c_cob',
    f_water: 'c_water_dirty',
  },
  c_nail: {
    c_board: 'c_board_studded',
  },
  c_net: {
    c_flower: 'c_bee',
  },
  c_nitrate_potassium: {
    r_soil: 'c_loam',
    c_seaweed: 'c_soap',
  },
  c_oar: {},
  c_octopus_dead: {
    t_axe: 'f_tentacle',
    t_knife: 'c_ink',
  },
  c_off_bulb: {
    c_electricity: 'c_on_bulb',
  },
  c_on_bulb: {},
  c_oyster: {
    t_knife: 'f_oyster_open',
  },
  c_pan: {
    x_campfire: 't_pan_hot',
  },
  c_panel_wood: {
    c_grip: 'c_door',
  },
  c_paper: {
    c_pen_red: 'x_dyg',
    r_sand: 'c_sandpaper',
    c_pen: 'c_letter',
  },
  c_parrot_dead: {
    t_axe: 'f_chicken',
    t_knife: 'c_feather',
  },
  c_peak_wood: {
    c_board: 'c_oar',
    c_stone_cut: 't_spear',
    c_rope: 't_bow',
    c_thread: 't_rod_fishing',
    c_trunk: 'c_fire',
    c_meat: 'c_skewer',
  },
  c_pearl: {},
  c_pen: {
    c_paper: 'c_letter',
  },
  c_pen_red: {
    c_paper: 'x_dyg',
  },
  c_pig_dead: {
    t_axe: 'c_meat',
    t_knife: 'c_leather',
  },
  c_pillow: {},
  c_pipe: {},
  c_plate: {
    r_magnet: 'c_compass',
    c_handle: 'c_pan',
  },
  c_plate_iron: {
    c_glass: 'c_window_metal',
    c_handle: 't_shovel',
    t_hammer: 'c_plate',
  },
  c_rabbit_dead: {
    t_axe: 'c_leg_rabbit',
    t_knife: 'c_wool',
  },
  c_resin: {
    c_bandage: 'c_bandage_resin',
    c_bark_crushed: 'c_cork',
  },
  c_ring_gold: {
    c_diamond: 'u_bracelet_gold_diamond',
    c_emerald: 'u_bracelet_gold_emerald',
    c_rubis: 'u_bracelet_gold_ruby',
    c_saphir: 'u_bracelet_gold_saphir',
  },
  c_ring_iron: {
    t_axe: 'c_spring',
    c_board: 'c_bucket',
    c_diamond: 'u_bracelet_iron_diamond',
    c_emerald: 'u_bracelet_iron_emerald',
    c_rubis: 'u_bracelet_iron_ruby',
    c_saphir: 'u_bracelet_iron_saphir',
  },
  c_rod_larva_fishing: {
    r_water_salted: 'c_cod',
  },
  c_rod_silkworm_fishing: {
    r_water_salted: 'c_shark',
  },
  c_rope: {
    c_rope: 'c_weaving',
    c_wood: 'c_handle',
    c_peak_wood: 't_bow',
    c_stone_cut: 't_knife',
    c_weaving: 'c_bag',
    c_handle: 'c_grip',
    c_spike: 'c_thread',
    c_tire: 'x_swing',
  },
  c_rubis: {
    c_ring_gold: 'u_bracelet_gold_ruby',
    c_ring_iron: 'u_bracelet_iron_ruby',
  },
  c_salt: {},
  c_sandpaper: {
    r_stone: 'c_stone_polished',
  },
  c_saphir: {
    c_ring_gold: 'u_bracelet_gold_saphir',
    c_ring_iron: 'u_bracelet_iron_saphir',
  },
  c_seaweed: {
    c_nitrate_potassium: 'c_soap',
    r_sun: 'f_sheet_seaweed',
  },
  c_seed_germinated: {
    c_loam: 'c_shoot',
  },
  c_shark: {
    t_axe: 'c_shark_steak',
    t_knife: 'c_shark_teeth',
  },
  c_shark_steak: {
    t_pan_hot: 'f_shark_steak_grilled',
  },
  c_shark_teeth: {
    c_theard_needle: 'u_necklace_shark',
  },
  c_shellfish: {
    t_knife: 'f_shellfish_open',
  },
  c_shoot: {
    f_water: ['c_flower', 'f_carrot', 'f_turnip'],
  },
  c_silkworm: {
    t_rod_fishing: 'c_rod_silkworm_fishing',
  },
  c_skewer: {
    x_campfire: 'f_skewer_grilled',
  },
  c_smoke: {
    c_fish: 'f_salmon_smoked',
    c_meat: 'f_ham_smoked',
    u_glasses_luna_gold: 'u_glasses_luna_gold_sun',
    u_glasses_luna_silver: 'u_glasses_luna_silver_sun',
    u_glasses_round_gold: 'u_glasses_round_gold_sun',
    u_glasses_round_silver: 'u_glasses_round_silver_sun',
    u_glasses_square_gold: 'u_glasses_square_gold_sun',
    u_glasses_square_silver: 'u_glasses_square_silver_sun',
    u_glasses_wood: 'u_glasses_sun',
  },
  c_soap: {},
  c_spike: {
    c_spike: 'u_scissors',
    c_rope: 'c_thread',
    c_handle: 't_pickaxe',
  },
  c_spring: {},
  c_steam: {
    c_weaving: 'f_water',
    c_board: 'c_board_folded',
  },
  c_stone_cut: {
    c_rope: 't_knife',
    r_palm: 'c_wood',
    c_peak_wood: 't_spear',
    c_branch: 'c_fiber',
  },
  c_stone_diamond: {
    c_stone_diamond: 'c_diamond',
    t_axe: 't_axe',
  },
  c_stone_gold: {
    t_axe: 't_axe',
    x_oven: 'c_gold_molten',
  },
  c_stone_iron: {
    t_axe: 't_axe',
    x_oven: 'c_iron_hot',
    x_oven_brick: 'c_iron_molten',
  },
  c_stone_polished: {
    c_ink: 'c_stone_polished_black',
    c_dye_blue: 'c_stone_polished_blue',
    c_blood: 'c_stone_polished_red',
  },
  c_stone_polished_black: {},
  c_stone_polished_blue: {},
  c_stone_polished_red: {},
  c_strip_black_leather: {
    c_leather_black_cut: 'u_eyepatch_black_leather',
    c_theard_needle: 'u_bracelet_black_leather',
  },
  c_strip_blue_leather: {
    c_leather_blue_cut: 'u_eyepatch_blue_leather',
    c_theard_needle: 'u_bracelet_blue_leather',
  },
  c_strip_leather: {
    c_leather_cut: 'u_eyepatch_leather',
    c_theard_needle: 'u_bracelet_leather',
  },
  c_strip_red_leather: {
    c_leather_red_cut: 'u_eyepatch_red_leather',
    c_theard_needle: 'u_bracelet_red_leather',
  },
  c_theard_needle: {
    c_strip_black_leather: 'u_bracelet_black_leather',
    c_strip_blue_leather: 'u_bracelet_blue_leather',
    c_strip_leather: 'u_bracelet_leather',
    c_strip_red_leather: 'u_bracelet_red_leather',
    c_weaving_black: 'u_loincloth_black',
    c_weaving_blue: 'u_loincloth_blue',
    c_weaving_green: 'u_loincloth_green',
    c_weaving_leaf: 'u_loincloth_leaf',
    c_leather_cut: 'u_loincloth_leather',
    c_leather_black_cut: 'u_loincloth_leather_black',
    c_leather_blue_cut: 'u_loincloth_leather_blue',
    c_leather_green_cut: 'u_loincloth_leather_green',
    c_leather_orange_cut: 'u_loincloth_leather_orange',
    c_leather_purple_cut: 'u_loincloth_leather_purple',
    c_leather_red_cut: 'u_loincloth_leather_red',
    c_leather_yellow_cut: 'u_loincloth_leather_yellow',
    c_weaving_red: 'u_loincloth_red',
    c_weaving: 'u_loincloth_simple',
    c_weaving_yellow: 'u_loincloth_yellow',
    c_weaving_orange: 'u_loincloth_orange',
    c_weaving_purple: 'u_loincloth_purple',
    c_shark_teeth: 'u_necklace_shark',
    c_hibiscus: 'u_necklace_hibiscus',
    c_flower: 'u_necklace_flower',
    c_coral: 'u_necklace_coral',
    c_theard_needle: 'c_fishnet',
  },
  c_thread: {
    c_peak_wood: 't_rod_fishing',
  },
  c_thread_spool: {
    c_coral: 'u_bracelet_coral',
    c_bone_fish: 'c_theard_needle',
  },
  c_tire: {
    c_rope: 'x_swing',
    t_knife: 'c_belt',
  },
  c_torch: {
    c_fire: 'c_torch_lit',
  },
  c_torch_lit: {},
  c_trunk: {
    c_peak_wood: 'c_fire',
    t_axe: 'c_board',
    t_knife: 'c_bark',
    c_fire: 'x_campfire',
  },
  c_tube: {
    p_powder_black: 'c_firefly',
  },
  c_urchin_sea: {
    t_knife: 'f_urchin_open',
  },
  c_volleyball: {
    c_blood: 'c_wilson',
  },
  c_wall_brick: {
    x_campfire: 'x_oven_brick',
  },
  c_wall_cob: {
    x_campfire: 'x_oven',
  },
  c_water_dirty: {},
  c_weaving: {
    c_ink: 'c_weaving_black',
    c_dye_blue: 'c_weaving_blue',
    c_dye_green: 'c_weaving_green',
    c_dye_orange: 'c_weaving_orange',
    c_dye_purple: 'c_weaving_purple',
    c_blood: 'c_weaving_red',
    c_dye_yellow: 'c_weaving_yellow',
    c_weaving: 'c_bandage',
    c_rope: 'c_bag',
    c_theard_needle: 'u_loincloth_simple',
    c_steam: 'f_water',
  },
  c_weaving_black: {
    c_theard_needle: 'u_loincloth_black',
  },
  c_weaving_blue: {
    c_theard_needle: 'u_loincloth_blue',
  },
  c_weaving_green: {
    c_theard_needle: 'u_loincloth_green',
  },
  c_weaving_leaf: {
    c_theard_needle: 'u_loincloth_leaf',
  },
  c_weaving_orange: {
    c_theard_needle: 'u_loincloth_orange',
  },
  c_weaving_purple: {
    c_theard_needle: 'u_loincloth_purple',
  },
  c_weaving_red: {
    c_theard_needle: 'u_loincloth_red',
  },
  c_weaving_yellow: {
    c_theard_needle: 'u_loincloth_yellow',
  },
  c_wilson: {},
  c_window: {
    x_photo: 'x_frame',
  },
  c_window_metal: {},
  c_wood: {
    c_fire: 'c_coal',
    c_rope: 'c_handle',
    t_axe: 'c_peak_wood',
    c_glass: 'u_glasses_wood',
  },
  c_wool: {
    c_wool: 'c_thread_spool',
    c_bag: 'c_pillow',
  },
  f_banana: {
    f_berry: 'f_banana_berry',
    c_coconut: 'f_banana_coconut',
    f_bottle_water: 'f_bottle_banana',
    c_bottle: 'f_bottle_banana',
    c_meat: 'f_meat_banana',
    f_chicken_grilled: 'f_chicken_banana',
    f_crab_grilled: 'f_crab_banana',
    f_fish_grilled: 'f_fish_banana',
    f_mango: 'f_mango_banana',
    f_pineapple: 'f_pineapple_banana',
    f_rabbit_grilled: 'f_rabbit_banana',
    f_shrimp_grilled: 'f_shrimp_banana',
    f_tentacle_grilled: 'f_tentacle_banana',
  },
  f_banana_berry: {},
  f_banana_coconut: {},
  f_berry: {
    f_banana: 'f_banana_berry',
    t_hammer: 'f_juice_berry',
    c_meat: 'f_meat_berry',
    f_chicken_grilled: 'f_chicken_berry',
    f_coconut_eatable: 'f_coco_berry',
    f_mango: 'f_mango_berry',
    f_pineapple: 'f_pineapple_berry',
    f_rabbit_grilled: 'f_rabbit_berry',
    f_shrimp_grilled: 'f_shrimp_berry',
  },
  f_bottle_banana: {},
  f_bottle_berry: {},
  f_bottle_coco: {},
  f_bottle_mango: {},
  f_bottle_pineapple: {},
  f_bottle_water: {
    f_banana: 'f_bottle_banana',
  },
  f_carrot: {
    c_bag: 'c_bag_carrots',
    t_hammer: 'f_juice_carrot',
    c_meat: 'f_meat_carrot',
    f_chicken_grilled: 'f_chicken_carrot',
    f_crab_grilled: 'f_crab_carrot',
    f_fish_grilled: 'f_fish_carrot',
    f_rabbit_grilled: 'f_rabbit_carrot',
    f_shrimp_grilled: 'f_shrimp_carrot',
    f_tentacle_grilled: 'f_tentacle_carrot',
  },
  f_chicken: {
    t_pan_hot: 'f_chicken_grilled',
  },
  f_chicken_banana: {},
  f_chicken_berry: {},
  f_chicken_carrot: {},
  f_chicken_coconut: {},
  f_chicken_grilled: {
    f_banana: 'f_chicken_banana',
    f_berry: 'f_chicken_berry',
    f_carrot: 'f_chicken_carrot',
    f_coconut_eatable: 'f_chicken_coconut',
    f_mango: 'f_chicken_mango',
    f_mushroom: 'f_chicken_mushroom',
    f_pineapple: 'f_chicken_pineapple',
  },
  f_chicken_mango: {},
  f_chicken_mushroom: {},
  f_chicken_pineapple: {},
  f_coco_berry: {},
  f_coco_mango: {},
  f_coco_pineapple: {},
  f_coco_salmon: {},
  f_coconut_eatable: {
    t_knife: 'c_coconut_opened',
    f_berry: 'f_coco_berry',
    f_mango: 'f_coco_mango',
    f_pineapple: 'f_coco_pineapple',
    f_salmon_smoked: 'f_coco_salmon',
    f_chicken_grilled: 'f_chicken_coconut',
    f_crab_grilled: 'f_crab_coconut',
    f_fish_grilled: 'f_fish_coconut',
    f_rabbit_grilled: 'f_rabbit_cononut',
    f_shrimp_grilled: 'f_shrimp_coconut',
    f_tentacle_grilled: 'f_tentacle_coconut',
  },
  f_cod_grilled: {},
  f_crab_banana: {},
  f_crab_carrot: {},
  f_crab_coconut: {},
  f_crab_grilled: {
    f_banana: 'f_crab_banana',
    f_carrot: 'f_crab_carrot',
    f_coconut_eatable: 'f_crab_coconut',
    f_mushroom: 'f_crab_mushroom',
  },
  f_crab_mushroom: {},
  f_drink_cold: {},
  f_egg_broken: {
    t_pan_hot: 'f_egg_cooked',
  },
  f_egg_cooked: {
    f_eggs_fish: 'f_eggs_mimosa_fish',
    f_shrimp_grilled: 'f_shrimp_mimosa',
  },
  f_eggs_fish: {
    f_egg_cooked: 'f_eggs_mimosa_fish',
    f_sheet_seaweed: 'f_eggs_maki',
  },
  f_eggs_maki: {},
  f_eggs_mimosa_fish: {},
  f_energy_drink_100: {},
  f_energy_drink_150: {},
  f_energy_drink_300: {},
  f_energy_drink_50: {},
  f_energy_drink_75: {},
  f_fish_banana: {},
  f_fish_carrot: {},
  f_fish_coconut: {},
  f_fish_grilled: {
    f_banana: 'f_fish_banana',
    f_carrot: 'f_fish_carrot',
    f_mushroom: 'f_fish_mushroom',
    f_coconut_eatable: 'f_fish_coconut',
  },
  f_fish_maki: {},
  f_fish_mushroom: {},
  f_ham_smoked: {},
  f_honey: {},
  f_juice_berry: {
    r_sun: 'f_sugar',
    c_bottle: 'f_bottle_berry',
  },
  f_juice_carrot: {
    r_sun: 'f_sugar',
  },
  f_juice_mango: {
    r_sun: 'f_sugar',
    c_bottle: 'f_bottle_mango',
  },
  f_juice_pinapple: {
    r_sun: 'f_sugar',
    c_bottle: 'f_bottle_pineapple',
  },
  f_mango: {
    f_banana: 'f_mango_banana',
    f_berry: 'f_mango_berry',
    f_pineapple: 'f_mango_pineapple',
    t_hammer: 'f_juice_mango',
    c_meat: 'f_meat_mango',
    f_chicken_grilled: 'f_chicken_mango',
    f_coconut_eatable: 'f_coco_mango',
    f_rabbit_grilled: 'f_rabbit_mango',
    f_shrimp_grilled: 'f_shrimp_mango',
  },
  f_mango_banana: {},
  f_mango_berry: {},
  f_mango_pineapple: {},
  f_meat_banana: {},
  f_meat_berry: {},
  f_meat_carrot: {},
  f_meat_grilled: {},
  f_meat_mango: {},
  f_meat_mushroom: {},
  f_meat_pineapple: {},
  f_mushroom: {
    c_meat: 'f_meat_mushroom',
    f_chicken_grilled: 'f_chicken_mushroom',
    f_crab_grilled: 'f_crab_mushroom',
    f_fish_grilled: 'f_fish_mushroom',
    f_omelette: 'f_omelette_mushroom',
    f_rabbit_grilled: 'f_rabbit_mushroom',
    f_shrimp_grilled: 'f_shrimp_mushroom',
    f_tentacle_grilled: 'f_tentacle_mushroom',
  },
  f_omelette: {
    f_mushroom: 'f_omelette_mushroom',
  },
  f_omelette_mushroom: {},
  f_oyster_open: {},
  f_pineapple: {
    f_banana: 'f_pineapple_banana',
    f_berry: 'f_pineapple_berry',
    f_rabbit_grilled: 'f_rabbit_pineapple',
    t_hammer: 'f_juice_pinapple',
    c_meat: 'f_meat_pineapple',
    f_chicken_grilled: 'f_chicken_pineapple',
    f_coconut_eatable: 'f_coco_pineapple',
    f_mango: 'f_mango_pineapple',
    f_shrimp_grilled: 'f_shrimp_pineapple',
  },
  f_pineapple_banana: {},
  f_pineapple_berry: {},
  f_rabbit_banana: {},
  f_rabbit_berry: {},
  f_rabbit_carrot: {},
  f_rabbit_cononut: {},
  f_rabbit_grilled: {
    f_banana: 'f_rabbit_banana',
    f_berry: 'f_rabbit_berry',
    f_carrot: 'f_rabbit_carrot',
    f_coconut_eatable: 'f_rabbit_cononut',
    f_mango: 'f_rabbit_mango',
    f_mushroom: 'f_rabbit_mushroom',
    f_pineapple: 'f_rabbit_pineapple',
  },
  f_rabbit_mango: {},
  f_rabbit_mushroom: {},
  f_rabbit_pineapple: {},
  f_salmon_maki: {},
  f_salmon_smoked: {
    f_coconut_eatable: 'f_coco_salmon',
    f_sheet_seaweed: 'f_salmon_maki',
  },
  f_shark_steak_grilled: {},
  f_sheet_seaweed: {
    f_salmon_smoked: 'f_salmon_maki',
    f_eggs_fish: 'f_eggs_maki',
    c_fish: 'f_fish_maki',
  },
  f_shellfish_grilled: {},
  f_shellfish_open: {
    t_pan_hot: 'f_shellfish_grilled',
  },
  f_shrimp: {
    t_pan_hot: 'f_shrimp_grilled',
  },
  f_shrimp_banana: {},
  f_shrimp_berry: {},
  f_shrimp_carrot: {},
  f_shrimp_coconut: {},
  f_shrimp_grilled: {
    f_banana: 'f_shrimp_banana',
    f_berry: 'f_shrimp_berry',
    f_carrot: 'f_shrimp_carrot',
    f_coconut_eatable: 'f_shrimp_coconut',
    f_mango: 'f_shrimp_mango',
    f_egg_cooked: 'f_shrimp_mimosa',
    f_mushroom: 'f_shrimp_mushroom',
    f_pineapple: 'f_shrimp_pineapple',
  },
  f_shrimp_mango: {},
  f_shrimp_mimosa: {},
  f_shrimp_mushroom: {},
  f_shrimp_pineapple: {},
  f_skewer_grilled: {},
  f_sugar: {},
  f_tentacle: {
    x_campfire: 'f_tentacle_grilled',
  },
  f_tentacle_banana: {},
  f_tentacle_carrot: {},
  f_tentacle_coconut: {},
  f_tentacle_grilled: {
    f_banana: 'f_tentacle_banana',
    f_carrot: 'f_tentacle_carrot',
    f_coconut_eatable: 'f_tentacle_coconut',
    f_mushroom: 'f_tentacle_mushroom',
  },
  f_tentacle_mushroom: {},
  f_turnip: {},
  f_urchin_open: {},
  f_water: {
    c_jar: 'f_water_jar',
    c_mud: 'c_water_dirty',
    c_bandage: 'c_bandage_water',
    r_guano: 'c_nitrate_potassium',
    c_barrel: 'c_barrel_water',
    c_bucket: 'c_bucket_water',
    c_shoot: ['c_flower', 'f_carrot', 'f_turnip'],
    c_fiber: 'c_paper',
    c_bottle: 'f_bottle_water',
  },
  f_water_coconut: {
    t_pan_hot: 'c_steam',
    c_bottle: 'f_bottle_coco',
  },
  f_water_jar: {
    c_cube_ice: 'f_drink_cold',
    c_fish: 'c_aquarius_blue',
    c_ink: 's_hair_black',
    c_dye_yellow: 's_hair_blond',
    c_dye_blue: 's_hair_blue',
    c_dye_orange: 's_hair_ginger',
    c_dye_green: 's_hair_green',
    c_dye_purple: 's_hair_purple',
  },
  s_hair_black: {},
  s_hair_blond: {},
  s_hair_blue: {},
  s_hair_brown: {},
  s_hair_ginger: {},
  s_hair_green: {},
  s_hair_pink: {},
  s_hair_purple: {},
  'u_#1_haircut': {},
  'u_#2_haircut': {},
  'u_#3_haircut': {},
  'u_#4_haircut': {},
  'u_#5_haircut': {},
  'u_#6_haircut': {},
  'u_#7_haircut': {},
  u_bracelet_black_leather: {},
  u_bracelet_blue_leather: {},
  u_bracelet_coral: {},
  u_bracelet_gold_diamond: {},
  u_bracelet_gold_emerald: {},
  u_bracelet_gold_ruby: {},
  u_bracelet_gold_saphir: {},
  u_bracelet_iron_diamond: {},
  u_bracelet_iron_emerald: {},
  u_bracelet_iron_ruby: {},
  u_bracelet_iron_saphir: {},
  u_bracelet_leather: {},
  u_bracelet_red_leather: {},
  u_eyepatch_black_leather: {},
  u_eyepatch_blue_leather: {},
  u_eyepatch_leather: {},
  u_eyepatch_red_leather: {},
  u_glasses_luna_gold: {
    c_smoke: 'u_glasses_luna_gold_sun',
  },
  u_glasses_luna_gold_sun: {},
  u_glasses_luna_silver: {
    c_smoke: 'u_glasses_luna_silver_sun',
  },
  u_glasses_luna_silver_sun: {},
  u_glasses_round_gold: {
    c_smoke: 'u_glasses_round_gold_sun',
  },
  u_glasses_round_gold_sun: {},
  u_glasses_round_silver: {
    c_smoke: 'u_glasses_round_silver_sun',
  },
  u_glasses_round_silver_pink: {},
  u_glasses_round_silver_sun: {},
  u_glasses_square_gold: {
    c_smoke: 'u_glasses_square_gold_sun',
  },
  u_glasses_square_gold_sun: {},
  u_glasses_square_silver: {
    c_smoke: 'u_glasses_square_silver_sun',
  },
  u_glasses_square_silver_sun: {},
  u_glasses_sun: {},
  u_glasses_wood: {
    c_smoke: 'u_glasses_sun',
  },
  u_loincloth_black: {},
  u_loincloth_blue: {},
  u_loincloth_green: {},
  u_loincloth_leaf: {},
  u_loincloth_leather: {},
  u_loincloth_leather_black: {},
  u_loincloth_leather_blue: {},
  u_loincloth_leather_green: {},
  u_loincloth_leather_orange: {},
  u_loincloth_leather_purple: {},
  u_loincloth_leather_red: {},
  u_loincloth_leather_yellow: {},
  u_loincloth_orange: {},
  u_loincloth_purple: {},
  u_loincloth_red: {},
  u_loincloth_simple: {},
  u_loincloth_yellow: {},
  u_mask: {},
  u_necklace_coral: {},
  u_necklace_flower: {},
  u_necklace_hibiscus: {},
  u_necklace_shark: {},
  u_pet_bat_0: {},
  u_pet_bat_1: {},
  u_pet_bat_2: {},
  u_pet_bat_3: {},
  u_pet_bat_4: {},
  u_pet_bat_5: {},
  u_pet_bat_6: {},
  u_pet_bat_7: {},
  u_pet_bat_8: {},
  u_pet_monkey_0: {},
  u_pet_monkey_1: {},
  u_pet_monkey_2: {},
  u_pet_monkey_3: {},
  u_pet_monkey_4: {},
  u_pet_monkey_5: {},
  u_pet_monkey_6: {},
  u_pet_monkey_7: {},
  u_pet_monkey_8: {},
  u_pet_turtle_0: {},
  u_pet_turtle_1: {},
  u_pet_turtle_2: {},
  u_pet_turtle_3: {},
  u_pet_turtle_4: {},
  u_pet_turtle_5: {},
  u_pet_turtle_6: {},
  u_pet_turtle_7: {},
  u_pet_turtle_8: {},
  u_scissors: {
    c_leather_black_cut: 'c_strip_black_leather',
    c_leather_blue_cut: 'c_strip_blue_leather',
    c_leather_cut: 'c_strip_leather',
    c_leather_red_cut: 'c_strip_red_leather',
  },
  u_shirt_black_rope: {},
  u_shirt_flowers_blue: {},
  u_shirt_flowers_red: {},
  u_shirt_flowers_yellow: {},
  u_shirt_suit: {},
  u_short_black_jean: {},
  u_short_blue_jean: {},
  u_short_brown: {},
  u_short_fall: {},
  u_short_grey_jean: {},
  u_short_khaki: {},
  u_short_light_jean: {},
  u_short_purple: {},
  u_short_red: {},
  u_short_yellow: {},
  u_tshirt_bee: {},
  u_tshirt_black: {},
  'u_tshirt_black_&_cyan': {},
  'u_tshirt_black_&_pink': {},
  u_tshirt_blue: {},
  'u_tshirt_blue_&_black': {},
  u_tshirt_blue_flower: {},
  u_tshirt_bunniiies: {},
  u_tshirt_checkered: {},
  u_tshirt_classy: {},
  u_tshirt_clover: {},
  u_tshirt_cut: {},
  u_tshirt_cyan: {},
  'u_tshirt_cyan_&_white': {},
  u_tshirt_emoji: {},
  u_tshirt_explorer: {},
  u_tshirt_fall: {},
  u_tshirt_fish: {},
  u_tshirt_green: {},
  'u_tshirt_green_&_white': {},
  u_tshirt_island: {},
  u_tshirt_orange: {},
  'u_tshirt_orange_&_white': {},
  u_tshirt_pink: {},
  u_tshirt_pink_anchor: {},
  u_tshirt_purple: {},
  'u_tshirt_purple_&_black': {},
  'u_tshirt_purple_&_orange': {},
  u_tshirt_red: {},
  'u_tshirt_red_&_green': {},
  'u_tshirt_red_&_white': {},
  u_tshirt_sailor: {},
  u_tshirt_star: {},
  u_tshirt_white: {},
  'u_tshirt_white_&_pink': {},
  'u_tshirt_white_&_red': {},
  'u_tshirt_white_&_yellow': {},
  u_tshirt_yellow: {},
  'u_tshirt_yellow_&_black': {},
  'u_tshirt_yellow_&_blue': {},
  u_tshirt_zero_one: {},
  x_bunniiies: {},
  x_campfire: {
    f_tentacle: 'f_tentacle_grilled',
    r_water_salted: 'c_steam',
    c_pan: 't_pan_hot',
    c_wall_brick: 'x_oven_brick',
    c_wall_cob: 'x_oven',
    c_skewer: 'f_skewer_grilled',
    c_cod: 'f_cod_grilled',
  },
  x_dyg: {},
  x_frame: {},
  x_gold: {},
  x_lighter: {},
  x_oven: {
    c_stone_iron: 'c_iron_hot',
    c_stone_gold: 'c_gold_molten',
    r_sand: 'c_glass',
    c_mortar: 'c_brick',
  },
  x_oven_brick: {
    c_stone_iron: 'c_iron_molten',
  },
  x_photo: {
    c_window: 'x_frame',
  },
  x_swing: {},
  x_ukulele: {},
  p_anchor: {},
  p_boat: {},
  p_boat_small: {},
  p_button: {},
  p_engine: {
    p_propeller: 'c_fan',
  },
  p_filter_water: {
    r_water_salted: 'f_water',
  },
  p_hammock: {},
  p_home: {},
  p_key_telegraph: {},
  p_lantern: {},
  p_powder_black: {
    c_tube: 'c_firefly',
  },
  p_propeller: {
    p_engine: 'c_fan',
  },
  p_radio: {},
  p_sailing_boat: {},
  p_salad_fruit: {},
  p_speaker: {},
  p_spyglass: {},
  p_tent: {},
  p_tent_leather: {},
  p_turbine_wind: {
    r_wind: 'c_electricity',
  },
  "p_wheel_ship's": {},
};

function symmetrify() {
  for (const a in items) {
    for (const b in items[a as Item]) {
      if (!(a in items[b as Item])) items[b as Item][a as Item] = items[a as Item][b as Item];
    }
  }
  console.log(items);
}
symmetrify();
