// data0.counters.map(c => c.def)
export type Item =
  | 'r_battery_empty'
  | 'r_guano'
  | 'r_magnet'
  | 'r_palm'
  | 'r_rocks'
  | 'r_sand'
  | 'r_shells'
  | 'r_soil'
  | 'r_stone'
  | 'r_sulfur'
  | 'r_sun'
  | 'r_water_salted'
  | 'r_wind'
  | 'r_wire_electric'
  | 'h_box_plan'
  | 'h_brassiere_blue'
  | 'h_brassiere_green'
  | 'h_cloth'
  | 'h_clue'
  | 'h_combi'
  | 'h_micro'
  | 'h_pack_breeder'
  | 'h_pack_islander'
  | 'h_pack_paradise'
  | 'h_pack_starter'
  | 'h_pearls_10'
  | 'h_pearls_200'
  | 'h_pearls_35'
  | 'h_pearls_70'
  | 'h_pet_common'
  | 'h_pet_epic'
  | 'h_pet_rare'
  | 't_axe'
  | 't_bow'
  | 't_hammer'
  | 't_knife'
  | 't_pan_hot'
  | 't_pickaxe'
  | 't_rod_fishing'
  | 't_rod_fishing'
  | 't_shovel'
  | 't_spear'
  | 'c_aquarius_blue'
  | 'c_arrow_broken'
  | 'c_arrow_diamond'
  | 'c_arrow_gold'
  | 'c_arrow_iron'
  | 'c_arrow_stone'
  | 'c_bag'
  | 'c_bag_carrots'
  | 'c_bandage'
  | 'c_bandage_blood'
  | 'c_bandage_resin'
  | 'c_bandage_water'
  | 'c_bark'
  | 'c_bark_crushed'
  | 'c_barrel'
  | 'c_barrel_water'
  | 'c_battery_charged'
  | 'c_bee'
  | 'c_belt'
  | 'c_blood'
  | 'c_board'
  | 'c_board_folded'
  | 'c_board_studded'
  | 'c_bone_fish'
  | 'c_bottle'
  | 'c_bottle_message'
  | 'c_box'
  | 'c_box_fish'
  | 'c_branch'
  | 'c_brick'
  | 'c_bucket'
  | 'c_bucket_water'
  | 'c_buoy'
  | 'c_carbonate_calcium'
  | 'c_castle_sand'
  | 'c_chest_blue_locked'
  | 'c_chest_green_locked'
  | 'c_chest_red_locked'
  | 'c_cigar'
  | 'c_coal'
  | 'c_cob'
  | 'c_coconut'
  | 'c_coconut_opened'
  | 'c_cod'
  | 'c_coil'
  | 'c_compass'
  | 'c_coral'
  | 'c_cork'
  | 'c_crab'
  | 'c_cracker_bat'
  | 'c_cracker_monkey'
  | 'c_cracker_turtle'
  | 'c_cube_ice'
  | 'c_diamond'
  | 'c_door'
  | 'c_drop_oil'
  | 'c_dye_blue'
  | 'c_dye_green'
  | 'c_dye_orange'
  | 'c_dye_purple'
  | 'c_dye_yellow'
  | 'c_egg'
  | 'c_electricity'
  | 'c_emerald'
  | 'c_fan'
  | 'c_feather'
  | 'c_fiber'
  | 'c_fire'
  | 'c_firefly'
  | 'c_fish'
  | 'c_fishnet'
  | 'c_flower'
  | 'c_glass'
  | 'c_gold_molten'
  | 'c_grip'
  | 'c_handle'
  | 'c_hibiscus'
  | 'c_hive'
  | 'c_hourglass'
  | 'c_ink'
  | 'c_insect_blue'
  | 'c_insect_yellow'
  | 'c_iron_hot'
  | 'c_iron_molten'
  | 'c_jar'
  | 'c_jellyfish'
  | 'c_key_blue'
  | 'c_key_green'
  | 'c_key_red'
  | 'c_larva'
  | 'c_leaf'
  | 'c_leaf_dried'
  | 'c_leather'
  | 'c_leather_black_cut'
  | 'c_leather_blue_cut'
  | 'c_leather_cut'
  | 'c_leather_green_cut'
  | 'c_leather_orange_cut'
  | 'c_leather_purple_cut'
  | 'c_leather_red_cut'
  | 'c_leather_yellow_cut'
  | 'c_leg_rabbit'
  | 'c_letter'
  | 'c_loam'
  | 'c_meat'
  | 'c_mold_nail'
  | 'c_mold_ring'
  | 'c_mortar'
  | 'c_mud'
  | 'c_nail'
  | 'c_net'
  | 'c_nitrate_potassium'
  | 'c_oar'
  | 'c_octopus_dead'
  | 'c_off_bulb'
  | 'c_on_bulb'
  | 'c_oyster'
  | 'c_pan'
  | 'c_panel_wood'
  | 'c_paper'
  | 'c_parrot_dead'
  | 'c_peak_wood'
  | 'c_pearl'
  | 'c_pen'
  | 'c_pen_red'
  | 'c_pig_dead'
  | 'c_pillow'
  | 'c_pipe'
  | 'c_plate'
  | 'c_plate_iron'
  | 'c_rabbit_dead'
  | 'c_resin'
  | 'c_ring_gold'
  | 'c_ring_iron'
  | 'c_rod_larva_fishing'
  | 'c_rod_silkworm_fishing'
  | 'c_rope'
  | 'c_rubis'
  | 'c_salt'
  | 'c_sandpaper'
  | 'c_saphir'
  | 'c_seaweed'
  | 'c_seed_germinated'
  | 'c_shark'
  | 'c_shark_steak'
  | 'c_shark_teeth'
  | 'c_shellfish'
  | 'c_shoot'
  | 'c_silkworm'
  | 'c_skewer'
  | 'c_smoke'
  | 'c_soap'
  | 'c_spike'
  | 'c_spring'
  | 'c_steam'
  | 'c_stone_cut'
  | 'c_stone_diamond'
  | 'c_stone_gold'
  | 'c_stone_iron'
  | 'c_stone_polished'
  | 'c_stone_polished_black'
  | 'c_stone_polished_blue'
  | 'c_stone_polished_red'
  | 'c_strip_black_leather'
  | 'c_strip_blue_leather'
  | 'c_strip_leather'
  | 'c_strip_red_leather'
  | 'c_theard_needle'
  | 'c_thread'
  | 'c_thread_spool'
  | 'c_tire'
  | 'c_torch'
  | 'c_torch_lit'
  | 'c_trunk'
  | 'c_tube'
  | 'c_urchin_sea'
  | 'c_volleyball'
  | 'c_wall_brick'
  | 'c_wall_cob'
  | 'c_water_dirty'
  | 'c_weaving'
  | 'c_weaving_black'
  | 'c_weaving_blue'
  | 'c_weaving_green'
  | 'c_weaving_leaf'
  | 'c_weaving_orange'
  | 'c_weaving_purple'
  | 'c_weaving_red'
  | 'c_weaving_yellow'
  | 'c_wilson'
  | 'c_window'
  | 'c_window_metal'
  | 'c_wood'
  | 'c_wool'
  | 'f_banana'
  | 'f_banana_berry'
  | 'f_banana_coconut'
  | 'f_berry'
  | 'f_bottle_banana'
  | 'f_bottle_berry'
  | 'f_bottle_coco'
  | 'f_bottle_mango'
  | 'f_bottle_pineapple'
  | 'f_bottle_water'
  | 'f_carrot'
  | 'f_chicken'
  | 'f_chicken_banana'
  | 'f_chicken_berry'
  | 'f_chicken_carrot'
  | 'f_chicken_coconut'
  | 'f_chicken_grilled'
  | 'f_chicken_mango'
  | 'f_chicken_mushroom'
  | 'f_chicken_pineapple'
  | 'f_coco_berry'
  | 'f_coco_mango'
  | 'f_coco_pineapple'
  | 'f_coco_salmon'
  | 'f_coconut_eatable'
  | 'f_cod_grilled'
  | 'f_crab_banana'
  | 'f_crab_carrot'
  | 'f_crab_coconut'
  | 'f_crab_grilled'
  | 'f_crab_mushroom'
  | 'f_drink_cold'
  | 'f_egg_broken'
  | 'f_egg_cooked'
  | 'f_eggs_fish'
  | 'f_eggs_maki'
  | 'f_eggs_mimosa_fish'
  | 'f_energy_drink_100'
  | 'f_energy_drink_150'
  | 'f_energy_drink_300'
  | 'f_energy_drink_50'
  | 'f_energy_drink_75'
  | 'f_fish_banana'
  | 'f_fish_carrot'
  | 'f_fish_coconut'
  | 'f_fish_grilled'
  | 'f_fish_maki'
  | 'f_fish_mushroom'
  | 'f_ham_smoked'
  | 'f_honey'
  | 'f_juice_berry'
  | 'f_juice_carrot'
  | 'f_juice_mango'
  | 'f_juice_pinapple'
  | 'f_mango'
  | 'f_mango_banana'
  | 'f_mango_berry'
  | 'f_mango_pineapple'
  | 'f_meat_banana'
  | 'f_meat_berry'
  | 'f_meat_carrot'
  | 'f_meat_grilled'
  | 'f_meat_mango'
  | 'f_meat_mushroom'
  | 'f_meat_pineapple'
  | 'f_mushroom'
  | 'f_omelette'
  | 'f_omelette_mushroom'
  | 'f_oyster_open'
  | 'f_pineapple'
  | 'f_pineapple_banana'
  | 'f_pineapple_berry'
  | 'f_rabbit_banana'
  | 'f_rabbit_berry'
  | 'f_rabbit_carrot'
  | 'f_rabbit_cononut'
  | 'f_rabbit_grilled'
  | 'f_rabbit_mango'
  | 'f_rabbit_mushroom'
  | 'f_rabbit_pineapple'
  | 'f_salmon_maki'
  | 'f_salmon_smoked'
  | 'f_shark_steak_grilled'
  | 'f_sheet_seaweed'
  | 'f_shellfish_grilled'
  | 'f_shellfish_open'
  | 'f_shrimp'
  | 'f_shrimp_banana'
  | 'f_shrimp_berry'
  | 'f_shrimp_carrot'
  | 'f_shrimp_coconut'
  | 'f_shrimp_grilled'
  | 'f_shrimp_mango'
  | 'f_shrimp_mimosa'
  | 'f_shrimp_mushroom'
  | 'f_shrimp_pineapple'
  | 'f_skewer_grilled'
  | 'f_sugar'
  | 'f_tentacle'
  | 'f_tentacle_banana'
  | 'f_tentacle_carrot'
  | 'f_tentacle_coconut'
  | 'f_tentacle_grilled'
  | 'f_tentacle_mushroom'
  | 'f_turnip'
  | 'f_urchin_open'
  | 'f_water'
  | 'f_water_coconut'
  | 'f_water_jar'
  | 's_hair_black'
  | 's_hair_blond'
  | 's_hair_blue'
  | 's_hair_brown'
  | 's_hair_ginger'
  | 's_hair_green'
  | 's_hair_pink'
  | 's_hair_purple'
  | 'u_#1_haircut'
  | 'u_#2_haircut'
  | 'u_#3_haircut'
  | 'u_#4_haircut'
  | 'u_#5_haircut'
  | 'u_#6_haircut'
  | 'u_#7_haircut'
  | 'u_bracelet_black_leather'
  | 'u_bracelet_blue_leather'
  | 'u_bracelet_coral'
  | 'u_bracelet_gold_diamond'
  | 'u_bracelet_gold_emerald'
  | 'u_bracelet_gold_ruby'
  | 'u_bracelet_gold_saphir'
  | 'u_bracelet_iron_diamond'
  | 'u_bracelet_iron_emerald'
  | 'u_bracelet_iron_ruby'
  | 'u_bracelet_iron_saphir'
  | 'u_bracelet_leather'
  | 'u_bracelet_red_leather'
  | 'u_eyepatch_black_leather'
  | 'u_eyepatch_blue_leather'
  | 'u_eyepatch_leather'
  | 'u_eyepatch_red_leather'
  | 'u_glasses_luna_gold'
  | 'u_glasses_luna_gold_sun'
  | 'u_glasses_luna_silver'
  | 'u_glasses_luna_silver_sun'
  | 'u_glasses_round_gold'
  | 'u_glasses_round_gold_sun'
  | 'u_glasses_round_silver'
  | 'u_glasses_round_silver_pink'
  | 'u_glasses_round_silver_sun'
  | 'u_glasses_square_gold'
  | 'u_glasses_square_gold_sun'
  | 'u_glasses_square_silver'
  | 'u_glasses_square_silver_sun'
  | 'u_glasses_sun'
  | 'u_glasses_wood'
  | 'u_loincloth_black'
  | 'u_loincloth_blue'
  | 'u_loincloth_green'
  | 'u_loincloth_leaf'
  | 'u_loincloth_leather'
  | 'u_loincloth_leather_black'
  | 'u_loincloth_leather_blue'
  | 'u_loincloth_leather_green'
  | 'u_loincloth_leather_orange'
  | 'u_loincloth_leather_purple'
  | 'u_loincloth_leather_red'
  | 'u_loincloth_leather_yellow'
  | 'u_loincloth_orange'
  | 'u_loincloth_purple'
  | 'u_loincloth_red'
  | 'u_loincloth_simple'
  | 'u_loincloth_yellow'
  | 'u_mask'
  | 'u_necklace_coral'
  | 'u_necklace_flower'
  | 'u_necklace_hibiscus'
  | 'u_necklace_shark'
  | 'u_pet_bat_0'
  | 'u_pet_bat_1'
  | 'u_pet_bat_2'
  | 'u_pet_bat_3'
  | 'u_pet_bat_4'
  | 'u_pet_bat_5'
  | 'u_pet_bat_6'
  | 'u_pet_bat_7'
  | 'u_pet_bat_8'
  | 'u_pet_monkey_0'
  | 'u_pet_monkey_1'
  | 'u_pet_monkey_2'
  | 'u_pet_monkey_3'
  | 'u_pet_monkey_4'
  | 'u_pet_monkey_5'
  | 'u_pet_monkey_6'
  | 'u_pet_monkey_7'
  | 'u_pet_monkey_8'
  | 'u_pet_turtle_0'
  | 'u_pet_turtle_1'
  | 'u_pet_turtle_2'
  | 'u_pet_turtle_3'
  | 'u_pet_turtle_4'
  | 'u_pet_turtle_5'
  | 'u_pet_turtle_6'
  | 'u_pet_turtle_7'
  | 'u_pet_turtle_8'
  | 'u_scissors'
  | 'u_shirt_black_rope'
  | 'u_shirt_flowers_blue'
  | 'u_shirt_flowers_red'
  | 'u_shirt_flowers_yellow'
  | 'u_shirt_suit'
  | 'u_short_black_jean'
  | 'u_short_blue_jean'
  | 'u_short_brown'
  | 'u_short_fall'
  | 'u_short_grey_jean'
  | 'u_short_khaki'
  | 'u_short_light_jean'
  | 'u_short_purple'
  | 'u_short_red'
  | 'u_short_yellow'
  | 'u_tshirt_bee'
  | 'u_tshirt_black'
  | 'u_tshirt_black_&_cyan'
  | 'u_tshirt_black_&_pink'
  | 'u_tshirt_blue'
  | 'u_tshirt_blue_&_black'
  | 'u_tshirt_blue_flower'
  | 'u_tshirt_bunniiies'
  | 'u_tshirt_checkered'
  | 'u_tshirt_classy'
  | 'u_tshirt_clover'
  | 'u_tshirt_cut'
  | 'u_tshirt_cyan'
  | 'u_tshirt_cyan_&_white'
  | 'u_tshirt_emoji'
  | 'u_tshirt_explorer'
  | 'u_tshirt_fall'
  | 'u_tshirt_fish'
  | 'u_tshirt_green'
  | 'u_tshirt_green_&_white'
  | 'u_tshirt_island'
  | 'u_tshirt_orange'
  | 'u_tshirt_orange_&_white'
  | 'u_tshirt_pink'
  | 'u_tshirt_pink_anchor'
  | 'u_tshirt_purple'
  | 'u_tshirt_purple_&_black'
  | 'u_tshirt_purple_&_orange'
  | 'u_tshirt_red'
  | 'u_tshirt_red_&_green'
  | 'u_tshirt_red_&_white'
  | 'u_tshirt_sailor'
  | 'u_tshirt_star'
  | 'u_tshirt_white'
  | 'u_tshirt_white_&_pink'
  | 'u_tshirt_white_&_red'
  | 'u_tshirt_white_&_yellow'
  | 'u_tshirt_yellow'
  | 'u_tshirt_yellow_&_black'
  | 'u_tshirt_yellow_&_blue'
  | 'u_tshirt_zero_one'
  | 'x_bunniiies'
  | 'x_campfire'
  | 'x_dyg'
  | 'x_frame'
  | 'x_gold'
  | 'x_lighter'
  | 'x_oven'
  | 'x_oven_brick'
  | 'x_photo'
  | 'x_swing'
  | 'x_ukulele'
  | 'p_anchor'
  | 'p_boat'
  | 'p_boat_small'
  | 'p_button'
  | 'p_engine'
  | 'p_filter_water'
  | 'p_hammock'
  | 'p_home'
  | 'p_key_telegraph'
  | 'p_lantern'
  | 'p_powder_black'
  | 'p_propeller'
  | 'p_radio'
  | 'p_sailing_boat'
  | 'p_salad_fruit'
  | 'p_speaker'
  | 'p_spyglass'
  | 'p_tent'
  | 'p_tent_leather'
  | 'p_turbine_wind'
  | "p_wheel_ship's";
