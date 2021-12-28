import { colors } from "./colors";

export const cases = [
    {
        id: 1,
        name: 'Пляжный кейс',
        price: 2000,
        discountPrice: 1500,
        img: 'https://givedrop.ru/images/case/hellobeatch.png',
        weapons: [
            {
                id: 0,
                name: "AWP",
                skin: "История о драконе",
                price: 146298.9,
                chance: [
                    0,
                    9
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17P7NdTRH-t26q4SZlvD7PYTQgXtu5cB1g_zMu9zw3g2yrkVtZ2r6IoSVdAU-ZVrY_lS6lb_ogsDqu57NmCQ27iJx53nD30vgUTXWscs/130fx97f/image.png"
            },
            {
                id: 1,
                name: "★ Штык-нож M9",
                skin: "Автотроника",
                price: 36152.04,
                chance: [
                    10,
                    31
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-MhMj5aoTTl3Ju6dBlhf3T-oL8i2u5rhc1JjTtcYCWdFI8ZF-E_wXqk-jvhZ-7ucnJy3ZjvCAr5imPlhPigBkZaLY-guveFwuT9UkppQ/130fx97f/image.png"
            },
            {
                id: 2,
                name: "★ Нож Боуи",
                skin: "Зуб тигра",
                price: 17247.99,
                chance: [
                    32,
                    70
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwObaZzRU7dCJlo-cnvLLMrXugmJW7ddOhfvA-4vwt1i9rBsofTj7d9CXJAI8YFyD81S-l-vmgp-06pzMnXJjuyN04i7enECxiB9OOLRxxavJJ9-Xlfw/130fx97f/image.png"
            },
            {
                id: 3,
                name: "★ Shadow Daggers",
                skin: "Градиент",
                price: 14879.22,
                chance: [
                    71,
                    116
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfw-bbeQJD7eOwlYSOqPv9NLPF2G0Gu8Eo2bDApt-g0FXl-UU6NTuhI9SccVU3N1DXqFjsxua-g8W7tMvXiSw0K6R8VrQ/130fx97f/image.png"
            },
            {
                id: 4,
                name: "M4A1-S",
                skin: "Поток информации",
                price: 10230,
                chance: [
                    117,
                    198
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITBhGJf_NZlmOzA-LP5gVO8v11lajzwIIbGcFNrNVjQqFS6lLu5gJW-vMudz3E2uiArsyyIy0Cx0kkZcKUx0mwdWFWI/130fx97f/image.png"
            },
            {
                id: 5,
                name: "AWP",
                skin: "Oni Taiji",
                price: 9215.8,
                chance: [
                    199,
                    298
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJK7dK4jYG0m_7zO6-fk28C65V0ibnEoon00AHj80Jla2qlI9fHIwNqYl3YqVO4wb3pgpK17oOJlyWSYujjQg/130fx97f/image.png"
            },
            {
                id: 6,
                name: "AWP",
                skin: "Азимов",
                price: 7645,
                chance: [
                    299,
                    443
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz56I_OKMyJYcxPSPqFNVfg14jfhDCM7_cotUNTkp-gAKF3otIfBOuUoNdBIHMCDX_SCZF_9uR8w0fJUfpyPpC7n3jOpZDl_eS2fcg/130fx97f/image.png"
            },
            {
                id: 7,
                name: "AK-47",
                skin: "Fuel Injector",
                price: 5951.57,
                chance: [
                    444,
                    689
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV08-jhIWZlP_1IbzUklRc7cF4n-SPpIr33gS1rkJqYGD7J4GQcQY5aFCG-lHrlO650JLv6ZzMziA2vXMgtmGdwULg8tCd0w/130fx97f/image.png"
            },
            {
                id: 8,
                name: "USP-S",
                skin: "Убийство подтверждено",
                price: 4192.24,
                chance: [
                    690,
                    1201
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8j_OrfdqWhe5sN4mOTE8bP4jVC9vh5yYGr7IoWVdABrYQ3Y-1m8xezp0ZTtvpjNmHpguCAhtnndzRW10x9KOvsv26KUE4Zjjg/130fx97f/image.png"
            },
            {
                id: 9,
                name: "SSG 08",
                skin: "Кровь в воде",
                price: 2992.29,
                chance: [
                    1202,
                    2181
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5oJ-TlaAhkZzvRCaFMV8o38QzlHCp8usY6UNHip-1QeQm65YCQZeMvOdoYTsPWCaWDZV__vx5thaMLKpOKqDSvg3pKHSnaBw/130fx97f/image.png"
            },
            {
                id: 10,
                name: "M4A4",
                skin: "Император",
                price: 2110.96,
                chance: [
                    2182,
                    3933
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJTwW09m7hIWZmOXLP7LWnn8fvpRzj72ZoNmsigS1_hdpZDzzIIeVelA2Zl6G_wLoxuvq0MW07c6awWwj5HetHVr5dg/130fx97f/image.png"
            },
            {
                id: 11,
                name: "AK-47",
                skin: "Neon Revolution",
                price: 2090,
                chance: [
                    3934,
                    5712
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV0924lZKIn-7LPr7Vn35cppwl3OyVp9Txi1Gy_0Y9MDjyd4fGJFVsZFGG-gC5xLvo1pfouJ3Bzyd9-n51-K95osI/130fx97f/image.png"
            },
            {
                id: 12,
                name: "M4A1-S",
                skin: "Второй игрок",
                price: 1814.31,
                chance: [
                    5713,
                    7894
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITShWxeupUl0tbN_Iv9nBri_kBtYWv2d9eXcAI6YF6ErFXqkui-1Je-75ucmicyvyggt36InhS3n1gSOc6J6LtH/130fx97f/image.png"
            },
            {
                id: 13,
                name: "Glock-18",
                skin: "Королева пуль",
                price: 1514.57,
                chance: [
                    7895,
                    10652
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79fnzL-cluX5MrLVk2Vu5Mx2gv2P8dWsiQKyrxFoMGj3Io_BcwA6YFDSq1a6lLq91J7o6Z3MzHVhvHFz4GGdwUK867nN7w/130fx97f/image.png"
            },
            {
                id: 14,
                name: "FAMAS",
                skin: "Commemoration",
                price: 1494.35,
                chance: [
                    10653,
                    13456
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf1OD3dzxP7c-JmIWMlvTtDLzemm9u5Mx2gv2Pptil2Qfs80c_YmvxI4DBc1U2YguFqFXrkOe5156_uJ_BnSRjuCkg5WGdwUI61aG_dA/130fx97f/image.png"
            },
            {
                id: 15,
                name: "M4A4",
                skin: "Royal Paladin",
                price: 1058.74,
                chance: [
                    13457,
                    17465
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJTwW0865jYGHqOTlJrLDk1Rc7cF4n-SP8dSm2gHk-UtoZGv7I9DBcVM5ZV_XqFe_lervhsS76sjIyCBhviYg52GdwUI8s6PzHQ/130fx97f/image.png"
            },
            {
                id: 16,
                name: "MAC-10",
                skin: "Неоновый гонщик",
                price: 625.74,
                chance: [
                    17466,
                    23018
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz52NeDkYAhkZzvPAKMPDMo08QfiGy427dVcWdKy_q4LZ1rotNfGMrgqZoxKH8LXXv-EZQmouUk7iKVYLZeKoSPsjH7sbGpYXEH1ujVTXmYdmCw/130fx97f/image.png"
            },
            {
                id: 17,
                name: "MP7",
                skin: "Bloodsport",
                price: 381.55,
                chance: [
                    23019,
                    28935
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFABz7P7YJgJA4NO5kJObmOXgDLfYkWNFpsRz3-qSpdis2AW3rhFvYWn3LISSdgRsYVzR8lC7lOm9gMO_786bwHd9-n51Z2R5ZH4/130fx97f/image.png"
            },
            {
                id: 18,
                name: "USP-S",
                skin: "Кайман",
                price: 1029.11,
                chance: [
                    28936,
                    33043
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5uJ_OKIz5rdwrBBLJhX-AF_wnlBCY818pmUN6j-vVWcV7otIDGNOR6NoxJS8GDUqfSMg7160pr1qJdLMSJqSnn2y7gPGdeRVO1rT_447Kf/130fx97f/image.png"
            },
            {
                id: 19,
                name: "AK-47",
                skin: "Фантомный вредитель",
                price: 861.53,
                chance: [
                    33044,
                    37745
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJenAWu-OmnIGFg_j5DL_YhXlE-NF-mNbN_Iv9nBq3-kc6MDyhcYeSIwJtYAnV-ljrlb3qjJHuv56dmiBq6CV2tiuMnBfln1gSOdwFZ75X/130fx97f/image.png"
            },
            {
                id: 20,
                name: "M4A1-S",
                skin: "Атомный сплав",
                price: 760.45,
                chance: [
                    37746,
                    42822
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz52YOLkDyRufgHMAqVMY_Q3ywW4CHZ_-_hiWNu57oQJO12x49epbuV4aZ0RAcLWX6OGZA2puB1pgqUMLpWBoC671XngOD1ZCEG_rmMAkbDWvORp1mcIAy_njWgGDWs/130fx97f/image.png"
            },
            {
                id: 21,
                name: "Nova",
                skin: "Антиквариат",
                price: 527.62,
                chance: [
                    42823,
                    48650
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz51O_W0DzRyTQrNF6FhXfsu_Rn5DBg_7cNqQdr4rupWfFq6t9bFNeZ4ZNlIHMSEXfLXZV2v7U1t0aFeLpLYoH-53iy9OHBKBURi3EYcOg/130fx97f/image.png"
            },
            {
                id: 22,
                name: "G3SG1",
                skin: "Поток",
                price: 424.35,
                chance: [
                    48651,
                    54603
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZf1OD3dm5R642Jkoyej8jkJqnBmm5u5cB1g_zMu4qn0VbtrkFqY232JoaQJAA-MwqBqQLvwujmgp7o7cjPmCAwvSJ353zD30vgKnwwj7U/130fx97f/image.png"
            },
            {
                id: 23,
                name: "USP-S",
                skin: "Cortex",
                price: 343.55,
                chance: [
                    54604,
                    60423
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8j3Jq_ummJW4NE_376S84-tiwHt_0VqZDzwI47DcVNqaFDZ-gLrxea918S5tJucwSY2uj5iuygjNe-uOA/130fx97f/image.png"
            },
            {
                id: 24,
                name: "MP5-SD",
                skin: "Фосфор",
                price: 321.56,
                chance: [
                    60424,
                    66153
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6rwOANf1OD3fC0X09qzh5SCgfb4DL_Dn3tu5Mx2gv2P9tukiVLkqkRkZzz2cdXBdFM7NV2G-Ae5wOfphMTpvZjMnHBruXN2sGGdwUKk4NUKRA/130fx97f/image.png"
            },
            {
                id: 25,
                name: "Five-SeveN",
                skin: "Обезьянье дело",
                price: 198.83,
                chance: [
                    66154,
                    70700
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz59PfWwIzJxdwr9ArVhWvws8RvpHyI818ViWta49oQLLFi28d_YYbB-N9tJHpGBXvKAYV-p7koxh_RUepyBqH662CS7bj1cWEHjrD1WmvjH5OXENuHjvw/130fx97f/image.png"
            },
            {
                id: 26,
                name: "M4A4",
                skin: "Злобный дайме",
                price: 438.9,
                chance: [
                    70701,
                    76651
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz52YOLkDzRyTQmWAPRhWeMz-DfoCC4_8chcWdKy_q4LZ1jqtYDPN7coY4oaTsXZCfeCMgiv7h0-h_VfKJOMpyvv3SrpPG9cCBb1ujVTu8qYAl4/130fx97f/image.png"
            },
            {
                id: 27,
                name: "Dual Berettas",
                skin: "Подрыв",
                price: 302.39,
                chance: [
                    76652,
                    82278
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJfwPz3ZTxM69mknY6OqP_xMq3I2DkG65Vy0rqQ9Imi2A3kqhE5ZG36doPGclQ8M1_V_wLql-q-gZe7uMvXiSw0fugahP8/130fx97f/image.png"
            },
            {
                id: 28,
                name: "MP7",
                skin: "Океанская пена",
                price: 222.76,
                chance: [
                    82279,
                    87168
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz52JLSKMTpYfRfRCKZHY_c24Q3TBS414NMtVoW1p-xRKFq8toGSZ-IoONtEHsbSU_eDYw786UM5hvUPeZWA9njn2TOpZDn0cNqwCg/130fx97f/image.png"
            },
            {
                id: 29,
                name: "MP7",
                skin: "Особая доставка",
                price: 159.49,
                chance: [
                    87169,
                    91004
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFAR17P7YJgJB4N2lh4mNnvLwDLfYkWNF18lwmO7Eu96m2Va1_UJrZmigJo-SdAQ7aQqG81fswrru0cS57cjPnCExuiNw7HrD30vgmi9Wyhc/130fx97f/image.png"
            },
            {
                id: 30,
                name: "Glock-18",
                skin: "Жернов",
                price: 151.58,
                chance: [
                    91005,
                    94674
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz58OOy2OwhmYzvFDa9dV8o5-wHgDCMN5cJnXcK7ue1Rfwi7s9DGMuQkNt5JH8eCC_WPMwr07ExpgKJbe8CMoCLt3Su_MmkUG028jFNPF2s/130fx97f/image.png"
            },
            {
                id: 31,
                name: "P250",
                skin: "Wingshot",
                price: 115.81,
                chance: [
                    94675,
                    97508
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhoyszYI2gS09-klYOAhP_7J4Tck29Y_cg_3-yXrdij3FDm_ko_N2GhJISWJwZvMl6F-1a5xu7mgcDq7Z3IzXdg7z5iuyj5ZGFXzw/130fx97f/image.png"
            },
            {
                id: 32,
                name: "FAMAS",
                skin: "Нейронная сеть",
                price: 102.33,
                chance: [
                    97509,
                    100000
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz59Ne60IwhmfzvEAK1fT8o--xz_Nio37M52WZm0pL1TfV_rt4vBM-QqM9AdG5TUUv7TMwr07xgx1KRdKcPboCnq2Cm4JC5UDCYRP3AS/130fx97f/image.png"
            }
        ]
    },
    {
        id: 2,
        name: 'Диско кейс',
        price: 110,
        discountPrice: 82,
        img: 'https://givedrop.ru/images/case/discocase.png',
        weapons: [
            {
                id: 33,
                name: "SSG 08",
                skin: "Кровь в воде",
                price: 2992.29,
                chance: [
                    0,
                    31
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5oJ-TlaAhkZzvRCaFMV8o38QzlHCp8usY6UNHip-1QeQm65YCQZeMvOdoYTsPWCaWDZV__vx5thaMLKpOKqDSvg3pKHSnaBw/130fx97f/image.png"
            },
            {
                id: 34,
                name: "MAC-10",
                skin: "Неоновый гонщик",
                price: 625.74,
                chance: [
                    32,
                    252
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz52NeDkYAhkZzvPAKMPDMo08QfiGy427dVcWdKy_q4LZ1rotNfGMrgqZoxKH8LXXv-EZQmouUk7iKVYLZeKoSPsjH7sbGpYXEH1ujVTXmYdmCw/130fx97f/image.png"
            },
            {
                id: 35,
                name: "Galil AR",
                skin: "Щелкунчик",
                price: 495,
                chance: [
                    253,
                    610
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz58Ne-8PDZ1TQfXPqdfUPw2ywnuGyYh4chta9qz87ITJBLrs9TEO7d6MoxKGpaDU6CCMFyovhk81qdafpCJpSi9jyvhPGsCCUHi5CtazzBY6R44/130fx97f/image.png"
            },
            {
                id: 36,
                name: "CZ75-Auto",
                skin: "Виктория",
                price: 413.82,
                chance: [
                    611,
                    1134
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz54LrTgMQhmYzvHFaNWWfEF9xK7XBg_7cNqQdr4oOhXL17us9eTMOItONEZSZaCUvHVYQ_67Eox0aYIKpeKpS7tji3sa3BKBUTzBPd8Hg/130fx97f/image.png"
            },
            {
                id: 37,
                name: "FAMAS",
                skin: "Roll Cage",
                price: 388.82,
                chance: [
                    1135,
                    1733
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf1OD3dzxP7c-JhoGHm-7LPr7Vn35cpsRw3bySrYr03wLsqkE_MTzyLdWdclA9ZlqF_QDowL290JG-7s_IyHV9-n51iAGw7_U/130fx97f/image.png"
            },
            {
                id: 38,
                name: "SSG 08",
                skin: "Большая пушка",
                price: 418.62,
                chance: [
                    1734,
                    2245
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0Ob3Yi5FvISJgIWIn_n9MLrdn39I18h0juDU-MKsjlaxrkFramyhdoDBJ1c_ZVnQ-1G8w7zmhZe4u5_MyXNivCchtHiJgVXp1kzLClVg/130fx97f/image.png"
            },
            {
                id: 39,
                name: "Galil AR",
                skin: "Эко",
                price: 331.57,
                chance: [
                    2246,
                    3085
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz58Ne-8PDZ1TQfXPqdfUPw2yw3vBhg_7cNqQdr4or4EeA_q4ICXZrd4Mo4fGJXXCKKGMFv07kMxgvJVL5WIpi3q3y3qb3BKBUS1IsSPCQ/130fx97f/image.png"
            },
            {
                id: 40,
                name: "FAMAS",
                skin: "Механо-пушка",
                price: 264.46,
                chance: [
                    3086,
                    4419
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf1OD3dzxP7c-JmYWIn_bLP7LWnn8f65cnjrrH9o_22QHirRZuZTuiJ4WXd1NqZluC-Fi-yOy9hsO9tJ3Aymwj5Hdve0dwuA/130fx97f/image.png"
            },
            {
                id: 41,
                name: "ПП-19 Бизон",
                skin: "Азарт",
                price: 251.64,
                chance: [
                    4420,
                    5891
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0Ob3czRY49KJlYyHqP76DLfYkWNFpsEi2-jErNvzjQDg8xFpZmmgctOVdFI4YF-EqwC9xOnq1pG76ZWayyN9-n51Ejfp6Vw/130fx97f/image.png"
            },
            {
                id: 42,
                name: "P250",
                skin: "Франклин",
                price: 148.5,
                chance: [
                    5892,
                    9631
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszFfjNH9eO7kYSCgvq6Z-mHwjIFu8Yl3-3Hotr03QC28ktkYmGnIoXAdARoZVzZ_VW7yeu7jIj84sqiLuLNUw/130fx97f/image.png"
            },
            {
                id: 43,
                name: "Desert Eagle",
                skin: "Пламя",
                price: 26014.4,
                chance: [
                    9632,
                    9637
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLJTjtO7dGzh7-HnvD8J_XVkjoFuMYiiLqUrI-k3le3r0s5amj7d9eTI1I-M1rW-Fm_xO-50Jfvot2XnhS4_w8U/130fx97f/image.png"
            },
            {
                id: 44,
                name: "MP9",
                skin: "Бульдозер",
                price: 1925,
                chance: [
                    9638,
                    9683
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FBRv7OrNfTFN--O-kYGdjrmnNb7Qkm4G7cZ3i7nH8I-n3gXl-0duZDqiJdfDelVqZVzW_1Xowe_om9bi66Howf2G/130fx97f/image.png"
            },
            {
                id: 45,
                name: "FAMAS",
                skin: "Валентность",
                price: 260.9,
                chance: [
                    9684,
                    11054
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0uL3dzxP7c-Jl4-Fg_jhIYTck29Y_cg_0rrEodik0FC38kU5NmqnJICddlc4aAnX-AO3lL2-08C4vp7Ayns1vD5iuygKw238fw/130fx97f/image.png"
            },
            {
                id: 46,
                name: "MAC-10",
                skin: "Last Dive",
                price: 62.96,
                chance: [
                    11055,
                    21241
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0vL3fDxBvYyJgIiOqPv1IK_ukmJH7fp9g-7J4cLwiQDm_RdpMGjxI9OXdQ5oYw2F_Vjsw-u715futZ2cyXFmv3EksS3fgVXp1layEcKi/130fx97f/image.png"
            },
            {
                id: 47,
                name: "Galil AR",
                skin: "Firefight",
                price: 34.08,
                chance: [
                    21242,
                    34918
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczPYgJF7dC_mIGZqP76ML7fk3lQ_MpjteTE8YXghRrt-EZsMW_yIo-XIFNsYwuC_lfqxum9jJG86s_KzCNl6HJ24njUmEO0n1gSOTnyPM8l/130fx97f/image.png"
            },
            {
                id: 48,
                name: "MP9",
                skin: "Хот-род",
                price: 2191.44,
                chance: [
                    34919,
                    34959
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAZu7OHNdQJO5du-gM7bwqb2MeuClTsCv8Ek2LiZ9t2giwa28hVlZGD0doSUIANqYV_U_gC2366x0j0WoURS/130fx97f/image.png"
            },
            {
                id: 49,
                name: "MAC-10",
                skin: "Градиент",
                price: 1086.26,
                chance: [
                    34960,
                    35046
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0vL3dzxG6eO6nYeDg7miZbqDxj8B7Z0n2-3E94mjjQTirRI9MTjyIIWQeg84Y1DS_lm3wOfom9bi6-g13CfU/130fx97f/image.png"
            },
            {
                id: 50,
                name: "P90",
                skin: "Модуль",
                price: 88.76,
                chance: [
                    35047,
                    42448
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5rbbOKMTlYYAvbAKxcUPA_8DfhDCM7_cotBNawoL5fKl664dfBNbcrZYoZG8nQCKKENwD97hkx0qNYeZaKpXvoiDOpZDkZSZ5WrA/130fx97f/image.png"
            },
            {
                id: 51,
                name: "Galil AR",
                skin: "Леденец",
                price: 59.75,
                chance: [
                    42449,
                    53039
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz58Ne-8PDZ1TQfXPqdfUPw29RrTGSYg_M5gWNKlyLYDLVWq6ZyUZeN4N45IF8jSW6CPMwGsv0xrg_NbKZLd9Snm3y_vPTgKD0e-q25QhqbZ7daZ7b9X/130fx97f/image.png"
            },
            {
                id: 52,
                name: "FAMAS",
                skin: "Survivor Z",
                price: 41.24,
                chance: [
                    53040,
                    65998
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0Ob3dzxP7c-JmIWFg_bLP7LWnn9u5MRjjeyPoo333QTsqkdsZDz2ItfHdwI_NQmF-1O5lLjq08W6uMvJwCRl63Ui7WGdwUJj4iqdBQ/130fx97f/image.png"
            },
            {
                id: 53,
                name: "Desert Eagle",
                skin: "Ночь",
                price: 181.5,
                chance: [
                    65999,
                    68689
                ],
                color: "#0bf",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7ODHTjNL69Siq4iOluHtfeqIk29XvMcn2LmTrN-sjVW280E-Ym3yIo-WI1I-ZwqC_lK5l728hZei_MOe7MNzwV8/130fx97f/image.png"
            },
            {
                id: 54,
                name: "P250",
                skin: "Пиксельный камуфляж «Металлический»",
                price: 30.8,
                chance: [
                    68690,
                    82574
                ],
                color: "#0bf",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhh3szdYz9D4uO6nYeDg7mmNe3UkD8GsMEo3erDp9St31K3_0JsZTqlLI-SdA5oZwuDqQW2lLrpm9bi6_KhRAkC/130fx97f/image.png"
            },
            {
                id: 55,
                name: "Tec-9",
                skin: "Смешанный камуфляж",
                price: 11.76,
                chance: [
                    82575,
                    93156
                ],
                color: "#0bf",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhoyszecC9L7927m7-HnvD8J_WJlzMHu5Yo2urFpYr22gDnqEBqam6gJ9KQdwc_YlGE-VS7wri70Ja_ot2Xnk_reDFK/130fx97f/image.png"
            },
            {
                id: 56,
                name: "P250",
                skin: "Северный лес",
                price: 2.75,
                chance: [
                    93157,
                    100000
                ],
                color: "#0bf",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhoyszOfi9H_8iJlo-Zkvb4DLfYkWNFpsEp2rzDpo-g3lLj_0duYzyiJoPAcwJqM1DWr1btl-bujZfotZXIynZ9-n51cU1OKdk/130fx97f/image.png"
            }
        ]
    },
    {
        id: 3,
        name: 'Жара кейс',
        price: 900,
        discountPrice: 750,
        img: 'https://givedrop.ru/images/case/veryhotcase.png',
        weapons: [
            {
                id: 57,
                name: "★ Керамбит",
                skin: "Легенды",
                price: 45133,
                chance: [
                    0,
                    6
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJl5W0nPbmMrbummRD7fp9g-7J4cKi2A3kqhY9Zm6hJ9eXI1RqaVqF-ljowb271564vMyaznA1viF2s3jegVXp1uIYPzxv/130fx97f/image.png"
            },
            {
                id: 58,
                name: "★ Складной нож",
                skin: "Lore",
                price: 17312.58,
                chance: [
                    7,
                    18
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJB-eOwmImbqPv7Ib7ummJW4NE_ju-Rpo6m2QziqEJsZm_0IoKSclI8MAvX-QS6k7u-hpG56sidmyRkvT5iuygfdmLhDg/130fx97f/image.png"
            },
            {
                id: 59,
                name: "★ Нож с лезвием-крюком",
                skin: "Lore",
                price: 11328.85,
                chance: [
                    19,
                    36
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTj5X09ujgL-HmOXxDLfYkWNFppByjLzAotus3wzi_EY-N2qnJoGTIw44YVnXr1fqwLi81MXou8-fyXJ9-n51dcKmho0/130fx97f/image.png"
            },
            {
                id: 60,
                name: "★ Тычковые ножи",
                skin: "Легенды",
                price: 11000,
                chance: [
                    37,
                    55
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfw-bbeQJB-eOmgZODqPv7Ib7ummJW4NE_3byWp9yn2AO1_RVkNzv6cIHGelQ4MFHSqVC_wL3ogpDp7snKzHdjsj5iuygnWOlCGA/130fx97f/image.png"
            },
            {
                id: 61,
                name: "AWP",
                skin: "Пустынная гидра",
                price: 133347.02,
                chance: [
                    56,
                    58
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FABz7PLfYQJK9diklb-HnvD8J_XQwDJT7Zwjju2U89XwjVLgr0tkMWCgIoKVJAVqMw7R_wW2kua5gp7vot2XnoZ1mdqn/130fx97f/image.png"
            },
            {
                id: 62,
                name: "Desert Eagle",
                skin: "Поток информации",
                price: 8713.12,
                chance: [
                    59,
                    83
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PDdTjlH7duJhJKCmePnJ6nUl2Zu5Mx2gv2P99ij0FHh_UVsZD2iJ4_DIARtaVCF_li9xevph5-86snMnSBivSRx7WGdwULn5_Krzg/130fx97f/image.png"
            },
            {
                id: 63,
                name: "AWP",
                skin: "Азимов",
                price: 7645,
                chance: [
                    84,
                    114
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz56I_OKMyJYcxPSPqFNVfg14jfhDCM7_cotUNTkp-gAKF3otIfBOuUoNdBIHMCDX_SCZF_9uR8w0fJUfpyPpC7n3jOpZDl_eS2fcg/130fx97f/image.png"
            },
            {
                id: 64,
                name: "AK-47",
                skin: "Fuel Injector",
                price: 5951.57,
                chance: [
                    115,
                    163
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV08-jhIWZlP_1IbzUklRc7cF4n-SPpIr33gS1rkJqYGD7J4GQcQY5aFCG-lHrlO650JLv6ZzMziA2vXMgtmGdwULg8tCd0w/130fx97f/image.png"
            },
            {
                id: 65,
                name: "USP-S",
                skin: "Убийство подтверждено",
                price: 4192.24,
                chance: [
                    164,
                    266
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8j_OrfdqWhe5sN4mOTE8bP4jVC9vh5yYGr7IoWVdABrYQ3Y-1m8xezp0ZTtvpjNmHpguCAhtnndzRW10x9KOvsv26KUE4Zjjg/130fx97f/image.png"
            },
            {
                id: 66,
                name: "AWP",
                skin: "Wildfire",
                price: 3998.32,
                chance: [
                    267,
                    380
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJV5dCykomZksj4OrzZgiUHucAi3OuQp4n33AG1-EpkYG-gcNSQIFdqM12B_1K4xu3og564tJvI1zI97WDk_mfS/130fx97f/image.png"
            },
            {
                id: 67,
                name: "AK-47",
                skin: "Азимов",
                price: 3751,
                chance: [
                    381,
                    512
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV092lnYmGmOHLP7LWnn8fvpMkjOqS99Smiwzk_0VvamH0LIHEdwFqYw2G_QC3lefsjZS4uJXLyWwj5HclxVTx0A/130fx97f/image.png"
            },
            {
                id: 68,
                name: "AK-47",
                skin: "Неоновый гонщик",
                price: 2998.59,
                chance: [
                    513,
                    729
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJM6dO4q5KCk_LmDLfYkWNFppwj2rCQrN733QXgqEc5MGD7JYKTIAI5ZV-ErwK2krvrhZHttZrOmnp9-n51haggJHM/130fx97f/image.png"
            },
            {
                id: 69,
                name: "SSG 08",
                skin: "Кровь в воде",
                price: 2992.29,
                chance: [
                    730,
                    947
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5oJ-TlaAhkZzvRCaFMV8o38QzlHCp8usY6UNHip-1QeQm65YCQZeMvOdoYTsPWCaWDZV__vx5thaMLKpOKqDSvg3pKHSnaBw/130fx97f/image.png"
            },
            {
                id: 70,
                name: "Desert Eagle",
                skin: "Золотой карп",
                price: 2970,
                chance: [
                    948,
                    1169
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5_MeKyPDJYcwn9EqNfUPApywr-CDE918tqU9-iue0FK13rsoTPNuUrNIlETZWFU_WEM1j06hht0aNZepSNpnm9iHvsb2kUG028EEUdd1E/130fx97f/image.png"
            },
            {
                id: 71,
                name: "AK-47",
                skin: "Императрица",
                price: 2781.08,
                chance: [
                    1170,
                    1425
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV09m7hJKOhOTLP7LWnn8f7p0gjrnDpdvxi1Xn80JqYGygLI_DdQJsMgyC_AO4xb_p0ce66ZXImmwj5Hei5N5mVw/130fx97f/image.png"
            },
            {
                id: 72,
                name: "M4A4",
                skin: "Облом",
                price: 1742.73,
                chance: [
                    1426,
                    2085
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJTwW08-zl5SEhcj4OrzZgiUFu8By27iQ8Iqg3Qyy_Ec_Z2CmJ4eTcAdqZV3VrFi9k7_rhJK7vZmc1zI97eGSYpLn/130fx97f/image.png"
            },
            {
                id: 73,
                name: "Glock-18",
                skin: "Королева пуль",
                price: 1514.57,
                chance: [
                    2086,
                    2934
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79fnzL-cluX5MrLVk2Vu5Mx2gv2P8dWsiQKyrxFoMGj3Io_BcwA6YFDSq1a6lLq91J7o6Z3MzHVhvHFz4GGdwUK867nN7w/130fx97f/image.png"
            },
            {
                id: 74,
                name: "FAMAS",
                skin: "Commemoration",
                price: 1494.35,
                chance: [
                    2935,
                    3803
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf1OD3dzxP7c-JmIWMlvTtDLzemm9u5Mx2gv2Pptil2Qfs80c_YmvxI4DBc1U2YguFqFXrkOe5156_uJ_BnSRjuCkg5WGdwUI61aG_dA/130fx97f/image.png"
            },
            {
                id: 75,
                name: "M4A1-S",
                skin: "Золотая спираль",
                price: 1454.64,
                chance: [
                    3804,
                    4713
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uOxh7-Gw_alIITCmGpa7cd4nuz-8oP5jGu5rhc1JjTtLIfEdVQ-YA6G-FbqwOzs05Tp6smdzHdiuCUi5y7YnRG1gB9OOLE50OveFwutvS5J8A/130fx97f/image.png"
            },
            {
                id: 76,
                name: "M4A1-S",
                skin: "Chantico's Fire",
                price: 1398.14,
                chance: [
                    4714,
                    5686
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITCmX5d_MR6j_v--InxgUG55RFtYTqiLY-UdVJrMF6DrAS3xe26gMDtv8jKmCNiv3EktH3enhO21xFSLrs4RMuJRwY/130fx97f/image.png"
            },
            {
                id: 77,
                name: "MAC-10",
                skin: "На охоте",
                price: 1368.74,
                chance: [
                    5687,
                    6694
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf1OD3fDxBvYyJh5SKm_zxIYTdn2xZ_ItyiL3Foo2j2FXi8kpraz_yIYGQdwQ4N1HX8wPrybvu0Je5v5WYz3VgpGB8smMduxoo/130fx97f/image.png"
            },
            {
                id: 78,
                name: "Glock-18",
                skin: "Гамма-волны",
                price: 1172.93,
                chance: [
                    6695,
                    7980
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0v73djxP4d2JkI-bh_vxIYTBnmpC7ZROjeXO9ofKhF2zowdyMWr6IYeQIwU8NFiGqAXtkr28jcO1vMvAnXRmuXQm5nuJnhKx1U5FOvsv26KW7OPGDg/130fx97f/image.png"
            },
            {
                id: 79,
                name: "M4A4",
                skin: "Royal Paladin",
                price: 1058.74,
                chance: [
                    7981,
                    9474
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJTwW0865jYGHqOTlJrLDk1Rc7cF4n-SP8dSm2gHk-UtoZGv7I9DBcVM5ZV_XqFe_lervhsS76sjIyCBhviYg52GdwUI8s6PzHQ/130fx97f/image.png"
            },
            {
                id: 80,
                name: "SSG 08",
                skin: "Пламя дракона",
                price: 1009.47,
                chance: [
                    9475,
                    11071
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0Ob3Yi5FvISJkJKKkPj6NbLDk1RC68phj9bM8Ij8nVn6qBE9Y2ilLYaUI1M3ZQ3T-FW4yb28hp68tc7IwHdjvyQm5XnfzRO00wYMMLKcF6HpFw/130fx97f/image.png"
            },
            {
                id: 81,
                name: "P90",
                skin: "Азимов",
                price: 563.2,
                chance: [
                    11072,
                    14097
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5rbbOKMyJYYl2STKFNVfw3-x7TBCI24dJuGoOy8-0EKgrv5YaVMbgkOIpJTcbSU_OFYwuo7UIxg_JafJCMqXvqjn_3ejBdkE3axU4/130fx97f/image.png"
            },
            {
                id: 82,
                name: "ПП-19 Бизон",
                skin: "Judgement of Anubis",
                price: 551.68,
                chance: [
                    14098,
                    17174
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0Ob3czRY49KJl5WZhPLLPr7Vn35cpp0gjL_D8IimiwW2qEFkYj2hcNWScVVvYw2FrFK2wOy908K6uJjLnSN9-n51hHwx8BM/130fx97f/image.png"
            },
            {
                id: 83,
                name: "Galil AR",
                skin: "Щелкунчик",
                price: 495,
                chance: [
                    17175,
                    20509
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz58Ne-8PDZ1TQfXPqdfUPw2ywnuGyYh4chta9qz87ITJBLrs9TEO7d6MoxKGpaDU6CCMFyovhk81qdafpCJpSi9jyvhPGsCCUHi5CtazzBY6R44/130fx97f/image.png"
            },
            {
                id: 84,
                name: "P250",
                skin: "Прощальный оскал",
                price: 408.75,
                chance: [
                    20510,
                    24247
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS09-vloWZlOX7MITdn2xZ_Isi07_F8N3x3Qfj8kQ6a2H0IdKXdgRqYA2C-VLqxLznhMLv6Z-bm3o2pGB8sr9Yt3dq/130fx97f/image.png"
            },
            {
                id: 85,
                name: "AK-47",
                skin: "Panthera onca",
                price: 17881.6,
                chance: [
                    24248,
                    24259
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJI7dujlZK0m_7zO6-fzzlV7J0kjryY8d6j2QGxqhFlYzulLIDBdVM6NQ7WrwS3lO7mgJe_voOJlyVA-lcWLw/130fx97f/image.png"
            },
            {
                id: 86,
                name: "Desert Eagle",
                skin: "Фенек",
                price: 14778.21,
                chance: [
                    24260,
                    24273
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PTbTjlH7du6kb-Nkvn6NrjummJW4NE_07vF94j03wexrxA_ZTyhIoaXcFA_N1jS_lntk-_mhZC_6JrIyXUy6z5iuyiH-XNa6A/130fx97f/image.png"
            },
            {
                id: 87,
                name: "SSG 08",
                skin: "Жало смерти",
                price: 13519.77,
                chance: [
                    24274,
                    24288
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0Ob3Yi5FvISJh4OEhef9PLXummJW4NE_3uzHpo33jQbtrhFqMGulJYDEdQJqMlzQ_li8yLvrgsfovJidy3tk7D5iuyhx4yPIdw/130fx97f/image.png"
            },
            {
                id: 88,
                name: "MP5-SD",
                skin: "Оксидовый оазис",
                price: 13200,
                chance: [
                    24289,
                    24303
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6rwOANf1OD3fC0X09Kzm460kfvxOK_QhGVu5Mx2gv2P8dujjQLn80ZpY2imcY-ddwA8N1uB_wLrxLi6hZ7qu87PwSdiuiAm42GdwUKqL_tdgw/130fx97f/image.png"
            },
            {
                id: 89,
                name: "P90",
                skin: "Изумрудный дракон",
                price: 5838.49,
                chance: [
                    24304,
                    24354
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5rbbOKMyJYdhbDBq9QY-VjpDfuGyYk5_huUdO_4rZIeQ7q5oSTZrAsOY5OF8mCWaXVMgv_7k1ph6JUKMPY8Xzq2S-7PmlbWQ2rpDxpHIWlgA/130fx97f/image.png"
            },
            {
                id: 90,
                name: "USP-S",
                skin: "Орион",
                price: 1552.1,
                chance: [
                    24355,
                    25167
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8jnI7LFkGJD7fp8j-3I4IG73wLg-0dpNmj1d4PDdQZoYAnW-lDrx7-50J61787JmyBk7HRx53rZngv330-lwjYg6w/130fx97f/image.png"
            },
            {
                id: 91,
                name: "AK-47",
                skin: "Красная линия",
                price: 1460.09,
                chance: [
                    25168,
                    26071
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz56P7fiDzRyTQXJVfdhX_o45gnTBCI24dJuGtay8-MEew_n4YCTNOMuNNhLF8GDU6KDNFipvEg-gfRfLp2PpXi82Hz3ejBdOj7r2Ww/130fx97f/image.png"
            },
            {
                id: 92,
                name: "M4A4",
                skin: "龍王 (Король драконов)",
                price: 1239.7,
                chance: [
                    26072,
                    27252
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz52YOLkDzRyTQmWAPRhXfs58Rv4GyY-18pmUN6j-vUAelnp4oqQMOZ5MN9IHJbXWvDUblys7k0x1KRULJCO9n68iy3gOzheRVO1rWyhmNc8/130fx97f/image.png"
            },
            {
                id: 93,
                name: "Desert Eagle",
                skin: "Kumicho Dragon",
                price: 918.76,
                chance: [
                    27253,
                    29062
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLZTjlH_9mkgIWKkPvxDLDEm2JS4Mp1mOjG-oLKhVGwogYxfTyncteSd1BtYwvY-AO6lei5g5fo7snOyCZivCd24nbczEewghFIOLBxxavJWhp7hGw/130fx97f/image.png"
            },
            {
                id: 94,
                name: "M4A1-S",
                skin: "Атомный сплав",
                price: 760.45,
                chance: [
                    29063,
                    31330
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz52YOLkDyRufgHMAqVMY_Q3ywW4CHZ_-_hiWNu57oQJO12x49epbuV4aZ0RAcLWX6OGZA2puB1pgqUMLpWBoC671XngOD1ZCEG_rmMAkbDWvORp1mcIAy_njWgGDWs/130fx97f/image.png"
            },
            {
                id: 95,
                name: "M4A4",
                skin: "Кибербезопасность",
                price: 559.76,
                chance: [
                    31331,
                    34371
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09-vloWZh-L6OITdn2xZ_Ispj-2Wpd6s2FCx80toamGld9DBIQZtaVGG-FLskOy-0ZC87snIyiNmpGB8svJNGQN2/130fx97f/image.png"
            },
            {
                id: 96,
                name: "Glock-18",
                skin: "Водяной",
                price: 551.96,
                chance: [
                    34372,
                    37447
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz58OOy2OwhkZzvFDa9dV7g2_Rn5DDQx7cl3a9qz87ITJBLmsoHEYbAtMNEeF8iBU_CFNVqrv09sgqJfKsTbqCu5iyrob2deCBC65Ctazz387ae9/130fx97f/image.png"
            },
            {
                id: 97,
                name: "Nova",
                skin: "Антиквариат",
                price: 527.62,
                chance: [
                    37448,
                    40632
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz51O_W0DzRyTQrNF6FhXfsu_Rn5DBg_7cNqQdr4rupWfFq6t9bFNeZ4ZNlIHMSEXfLXZV2v7U1t0aFeLpLYoH-53iy9OHBKBURi3EYcOg/130fx97f/image.png"
            },
            {
                id: 98,
                name: "AWP",
                skin: "Горячечные грёзы",
                price: 526.69,
                chance: [
                    40633,
                    43821
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJS_8W1nI-bluP8DLfYkWNFppQgj7yV9Nqi2Fbj_Eo5Ym72I9XGJwc2NAnS_1Pqxu6615W575uYznd9-n51iddPieY/130fx97f/image.png"
            },
            {
                id: 99,
                name: "MAC-10",
                skin: "Дискотехника",
                price: 403.19,
                chance: [
                    43822,
                    47585
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJmoGIhfLLP7LWnn8fsJV3i7vHpdqs2VHn_BZqNmuiJoGQd1Q2MF-G_ALtlei908e0v8vKm2wj5Hc7W34J8g/130fx97f/image.png"
            },
            {
                id: 100,
                name: "CZ75-Auto",
                skin: "Желтый жакет",
                price: 323.08,
                chance: [
                    47586,
                    51683
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz54LrTgMQhkZzvBG_cLXco5_An_HS4o7dVcWdKy_q4LZw69vdTBYLAkZopJHJSDCPGGZw2puxk9ifIJLJbfpSO61Hm_PTtfChb1ujVTRKDBiB4/130fx97f/image.png"
            },
            {
                id: 101,
                name: "MP5-SD",
                skin: "Фосфор",
                price: 321.56,
                chance: [
                    51684,
                    55786
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6rwOANf1OD3fC0X09qzh5SCgfb4DL_Dn3tu5Mx2gv2P9tukiVLkqkRkZzz2cdXBdFM7NV2G-Ae5wOfphMTpvZjMnHBruXN2sGGdwUKk4NUKRA/130fx97f/image.png"
            },
            {
                id: 102,
                name: "MAC-10",
                skin: "Пропаганда",
                price: 305.04,
                chance: [
                    55787,
                    59943
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJhJKEh_bzMrXVl1Rd4cJ5nqfFrY2l3gG2-kptNWqnco6TIwFrYw3S_wW6wurmgp-86cnMzydjvykh-z-DyCgeuxRr/130fx97f/image.png"
            },
            {
                id: 103,
                name: "FAMAS",
                skin: "Авария",
                price: 278.7,
                chance: [
                    59944,
                    64167
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0v73fyhB4Nm3hr-bluPgNqnfwlRX6chwmdbN_Iv9nBrjrkJoZD_yJ4OScA5qZwmCrle8l-bohJa0tMnPwCFi6CJwsXzVnxKxn1gSOd_mlyfV/130fx97f/image.png"
            },
            {
                id: 104,
                name: "P2000",
                skin: "Imperial Dragon",
                price: 205.08,
                chance: [
                    64168,
                    68375
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zPYgJSvozmxL-CmufxIbLQmlRV-sR2hef--InxgUG55URuYWqncdWXIFc8Yl-DqQC2yefvhMW56s7NwHA1s3Qq5iyPzhbhgUlSLrs4z7WVPcs/130fx97f/image.png"
            },
            {
                id: 105,
                name: "Tec-9",
                skin: "Fuel Injector",
                price: 178.61,
                chance: [
                    68376,
                    72456
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhnwMzcdD4b08-jhIWZlP_1IbzUklRc7cF4n-SPo46tiwHt_kpqZGv2LYbBIA5vZ1yBr1m7yefojJa-6snAynNrvHIht2GdwUL3_-929A/130fx97f/image.png"
            },
            {
                id: 106,
                name: "Glock-18",
                skin: "Татуировка дракона",
                price: 3455.49,
                chance: [
                    72457,
                    72615
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz58OOy2OwhmfzvGE6FZU_sF8wTjCiwN5M5kXMP48u9UKAvt5YPPYrIuM9EfFsnSX_GFNAH160wxiKhafsOKp3noiyXtM3BKBUQTQ9jo2g/130fx97f/image.png"
            },
            {
                id: 107,
                name: "MAC-10",
                skin: "Золотой кирпич",
                price: 2391.94,
                chance: [
                    72616,
                    72968
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0v73djJO6OO0homInMj4OrzZgiUCvZ0iibuY9Iqi2QG3_0RsY2j0IoeRe1Q9aV7WqVK7lb28gp7oupyc1zI97ZhKeXfe/130fx97f/image.png"
            },
            {
                id: 108,
                name: "Автомат «Галиль»",
                skin: "Негатив «Феникса»",
                price: 2158.88,
                chance: [
                    72969,
                    73404
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczbYQJS5NOzmomTqOP1NKjuhn5D-Ml0teXI8oThxgK2_EJuamuidoSUdw4-aV7QqFDqlenug8W578jAzHQx6Skr5HzfykapwUYbWRSbnZo/130fx97f/image.png"
            },
            {
                id: 109,
                name: "P250",
                skin: "Ядерная угроза",
                price: 935,
                chance: [
                    73405,
                    75173
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhzw8zGZDZH_8iknZCOqPDmNr7fqWNU6dNoxLmQrdX031DhrRY5YGmgLNDBIQU5NFDT_gS-ybi5gp_uu5iayyc2uyM8pSGKb7DLmmE/130fx97f/image.png"
            },
            {
                id: 110,
                name: "Glock-18",
                skin: "Латунь",
                price: 450.16,
                chance: [
                    75174,
                    78718
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0uL3cy9D_8-JnIWKge66YOLTlT8IvJcgibjEoYn331Cx-kI4N2CgJdKXIQJvYV2Eq1S3k-281oj84sq0SysHHg/130fx97f/image.png"
            },
            {
                id: 111,
                name: "Five-SeveN",
                skin: "Медная галактика",
                price: 432.5,
                chance: [
                    78719,
                    82346
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz59PfWwIzJxdwr9AK1hX_oq5A3-NiE-7cRoR-i78r8PPFHx4IeTN-F5Y9hPS5TWX_DQNQz46x9q1qJaesOPqCLm2Sy_aDoNWBa-_XVExrHOIgi-bw/130fx97f/image.png"
            },
            {
                id: 112,
                name: "P2000",
                skin: "Янтарный градиент",
                price: 423.97,
                chance: [
                    82347,
                    86014
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zJcAJE7dizq42Og_b4P7LSqWZU7Mxkh6fErN_22VbkqRBrZmn3cIOTewdqZAqE8lm_xO7ngsW_vM6YzndjuSEm-z-DyNwC_Q0C/130fx97f/image.png"
            },
            {
                id: 113,
                name: "P90",
                skin: "Слепое пятно",
                price: 337.94,
                chance: [
                    86015,
                    90057
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5rbbOKOC5YfwvGErBRSOYF-Q3oADI_ppU0V9Hlob9fL1jv4oLBOuUpMoxEScmCDKPVYl377ho40_MPK53bqC7xnXO-KDeFai8/130fx97f/image.png"
            },
            {
                id: 114,
                name: "FAMAS",
                skin: "Стикс",
                price: 262.27,
                chance: [
                    90058,
                    94308
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0v73fyhB4Nm3hr-YnOL4P6iDqW1Q5cRiteHE9JrsxgWx-ERkZ2r0cdDHd1M_MF_R-FS6l7-81MK0vZzLyyRi7HMjsyrUyxCpwUYbBN7dJDM/130fx97f/image.png"
            },
            {
                id: 115,
                name: "AWP",
                skin: "Древесная гадюка",
                price: 261.25,
                chance: [
                    94309,
                    98560
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJU5cyzhr-HnvD8J_WDkm4GvZEh0uiW9tms3Qfl-Rdpa2vzJ9CQcVU5YgnTq1C2l7--gce_ot2XnpAZ32EI/130fx97f/image.png"
            },
            {
                id: 116,
                name: "MAC-10",
                skin: "Градиент",
                price: 1086.26,
                chance: [
                    98561,
                    100000
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0vL3dzxG6eO6nYeDg7miZbqDxj8B7Z0n2-3E94mjjQTirRI9MTjyIIWQeg84Y1DS_lm3wOfom9bi6-g13CfU/130fx97f/image.png"
            }
        ]
    },
    {
        id: 4,
        name: 'Кальян кейс',
        price: 267,
        discountPrice: 170,
        img: 'https://givedrop.ru/images/case/hookahcase.png',
        weapons: [
            {
                id: 117,
                name: "★ Наваха",
                skin: "Градиент",
                price: 10670,
                chance: [
                    0,
                    4
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1OrYYiR95t21n4uFnvHxDLrQqW1Q7MBOhuDG_Zi72gfkrUpqMG_7cYXBJFI5aFvWrla4k-rr0ZG8tZ6anSFiuilw5SvZmgv330_81mFXSA/130fx97f/image.png"
            },
            {
                id: 118,
                name: "Desert Eagle",
                skin: "Поток информации",
                price: 8713.12,
                chance: [
                    5,
                    10
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PDdTjlH7duJhJKCmePnJ6nUl2Zu5Mx2gv2P99ij0FHh_UVsZD2iJ4_DIARtaVCF_li9xevph5-86snMnSBivSRx7WGdwULn5_Krzg/130fx97f/image.png"
            },
            {
                id: 119,
                name: "AWP",
                skin: "Неонуар",
                price: 2457.9,
                chance: [
                    11,
                    31
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJM6dO4m4mZqPv9NLPF2GgE7MEk3e-ZoNmgjAXnqEdtNWn7JISRJAQ5MFHT-1W-xuq9g5-07cvXiSw0SeFYhWE/130fx97f/image.png"
            },
            {
                id: 120,
                name: "FAMAS",
                skin: "Commemoration",
                price: 1494.35,
                chance: [
                    32,
                    84
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf1OD3dzxP7c-JmIWMlvTtDLzemm9u5Mx2gv2Pptil2Qfs80c_YmvxI4DBc1U2YguFqFXrkOe5156_uJ_BnSRjuCkg5WGdwUI61aG_dA/130fx97f/image.png"
            },
            {
                id: 121,
                name: "M4A4",
                skin: "Рентген",
                price: 1482.56,
                chance: [
                    85,
                    138
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz52YOLkDzRyTRzQALlhUaEF-Q3oADI_psIyAY7h9e9feFnq4oWTO-Z_MNwaHseCC_DQM1v9vkw90aBaKZ3Y8yzxnXO-NzqpKk8/130fx97f/image.png"
            },
            {
                id: 122,
                name: "SSG 08",
                skin: "Пламя дракона",
                price: 1009.47,
                chance: [
                    139,
                    274
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0Ob3Yi5FvISJkJKKkPj6NbLDk1RC68phj9bM8Ij8nVn6qBE9Y2ilLYaUI1M3ZQ3T-FW4yb28hp68tc7IwHdjvyQm5XnfzRO00wYMMLKcF6HpFw/130fx97f/image.png"
            },
            {
                id: 123,
                name: "P90",
                skin: "Азимов",
                price: 563.2,
                chance: [
                    275,
                    831
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5rbbOKMyJYYl2STKFNVfw3-x7TBCI24dJuGoOy8-0EKgrv5YaVMbgkOIpJTcbSU_OFYwuo7UIxg_JafJCMqXvqjn_3ejBdkE3axU4/130fx97f/image.png"
            },
            {
                id: 124,
                name: "Sawed-Off",
                skin: "Кракен",
                price: 541.02,
                chance: [
                    832,
                    1440
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5oNfSwNDhhdDvBFJ9NXeI_8AfqDxg969NsRMK754QLLFi28d_YYLQkMYxJHseDU6LVYg-u6k9u0qcMfZKPpny92yntaGcIX0bp_2lXnPjH5OVxmQ2QIw/130fx97f/image.png"
            },
            {
                id: 125,
                name: "P2000",
                skin: "Огненный элементаль",
                price: 528,
                chance: [
                    1441,
                    2084
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5zP_PnYGc3TQfXPrAMDKVqyw7lGyIN7ctmWdK447oKFlG64NuDbq4lN9EaTJbVX_GGNAH7uBhu1KFcL8CApHjn1S7sa20PCUK-_mkFzrXTpPI11Xdf2Mhv/130fx97f/image.png"
            },
            {
                id: 126,
                name: "MP7",
                skin: "Bloodsport",
                price: 381.55,
                chance: [
                    2085,
                    3358
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFABz7P7YJgJA4NO5kJObmOXgDLfYkWNFpsRz3-qSpdis2AW3rhFvYWn3LISSdgRsYVzR8lC7lOm9gMO_786bwHd9-n51Z2R5ZH4/130fx97f/image.png"
            },
            {
                id: 127,
                name: "AK-47",
                skin: "Красная линия",
                price: 1460.09,
                chance: [
                    3359,
                    3414
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz56P7fiDzRyTQXJVfdhX_o45gnTBCI24dJuGtay8-MEew_n4YCTNOMuNNhLF8GDU6KDNFipvEg-gfRfLp2PpXi82Hz3ejBdOj7r2Ww/130fx97f/image.png"
            },
            {
                id: 128,
                name: "M4A4",
                skin: "龍王 (Король драконов)",
                price: 1239.7,
                chance: [
                    3415,
                    3496
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz52YOLkDzRyTQmWAPRhXfs58Rv4GyY-18pmUN6j-vUAelnp4oqQMOZ5MN9IHJbXWvDUblys7k0x1KRULJCO9n68iy3gOzheRVO1rWyhmNc8/130fx97f/image.png"
            },
            {
                id: 129,
                name: "Dual Berettas",
                skin: "Турбодвойники",
                price: 497.67,
                chance: [
                    3497,
                    4229
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf0Ob3dShD4OOzmImfkuTLIbrdmnJu5Mx2gv2PoI6mi1LtqEZoMm2mI4-XdQE8ZV3W-gC8wO7mgJPtu5rBwXU26XIgsGGdwULVxArwuA/130fx97f/image.png"
            },
            {
                id: 130,
                name: "SCAR-20",
                skin: "Пятна от краски",
                price: 474.5,
                chance: [
                    4230,
                    5042
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PvRTjVX4sizhr-Jm_buNoTBn2Va1810i__Yu96miVe180NtMDiid9eRIVM2Nw3S8wK8lOfsgMe5tcydz3NmvnMhtH7D30vgioRUu2k/130fx97f/image.png"
            },
            {
                id: 131,
                name: "MAC-10",
                skin: "Дискотехника",
                price: 403.19,
                chance: [
                    5043,
                    6183
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJmoGIhfLLP7LWnn8fsJV3i7vHpdqs2VHn_BZqNmuiJoGQd1Q2MF-G_ALtlei908e0v8vKm2wj5Hc7W34J8g/130fx97f/image.png"
            },
            {
                id: 132,
                name: "MP9",
                skin: "Пищевая цепь",
                price: 327.94,
                chance: [
                    6184,
                    7882
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAR17P7YKAJE49Oyq4ODlv76DLfYkWNFppAp07zHoY_20ALg-EtrMm_ydYWSegU6ZljQ-Vbrx7u7hJ-5v8vOnSR9-n51oTWxmVM/130fx97f/image.png"
            },
            {
                id: 133,
                name: "M4A4",
                skin: "Современный охотник",
                price: 1178.17,
                chance: [
                    7883,
                    7975
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhoyszAZDNW6c6JmY-PkuX6DLbUkmJE5Ysh3O_H94_wiwSxrxZpMDjzdtWVIwU6NwzUqAW7wOnpgJG_vM-fwCFgpGB8sg8KZlD2/130fx97f/image.png"
            },
            {
                id: 134,
                name: "M4A1-S",
                skin: "Чистая вода",
                price: 1058.04,
                chance: [
                    7976,
                    8096
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz52YOLkDyRufgHMAqVMY_0jywfvDCY818VxVcG5yLYDLVWq6ZyTO7l5YtFJTsGDW_KEbgj-6R0x06RfLsGKo37niCm6OG8JXEDs_zkEhqbZ7bA1w3g4/130fx97f/image.png"
            },
            {
                id: 135,
                name: "CZ75-Auto",
                skin: "Листовая сталь",
                price: 395.25,
                chance: [
                    8097,
                    9284
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz54LrTgMQhmfzvGCKFTU_s-yxjgCDM318pmUN6j-vVVKlrvsoGUZrEkYYpMGsGBXaOAMg_570NsgakOLsOKqS3ojn7rOWkLRVO1rZiDXZcX/130fx97f/image.png"
            },
            {
                id: 136,
                name: "Nova",
                skin: "Восходящий череп",
                price: 239.21,
                chance: [
                    9285,
                    12179
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz51O_W0DzRyTRfJFKxSY_s14gnTBCI24dJuGoDgp75ULV_mt9PCNrYqZN8fHJLZCf6HZwr16R0w1qZZeseLpSjs1Cv3ejBd9k_1wRI/130fx97f/image.png"
            },
            {
                id: 137,
                name: "P2000",
                skin: "Дровосек",
                price: 236.87,
                chance: [
                    12180,
                    15118
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJSvozmxL-DgvngNqnummJW4NE_377HoYn03Vax_xVlMTygcYDEcVQ5YF3S-wC9xu67jMfq7pmYmyBi7D5iuyhbjmQOcg/130fx97f/image.png"
            },
            {
                id: 138,
                name: "P90",
                skin: "Death Grip",
                price: 223.07,
                chance: [
                    15119,
                    18335
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FA957OORIQJA7c6zlo-FkuTLMbfEk1Rd4cJ5nqfCrNytjAKyqEU4ZmqgdoTDdgc4aQnW_gO3kO3t0JLuus_MzXVq7HMq-z-DyDp1RLqf/130fx97f/image.png"
            },
            {
                id: 139,
                name: "AWP",
                skin: "ЛАПКИ",
                price: 198.48,
                chance: [
                    18336,
                    22133
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAZt7PLfYQJS7cumlZe0m_7zO6-fxm1XuZQkibqQptyii1fn-kFuZmr1d4KRIw9vNA7Xr1e6w-no0cW9tYOJlyVvfC5tEA/130fx97f/image.png"
            },
            {
                id: 140,
                name: "MAC-10",
                skin: "Обгорание",
                price: 176.83,
                chance: [
                    22134,
                    26552
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz52NeDkYAhkZzvJDrJLTOEF-Q3oADI_psJiBIPl8-NefV-7vIDCN7B_No1FGsSDXqPTZwn5u0hrg6RaecSN9ijxnXO--rrcKhM/130fx97f/image.png"
            },
            {
                id: 141,
                name: "USP-S",
                skin: "Страж",
                price: 170.73,
                chance: [
                    26553,
                    31167
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5uJ_OKIz5rdwrBBLJhX-AF4Rv8NiI-7cBiWsOJ-r4CIEmyqtbDM-MpOY4ZTsaFW6DXZgr17kxtgKgIfpWLpn--i37gaGdbX0Du8joa2LjQyDAKNXM/130fx97f/image.png"
            },
            {
                id: 142,
                name: "MP9",
                skin: "Рубиновый ядовитый дротик",
                price: 104.58,
                chance: [
                    31168,
                    38640
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz52JLqKMTpYfxSbPq5XSOc18w3iNio37M52WZni9upfKAnvtISUMLl-ZoweGJHRUqDQYl307h4_gfJUKZGAoCPsjyrvJC5UDGRwp09x/130fx97f/image.png"
            },
            {
                id: 143,
                name: "Five-SeveN",
                skin: "Retrobution",
                price: 104.31,
                chance: [
                    38641,
                    46128
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTj5X09q_goWYkuHxPYTDk39D58dknuDO-7P5gVO8v11rNj_3doSVIA5taAmFrlXqx-rphJ66vc7AnXtg6Cgj43zdyRPm0h9NcKUx0kOQhc3i/130fx97f/image.png"
            },
            {
                id: 144,
                name: "MP9",
                skin: "Слизь",
                price: 48.08,
                chance: [
                    46129,
                    56095
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAR17P7YKAJF49OJmYWPnuL5feuAxW1VuMQkierErNuh0ADs-xZvYGv3d9fAdFc3Ml3Wq1e7kOa70JGi_MOeijPbI1E/130fx97f/image.png"
            },
            {
                id: 145,
                name: "Galil AR",
                skin: "Firefight",
                price: 34.08,
                chance: [
                    56096,
                    65539
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczPYgJF7dC_mIGZqP76ML7fk3lQ_MpjteTE8YXghRrt-EZsMW_yIo-XIFNsYwuC_lfqxum9jJG86s_KzCNl6HJ24njUmEO0n1gSOTnyPM8l/130fx97f/image.png"
            },
            {
                id: 146,
                name: "P90",
                skin: "Война в пустыне",
                price: 117,
                chance: [
                    65540,
                    72370
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIQJR79OkhImehMj4OrzZgiUJ7pRzibvHo43ziwCx_BVlNT-hI9eRdwc8ZFrU_FDoxL_u0cC8u8yd1zI97Zyq9VwK/130fx97f/image.png"
            },
            {
                id: 147,
                name: "Five-SeveN",
                skin: "Ками",
                price: 91.49,
                chance: [
                    72371,
                    80555
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz59PfWwIzJxdwr9CblhV_Q3_TfhDCM7_cotDY_koOwCKwS-4oLEN7F4Mo1FTpWDCP-OYV_07khrifJcLZGB8ynm2jOpZDkegjxWog/130fx97f/image.png"
            },
            {
                id: 148,
                name: "Glock-18",
                skin: "Литьё",
                price: 43.01,
                chance: [
                    80556,
                    90466
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0uL3djFN79eJkIGZnLryMrfdqWZU7Mxkh6eR896g3FHiqRJqN2jwctKdcQc-ZFuD_wK9wefs15HpuJrMmiRqvid2-z-DyKOVjqh4/130fx97f/image.png"
            },
            {
                id: 149,
                name: "Dual Berettas",
                skin: "Баланс",
                price: 35.2,
                chance: [
                    90467,
                    100000
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf1OD3dShD4OOzmImfkuTLIbTCk1Rd4cJ5nqeZ8Yqt0Qzk-UNvMWj6LI6Sew45ZAqF_lW4xOjsg5fv78-bzXNksyF3-z-DyH2Gw439/130fx97f/image.png"
            }
        ]
    },
    {
        id: 5,
        name: 'Кейс лета',
        price: 200,
        discountPrice: 113,
        img: 'https://givedrop.ru/images/case/summercase.png',
        weapons: [
            {
                id: 150,
                name: "AWP",
                skin: "Скоростной зверь",
                price: 2530,
                chance: [
                    0,
                    11
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz56I_OKMyJYcxPSPqhHTPAoywrpCDQm18pmUN6j-vUDeFi-4IbHNrcoNolIGMXRUvXVNwz_4khpgadefZzc9Hjmjny8bzxeRVO1rf9MwH3s/130fx97f/image.png"
            },
            {
                id: 151,
                name: "AK-47",
                skin: "Ягуар",
                price: 2140.36,
                chance: [
                    12,
                    28
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz56P7fiDzRyTRTDD7RWWecF9QO4Xhg_7cNqQdr49esEKA7us9bHO7J-MdBLTJTSWfKGZAypuUs-iPNaKJSM8Xm7i3jqaHBKBUSMHsVe9Q/130fx97f/image.png"
            },
            {
                id: 152,
                name: "USP-S",
                skin: "Неонуар",
                price: 1454.44,
                chance: [
                    29,
                    67
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh-TLPbTYhFRd4cJ5nqfE8dzz3Abg_hBtMWDzJ4fGdFI6YFjT-lHtlOi70Jfqvcifm3Vmvigj-z-DyA8aEmbE/130fx97f/image.png"
            },
            {
                id: 153,
                name: "«Доктор» Романов",
                skin: "Кавалерия",
                price: 242,
                chance: [
                    68,
                    2593
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztDu4WnKgtr0v33ZzxQ5d24gIjFz_OlZbqJxD4C68cp2u-Z9Ijw0AXmrUZoZm2iLI-cc1M7MAmC_FntwvCv28EpZvYmDw/130fx97f/image.png"
            },
            {
                id: 154,
                name: "Glock-18",
                skin: "Водяной",
                price: 551.96,
                chance: [
                    2594,
                    3064
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz58OOy2OwhkZzvFDa9dV7g2_Rn5DDQx7cl3a9qz87ITJBLmsoHEYbAtMNEeF8iBU_CFNVqrv09sgqJfKsTbqCu5iyrob2deCBC65Ctazz387ae9/130fx97f/image.png"
            },
            {
                id: 155,
                name: "AWP",
                skin: "Mortis",
                price: 276.58,
                chance: [
                    3065,
                    5070
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FABz7PLfYQJG6d2inL-HnvD8J_WAz2lV7cAh3uyX9Nz33FXnqUs6a2rxctKdJ1c_aQ6Fq1DrxOvn05Tpot2XnvIeBIAw/130fx97f/image.png"
            },
            {
                id: 156,
                name: "ПП-19 Бизон",
                skin: "Азарт",
                price: 251.64,
                chance: [
                    5070,
                    7434
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0Ob3czRY49KJlYyHqP76DLfYkWNFpsEi2-jErNvzjQDg8xFpZmmgctOVdFI4YF-EqwC9xOnq1pG76ZWayyN9-n51Ejfp6Vw/130fx97f/image.png"
            },
            {
                id: 157,
                name: "P90",
                skin: "Shapewood",
                price: 182.12,
                chance: [
                    7435,
                    11332
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIQJR5N2mkZeEmPPLP7LWnn8f7ZIm3r2Zodz20A22-hFkYDumLITBcFA4ZQqFqFTvx-nujMW4u8-dymwj5HeKrOWJ7A/130fx97f/image.png"
            },
            {
                id: 158,
                name: "Револьвер R8",
                skin: "Янтарный градиент",
                price: 96.97,
                chance: [
                    11333,
                    19045
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopL-zJAt21uH3cDx96t2ykb-GkuP1P7fYlVRD7dN-hv_E57P5gVO8v104Zm-mLIfDdw5sM1_R_ADtx72-hJW87snNyHpjuHJw7XbbnUHjgUsacKUx0hrD12_5/130fx97f/image.png"
            },
            {
                id: 159,
                name: "P2000",
                skin: "Янтарный градиент",
                price: 423.97,
                chance: [
                    19046,
                    19904
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zJcAJE7dizq42Og_b4P7LSqWZU7Mxkh6fErN_22VbkqRBrZmn3cIOTewdqZAqE8lm_xO7ngsW_vM6YzndjuSEm-z-DyNwC_Q0C/130fx97f/image.png"
            },
            {
                id: 160,
                name: "FAMAS",
                skin: "Валентность",
                price: 260.9,
                chance: [
                    19905,
                    22127
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0uL3dzxP7c-Jl4-Fg_jhIYTck29Y_cg_0rrEodik0FC38kU5NmqnJICddlc4aAnX-AO3lL2-08C4vp7Ayns1vD5iuygKw238fw/130fx97f/image.png"
            },
            {
                id: 161,
                name: "MAC-10",
                skin: "Малахит",
                price: 128.3,
                chance: [
                    22128,
                    28102
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz52NeDkYAhmfzvPAKMPDMo39QTtCi87_MJcWdKy_q4LZw_otYDAO7J6MN5JS5LZC_ePNwj1vkg9iaNbfJXfpn6-i3noaDoDU0D1ujVTAllEXO4/130fx97f/image.png"
            },
            {
                id: 162,
                name: "AWP",
                skin: "Бог червей",
                price: 119.26,
                chance: [
                    28103,
                    34536
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz56I_OKMSZYcxPSPrRJVfs_ywXpDS4n5YkxUoDv8esAegu8ttSTYLMlZI4dH5TXDPCGNFz-uE8_hvddJpbb9Czrw223bfuxyJYu/130fx97f/image.png"
            },
            {
                id: 163,
                name: "Glock-18",
                skin: "Moonrise",
                price: 67.35,
                chance: [
                    34537,
                    44125
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0vL3djFN79eJxdi0guX2MrXum2Re5vp3j__E57P5gVO8v109Y2vxI9Cdc1M6ZQyCq1e2kLy90JO1ucnNy3U3vCJ07CnUn0HmiBEYcKUx0m01ug-1/130fx97f/image.png"
            },
            {
                id: 164,
                name: "P250",
                skin: "Ворон",
                price: 58.63,
                chance: [
                    44126,
                    54195
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhh0szYI2gS09uklZaOk_7zNL7DhVRd4cJ5nqfF89qt2FHg_UdkNWymJI7AIQBraFqFrlK4kOu9jMW8ucycwSAwv3Ym-z-DyLzD5snZ/130fx97f/image.png"
            },
            {
                id: 165,
                name: "Glock-18",
                skin: "Weasel",
                price: 43.32,
                chance: [
                    54196,
                    64704
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79fnzL-ckvbnNrfum25V4dB8xL2UpNmg2wO3-BFrajz1dYCQdgZsNArZrFO3wLrs1p_tu8-bn3FisiU8pSGK6x7va44/130fx97f/image.png"
            },
            {
                id: 166,
                name: "Glock-18",
                skin: "Карамельное яблоко",
                price: 76.76,
                chance: [
                    64705,
                    73706
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxfwPz3YzhG09C_k4if2aajMeqJlzgF6ZF10r2RrNyg3Qzjrkptazj7IYaVdwE4NFHRqFHtk-fxxcjr1j3fJ1k/130fx97f/image.png"
            },
            {
                id: 167,
                name: "Five-SeveN",
                skin: "Серебряный кварц",
                price: 61.6,
                chance: [
                    73707,
                    83623
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjxP09-kjZOflvv4OqHUklRC4clnj_v--YXygED6-hBpNmuldoPEcQM6YF3S-Qe_l7js1JS06pnIyno3siN3sCvezhOw1wYMMLJHgOIdFw/130fx97f/image.png"
            },
            {
                id: 168,
                name: "Glock-18",
                skin: "Призраки",
                price: 24.27,
                chance: [
                    83624,
                    92638
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf1OD3djFN79fnzL-chfbgO6LCqWdY781lteXA54vwxgy3rUc9MTjxJNKUewVvYF7U_AO9xua-hsK8uMzPnyc2uXYk43jfm0apwUYbzF_ISHM/130fx97f/image.png"
            },
            {
                id: 169,
                name: "SG 553",
                skin: "Близкая опасность",
                price: 17.6,
                chance: [
                    92639,
                    100000
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFf1OD3YjoXuY-Jm5aOhcj8NrrFk29u5Mx2gv2P9I702wXs80BqYzvxdY6SIA44aV-E_VLvl-i8h8O_vJ7Ny3tjviAgtmGdwUKuDFVKtQ/130fx97f/image.png"
            }
        ]
    },
    {
        id: 6,
        name: 'Рубиновый кейс',
        price: 0,
        discountPrice: null,
        img: 'https://givedrop.ru/images/case/rubin.png',
        weapons: [
            {
                id: 170,
                name: "★ Перчатки спецназа",
                skin: "Пиксельный камуфляж «Лес»",
                price: 11455.24,
                chance: [
                    0,
                    3
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAQ1h3LAVbv6mxFABs3OXNYgJR_Nm1nYGHnuTgDL_VhmpF18Jjj-zPyo_0hVuLpxo7Oy3tcI_BcVJvZl_Q-lC_xrzth5Tq6JrIyiRk7CNwtivYmBXighlIPeNs0eveFwsiIuvQ6g/130fx97f/image.png"
            },
            {
                id: 171,
                name: "Desert Eagle",
                skin: "Код красный",
                price: 2969.77,
                chance: [
                    4,
                    15
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PTbTjlH7du6kb-KkPDmNqjCmXlu5Mx2gv2PoN3zjlbs_BVsYDimJNKWIQI4ZgzU_lC8l-28h5K6vJvOznZr7yYjsWGdwULr5DlSTQ/130fx97f/image.png"
            },
            {
                id: 172,
                name: "Five-SeveN",
                skin: "Hyper Beast",
                price: 1469.59,
                chance: [
                    16,
                    38
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTj5X09q_goWYkuHxPYTZj3tU-sd0i_rVyoD8j1yg5RduNj_yLNSQdVQ-M1DS-1e8xbvrh56_vMiczSFnvXUg4X6IyxGzhh5SLrs4rcs7-T4/130fx97f/image.png"
            },
            {
                id: 173,
                name: "MAC-10",
                skin: "Неоновый гонщик",
                price: 625.74,
                chance: [
                    39,
                    113
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz52NeDkYAhkZzvPAKMPDMo08QfiGy427dVcWdKy_q4LZ1rotNfGMrgqZoxKH8LXXv-EZQmouUk7iKVYLZeKoSPsjH7sbGpYXEH1ujVTXmYdmCw/130fx97f/image.png"
            },
            {
                id: 174,
                name: "P2000",
                skin: "Огненный элементаль",
                price: 528,
                chance: [
                    114,
                    217
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5zP_PnYGc3TQfXPrAMDKVqyw7lGyIN7ctmWdK447oKFlG64NuDbq4lN9EaTJbVX_GGNAH7uBhu1KFcL8CApHjn1S7sa20PCUK-_mkFzrXTpPI11Xdf2Mhv/130fx97f/image.png"
            },
            {
                id: 175,
                name: "R8 Revolver",
                skin: "Градиент",
                price: 481.8,
                chance: [
                    218,
                    343
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopL-zJAt21uH3cDx96t2ykb-ZkuH7P63UhFRd4cJ5nqfA89uiiVGx8hVkYWDwItOSdwc-M1DZr1bowb3u18Tqus-fmCM17CQn-z-DyMgtirei/130fx97f/image.png"
            },
            {
                id: 176,
                name: "CZ75-Auto",
                skin: "Виктория",
                price: 413.82,
                chance: [
                    344,
                    520
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz54LrTgMQhmYzvHFaNWWfEF9xK7XBg_7cNqQdr4oOhXL17us9eTMOItONEZSZaCUvHVYQ_67Eox0aYIKpeKpS7tji3sa3BKBUTzBPd8Hg/130fx97f/image.png"
            },
            {
                id: 177,
                name: "FAMAS",
                skin: "Roll Cage",
                price: 388.82,
                chance: [
                    521,
                    724
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf1OD3dzxP7c-JhoGHm-7LPr7Vn35cpsRw3bySrYr03wLsqkE_MTzyLdWdclA9ZlqF_QDowL290JG-7s_IyHV9-n51iAGw7_U/130fx97f/image.png"
            },
            {
                id: 178,
                name: "AWP",
                skin: "Электрический улей",
                price: 2048.62,
                chance: [
                    725,
                    741
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz56I_OKOC5Yeg3UBJ9TWfEz4QWiUXJl6cY2UNLl9e4HcVm-tobFOuIvMNBPF8TRDv6DZ1v84ks91aJae4vJ_n0-dvDrog/130fx97f/image.png"
            },
            {
                id: 179,
                name: "AK-47",
                skin: "Картель",
                price: 661.94,
                chance: [
                    742,
                    808
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz56P7fiDzZ2TQXJVfdhX_Qo4A3gNio37M52WZmz9e0ALAjttYKVN7QvZtxEG8nXCPXSYwD970huiKgLK8Daoim-ji7oJC5UDGS-VkfD/130fx97f/image.png"
            },
            {
                id: 180,
                name: "Glock-18",
                skin: "Водяной",
                price: 551.96,
                chance: [
                    809,
                    903
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz58OOy2OwhkZzvFDa9dV7g2_Rn5DDQx7cl3a9qz87ITJBLmsoHEYbAtMNEeF8iBU_CFNVqrv09sgqJfKsTbqCu5iyrob2deCBC65Ctazz387ae9/130fx97f/image.png"
            },
            {
                id: 181,
                name: "Desert Eagle",
                skin: "Механо-пушка",
                price: 451.35,
                chance: [
                    904,
                    1049
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PTbTjlH7du6kb-GkvT8MoTdn2xZ_It02rHCpIrx0APk8hVqMWr1LI-QdFU6YAvW8gO_xr3ugMDqup7Mz3FmpGB8st6VkheS/130fx97f/image.png"
            },
            {
                id: 182,
                name: "Desert Eagle",
                skin: "Заговор",
                price: 402.11,
                chance: [
                    1050,
                    1238
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5_MeKyPDJYcRH9BaVfW_k_ywn5GyIn-_huUdO_4rZIfQ69sYOQZbR-Mt4aFsHRUv-DMFiu6Ug9h_JceZOP8X683HzvPm1eDw2rpDxuwu_X-w/130fx97f/image.png"
            },
            {
                id: 183,
                name: "P2000",
                skin: "Кортисейра",
                price: 345.55,
                chance: [
                    1239,
                    1505
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5zP_PnYGc3TQfXPqZfSvA29Tf8W3diuPhuUdO_4rZIKw3o54fBYLcoYt8YHJGFWfWAMgz1u0o_gvVaepeP9njo3y_hPmhfUw2rpDzTyaClDQ/130fx97f/image.png"
            },
            {
                id: 184,
                name: "AUG",
                skin: "Syd Mead",
                price: 261.17,
                chance: [
                    1506,
                    2019
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFABz7PLddgJR9diJmYWKk8j5Nr_Yg2Yf6Zwj3uyZpNjx0AXt_kU9Nm32LYSQcA5tMAqDqwPslea6g8fu7ZXPn2wj5HdWkGXb-Q/130fx97f/image.png"
            },
            {
                id: 185,
                name: "Five-SeveN",
                skin: "Обезьянье дело",
                price: 198.83,
                chance: [
                    2020,
                    2971
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz59PfWwIzJxdwr9ArVhWvws8RvpHyI818ViWta49oQLLFi28d_YYbB-N9tJHpGBXvKAYV-p7koxh_RUepyBqH662CS7bj1cWEHjrD1WmvjH5OXENuHjvw/130fx97f/image.png"
            },
            {
                id: 186,
                name: "Tec-9",
                skin: "Fuel Injector",
                price: 178.61,
                chance: [
                    2972,
                    4171
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhnwMzcdD4b08-jhIWZlP_1IbzUklRc7cF4n-SPo46tiwHt_kpqZGv2LYbBIA5vZ1yBr1m7yefojJa-6snAynNrvHIht2GdwUL3_-929A/130fx97f/image.png"
            },
            {
                id: 187,
                name: "Five-SeveN",
                skin: "Птичьи игры",
                price: 172.07,
                chance: [
                    4172,
                    5470
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz59PfWwIzJxdwr9ALFhCaIF8g3tHS83-tRcWdKy_q4LZ168tIqVN-QpYdEYGsGEX_LVZV_8vho51qJUL5SK83_tiHnvOG4IW0D1ujVToCw2k7Y/130fx97f/image.png"
            },
            {
                id: 188,
                name: "Desert Eagle",
                skin: "Пламя",
                price: 26014.4,
                chance: [
                    5471,
                    5472
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLJTjtO7dGzh7-HnvD8J_XVkjoFuMYiiLqUrI-k3le3r0s5amj7d9eTI1I-M1rW-Fm_xO-50Jfvot2XnhS4_w8U/130fx97f/image.png"
            },
            {
                id: 189,
                name: "M4A1-S",
                skin: "Темная вода",
                price: 3181.19,
                chance: [
                    5473,
                    5483
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz52YOLkDyRufgHMAqVMY_Q3yxLpCzUz18NiRtyJ-r4CIEmyqobAZbEqOIpITsjTX_-AYVyo7hppiKVeepaMoy2-jCToPTwIWBDu-2ga2LjQk56IhGg/130fx97f/image.png"
            },
            {
                id: 190,
                name: "M4A1-S",
                skin: "Чистая вода",
                price: 1058.04,
                chance: [
                    5484,
                    5517
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz52YOLkDyRufgHMAqVMY_0jywfvDCY818VxVcG5yLYDLVWq6ZyTO7l5YtFJTsGDW_KEbgj-6R0x06RfLsGKo37niCm6OG8JXEDs_zkEhqbZ7bA1w3g4/130fx97f/image.png"
            },
            {
                id: 191,
                name: "Five-SeveN",
                skin: "Поверхностная закалка",
                price: 450.25,
                chance: [
                    5518,
                    5663
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz59PfWwIzJxdwr9ALFhU_w28QzTBCI24dJuGoXhpbhQe1jmvNaSZ7AlOI5KGZTZXaOBZACp401q0_IJLJGNoS_m23z3ejBdcR0OBt0/130fx97f/image.png"
            },
            {
                id: 192,
                name: "Glock-18",
                skin: "Жернов",
                price: 151.58,
                chance: [
                    5664,
                    7348
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz58OOy2OwhmYzvFDa9dV8o5-wHgDCMN5cJnXcK7ue1Rfwi7s9DGMuQkNt5JH8eCC_WPMwr07ExpgKJbe8CMoCLt3Su_MmkUG028jFNPF2s/130fx97f/image.png"
            },
            {
                id: 193,
                name: "Five-SeveN",
                skin: "Retrobution",
                price: 104.31,
                chance: [
                    7349,
                    10719
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTj5X09q_goWYkuHxPYTDk39D58dknuDO-7P5gVO8v11rNj_3doSVIA5taAmFrlXqx-rphJ66vc7AnXtg6Cgj43zdyRPm0h9NcKUx0kOQhc3i/130fx97f/image.png"
            },
            {
                id: 194,
                name: "USP-S",
                skin: "Нержавейка",
                price: 358.48,
                chance: [
                    10720,
                    10965
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5uJ_OKIz5rdwrBBLJhXeQF4Rv8NjQm6c5tWNKl5IQLLFi28d_YYbgsOY1ITJXRXqSFZlj7vxlph6heL8Pc9Xy8iS3uPj0IDkLo8jkCzfjH5OVrFrrFFw/130fx97f/image.png"
            },
            {
                id: 195,
                name: "USP-S",
                skin: "Кровавый тигр",
                price: 230.7,
                chance: [
                    10966,
                    11648
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5uJ_OKIz5rdwrBBLJhVOwF5g3oHS417dVcWdKy_q4LZwvnt9GXMbAkYdtFTsDSDqSEbwn67kM-gqdUJsPc9Hnu3H66Mm8IUkH1ujVTCd6Qdhg/130fx97f/image.png"
            },
            {
                id: 196,
                name: "M4A1-S",
                skin: "Кровавый тигр",
                price: 215.34,
                chance: [
                    11649,
                    12446
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz52YOLkDyRufgHMAqVMY_0jyxrpDTM778Jxa9qz87ITJBLq5dbCYrctM9wfSsOBCaLSYQ3-vE5p1qFbKZeKpSLujnm4PmZeWRri5CtazyA3u5I_/130fx97f/image.png"
            },
            {
                id: 197,
                name: "CZ75-Auto",
                skin: "Кровавая паутина",
                price: 132,
                chance: [
                    12447,
                    14654
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz54LrTgMQhvazvVBKJNY_g_8AH5BGlj7p8yBIGwr-8Eelm6toLDZ-J9MNFETsDXUvTXYg_8u05qhvAML8bdvmqxikWkcSVq/130fx97f/image.png"
            },
            {
                id: 198,
                name: "Five-SeveN",
                skin: "Violent Daimyo",
                price: 28.51,
                chance: [
                    14655,
                    28605
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTj5X09q_goW0hPLiNrXukmpY5dx-teTE8YXghRqwrRFoYWGhdYScdQQ8YAvS81a3wui80J606J6YzXE1siEn4yzYnBK1n1gSOVzaIvOT/130fx97f/image.png"
            },
            {
                id: 199,
                name: "Tec-9",
                skin: "Треснувший опал",
                price: 14.3,
                chance: [
                    28606,
                    44276
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhjxszcdD4b09-klYOAkvPLPKvQmlRd4cJ5nqfFo4msi1flqEBtZmzzctfAI1U3Ml3V-VW_k7vugpbt7svJznBnv3Il-z-DyKmyxRUt/130fx97f/image.png"
            },
            {
                id: 200,
                name: "SCAR-20",
                skin: "Blueprint",
                price: 12.27,
                chance: [
                    44277,
                    59491
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PDdTj9O-dmmhomFg8jnMLrDqWZU7Mxkh6eWrNT33FHsqhVuamv1JIGTI1JvNVyG_FO8xevthMTv6cuayHRk63Un-z-DyP5bmFUh/130fx97f/image.png"
            },
            {
                id: 201,
                name: "MAC-10",
                skin: "Океанские мотивы",
                price: 10.52,
                chance: [
                    59492,
                    74005
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0v73fDxBvYyJm4OOlvn9DLPUl31Ippwg376T8I_33ALi8kBpY2vzco6cc1JtNVmFqVK5w7zug5O07pnNm3B9-n51HYlYkkg/130fx97f/image.png"
            },
            {
                id: 202,
                name: "AUG",
                skin: "Гроза",
                price: 3.3,
                chance: [
                    74006,
                    82558
                ],
                color: "#0bf",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFBRv7ODcfi9P6s65mpS0m_7zO6-fzj9V7cAl2eyVpIrz2FKx8kZtZGqhIoWQJwU4aArU8le2xea50J--6oOJlyWzfFi66w/130fx97f/image.png"
            },
            {
                id: 203,
                name: "P250",
                skin: "Северный лес",
                price: 2.75,
                chance: [
                    82559,
                    91037
                ],
                color: "#0bf",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhoyszOfi9H_8iJlo-Zkvb4DLfYkWNFpsEp2rzDpo-g3lLj_0duYzyiJoPAcwJqM1DWr1btl-bujZfotZXIynZ9-n51cU1OKdk/130fx97f/image.png"
            },
            {
                id: 204,
                name: "G3SG1",
                skin: "Тропическая штриховка",
                price: 2.15,
                chance: [
                    91038,
                    100000
                ],
                color: "#0bf",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZfwOP3ZTxS6eOlnI-Zg8j-JrXWmm5u5Mx2gv2Ppd7zjATirxFkNWD2JIGde1Q4MlyCrAe8x-u705a6uJ7Aynph6SUq4GGdwUKYnSlmwg/130fx97f/image.png"
            }
        ]
    },
    {
        id: 7,
        name: 'Сапфировый кейс',
        price: 0,
        discountPrice: null,
        img: 'https://givedrop.ru/images/case/saphir.png',
        weapons:[
            {
                id: 205,
                name: "★ Водительские перчатки",
                skin: "Багряный узор",
                price: 46762.43,
                chance: [
                    0,
                    0
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAX1R3LjtQurWzLhRfwP_BcjZ9_tmyq4yCkP_gfeqCwT8EvcN13L2Zo4-g21KxrUJpMmzxJ9CddFM8aFrY_VW9lbvmgsOi_MOeabvul1k/130fx97f/image.png"
            },
            {
                id: 206,
                name: "M4A4",
                skin: "Император",
                price: 2110.96,
                chance: [
                    1,
                    20
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJTwW09m7hIWZmOXLP7LWnn8fvpRzj72ZoNmsigS1_hdpZDzzIIeVelA2Zl6G_wLoxuvq0MW07c6awWwj5HetHVr5dg/130fx97f/image.png"
            },
            {
                id: 207,
                name: "M4A1-S",
                skin: "Chantico's Fire",
                price: 1398.14,
                chance: [
                    21,
                    49
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITCmX5d_MR6j_v--InxgUG55RFtYTqiLY-UdVJrMF6DrAS3xe26gMDtv8jKmCNiv3EktH3enhO21xFSLrs4RMuJRwY/130fx97f/image.png"
            },
            {
                id: 208,
                name: "AUG",
                skin: "Хамелеон",
                price: 491.62,
                chance: [
                    50,
                    133
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz56IeSKMyJYcxHFPqNWXfg_-A3jByY7-sJcWdKy_q4LZwq9t4KTZ-UtZIwfHsiEWPOOM1ur705q0vMLe8OI8Svs1XvsOD8NDxD1ujVTA4wQYEk/130fx97f/image.png"
            },
            {
                id: 209,
                name: "AK-47",
                skin: "Картель",
                price: 661.94,
                chance: [
                    134,
                    193
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz56P7fiDzZ2TQXJVfdhX_Qo4A3gNio37M52WZmz9e0ALAjttYKVN7QvZtxEG8nXCPXSYwD970huiKgLK8Daoim-ji7oJC5UDGS-VkfD/130fx97f/image.png"
            },
            {
                id: 210,
                name: "Desert Eagle",
                skin: "Механо-пушка",
                price: 451.35,
                chance: [
                    194,
                    287
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PTbTjlH7du6kb-GkvT8MoTdn2xZ_It02rHCpIrx0APk8hVqMWr1LI-QdFU6YAvW8gO_xr3ugMDqup7Mz3FmpGB8st6VkheS/130fx97f/image.png"
            },
            {
                id: 211,
                name: "P250",
                skin: "Покойник",
                price: 313.24,
                chance: [
                    288,
                    450
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5rZrblDzRyTRSQVPBhUfQ08AngCBg_7cNqQdr48ukHLA3m4IaQMLYvNdxEG8ODDPLSYAj6vk0606QJepaIoCK92CztPnBKBUTWIFz05A/130fx97f/image.png"
            },
            {
                id: 212,
                name: "USP-S",
                skin: "Сайрекс",
                price: 203.39,
                chance: [
                    451,
                    822
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8j3KqnUjlRc7cF4n-SPrYrx2wKxqRY9ZGCgdYSScFJtZAnQ-VDryLjqgJG0uJybz3BgvXQm4mGdwUKgJSXXOg/130fx97f/image.png"
            },
            {
                id: 213,
                name: "AWP",
                skin: "Phobos",
                price: 134.87,
                chance: [
                    823,
                    1715
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FABz7PLfYQJS5NO0m5O0mvLwOq7c2G4EucYk2L7Ep42t3VGx_RFtamHyLISXe1JsYw6Fr1e9wuvr1JS5vs7XiSw0S4ZJl1o/130fx97f/image.png"
            },
            {
                id: 214,
                name: "XM1014",
                skin: "Зигги",
                price: 37.14,
                chance: [
                    1716,
                    10432
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PLZTiVPvYznwL-RnvDzKoTQmGpD681oteTE8YXghRq3rhU-MWz1LIDAJFc8MFvT_QDtx7vogpG_7cvPyyBjuSN24nzbzhy0n1gSOc-qRS8d/130fx97f/image.png"
            },
            {
                id: 215,
                name: "Tec-9",
                skin: "Айзек",
                price: 79.21,
                chance: [
                    10433,
                    13066
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5vMeDsDzRyTRDHAvlhXeYz_QXjHxg_7cNqQdr4o-xTKgm7tobOYrUrZt4aHJHYU6TQZVj0vxg_ifBULMGN9ivqiH-9OHBKBUQ9rY3UNg/130fx97f/image.png"
            },
            {
                id: 216,
                name: "Galil AR",
                skin: "Леденец",
                price: 59.75,
                chance: [
                    13067,
                    17412
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz58Ne-8PDZ1TQfXPqdfUPw29RrTGSYg_M5gWNKlyLYDLVWq6ZyUZeN4N45IF8jSW6CPMwGsv0xrg_NbKZLd9Snm3y_vPTgKD0e-q25QhqbZ7daZ7b9X/130fx97f/image.png"
            },
            {
                id: 217,
                name: "MP7",
                skin: "Перистое облако",
                price: 26.41,
                chance: [
                    17413,
                    30089
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFABz7PXBfzxO08y5m4yPkvbwJenum25V4dB8xLCVotSi0Fbt_xBlYWDxJ9eVdVVqYFjYrwK3xui9hpa1vczAmnNjuSc8pSGKVVLJu5I/130fx97f/image.png"
            },
            {
                id: 218,
                name: "Five-SeveN",
                skin: "Капилляры",
                price: 23.07,
                chance: [
                    30090,
                    44368
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTj5X09q_goWYkuHxPYTHk2Jf18l4jeHVu9ij3FG3_UptMWqgJ9WcIQ48aQmB-wC2leq6h8S8u5udmCNn6Cdz4SnD30vgWlTck20/130fx97f/image.png"
            },
            {
                id: 219,
                name: "P90",
                skin: "Сцепление",
                price: 16.5,
                chance: [
                    44369,
                    62205
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FABz7OORIQJW_tm3kL-HnvD8J_WBl2hTsJJ1j7rF99qljQW3-0Q9Mmj2LdDBd1Q2Y1vYqFC_k7zn057qot2XnsJUPN1Z/130fx97f/image.png"
            },
            {
                id: 220,
                name: "SCAR-20",
                skin: "Assault",
                price: 16.5,
                chance: [
                    62206,
                    80042
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PDdTi5B7c6JlZOYluL4J4Tdn2xZ_Isk3ejArdWs3w2wrRI9MWrwINTHcVM3YAvQ8we7xezpjMO1tM6fzXUypGB8suJLlS0Q/130fx97f/image.png"
            },
            {
                id: 221,
                name: "SCAR-20",
                skin: "Blueprint",
                price: 12.27,
                chance: [
                    80043,
                    100000
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PDdTj9O-dmmhomFg8jnMLrDqWZU7Mxkh6eWrNT33FHsqhVuamv1JIGTI1JvNVyG_FO8xevthMTv6cuayHRk63Un-z-DyP5bmFUh/130fx97f/image.png"
            }
        ]
    },
    {
        id: 8,
        name: 'Алмазный кейс',
        price: 0,
        discountPrice: null,
        img: 'https://givedrop.ru/images/case/almaz.png',
        weapons: [
            {
                id: 222,
                name: "AUG",
                skin: "Хот-род",
                price: 23031.8,
                chance: [
                    0,
                    0
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAZu7OHNdQJO5du-gM7SlvP2a-KFkDsD6cN33b6Z84rz0QXs8xJuZzymdYfDclU2M17W_Fm7366x0jzU3_8y/130fx97f/image.png"
            },
            {
                id: 223,
                name: "Negev",
                skin: "Анодированная синева",
                price: 13941.4,
                chance: [
                    1,
                    2
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf0v33fzxU9eO6nYeDg7mhN7rXlTgDuMQi3-vCpdjw2Ae2qRZsMG2mINSUIAQ3YlvZ8gW_k7q-m9bi60E-BDow/130fx97f/image.png"
            },
            {
                id: 224,
                name: "Sawed-Off",
                skin: "Медь",
                price: 4389.68,
                chance: [
                    3,
                    5
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cCx979OmhIWZqPrxN7LEmyUJ6ZBz07CUoYjz2lCx-kFpazr6JoaTe1U8Yl_V_gLtyOntgJe975qa1zI97eqxrstO/130fx97f/image.png"
            },
            {
                id: 225,
                name: "MAG-7",
                skin: "Антитерраса",
                price: 3938,
                chance: [
                    6,
                    8
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhoyszPdDJP6ciknYO0hOPxI6jukXlU7ctOguzA45W72Q3k_hdpYm-iIYSddQc-YVyD-lK7l-3v1p-56MiYz3RquCV2sHvfzQv330-hLT2elw/130fx97f/image.png"
            },
            {
                id: 226,
                name: "AWP",
                skin: "Змеиная кожа",
                price: 3925.36,
                chance: [
                    9,
                    11
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FBRw7ODGcDZH09GzkImemrmsY-PUxmgAv5Up2rnFrdmijlXgqUA_ZjzzIIKQcQA7Y1uE_Fbtlefum9bi68KPYhsE/130fx97f/image.png"
            },
            {
                id: 227,
                name: "AUG",
                skin: "Медянка",
                price: 3704.8,
                chance: [
                    12,
                    15
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFA957PDHYS1H_tSzlYS0m_7zO6-fxz0H7sEk37zDpdyi3VKxqUVla277J4-ce1I3YV6D_lS8yLrt0ZC_vYOJlyXik3twsg/130fx97f/image.png"
            },
            {
                id: 228,
                name: "P2000",
                skin: "Кольчуга",
                price: 3530.78,
                chance: [
                    16,
                    19
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zJfAJB5N2_mo2KnvvLP7LWnn8fupN00u2U8NykigK1rUs4MGH2dtOWdlVoYF7Y-VHrl-jtjZa9upufnWwj5HdqMVWH_w/130fx97f/image.png"
            },
            {
                id: 229,
                name: "MP9",
                skin: "Ящик Пандоры",
                price: 3290.35,
                chance: [
                    20,
                    23
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAZh7OPJfzlN_t2JmYWPnuL5fevTlz0F7pIgieqUrYitiQWy-hdrNWumddfAcVU_NF3Zr1jvxbvu1sWi_MOepgbcjQQ/130fx97f/image.png"
            },
            {
                id: 230,
                name: "MP9",
                skin: "Темный век",
                price: 3009.6,
                chance: [
                    24,
                    27
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAZt7P7NZTxO09W4mIGSqPv9NLPF2GoFsZMp2-_Dpo2m0Vaw-ERkY2zycNKXcFBoaA7Z8lnolebshMK4vcvXiSw0RlUWR70/130fx97f/image.png"
            },
            {
                id: 231,
                name: "Galil AR",
                skin: "Водная терраса",
                price: 2912.95,
                chance: [
                    28,
                    31
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczJfAJF6dO7kZSZnvTLIK_Uhnhu4MBwnPCPoI_2iVK1_RVrMGz2IYKRdVdrMF6E_wW_w-bqhZbpu5rIz3Ni6Cgms2GdwUJTK7A28Q/130fx97f/image.png"
            },
            {
                id: 232,
                name: "Tec-9",
                skin: "Терраса",
                price: 2643.38,
                chance: [
                    32,
                    36
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhoyszPdDJP6ciknYO0hOPxI6juj25d5MpmteTE8YXghRq2rhE6NzyiI4adIFU_ZFmCq1Dqle_thce0upjBz3IxuSIrsXaOnhHin1gSOam774aE/130fx97f/image.png"
            },
            {
                id: 233,
                name: "UMP-45",
                skin: "Пламя",
                price: 2479.43,
                chance: [
                    37,
                    41
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf0vL3dzFD4dmlq4yCkP_gfeuCxTMG7pFw2uiV9I-jjlHi-0dvZDygLY-dJw89NQ3QqFK3lOe9jcSi_MOeUg1XNk4/130fx97f/image.png"
            },
            {
                id: 234,
                name: "UMP-45",
                skin: "Лабиринт минотавра",
                price: 2472.79,
                chance: [
                    42,
                    46
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf0Ob3fTxA9c6_mpSDqPrxN7LEmyVU7p0o3-iU8Y-k3QS2qEU9ZT_6d9Sdew46MgqE_QO7lLrog8C47ZuY1zI97d-e9afQ/130fx97f/image.png"
            },
            {
                id: 235,
                name: "MP9",
                skin: "Хот-род",
                price: 2191.44,
                chance: [
                    47,
                    51
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAZu7OHNdQJO5du-gM7bwqb2MeuClTsCv8Ek2LiZ9t2giwa28hVlZGD0doSUIANqYV_U_gC2366x0j0WoURS/130fx97f/image.png"
            },
            {
                id: 236,
                name: "AUG",
                skin: "Анодированная синева",
                price: 2024.23,
                chance: [
                    52,
                    56
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAZu7P3JZyR97s63go-0m_7zO6-fzjsEv5Yp0uuQ8dui3wTt_RBsYG-lJdSXJg5sMFGDr1C7wO7sg5G06IOJlyVTQYQwXg/130fx97f/image.png"
            },
            {
                id: 237,
                name: "AK-47",
                skin: "Черный глянец",
                price: 1423.38,
                chance: [
                    57,
                    63
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KcqPrxN7LEmyUDsJIh27-YpYmmiVDm_UFuZ2vzJYPDJlRsYw2C8lC5w-fu0Je_6ZrB1zI97TOUU9Z0/130fx97f/image.png"
            },
            {
                id: 238,
                name: "USP-S",
                skin: "Бизнес-класс",
                price: 1399.2,
                chance: [
                    64,
                    70
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq4yekPD1NL7ug3hBpdZOhuDG_Zi721WwqBJvMGH2coPEJwRsYVDT_lm3kO_vgJ_pvZ_MzXZivXZ04nyOlwv330_YPZS7Gw/130fx97f/image.png"
            },
            {
                id: 239,
                name: "XM1014",
                skin: "Красная кожа",
                price: 1302.35,
                chance: [
                    71,
                    77
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PDdTjFH7ci-kZK0j_qlY-qFqWdY781lxL3Dp4qjjgOwrUQ4Y2qlJNTDIAQ5YAzRrlG4kufrjcTutM6dmiBj6SA8pSGKXAbUj-c/130fx97f/image.png"
            },
            {
                id: 240,
                name: "Sawed-Off",
                skin: "Первый класс",
                price: 1210,
                chance: [
                    78,
                    85
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cih9686zkY60m_L1J7PUhFRC6dJ0jubH87P4jVC9vh5yNWyhdYLEIFc6aFiGrwC2yLi6gsK-6M7KyHIwuyJwsXbVnhW0hxpFaPsv26Ju1DZk9g/130fx97f/image.png"
            },
            {
                id: 241,
                name: "M4A4",
                skin: "Радиационная опасность",
                price: 1126.29,
                chance: [
                    86,
                    93
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhzw8zGZDZH_8iknZCOqPjmMrXWk1Rc7cF4n-SP9o6h2gfjrhY-Z2-lcYWde1NsNAmC-APok-zm0Z-_vMvBz3tq7yEmsWGdwUJ6nxi7Dw/130fx97f/image.png"
            },
            {
                id: 242,
                name: "MAC-10",
                skin: "Градиент",
                price: 1086.26,
                chance: [
                    94,
                    101
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0vL3dzxG6eO6nYeDg7miZbqDxj8B7Z0n2-3E94mjjQTirRI9MTjyIIWQeg84Y1DS_lm3wOfom9bi6-g13CfU/130fx97f/image.png"
            },
            {
                id: 243,
                name: "P250",
                skin: "Современный охотник",
                price: 952.83,
                chance: [
                    102,
                    110
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhoyszAZDNW6c6JmY-PkuX6DLbUkmJE5Ysh3-yXoNvx0FfsqBVtMm76JtOddQI6Y12GrAC_kOi81J-7uZyazndrpGB8ssdk9hMS/130fx97f/image.png"
            },
            {
                id: 244,
                name: "Glock-18",
                skin: "Реактор",
                price: 931.33,
                chance: [
                    111,
                    120
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0v73fyhB4Nm3hr-bluPgNqnfx1RW5MpygdbJ8I3jkRrm_xA4a2v6d4LGc1M2YQqFrgO5lea5hJW4uM7LyHtl6CchtHzVyRWxn1gSOQY07qpC/130fx97f/image.png"
            },
            {
                id: 245,
                name: "CZ75-Auto",
                skin: "Изумруд",
                price: 675.58,
                chance: [
                    121,
                    133
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v33dDBH_t26kL-HnvD8J_WElT8Gu5Eg27iVotv00Azg80ZtMDimIo-ceg45YAuCrFbtyenv1sW6ot2Xntd6B4y4/130fx97f/image.png"
            },
            {
                id: 246,
                name: "Nova",
                skin: "Современный охотник",
                price: 608.11,
                chance: [
                    134,
                    148
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhoyszAZDNW6c6JmY-PkuX6DLPUl31IpsEkiOqUo9yl2ADjqkJvMTr7d9PGJFI7M1nSq1K5l7jt1sLt6cjJmnt9-n51t-PXeVU/130fx97f/image.png"
            },
            {
                id: 247,
                name: "MAC-10",
                skin: "Янтарный градиент",
                price: 607.27,
                chance: [
                    149,
                    163
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0vL3dzxG6eO7kZSKm_v9MITdn2xZ_It13rzC9Nqj21DsqEs6ZWyiLI7AcVdsMl3W_1W7kr3vhJHotZzLnXFgpGB8sjEeQG_x/130fx97f/image.png"
            },
            {
                id: 248,
                name: "ПП-19 Бизон",
                skin: "Современный охотник",
                price: 594.39,
                chance: [
                    164,
                    178
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf2-r3eShM-Nmkq42Ek_LmPYTck29Y_cg_iLiX9NXx31Dl-xI9amjzcdWTIFA8MAvW_AW-xOy6gZDu75-bm3c26z5iuyjIrvyRmA/130fx97f/image.png"
            },
            {
                id: 249,
                name: "MAC-10",
                skin: "Ядерный сад",
                price: 592.9,
                chance: [
                    179,
                    193
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0v73fyhB4Nm3hr-YnOL4P6iCqWZQ65QhteTE8YXghRrn_xBvZj-gdYaXIAM9ZA2Bq1G9krq7hpa4uZ7Bn3ExvyEnsH7alhXhn1gSOXsb08Wt/130fx97f/image.png"
            },
            {
                id: 250,
                name: "ПП-19 Бизон",
                skin: "Пыльник",
                price: 587.63,
                chance: [
                    194,
                    208
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0uL3YilH6dCJlpKKgfjLP7LWnn8f6cZ037uY8ImjjASxrhU5amj2LdPEJAY6YQrT_FXvlebqhsXv6pXAymwj5HcaiWp-nA/130fx97f/image.png"
            },
            {
                id: 251,
                name: "Nova",
                skin: "Оранжевое пламя",
                price: 577.5,
                chance: [
                    209,
                    224
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhoyszAZDNW6c6JloyKjfLLPKnQmGxU18h0juDU-MKk3ADirhdlMWzwcdXBIQM4aQ7Tq1fsxOy7jcK86Z3JyidnuSUj5XjVgVXp1tLbIK_-/130fx97f/image.png"
            },
            {
                id: 252,
                name: "MP7",
                skin: "Черепа",
                price: 537.9,
                chance: [
                    225,
                    241
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz52JLSKOC5YYQ_XDaxNY_g_8AH5BGkzuZUzVtThpO5fLFi75YqUOrkuM41PG8LWCPGDblz6uB4-iKkILsSPvmqxiih17oj8/130fx97f/image.png"
            },
            {
                id: 253,
                name: "MAG-7",
                skin: "Желто-черные полосы",
                price: 537.01,
                chance: [
                    242,
                    258
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhzw8zAcCdD_tiJlpKKgfjLP7LWnn8fvZR30r2SpY3wiQDiqks6amqmIYaRJFQ3NAnZ_1Htlenoh5-_vMnPnWwj5HeouX7iBw/130fx97f/image.png"
            },
            {
                id: 254,
                name: "AUG",
                skin: "Крылья",
                price: 532.4,
                chance: [
                    259,
                    276
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz56IeSKOC5YdAHDFahbTuYF9R3rNis77893GtLno-pfKwnt5YGSZ-QoYo0YGsPSUqCCZQGou05s1fBdKMeJ8nvt2SX3ejBdNGsYVYA/130fx97f/image.png"
            },
            {
                id: 255,
                name: "SSG 08",
                skin: "Объезд",
                price: 515.9,
                chance: [
                    277,
                    294
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f2-r3Yi5FvISJmYGZnPLmDLbUkmJE5Ysm37-Vpoj32wXs-EJrNmumLNDAclI6Z1zX_Vjqxb29hcO878nPmyRlpGB8sq1srR54/130fx97f/image.png"
            },
            {
                id: 256,
                name: "SG 553",
                skin: "Ультрафиолет",
                price: 511.45,
                chance: [
                    295,
                    313
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5oM7bgZgh0fTvSFLJOUPAF-Q3oADI_ppQ7BYS1r-lSe17vsdfONbUsMtxEGpPRWvLSMFz9vkwx1KJYKseNpnjxnXO-LevKDKA/130fx97f/image.png"
            },
            {
                id: 257,
                name: "XM1014",
                skin: "Оранжевое пламя",
                price: 478.74,
                chance: [
                    314,
                    333
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PvRTjVX4sizhr-Jm_buNoTehGpf78BOh-zF_Jn4xgzi8kE4NmCmI4HGelNoN1rX-Qe_yO_m0MC7u57Bzntk7nFwtnfbyRepwUYb0WYGVSE/130fx97f/image.png"
            },
            {
                id: 258,
                name: "USP-S",
                skin: "Калька",
                price: 473.2,
                chance: [
                    334,
                    354
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh-TLMbfEk3tD4ctlteXI8oThxlHg-kppY2D7dtSWIwc-ZA3W_1W7le3t1pLou5_BwXo1vCchtyvamRSpwUYbl4sQs20/130fx97f/image.png"
            },
            {
                id: 259,
                name: "MP7",
                skin: "Снежная мгла",
                price: 463.17,
                chance: [
                    355,
                    375
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFBRv7OTAeClH48miq4iOluHtfeOCxToIupAgj7qUrd-kigXl_UU_ZW77do6UdAY8YluDqAe9wee-jJWi_MOexHMtiag/130fx97f/image.png"
            },
            {
                id: 260,
                name: "Five-SeveN",
                skin: "Нитро",
                price: 425.28,
                chance: [
                    376,
                    399
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTi5N09OklY6Mksj1MLjUmH9C1810i__Yu9um2w22qkJkZ2-hctCWJ1I2NQ2E81G8x7q505G9vczAznRjuSQn4C3D30vgF3v-5zk/130fx97f/image.png"
            },
            {
                id: 261,
                name: "USP-S",
                skin: "Нержавейка",
                price: 358.48,
                chance: [
                    400,
                    431
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5uJ_OKIz5rdwrBBLJhXeQF4Rv8NjQm6c5tWNKl5IQLLFi28d_YYbgsOY1ITJXRXqSFZlj7vxlph6heL8Pc9Xy8iS3uPj0IDkLo8jkCzfjH5OVrFrrFFw/130fx97f/image.png"
            },
            {
                id: 262,
                name: "MP7",
                skin: "Полная остановка",
                price: 354.18,
                chance: [
                    432,
                    463
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFA957OXJYzRB7dG5q5KOk8j8NrrHjyVXupIg2biQptSt3gPlrUZlNmmhcNWSIFI5M1rT_ATtybjmhce06pqb1zI97QxO8B3s/130fx97f/image.png"
            },
            {
                id: 263,
                name: "XM1014",
                skin: "Смешанный синий камуфляж",
                price: 343.53,
                chance: [
                    464,
                    497
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PvRTitD_tW1lY2EqPX4Jr7um25V4dB8xOyXoI7w2gayrUZoYj32IdPAdgY7ZAvV-ljvwevtgJe_6pScyicx7CM8pSGKFSQfI94/130fx97f/image.png"
            },
            {
                id: 264,
                name: "P250",
                skin: "Снежная мгла",
                price: 339.79,
                chance: [
                    498,
                    532
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhz3MzfeTRW6dOjgL-DkvbiKvWElTII6ZIhj--Sp433jgXj-UduMGr2JIbBJ1dsaQ6DrwC8xL_n0Jbuot2XnjwhZrR8/130fx97f/image.png"
            },
            {
                id: 265,
                name: "Desert Eagle",
                skin: "Corinthian",
                price: 331.33,
                chance: [
                    533,
                    568
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLZTjlH7du6kb-ImOX9Pa_Zn2pf18h0juDU-MKm2ley-kE6MGGnJIOXclA2ZQ7Vr1Lrlem8gpfvuMzOySBjsyd3s3vUgVXp1hBYWgPe/130fx97f/image.png"
            },
            {
                id: 266,
                name: "CZ75-Auto",
                skin: "Нитро",
                price: 324.69,
                chance: [
                    569,
                    606
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZfwPz3fi9D4tuzq4GIlPL6J6iDqWZU7Mxkh6eSo9Wm0FW3_hJrajinJtXDcg82MgnY-lS3leq8gJS56ZXOnCRh6yN2-z-DyFmfHqmu/130fx97f/image.png"
            },
            {
                id: 267,
                name: "P250",
                skin: "Улей",
                price: 292.6,
                chance: [
                    607,
                    651
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5rZrblDz9-TRbHBahbRMo38QzlHCp8vcRhUoKyo7hWfA-5sdHAYrkpN9pETsfYUvXTZVv_6xhs1vNaKZLcoTSvg3pCiqtZ3A/130fx97f/image.png"
            },
            {
                id: 268,
                name: "P2000",
                skin: "Серебро",
                price: 283,
                chance: [
                    652,
                    699
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zJfwJR5dCgkZK0m_7zO6-fzj9T7sEjjLnD8Y-iiVbi-kc4ajqnI4eVcVQ5NVjX-1e-x-_ujZe6uoOJlyU5sT_JRA/130fx97f/image.png"
            },
            {
                id: 269,
                name: "P90",
                skin: "Арктическая сетка",
                price: 281.6,
                chance: [
                    700,
                    748
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FBRw7P7NYjV969C3l4mOhcj5Nr_Yg2Yfv5Fy37uRpdit3Vbi_Ec5Zm3yIdCVcQA8NV3Y-1i-kubq0Me9u8nInGwj5HcORVNQGg/130fx97f/image.png"
            },
            {
                id: 270,
                name: "Tec-9",
                skin: "Токсичность",
                price: 275,
                chance: [
                    749,
                    799
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhoyszGZD5O6d2kq5OAgvv4IO7ugm5Ssfp9g-7J4cLx0Aew_Bc5ZzryJNLHIQNoMA3Z-FTvxb29gJW978zOmHo373V05ivcgVXp1mJNZYNi/130fx97f/image.png"
            },
            {
                id: 271,
                name: "Galil AR",
                skin: "Осколки",
                price: 257.62,
                chance: [
                    800,
                    856
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz58Ne-8PDZ1TQzbPqNMSfgq-A3TCzUz_shcWdKy_q4LZw3tsoWUM-EkONFMG5WDC_WENQyvvkxu0qEIeZeK8inn2yjtOWkKXhX1ujVTjkT5DC0/130fx97f/image.png"
            },
            {
                id: 272,
                name: "Dual Berettas",
                skin: "Черная лимба",
                price: 253.83,
                chance: [
                    857,
                    915
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5-OOqhNQhkZzvRBKFNU_sF8QTlHSIh18VxVcG5yLYDLVWq6ZyUZrItNtkYHsXTCPTVYVj740Jp1vVfeZOMpyK-iCrgP2cOWRDs-TgNhqbZ7VuDunxe/130fx97f/image.png"
            },
            {
                id: 273,
                name: "AK-47",
                skin: "Элитное снаряжение",
                price: 234.45,
                chance: [
                    916,
                    983
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz56P7fiDzRyTQXJVfdhUfQp4A3-EBg_7cNqQdr48-9fLQrnsIXCNLkuYYxLGMbVD_SOMl_54kw8iaQMKsTY8yzq3y3oPXBKBUT7Bt81Vg/130fx97f/image.png"
            },
            {
                id: 274,
                name: "USP-S",
                skin: "Кровавый тигр",
                price: 230.7,
                chance: [
                    984,
                    1053
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5uJ_OKIz5rdwrBBLJhVOwF5g3oHS417dVcWdKy_q4LZwvnt9GXMbAkYdtFTsDSDqSEbwn67kM-gqdUJsPc9Hnu3H66Mm8IUkH1ujVTCd6Qdhg/130fx97f/image.png"
            },
            {
                id: 275,
                name: "FAMAS",
                skin: "Смертенок",
                price: 223.3,
                chance: [
                    1054,
                    1127
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz59Ne60IwhvazvGDq9TV_wu4BHTBCI24dJuGoLhpOgHewnutdGUYuQpNt5MSpKFX6OGZg7_4x1p1aBZL5bdoSPn2iX3ejBdT4JNcno/130fx97f/image.png"
            },
            {
                id: 276,
                name: "MAG-7",
                skin: "Объемные шестиугольники",
                price: 216.58,
                chance: [
                    1128,
                    1205
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz52NeTiDz9-TQ3BDrNfVPA-5gfiNio37M52WZm18-1efl3o4YbFNuQoMd0fFpPTXveBNQ77u0luh6ZfLsSN8S_t2C_hJC5UDBo0wd3v/130fx97f/image.png"
            },
            {
                id: 277,
                name: "M4A1-S",
                skin: "Кровавый тигр",
                price: 215.34,
                chance: [
                    1206,
                    1284
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz52YOLkDyRufgHMAqVMY_0jyxrpDTM778Jxa9qz87ITJBLq5dbCYrctM9wfSsOBCaLSYQ3-vE5p1qFbKZeKpSLujnm4PmZeWRri5CtazyA3u5I_/130fx97f/image.png"
            },
            {
                id: 278,
                name: "Tec-9",
                skin: "Окостеневший",
                price: 215.14,
                chance: [
                    1285,
                    1363
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhh3szHYi5L6sWJmImMn-O6YeLTx24FuMByiLyWrd3wjQKy_0Q-Z2_zcIWWdQRsZAvW_FG_lenpjYj84srtx4T2zA/130fx97f/image.png"
            },
            {
                id: 279,
                name: "UMP-45",
                skin: "Груда костей",
                price: 207.9,
                chance: [
                    1364,
                    1447
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5uOfPhZQh0YjvRCrVSUMo-_QnrGyY_18VxVcG5yLYDLVWq6ZzCZrklY9pKTsmEDP6FYgCo6x84iPILepKApSjq3X_gMm0KDULp_mJQhqbZ7du2QWlm/130fx97f/image.png"
            },
            {
                id: 280,
                name: "MAG-7",
                skin: "Поджигатель",
                price: 198,
                chance: [
                    1448,
                    1539
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz52NeTiDyR3TQnDBvdhWvwo8QrlHTM35vhuUdO_4rZIeV3r4dbPM-YtYt4fHcGBCPODMA_4ux9shfVfKcDa837rjirrbm5eXQ2rpDxXSu86JQ/130fx97f/image.png"
            },
            {
                id: 281,
                name: "MAC-10",
                skin: "Алоха",
                price: 193.6,
                chance: [
                    1540,
                    1635
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0v73fDxBvYyJlYyEn_bLP7LWnn8fsZ1w3OiY8dTw3QDir0BtNm-mdtLEIAZrZViGrFPvkOzrjcDuvZ_PmGwj5HfqJxVUTQ/130fx97f/image.png"
            },
            {
                id: 282,
                name: "Dual Berettas",
                skin: "Анодированная синева",
                price: 193.08,
                chance: [
                    1636,
                    1731
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf0v33fzxU9eO6nYeDg7msZOKIz2hS7ZEki7mS89Tw0Ae3-Us4MWD7LIGRegc-MF2D81i-ku_vm9bi644LgQp9/130fx97f/image.png"
            },
            {
                id: 283,
                name: "M4A1-S",
                skin: "Брифинг",
                price: 189.87,
                chance: [
                    1732,
                    1830
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITck39D4dF0mOj--InxgUG55RBpNz2ndtKdIw47NQnV-FC-lOy9gpK76JzNwHE36SAl4y3Vzkez0klSLrs4clHPJp4/130fx97f/image.png"
            },
            {
                id: 284,
                name: "Nova",
                skin: "Буря",
                price: 185.37,
                chance: [
                    1831,
                    1934
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz51O_W0Dz9-TRfHALNXWPAF9hrtHygN5cJnXcK7ue8FL1m54oGVYOQlYtEYGsfRXPTQMgGs70M5gKZbJpKKqS-9jy-7OmwUG028bf9lHZw/130fx97f/image.png"
            },
            {
                id: 285,
                name: "MP9",
                skin: "Закат",
                price: 185.04,
                chance: [
                    1935,
                    2038
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FA957P3dcjFH7c6JhIGfg_LmPenum3sI18h0juDU-MKljAbi-UM4MDrycNTAdFRoNQzZ-1a9yOy60JK96pnIwHZnuiNw5X_bgVXp1qKBy7Rx/130fx97f/image.png"
            },
            {
                id: 286,
                name: "Dual Berettas",
                skin: "Пантера",
                price: 178.2,
                chance: [
                    2039,
                    2149
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5-OOqhNQh0fTvSAK5KVPAoywXpDS4n5YliBtazruNQfgrssNfPN-IqYtkdSpTZU_OCYAir70luiaAPfZOIqHznw223bZvDH3kW/130fx97f/image.png"
            },
            {
                id: 287,
                name: "SG 553",
                skin: "Брызги волны",
                price: 177.73,
                chance: [
                    2150,
                    2261
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5oM7bgZgh0YjvREbJfRcot9R7pGhgw-sZ1W-i78r8PPFHx54PAM7QuOdtJTZKFCaKPMw_540kw1aNdJ5yMonvpiym7bGsOD0K4-3VExrGfBSee5g/130fx97f/image.png"
            },
            {
                id: 288,
                name: "XM1014",
                skin: "Костемолка",
                price: 168.04,
                chance: [
                    2262,
                    2385
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PLFTjNX79CzlZK0hPzhP7fCx1RJ5ZQh273--YXygED6_EJqNmHxLYDGcgFqYg3WrlTtyLjq05S8up3Mmntluihwty3al0bmgAYMMLKwoJ4rnA/130fx97f/image.png"
            },
            {
                id: 289,
                name: "Tec-9",
                skin: "Синий титан",
                price: 163.46,
                chance: [
                    2386,
                    2515
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5vMeDsDzZpTRDLFaFQVeA3p1j6Nis77893GoDgp-xeeQrqtoHDYrklNowaF8HYXqSAbg3870Js1vQIKMDf837q3i33ejBdY11STUA/130fx97f/image.png"
            },
            {
                id: 290,
                name: "G3SG1",
                skin: "Витраж",
                price: 161.45,
                chance: [
                    2516,
                    2647
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz58Z_CyYQhvazvADbVbTPo27Q_jBxgw-sZ1W-i78r8PPFHx4NDHO-IlMtBFGMTWCfLSMwyr6Ehr1qBYKJOI9HjoiC69OmkOWkLs_HVExrGy_c776A/130fx97f/image.png"
            },
            {
                id: 291,
                name: "MAG-7",
                skin: "Насыщенная вода",
                price: 158.58,
                chance: [
                    2648,
                    2784
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhh3szFcDoV09-3gZOfnvTLP7LWnn8fuZYiiOvH9NXz21ey80FuYz_7cdSQdwM4NVyE_1Xvxujp1sC975ScyWwj5HeAY-I7KQ/130fx97f/image.png"
            },
            {
                id: 292,
                name: "FAMAS",
                skin: "Гексан",
                price: 143.74,
                chance: [
                    2785,
                    2946
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz59Ne60IwhvazvADbVbVPAiywXpDS4n5YkxDI_hoeoEfQzq54TCOuEvM4xFF5bWWPCFYQj-60w4hfVUfJaMpH7ow223bU8aEp6L/130fx97f/image.png"
            },
            {
                id: 293,
                name: "M4A4",
                skin: "Тусклые полосы",
                price: 139.76,
                chance: [
                    2947,
                    3115
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz52YOLkDyR3TR7HA7JfX_Q3ywr7Nio37M52WZnioO4DfF_qvIvHOrArYdoZF5GGUvGAYwCuvEw_haIOfJPc9im5jCjtJC5UDOMEsaUh/130fx97f/image.png"
            },
            {
                id: 294,
                name: "USP-S",
                skin: "Закрученный",
                price: 134.1,
                chance: [
                    3116,
                    3296
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5uJ_OKIz5rdwrBBLJhX-AF4Rv8Njcg58BxUcSl_q05JFm77cebLbd_OdlPH8CFW_GEZwmu7x9phfMJLMTfpi--jnjvb24CCULvq2MEzrWZ-uw8ZTeUj80/130fx97f/image.png"
            },
            {
                id: 295,
                name: "CZ75-Auto",
                skin: "Кровавая паутина",
                price: 132,
                chance: [
                    3297,
                    3482
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz54LrTgMQhvazvVBKJNY_g_8AH5BGlj7p8yBIGwr-8Eelm6toLDZ-J9MNFETsDXUvTXYg_8u05qhvAML8bdvmqxikWkcSVq/130fx97f/image.png"
            },
            {
                id: 296,
                name: "UMP-45",
                skin: "Metal Flowers",
                price: 132,
                chance: [
                    3483,
                    3668
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf0uL3ZDBSuImJkoyKmvLyP7TGk3lu5Mx2gv2PrI-giVGwqUFtMj31IICUJAY5Z1nT_VTtxO29gJbqvJ7JnyNj7yEitmGdwULd1U8dAw/130fx97f/image.png"
            },
            {
                id: 297,
                name: "Tec-9",
                skin: "Трафарет",
                price: 112.09,
                chance: [
                    3669,
                    3909
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhhwszcdD4b09--lYyAqOf1J6_UhGVu5Mx2gv2P8Nyh2gGw-xJpZTqiIdeXcAI-M1_R_li7kOu605Tu75mYn3I2syMh5GGdwULq_VC6dg/130fx97f/image.png"
            },
            {
                id: 298,
                name: "Desert Eagle",
                skin: "Метеорит",
                price: 109.99,
                chance: [
                    3910,
                    4156
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLFTj5Q9c-ilYyHnu3xN4TVl3la18l4jeHVu97x31Dj_kA9a2DwcdWWJAZvZV_Qqwe3x-fv1Me6uMmanCE3vSEm4ynD30vgrmdJqGM/130fx97f/image.png"
            },
            {
                id: 299,
                name: "SCAR-20",
                skin: "Кровавая паутина",
                price: 108.49,
                chance: [
                    4157,
                    4409
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5oN-KnYmdYeh39FqVcT8o-9RrnDDUN5cJnXcK7ubpXfwjs4tTBM-N6MI5KG5OCWaOOYF-v6x9qg_MPK8GM8SvsjyXvb24UG028Gn5RfL0/130fx97f/image.png"
            },
            {
                id: 300,
                name: "SSG 08",
                skin: "Кислотный градиент",
                price: 100.07,
                chance: [
                    4410,
                    4693
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0vL3dzxG6eOxhoGYhPv1Pb_ummJW4NE_0ruYoNz0jgflqEJrZD3yII-dcQA4ZFzV8wXqlLvogsC6v57OwCRn7j5iuyiZeoRmBw/130fx97f/image.png"
            },
            {
                id: 301,
                name: "P250",
                skin: "Ржавая сталь",
                price: 99.7,
                chance: [
                    4694,
                    4979
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5rZrblDzZqTQDGEaFKWPA05w3TGi4-_sJxa9qz87ITJBLu5oDCYbItZt8eTMbVXvWANFivu0lthKdUfZyIqCrnjCXob25eWxG55Ctaz0FAzs2n/130fx97f/image.png"
            },
            {
                id: 302,
                name: "SSG 08",
                skin: "Темная вода",
                price: 99.32,
                chance: [
                    4980,
                    5266
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5oJ-TlaAhmfzvYBKJMXco-9RrnNio37M52WZnu9e8EfQW5sNDEMOF5ONlPHsjYWqPTNF_76h9q06YPLJSJpn7q2yS8JC5UDERrScot/130fx97f/image.png"
            },
            {
                id: 303,
                name: "MAC-10",
                skin: "Ультрафиолет",
                price: 99,
                chance: [
                    5267,
                    5555
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz52NeDkYAh0fTvSFLJOUPAF-Q3oADI_ppA1AIHmp-8CfljmttPHNeMkM94dG8aCW_fXN1j1uBpqiPVVepTY9S3xnXO-QDw0ayE/130fx97f/image.png"
            },
            {
                id: 304,
                name: "G3SG1",
                skin: "Лазурная зебра",
                price: 96.67,
                chance: [
                    5556,
                    5854
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz58Z_CyYQh0YjvYBKJMXfY7-TfuBTI318pmUN6j-vVXLAvu4tGTZ7h-NNsaTcLXWKSBbl2o6h861PAOJpzYqCjojH7sa24DRVO1recBjp_I/130fx97f/image.png"
            },
            {
                id: 305,
                name: "Nova",
                skin: "Призрачный камуфляж",
                price: 94.6,
                chance: [
                    5855,
                    6162
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz51O_W0DyR3TQfDDK9hS_o18DfuBTI318pmUN6j-vUHKw_ot4DAZ7V-YY1EHMWEWvOOZg_14kswg6JYJ8bb9CLsiCzoaTheRVO1reogNdNi/130fx97f/image.png"
            },
            {
                id: 306,
                name: "ПП-19 Бизон",
                skin: "Синие полутона",
                price: 92.4,
                chance: [
                    6163,
                    6480
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz55Pfm6PghmfzvWFLJPU_wp8TfkCCs0_MhtUei78r8PPFHxsoTHZeUpZN5IGpGCU_GCZQGovk4wgaZaecDbpijr2CzqOjgKWhq9q3VExrEWZCjBQQ/130fx97f/image.png"
            },
            {
                id: 307,
                name: "XM1014",
                skin: "Красный питон",
                price: 91.96,
                chance: [
                    6481,
                    6800
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5jObLlYWNYeh39Eq5fV_Ap_wHiNjU37PhuUdO_4rZILw-9t4OUM-MuZotFGpOFDPLXYw3_7UprgakILMSBqCnn2n-7b20JXw2rpDwV-u7dEw/130fx97f/image.png"
            },
            {
                id: 308,
                name: "Glock-18",
                skin: "Синяя трещина",
                price: 91.84,
                chance: [
                    6801,
                    7121
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz58OOy2OwhvazvBE6FPSfA24RrpNio37M52WZni9e5WflnvtNHDOrAvM9BKG5bSU6CHZVr460I91aEMfZaNqS653SrsJC5UDM_8leUW/130fx97f/image.png"
            },
            {
                id: 309,
                name: "Five-SeveN",
                skin: "Ками",
                price: 91.49,
                chance: [
                    7122,
                    7443
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz59PfWwIzJxdwr9CblhV_Q3_TfhDCM7_cotDY_koOwCKwS-4oLEN7F4Mo1FTpWDCP-OYV_07khrifJcLZGB8ynm2jOpZDkegjxWog/130fx97f/image.png"
            },
            {
                id: 310,
                name: "Galil AR",
                skin: "Синий титан",
                price: 91.3,
                chance: [
                    7444,
                    7766
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz58Ne-8PDZ1TQXMPrRXSPQ0_R3hWnck18tqU9-iue9Ufwi6vNeVMuN5ZIpPTZOFWffXbgCu40g806deL8fdpSy72SXpaW8UG028Qrrckr0/130fx97f/image.png"
            },
            {
                id: 311,
                name: "FAMAS",
                skin: "Макабр",
                price: 90.29,
                chance: [
                    7767,
                    8094
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRfwOP3dzxP7c-JmYGIlvXmNoTck29Y_cg_372YoIj03gOw-0BvMjund9LAcgNrMFmG-VC7wL_t0MW76piczXc36z5iuygBWnlG7Q/130fx97f/image.png"
            },
            {
                id: 312,
                name: "Five-SeveN",
                skin: "Паслен",
                price: 89.1,
                chance: [
                    8095,
                    8428
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz59PfWwIzJxdwr9CblhWvk14w3-Ghg_7cNqQdr49LlUL17t54PGZeUuZdBIGcPXD_CCMF__7hlthfJeLpfcoXm-jC66aXBKBURLD0JxwQ/130fx97f/image.png"
            },
            {
                id: 313,
                name: "P90",
                skin: "Модуль",
                price: 88.76,
                chance: [
                    8429,
                    8764
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5rbbOKMTlYYAvbAKxcUPA_8DfhDCM7_cotBNawoL5fKl664dfBNbcrZYoZG8nQCKKENwD97hkx0qNYeZaKpXvoiDOpZDkZSZ5WrA/130fx97f/image.png"
            },
            {
                id: 314,
                name: "SG 553",
                skin: "Анодированная синева",
                price: 88,
                chance: [
                    8765,
                    9104
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFf0v33fzxU9eO6nYeDg7mhMO-ElTpSu5Yg2rmXrNjziwTl-xJvajuiLYTAcVdoMArRrlbtxLvom9bi65LEnjT7/130fx97f/image.png"
            },
            {
                id: 315,
                name: "ПП-19 Бизон",
                skin: "Знак воды",
                price: 86.9,
                chance: [
                    9105,
                    9449
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz55Pfm6PghvazvVALRbTso55g3_HRg_7cNqQdr4o7gAeAnu5YOXMuF4ZI5NG5HVU_GOMl_1vx1pg6VcLsCB8yvrjijga3BKBURhAfg3aQ/130fx97f/image.png"
            },
            {
                id: 316,
                name: "MP7",
                skin: "Анодированная синева",
                price: 86.48,
                chance: [
                    9450,
                    9796
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFAZu7P3JZyR94NWxnJTFwPWjY-6CxT1Su8B03r6T8Y6s2wft-EJpam6lJNfHcw8_Y1nXqFLqkvCv28FJ8mUtyA/130fx97f/image.png"
            },
            {
                id: 317,
                name: "CZ75-Auto",
                skin: "Смокинг",
                price: 80.97,
                chance: [
                    9797,
                    10174
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZfwPz3fi9B7eO6nYeDg7msZ-KBzj0E7cdw2b_CpdX2i1Dj_hJlMWilLYWRdgNoN1qF8we8k-a5m9bi6-1tbAt1/130fx97f/image.png"
            },
            {
                id: 318,
                name: "Tec-9",
                skin: "Айзек",
                price: 79.21,
                chance: [
                    10175,
                    10563
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5vMeDsDzRyTRDHAvlhXeYz_QXjHxg_7cNqQdr4o-xTKgm7tobOYrUrZt4aHJHYU6TQZVj0vxg_ifBULMGN9ivqiH-9OHBKBUQ9rY3UNg/130fx97f/image.png"
            },
            {
                id: 319,
                name: "Glock-18",
                skin: "Карамельное яблоко",
                price: 76.76,
                chance: [
                    10564,
                    10967
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxfwPz3YzhG09C_k4if2aajMeqJlzgF6ZF10r2RrNyg3Qzjrkptazj7IYaVdwE4NFHRqFHtk-fxxcjr1j3fJ1k/130fx97f/image.png"
            },
            {
                id: 320,
                name: "M4A1-S",
                skin: "Смешанный камуфляж",
                price: 76.74,
                chance: [
                    10968,
                    11371
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO-jb-dluX9MLrcmVRd4cJ5nqeWrNit2AewqhY_Yj31cIDGJgRtZV-E8gS2xOzv0Z_qucvJm3M16SFw-z-DyBeWkcOk/130fx97f/image.png"
            },
            {
                id: 321,
                name: "P2000",
                skin: "Красные фрагменты",
                price: 75.68,
                chance: [
                    11372,
                    11782
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5zP_PnYGc3TQzbPrBRUOwF9wnhBhg_7cNqQdr4p-5TcATvstCVNbUpOIpKSZXYWfOGMlv9vEIw1PMJLZ2N8SLviSXpbHBKBURSpl0FWw/130fx97f/image.png"
            },
            {
                id: 322,
                name: "Galil AR",
                skin: "Песчаная буря",
                price: 74.57,
                chance: [
                    11783,
                    12200
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz58Ne-8PDZ1TQfXPrNfUvEp4Af-BBg_7cNqQdr4oeJeeAW6tdPAMbQtZdgfTpHYDvOHZFj9v0s91aJZe5fa8Xnrjyi7OHBKBURcjVoNTA/130fx97f/image.png"
            },
            {
                id: 323,
                name: "USP-S",
                skin: "Lead Conduit",
                price: 73.71,
                chance: [
                    12201,
                    12624
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09ulq5WYh8jiPLfFl2xU18h0juDU-MKljgLjqRVuaj-gLIKUdQdtMgvS-VK_wrvpgZ7quM_Im3Qw6Cdz4CzZgVXp1o7eGVz_/130fx97f/image.png"
            },
            {
                id: 324,
                name: "P2000",
                skin: "Imperial",
                price: 71.52,
                chance: [
                    12625,
                    13064
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zJfAJSvozmxL-CmufxIbLQmlRD7cFOhuDG_Zi7iwDjrkFsZGrzI4GXd1NqYA7Zr1ntl-i7hJK7tMmbnyZgvyIhtniMmAv3308P9JxMBw/130fx97f/image.png"
            },
            {
                id: 325,
                name: "Negev",
                skin: "Тра-та-та",
                price: 71.5,
                chance: [
                    13065,
                    13504
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz51MeSwJghkZzvAE6FKXeE74DfiDCA3_vhuUdO_4rZIfFnotteSMLN_N4tFHMHUXaKFYw2ou004gfIPKsbYp3vsiS_qb2ZYCQ2rpDyjN8Rd0w/130fx97f/image.png"
            },
            {
                id: 326,
                name: "ПП-19 Бизон",
                skin: "Латунь",
                price: 70.52,
                chance: [
                    13505,
                    13951
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0uL3cy9D_8-JnIWKge66YrrQwGpTsZ0m27rF8NqjjVCwqUA4NziiIYHBJAQ_ZwyC_VDtw7-6h4j84sq1nvST4w/130fx97f/image.png"
            },
            {
                id: 327,
                name: "M249",
                skin: "Магма",
                price: 69.74,
                chance: [
                    13952,
                    14403
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz52ZrfsDzZ2TQvAEqlaVfQ0ywXpDS4n5YlhDYPn8uoDcQzu4deXOuYvZNtJTcLZW6WHZlv_vx87g_VYeZXcpyLow223bQPPKCbp/130fx97f/image.png"
            },
            {
                id: 328,
                name: "Galil AR",
                skin: "Смокинг",
                price: 67.38,
                chance: [
                    14404,
                    14873
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczbfgJN_t-3q4yCkP_gfe7VlDwJv5Up3r-V8Nym2Vfi80U9NmumI4WVJw83Zg3Q-1S8x7_o0Mei_MOe7tXEvoo/130fx97f/image.png"
            },
            {
                id: 329,
                name: "CZ75-Auto",
                skin: "Гексан",
                price: 66.61,
                chance: [
                    14874,
                    15349
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz54LrTgMQhvazvADbVbVPAiywXpDS4n5YllBYbipe0HLw_m5oCVMrMuOYseS8XYCP6PZAGu409uiKRdKJKI9Sjuw223bZyfXPm3/130fx97f/image.png"
            },
            {
                id: 330,
                name: "SSG 08",
                skin: "Когти",
                price: 65.24,
                chance: [
                    15350,
                    15836
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5oJ-TlaAhkZzvREqcOBMoz-QXjGzMz5PhuUdO_4rZIcVm64dPDZuV6ZI1OF8iEXKfVNF2r704_0fMOJsaK8S3r2n_pOmZeCQ2rpDxk_ln28Q/130fx97f/image.png"
            },
            {
                id: 331,
                name: "SG 553",
                skin: "Дамасская сталь",
                price: 64.97,
                chance: [
                    15837,
                    16325
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFf0uL3dTxP7c-1gZO0hPChZujummJW4NE_372Sptmg3gzjrUNvam-icIeVJ1I8N1rX-lTskuzrh8XpucudnyAwvz5iuygR9uL9aQ/130fx97f/image.png"
            },
            {
                id: 332,
                name: "Five-SeveN",
                skin: "Серебряный кварц",
                price: 61.6,
                chance: [
                    16326,
                    16842
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjxP09-kjZOflvv4OqHUklRC4clnj_v--YXygED6-hBpNmuldoPEcQM6YF3S-Qe_l7js1JS06pnIyno3siN3sCvezhOw1wYMMLJHgOIdFw/130fx97f/image.png"
            },
            {
                id: 333,
                name: "Sawed-Off",
                skin: "Янтарный градиент",
                price: 60.83,
                chance: [
                    16843,
                    17366
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cDx96t2ykb-GkuP1P7fYlVRd4cJ5nqfA9Nuh2Qzm-0VlZmqmcILHdQE-ZgyEqAK2xOe915fp7pqbn3Qws3Fw-z-DyIWEAXkH/130fx97f/image.png"
            },
            {
                id: 334,
                name: "Galil AR",
                skin: "Леденец",
                price: 59.75,
                chance: [
                    17367,
                    17900
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz58Ne-8PDZ1TQfXPqdfUPw29RrTGSYg_M5gWNKlyLYDLVWq6ZyUZeN4N45IF8jSW6CPMwGsv0xrg_NbKZLd9Snm3y_vPTgKD0e-q25QhqbZ7daZ7b9X/130fx97f/image.png"
            },
            {
                id: 335,
                name: "Five-SeveN",
                skin: "Городская опасность",
                price: 58.3,
                chance: [
                    17901,
                    18447
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz59PfWwIzJxdwr9ArVhWvws8RvpHyI819JxVta4yLMHM12t4O2bZuR1dYVSScnYXaWBZ1_1vEpt0vVUfMPd8yLu2SXgPzhfXxvt-GINkO-O7LdphHFWHSZb54FIQQ/130fx97f/image.png"
            },
            {
                id: 336,
                name: "Tec-9",
                skin: "Латунь",
                price: 58.14,
                chance: [
                    18448,
                    18995
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhhwszKYzxR_-O7kYSCgvq6ZLnXlThXu8QhiLuR89-hiwex_EA-MG_wcIfGdlQ3ZwrWqwK3kOy914j84spCpFtqYA/130fx97f/image.png"
            },
            {
                id: 337,
                name: "Galil AR",
                skin: "Ками",
                price: 57.4,
                chance: [
                    18996,
                    19550
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz58Ne-8PDZ1TQzbPqdfUPw2ywPtBC4N5cJnXcK7ubhRKl67s9fGMLh4ZYlKHsnYX_-BMA_9608wiahfK5KLoHzq23u8bGgUG028KBH0d08/130fx97f/image.png"
            },
            {
                id: 338,
                name: "USP-S",
                skin: "Ночные операции",
                price: 55.5,
                chance: [
                    19551,
                    20123
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09Svq5aKhf73MrbeqWVY781lteXI8oThxlCy-hA9MGqlJoHAIw4_Y1vXqwLskue7gJC9v5qfzCdg7nR05XjfyxCpwUYbxcylpaA/130fx97f/image.png"
            },
            {
                id: 339,
                name: "Desert Eagle",
                skin: "Бронзовая декорация",
                price: 55.42,
                chance: [
                    20124,
                    20697
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5_MeKyPDJYcwn9A7JRUu8_yxv8CDU55MJcWdKy_q4LZw7os4LCMLcsMdAYTJbSUqWDZQr040hr06NaKZTdoHi83SzoPmwDCBf1ujVTJL13O6g/130fx97f/image.png"
            },
            {
                id: 340,
                name: "MAC-10",
                skin: "Краски",
                price: 53.94,
                chance: [
                    20698,
                    21286
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJlYyOnP_tMoTVg2Ru5Mx2gv3--Y3nj1H680Q4MWn7LICQI1BqZ1yCqFfqxem5g5-56svOzyNi6CIj53_UnBe11wYMMLJXi8Kg2Q/130fx97f/image.png"
            },
            {
                id: 341,
                name: "MP9",
                skin: "Дротик",
                price: 53.9,
                chance: [
                    21287,
                    21875
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz52JLqKMyJYfxSbPqNWWeMo-wbTBCI24dJuGoLl8roAeQvvvIfGM7MrNtpFGMDSWaCDY1_5uU061PddfcOP8iy5jij3ejBdfohEiJw/130fx97f/image.png"
            },
            {
                id: 342,
                name: "P90",
                skin: "Демонтаж",
                price: 51.05,
                chance: [
                    21876,
                    22493
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FBRw7P7NYjV95NOiq4GFk8j3PLfVqWZU7Mxkh6eTrNmnigzlqEBqZz-hJYCQIAE8YFuEqFK-xO65gZK6uMjBm3Rm6CUi-z-DyF0b-FUY/130fx97f/image.png"
            },
            {
                id: 343,
                name: "AUG",
                skin: "Ricochet",
                price: 50.81,
                chance: [
                    22494,
                    23113
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAZt7PLddgJI-dG0mIW0m_7zO6-fkjMHsZUgi72T896m0VCwqEBlMD31IIPBcFc_ZlrY-1m2wLi6hpHouYOJlyUksb3lzA/130fx97f/image.png"
            },
            {
                id: 344,
                name: "Sawed-Off",
                skin: "Полная остановка",
                price: 50.6,
                chance: [
                    23114,
                    23736
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3eSR9-t2knYOKmvjLIb7VqWdY781lxLHF99il0Ffg-EJrNmj6dtDBJA5vNQvWqVK_ye3sh5G0upvNy3FnviU8pSGKve7IyHk/130fx97f/image.png"
            },
            {
                id: 345,
                name: "Desert Eagle",
                skin: "Городской щебень",
                price: 49.62,
                chance: [
                    23737,
                    24369
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PvRTitD_tW1lY2EqOLmMbrfqWZU7Mxkh6eUo4j2i1G1_EdoYDrxJ4PHelU3ZVGBrgC9xufvjJG8vpjMzXpgvyZ0-z-DyDrrCVR0/130fx97f/image.png"
            },
            {
                id: 346,
                name: "MP9",
                skin: "Смертельный яд",
                price: 49.5,
                chance: [
                    24370,
                    25003
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz52JLqKMyJYfxSbPqRbXfE27Tf8Bi4h58lcWdKy_q4LZwW64ILPNuYlMNlJGpGDXaWGNVz1uB4xgqZeesbdpX7riSruM20NXRD1ujVTojjdwSw/130fx97f/image.png"
            },
            {
                id: 347,
                name: "FAMAS",
                skin: "Демонтаж",
                price: 49.01,
                chance: [
                    25004,
                    25643
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRfwOP3fDhR5OO-m5S0lvnwDLjemm9u5Mx2gv2P9tWmiQPk-xE-YDqlINKUdgQ6YAzTqVm9xuvpjMS5u5zPwXcxunIg7GGdwUK4xWYQ4w/130fx97f/image.png"
            },
            {
                id: 348,
                name: "P2000",
                skin: "Пульс",
                price: 48.4,
                chance: [
                    25644,
                    26289
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5zP_PnYGc3TQfXPrAMDKVqyxj5BTQ318pmUN6j-vUCcQXvtoLPZ-UuMY4fGJWGW_eOb1yo60hqhPdZKMCAoSPmjyXpP2YJRVO1rVbjdAVC/130fx97f/image.png"
            },
            {
                id: 349,
                name: "CZ75-Auto",
                skin: "Спираль",
                price: 45.1,
                chance: [
                    26290,
                    26972
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz54LrTgMQhmfzvFGLJfSPAF-Q3oADI_psQ0V4_n8-xWfVrv5YHDOuV_MYsfHJWCDPTTZ1ir709uhqAOLpCAoinxnXO-uOr7WwI/130fx97f/image.png"
            },
            {
                id: 350,
                name: "MAG-7",
                skin: "Ядро кобальта",
                price: 43.98,
                chance: [
                    26973,
                    27668
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhjxszFcDoV09GvhoOOmfLLPr7Vn35cppF13r2W896t2VDl_URkZzjxLYPDe1I8ZV3X8lTvlenv0ZHuvJqdn3t9-n51V5d808k/130fx97f/image.png"
            },
            {
                id: 351,
                name: "Glock-18",
                skin: "Литьё",
                price: 43.01,
                chance: [
                    27669,
                    28375
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0uL3djFN79eJkIGZnLryMrfdqWZU7Mxkh6eR896g3FHiqRJqN2jwctKdcQc-ZFuD_wK9wefs15HpuJrMmiRqvid2-z-DyKOVjqh4/130fx97f/image.png"
            },
            {
                id: 352,
                name: "SSG 08",
                skin: "Пучина",
                price: 42.74,
                chance: [
                    28376,
                    29085
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5oJ-TlaAhmYzvOBLZXXeEy9QbTBCI24dJuGtGwoL9WeFnqstGUN7IrNd4eS8PQC_aOYA71u0g_hqILLsSJ8S6-iSX3ejBdMsZAA7k/130fx97f/image.png"
            },
            {
                id: 353,
                name: "FAMAS",
                skin: "Survivor Z",
                price: 41.24,
                chance: [
                    29086,
                    29812
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0Ob3dzxP7c-JmIWFg_bLP7LWnn9u5MRjjeyPoo333QTsqkdsZDz2ItfHdwI_NQmF-1O5lLjq08W6uMvJwCRl63Ui7WGdwUJj4iqdBQ/130fx97f/image.png"
            },
            {
                id: 354,
                name: "G3SG1",
                skin: "Мрак",
                price: 38.65,
                chance: [
                    29813,
                    30570
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz58Z_CyYQhmfzvFUrNZDco34RrnEBg_7cNqQdr49blecVrn4tCXN-EtZI5JHpHUDP-AZQ35vx9s06FbfpGJ9nu8iyjraHBKBURjthrGIA/130fx97f/image.png"
            },
            {
                id: 355,
                name: "Dual Berettas",
                skin: "Картель",
                price: 38.5,
                chance: [
                    30571,
                    31330
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf0uL3dShD4N6zhoWfg_bnDLjQhH9U5Pp8j-3I4IG7ilfj_RBrZDzyJoOdcgI9aVvWqAToxe3mg8Tv78zLynAw6CMl4XzYyQv330_FBz5Big/130fx97f/image.png"
            },
            {
                id: 356,
                name: "Negev",
                skin: "Почва",
                price: 37.28,
                chance: [
                    31331,
                    32105
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz51MeSwJgh0YjvMBKdbSsou4Rr9NjM3-tViXdmJ-r4CIEmyqoOVMbQlZYkeHsbZWvTXZwCvuEM6iPALJpyAp3no33-7MzpYUhDr-2Ia2LjQEoGtsFM/130fx97f/image.png"
            },
            {
                id: 357,
                name: "MAG-7",
                skin: "Райский страж",
                price: 36.3,
                chance: [
                    32106,
                    32891
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz52NeTiDzRyTQnDBvdhVPA74g3iNio37M52WZnho-tRcAnr4deUMbF_NN9ITMWGWvWOZlqs6ENr0qMIfpOPoH_r3HzqJC5UDA1d_hMd/130fx97f/image.png"
            },
            {
                id: 358,
                name: "MAC-10",
                skin: "Carnivore",
                price: 36.19,
                chance: [
                    32892,
                    33679
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0uL3fDxB043mq4GHnvL6DLjQm2Ru5cB1g_zMu9-hjAfk8kJpMW3zdYOSJgE6YVCErwC5kry-hZK5u8vNyXpjuici4n_D30vgGysqe2g/130fx97f/image.png"
            },
            {
                id: 359,
                name: "M249",
                skin: "Spectre",
                price: 35.2,
                chance: [
                    33680,
                    34479
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-jxcjhjxszFI2kb08-mkYOfhfLLPr7Vn35cppck3rnH9o-tjlHg8hY4Ym_3IoORdgdqaF2BqVe3wOfs1pG_u8zMmHR9-n51T70T2IU/130fx97f/image.png"
            },
            {
                id: 360,
                name: "R8 Revolver",
                skin: "Кровавая паутина",
                price: 35.2,
                chance: [
                    34480,
                    35279
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopL-zJAt21uH3eSR9-9m0h7-GkvP9JrafwjsHvsQmjrmUrI_00FHg_EY-YzzycNeSe1JsZw7R-QS6kry5hMDu6oOJlyWSzPI-Lg/130fx97f/image.png"
            },
            {
                id: 361,
                name: "Nova",
                skin: "Лесничий",
                price: 34.1,
                chance: [
                    35280,
                    36092
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz51O_W0DzRyTQrNF6FhTvQ08w3-Nio37M52WZm3o-1Tel3mvdHEO7coYolOTMeGXfKFZQ_44kg_iacOL5WIpCrm2ym_JC5UDHUVB3qN/130fx97f/image.png"
            },
            {
                id: 362,
                name: "SCAR-20",
                skin: "Outbreak",
                price: 34.1,
                chance: [
                    36093,
                    36905
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PvRTi5B7c7kxL-BgvnzP77DqWdY781lxL3Ho9il2lK1qEY_Mmn3JdfEJwFqM1nXqFO_xbvq1sDouZjIzXswviQ8pSGKZe0NLy8/130fx97f/image.png"
            },
            {
                id: 363,
                name: "UMP-45",
                skin: "Заблуждение",
                price: 33.61,
                chance: [
                    36906,
                    37724
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5uOfPhZQh0YjvXDLAKCco-uR7lGi495tRcWdKy_q4LZ167s9eQNuMtZdpJG8DWW6PTNAz-7U841vVYJsDYpCu-jHvtO2YPUxX1ujVT46Q6Aqs/130fx97f/image.png"
            },
            {
                id: 364,
                name: "MP7",
                skin: "Akoben",
                price: 33,
                chance: [
                    37725,
                    38550
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFBRw7P7YJgJW_tW0lYy0jvL4P7TGqWdY781lxLjCpdnx2gPg80Q6Njv2cI6XJw4_Z13X-FC3xey61JXtupqczyAyuSM8pSGKG3rzCmA/130fx97f/image.png"
            },
            {
                id: 365,
                name: "Glock-18",
                skin: "Горелка Бунзена",
                price: 31.68,
                chance: [
                    38551,
                    39391
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz58OOy2OwhmYzvFDa9dV6Riyw7gCCo3-_hhWMKzyLYDLVWq6ZzGN7B6ZN1KTMTXD6LXNwz56hhs1aFYKcOI8ni-jC_hOm0MCUHjqWMFhqbZ7Ul85kyx/130fx97f/image.png"
            },
            {
                id: 366,
                name: "Desert Eagle",
                skin: "Оксидное пламя",
                price: 30.9,
                chance: [
                    39392,
                    40241
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PDdTjlH_9mkgL-OlvD4NoTSmXlD58F0hNbM8Ij8nVn680E_ZDvwdo-Re1RtYA3W_gLrk-rngMC8upTJmHFmsiErs3jfnxe11wYMMLJe6xiBeg/130fx97f/image.png"
            },
            {
                id: 367,
                name: "AUG",
                skin: "Квадрант",
                price: 30.42,
                chance: [
                    40242,
                    41096
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAR17PLddgJN_t24k4W0g-X9MrXWmm5u5cB1g_zMu4qmjQO3rhJoNm31J4PGIQNrMwyDqAK9yebr18Lq6JvLy3tl6ykh7S3D30vgaHf5G_Y/130fx97f/image.png"
            },
            {
                id: 368,
                name: "Nova",
                skin: "Exo",
                price: 29.78,
                chance: [
                    41097,
                    41958
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhhwszGfitD08-1nb-Nnsj5Nr_Yg2YfuZ1y3eySo96l3wDn-kNrY2v3JI-TegQ5MlzY-Fm5ybrsgpLvu8zAyWwj5HecrHIalg/130fx97f/image.png"
            },
            {
                id: 369,
                name: "P90",
                skin: "Grim",
                price: 29.73,
                chance: [
                    41959,
                    42821
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIQJF_tW7mb-GkvP9JrafxGkDv8B13LyT8N2l2QHirhI4az2mINSVclQ9MFGBrFK5x-3mgMW5uIOJlyWQ8lzxbw/130fx97f/image.png"
            },
            {
                id: 370,
                name: "SG 553",
                skin: "Atlas",
                price: 29.04,
                chance: [
                    42822,
                    43691
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFf0Ob3YjoXuY-JlZSHluTLPr7Vn35cppIi2buRodn3iQ23-hE5ZzygJIKTI1A4YArQ_QDtyOrv1MC-vZWfz3B9-n51LjY-2Y4/130fx97f/image.png"
            },
            {
                id: 371,
                name: "XM1014",
                skin: "Скумбрия",
                price: 28.82,
                chance: [
                    43692,
                    44563
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PLZTiVPvYznwL-YlOL5ManYl1Rd4cJ5ntbN9J7yjRq28xZrajvwd4KWewc5aVzR_1Dqxubm0MLo6Z7PySYx63F3s3iLyxThn1gSOSLdB7yD/130fx97f/image.png"
            },
            {
                id: 372,
                name: "Five-SeveN",
                skin: "Violent Daimyo",
                price: 28.51,
                chance: [
                    44564,
                    45439
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTj5X09q_goW0hPLiNrXukmpY5dx-teTE8YXghRqwrRFoYWGhdYScdQQ8YAvS81a3wui80J606J6YzXE1siEn4yzYnBK1n1gSOVzaIvOT/130fx97f/image.png"
            },
            {
                id: 373,
                name: "MP9",
                skin: "Bioleak",
                price: 27.8,
                chance: [
                    45440,
                    46322
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAZt7P7YKAJA5dO6kYGAqPrxN7LEmyUBu5Am07vD8dqjjALmqkRqNTj1JNPEcg4-Y17VqFDoxb3pgJG0vZma1zI97fymjwv4/130fx97f/image.png"
            },
            {
                id: 374,
                name: "P90",
                skin: "Элитное снаряжение",
                price: 27.62,
                chance: [
                    46323,
                    47207
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5rbbOKMyJYYl2SPq1fT-E_5hHTBCI24dJuGtPup70DLQ7p54GVYbB4YdxNGcTUDvPUZVr14ktrh6NVfcaPqHy92Hj3ejBdvdlUfSo/130fx97f/image.png"
            },
            {
                id: 375,
                name: "CZ75-Auto",
                skin: "Полимер",
                price: 27.5,
                chance: [
                    47208,
                    48093
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73cidUvuO7kr-GkvP9JrafxGkD7pUp3r-U8dX2iQHl-RI9Zmind4aWcwZsYlmB-gDrl-vr0568tYOJlyVmSeTYkA/130fx97f/image.png"
            },
            {
                id: 376,
                name: "UMP-45",
                skin: "Лабиринт",
                price: 27.5,
                chance: [
                    48094,
                    48979
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5uOfPhZQhvazvOCK5bT8o15gniDiIN5cJnXcK7ue5Xf1nusYbONeQpNYpIFsPYWf7SZF30409pgqALfZHb9Cnoi3m8O2wUG028C02LLjw/130fx97f/image.png"
            },
            {
                id: 377,
                name: "Glock-18",
                skin: "Захоронение",
                price: 27.06,
                chance: [
                    48980,
                    49869
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz58OOy2OwhkZzvFDa9dV8o-8Qn4ATM95MtcWdKy_q4LZw7r5YLBO-J5MtAZHsfRWvCFZgv97Rpq1fRdKsDbqS7o3C-8PWhYWUL1ujVTUehMDk4/130fx97f/image.png"
            },
            {
                id: 378,
                name: "UMP-45",
                skin: "Бунт",
                price: 26.98,
                chance: [
                    49870,
                    50760
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5uOfPhZQhkZzvXDLAKCcov5BrjCDUN5cJnXcK7ue9RLw--vdfGO7IvON9ETpGCDKeEYgmrvEppgvRcfZSJpi263S-8OmwUG02867JdrUw/130fx97f/image.png"
            },
            {
                id: 379,
                name: "MP7",
                skin: "Перистое облако",
                price: 26.41,
                chance: [
                    50761,
                    51656
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFABz7PXBfzxO08y5m4yPkvbwJenum25V4dB8xLCVotSi0Fbt_xBlYWDxJ9eVdVVqYFjYrwK3xui9hpa1vczAmnNjuSc8pSGKVVLJu5I/130fx97f/image.png"
            },
            {
                id: 380,
                name: "Sawed-Off",
                skin: "Yorick",
                price: 26.03,
                chance: [
                    51657,
                    52556
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3di59_92hkYSEkfHLPb7ShGRc6ctyj_v--YXygED68xA5Mj3xIYHEJFJoMA7VqFm7w7_phMK-v5jBmCNg7HIq4SuIyR2xgQYMMLK-nAIxoA/130fx97f/image.png"
            },
            {
                id: 381,
                name: "Galil AR",
                skin: "Черный песок",
                price: 25.38,
                chance: [
                    52557,
                    53461
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczLZAJF7dC_mL-Khbr3MrbeqWZU7Mxkh6eXotrz21ex8xU6YDqlIYCcegU2ZAnX8gLvw-7vjJ687ZjKzHsw7CQl-z-DyFAG4o7s/130fx97f/image.png"
            },
            {
                id: 382,
                name: "G3SG1",
                skin: "Следопыт",
                price: 25.3,
                chance: [
                    53462,
                    54367
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZf1OD3dm5R642Jl4WfmvLLIb7Vg3Nu5Mx2gv2PpNT0jAW1rRc-YGuld9eXcA45aAyDrgW8w7vqgp_vucyfmCc1vHF27WGdwUL26xPDqw/130fx97f/image.png"
            },
            {
                id: 383,
                name: "MAC-10",
                skin: "Lapis Gator",
                price: 25.17,
                chance: [
                    54368,
                    55274
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0v73fDxBvYyJkYyOlOPmOrjYgnJu5cB1g_zMu9_x21Xi_hJkYj3xJoOQdlU8MwnU81XtlLu51J696pqan3U3uCcgsynD30vg17el3Nc/130fx97f/image.png"
            },
            {
                id: 384,
                name: "Negev",
                skin: "Пустынная атака",
                price: 24.97,
                chance: [
                    55275,
                    56183
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz51MeSwJghkZzvMBKdbSsou_RztBzQm59Vua9qz87ITJBLottSSNOIkY9EfFsXYDvKBNQz57Uo-iKFYepOIpC3s2yXtOWZfWRfo5CtazzOzaZfr/130fx97f/image.png"
            },
            {
                id: 385,
                name: "Glock-18",
                skin: "Призраки",
                price: 24.27,
                chance: [
                    56184,
                    57097
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf1OD3djFN79fnzL-chfbgO6LCqWdY781lteXA54vwxgy3rUc9MTjxJNKUewVvYF7U_AO9xua-hsK8uMzPnyc2uXYk43jfm0apwUYbzF_ISHM/130fx97f/image.png"
            },
            {
                id: 386,
                name: "P2000",
                skin: "Дерн",
                price: 24.2,
                chance: [
                    57098,
                    58012
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zPYgJSvozmxM2Yh_jmJ4Tck29Y_cg_ju-YodWl21HkqhE_ZGmgJ9CWdgdqNVHX_1W4w-_q1se46ZiYm3phuD5iuyhPMTkj9g/130fx97f/image.png"
            },
            {
                id: 387,
                name: "Tec-9",
                skin: "Ice Cap",
                price: 24.2,
                chance: [
                    58013,
                    58927
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhh3szcdD59teOlkYG0hPb4J4Tck29Y_cg_i7CX8Y6j0QOw_Rc_MGCnLI6Qcwc9YV2B-1O4yb291MK9upvPmyM36z5iuyi8IO2fAA/130fx97f/image.png"
            },
            {
                id: 388,
                name: "M4A4",
                skin: "Магний",
                price: 24.06,
                chance: [
                    58928,
                    59843
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJTwW09--m5CbkuXLNLPehX9u5Mx2gv2Pptuh0QXnrxJoamvwJ4SXcVJrZQuB-wfowee-h5bv75-YziNqviIq7WGdwULQRBs-zw/130fx97f/image.png"
            },
            {
                id: 389,
                name: "SCAR-20",
                skin: "Зеленый морпех",
                price: 23.97,
                chance: [
                    59844,
                    60759
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PTbTi5B7c7kxL-bkvb3NrbQnW5DuJZOhuDG_ZjKhFWmrBZyY2_yco_EIQRoN1iB-lW-l-i51sW-tZuazXdi6SArsyrfyhS-iU5Ebfsv26Is65f-Ng/130fx97f/image.png"
            },
            {
                id: 390,
                name: "Glock-18",
                skin: "Пришелец",
                price: 23.54,
                chance: [
                    60760,
                    61678
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79eJnY6PnvD7DLbUkmJE5YtwjLGVpd6s2QKx-RI_Yzr6JtOUdQRvZ1HVrAC5wOvqhp65tcnAn3ZqpGB8sqVEHs1X/130fx97f/image.png"
            },
            {
                id: 391,
                name: "Five-SeveN",
                skin: "Капилляры",
                price: 23.07,
                chance: [
                    61679,
                    62600
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTj5X09q_goWYkuHxPYTHk2Jf18l4jeHVu9ij3FG3_UptMWqgJ9WcIQ48aQmB-wC2leq6h8S8u5udmCNn6Cdz4SnD30vgWlTck20/130fx97f/image.png"
            },
            {
                id: 392,
                name: "P250",
                skin: "Валентность",
                price: 22.75,
                chance: [
                    62601,
                    63524
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5rZrblDzZ2TRSQVPBhX_o04Af5Gxg_7cNqQdr4r74DKwTn4oTDNbQvMotPTMnRUqKEMA797hhpg_VdJ5eK9irq3H_uMnBKBUShKRvMGg/130fx97f/image.png"
            },
            {
                id: 393,
                name: "M249",
                skin: "Блокировка",
                price: 22,
                chance: [
                    63525,
                    64452
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz52ZrfsDzRyTQmQVflhT_Ax4Af-Nio37M52WZnvpbgDfVrtttHPYuV9Yd8dS5TZXfSPMF306Ew-hPBcfpLa8X_qiX_vJC5UDLG-MWCi/130fx97f/image.png"
            },
            {
                id: 394,
                name: "Sawed-Off",
                skin: "Оригами",
                price: 21.89,
                chance: [
                    64453,
                    65381
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5oNfSwNDhhdDvBFJ9NXeI_8AfqDxg9-s5kVdq_yLYDLVWq6ZzPOuR5M4oZH8KBWfGPNwyouEI50qRdL5KK8Xzpjinsb2xZX0Xj-z5ShqbZ7Rh0ERld/130fx97f/image.png"
            },
            {
                id: 395,
                name: "MP9",
                skin: "Пыльный осадок",
                price: 21.44,
                chance: [
                    65382,
                    66311
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAZh7PvBdTgP4czvq42Ok_7hPvXSlz8Dv8d30uyU8NyjiQfnrRY4NTvwJ9LBdgBrNw3XqFDql-m9gJa6ot2XnrHP8I_s/130fx97f/image.png"
            },
            {
                id: 396,
                name: "MP7",
                skin: "Городская опасность",
                price: 21.38,
                chance: [
                    66312,
                    67242
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz52JLSKMyJYfxSVTKNRUfg7-gzpGxg_7cNqQdr4prlSflnq59bBM-QlNYoeScOBXfLQZwr66ElphKZaK5yKon_vi3nrOnBKBURfsg7lXw/130fx97f/image.png"
            },
            {
                id: 397,
                name: "SCAR-20",
                skin: "Грот",
                price: 21.19,
                chance: [
                    67243,
                    68173
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5oN-KnYmdYcxX9EqNfTqdqywTpCCwN5cJnXcK7ub9QfgzntovBM-IlMY5OH5XRC_KGYFj6v01qg6VYLpLcp37njyXhaG8UG028mpvdaus/130fx97f/image.png"
            },
            {
                id: 398,
                name: "P2000",
                skin: "Слоновая кость",
                price: 21.12,
                chance: [
                    68174,
                    69105
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5zP_PnYGc3TQfXPrAMDKVqywH6BjUr18pmUN6j-vUCKAzvtIrANuZ_NdwdTpTRWveBYQn1vExpgKBffsaLqS-61SzqOT8NRVO1rasOQLUq/130fx97f/image.png"
            },
            {
                id: 399,
                name: "Tec-9",
                skin: "Песчаная буря",
                price: 20.9,
                chance: [
                    69106,
                    70037
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5vMeDsDzRyTRDHAvlhT_Q08Bv4BjU_18pmUN6j-vVVcVrsstbFMrZ6MIxJF8CGDKODZg34vxo8hqhce5yNoyq71CTqaT1bRVO1rS5Tnr7s/130fx97f/image.png"
            },
            {
                id: 400,
                name: "ПП-19 Бизон",
                skin: "Photic Zone",
                price: 20.56,
                chance: [
                    70038,
                    70970
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0Ob3czRY49KJl4mfnu3xPYTck29Y_cg_iL_F9t6m3wOw-xE4YGz1doGWewE6Y1CF-le7xL28hMO-6svIwCdk6z5iuyjW2C7Erw/130fx97f/image.png"
            },
            {
                id: 401,
                name: "Dual Berettas",
                skin: "Драконий дуэт",
                price: 20.03,
                chance: [
                    70971,
                    71904
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf0Ob3dShD4N6zhpKOg-P1DL_Dl2xe5tZOh-zF_Jn4xgHh_UY6YWv7cNPHcFBtYguD-Fbsx-rsh5e-upXIyXE3vydwtC3dykOpwUYb4qDnZ3s/130fx97f/image.png"
            },
            {
                id: 402,
                name: "Glock-18",
                skin: "Оксидное пламя",
                price: 19.92,
                chance: [
                    71905,
                    72839
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79fnzL-ImOXmPL_UmFRd4cJ5nqeXrdWl3lXk_kFvYGD6doOcewM7ZF_U_AO7wLq9h8Dq7c7LwCFm7nIn-z-DyH1H2yRG/130fx97f/image.png"
            },
            {
                id: 403,
                name: "SSG 08",
                skin: "Necropos",
                price: 19.61,
                chance: [
                    72840,
                    73774
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0Ob3Yi5FvISJmoWIhfjkPKjum25V4dB8xLqZ89vx2Vbm-kc-Zm31JIfDIAZqZFjQqFa4xOi9hJ-678udwXJmuyI8pSGKHJ6NlhM/130fx97f/image.png"
            },
            {
                id: 404,
                name: "G3SG1",
                skin: "Orange Crash",
                price: 18.7,
                chance: [
                    73775,
                    74709
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZfwOP3dm5R642JmYmHnuP9MrTDl2VW7fp8j-3I4IG7jgfsqUNtYDqlJteSIVA7N1zQ-le9l7i51sTt7svOzHVluHF04yqMnAv330_agV6dCw/130fx97f/image.png"
            },
            {
                id: 405,
                name: "XM1014",
                skin: "Ртуть",
                price: 18.02,
                chance: [
                    74710,
                    75643
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5jObLlYWNYcxX9Ga0PDKRuyxvlDisz18pmUN6j-vUHLF26tYHHZbV6Yo5OG8jXWvTTMFv67k5t1aYOfpXco3zsjCu4bmsLRVO1raEbYWX1/130fx97f/image.png"
            },
            {
                id: 406,
                name: "ПП-19 Бизон",
                skin: "Вихрь джунглей",
                price: 17.7,
                chance: [
                    75644,
                    76576
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf2-r3czRY49KJgI-ZmcjzIb7UmFRc7cF4n-SPpdml2AziqkE9NmHzdteWd1M2YgzV_wS_w-fs1se-tMidyXdqsnEg5GGdwUK4vOXOEQ/130fx97f/image.png"
            },
            {
                id: 407,
                name: "SG 553",
                skin: "Близкая опасность",
                price: 17.6,
                chance: [
                    76577,
                    77508
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFf1OD3YjoXuY-Jm5aOhcj8NrrFk29u5Mx2gv2P9I702wXs80BqYzvxdY6SIA44aV-E_VLvl-i8h8O_vJ7Ny3tjviAgtmGdwUKuDFVKtQ/130fx97f/image.png"
            },
            {
                id: 408,
                name: "SG 553",
                skin: "Aerial",
                price: 16.91,
                chance: [
                    77509,
                    78437
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFf0Ob3YjoXuY-JlYWZnvb4DLbUkmJE5YsgiOyX9I2j3lW28ktkNj31coTAcQNqYFGG-Fm2k-zqjZO9vpuaySMxpGB8sqXbOY22/130fx97f/image.png"
            },
            {
                id: 409,
                name: "MAG-7",
                skin: "Эхолот",
                price: 16.89,
                chance: [
                    78438,
                    79366
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhh3szFcDoV09G3mIaEhfrLP7LWnn8fsMQp3eqYrNmg2FXgrUVsajz0J4OSIFQ6N17TrADtl-bph5G17cuamGwj5HefKFtC5g/130fx97f/image.png"
            },
            {
                id: 410,
                name: "Five-SeveN",
                skin: "Scumbria",
                price: 16.5,
                chance: [
                    79367,
                    80292
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjxT09q_goW0hPLiNrXuhWhE5cdjg-j--InxgUG55UNvMDvyI9KUegU8ZlnSr1K3xL_u0JS4u86YmnswvXV2433dzEGwgBhSLrs4_3az4vg/130fx97f/image.png"
            },
            {
                id: 411,
                name: "Negev",
                skin: "Боец",
                price: 16.5,
                chance: [
                    80293,
                    81218
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz51MeSwJghmfzvMBKdbSso9-Af-EBg_7cNqQdr4oupecA_mvYbENLR_YtFJTcXYXPLTYgyovxk4gqlYLJeK8n-833i4P3BKBUTnQEPFkQ/130fx97f/image.png"
            },
            {
                id: 412,
                name: "P250",
                skin: "Зыбь",
                price: 15.42,
                chance: [
                    81219,
                    82135
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhh3szYI2gS08-mgZSFnvzLP7LWnn8fu50m3L-Uptys3wG1qhJoY2n1cNLEdVc8ZV3T-QDtwLzvgMe67puYwWwj5Hf4p3Uhrg/130fx97f/image.png"
            },
            {
                id: 413,
                name: "XM1014",
                skin: "Slipstream",
                price: 14.63,
                chance: [
                    82136,
                    83043
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PvRTiVPvYznwL-Nhfb3J7rdqWld_cBOh-zF_Jn4xgy1_ERvZDyiLdWcIA9qMwnT_QXsw7znjcC96p3LzXA27yUn7HbfykOpwUYbRb0JoCY/130fx97f/image.png"
            },
            {
                id: 414,
                name: "Tec-9",
                skin: "Треснувший опал",
                price: 14.3,
                chance: [
                    83044,
                    83947
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhjxszcdD4b09-klYOAkvPLPKvQmlRd4cJ5nqfFo4msi1flqEBtZmzzctfAI1U3Ml3V-VW_k7vugpbt7svJznBnv3Il-z-DyKmyxRUt/130fx97f/image.png"
            },
            {
                id: 415,
                name: "UMP-45",
                skin: "Капрал",
                price: 14.16,
                chance: [
                    83948,
                    84849
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5uOfPhZQhkZzvXDLBhX_oo5Af-CCsN5cJnXcK7uelXKwq85dDFNOUuNtseHcWGWPCOYQmsuRhrhvcIe8eJ8ny91CvhaGcUG028PIklS1Q/130fx97f/image.png"
            },
            {
                id: 416,
                name: "ПП-19 Бизон",
                skin: "Harvester",
                price: 13.43,
                chance: [
                    84850,
                    85739
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf1OD3YS197tWsm460n_bmJb7Cgm5D18h0juDU-MLzjFe1_kJvZminco_GdFNtaQ2GrAO3lLu51p64upXJyyNk6SUk436OgVXp1q-ikIml/130fx97f/image.png"
            },
            {
                id: 417,
                name: "SCAR-20",
                skin: "Вихрь джунглей",
                price: 13.33,
                chance: [
                    85740,
                    86627
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PvRTi5B7c7kxL-BgvnzP77uhWdY-NZlmOzA-LP5gVO8v104Z2ClLY_EIQ47ZQvRq1O7l73rg8To6ZidnXFh7CQh7S2JyxC_hk5NcKUx0mqrOQdE/130fx97f/image.png"
            },
            {
                id: 418,
                name: "Dual Berettas",
                skin: "Ventilators",
                price: 13.3,
                chance: [
                    86628,
                    87515
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf1OD3dShD4N6zhoWfg_bnDK3UmH9Y5MRlhfvSyoHwjF2hpl1qamD1Jo6UIVRoZAnU-AK5xO-51pG5v8zLwHU2u3Yr4nrfmRWx1B9JcKUx0onfL2Ru/130fx97f/image.png"
            },
            {
                id: 419,
                name: "P250",
                skin: "Iron Clad",
                price: 12.64,
                chance: [
                    87516,
                    88390
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhnwMzYI2gS09GzgIGHqOf1Pb7dhVRc7cF4n-SPotyk0QTl8kU9YGmiLITAd1c6MlvXrFK6xrq81MK97ZrJm3I3uych5WGdwUJz_bDv2Q/130fx97f/image.png"
            },
            {
                id: 420,
                name: "SCAR-20",
                skin: "Blueprint",
                price: 12.27,
                chance: [
                    88391,
                    89256
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PDdTj9O-dmmhomFg8jnMLrDqWZU7Mxkh6eWrNT33FHsqhVuamv1JIGTI1JvNVyG_FO8xevthMTv6cuayHRk63Un-z-DyP5bmFUh/130fx97f/image.png"
            },
            {
                id: 421,
                name: "MP7",
                skin: "Броня",
                price: 12.24,
                chance: [
                    89257,
                    90122
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz52JLSKMSZYfxSVPrVSSOc7-QfoDDU818pmUN6j-vVQew-75dDBZuIlNNBLF8fUDPaAMgv-vEswiaIOesDb83-93H66OGteRVO1rYplVZEc/130fx97f/image.png"
            },
            {
                id: 422,
                name: "Sawed-Off",
                skin: "Чёрный песок",
                price: 12.1,
                chance: [
                    90123,
                    90984
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cih9_92hkYSEkfHLMbfQlWBu-8R_jtbN_Iv9nBrjrhdlMDz2JI6Wdg43MliGrge3w-bugcC86c-fz3tnv3Vx4ynflkGzn1gSORw4QN2y/130fx97f/image.png"
            },
            {
                id: 423,
                name: "Tec-9",
                skin: "Jambiya",
                price: 12.09,
                chance: [
                    90985,
                    91846
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhnwMzcdD4b09a3mYKCjvbLPr7Vn35cppFw3LiW94n02A21_EZrYWz6J4aRIw86aAnW_1Doxe--hMW9tJSYyXt9-n51XLgSqKg/130fx97f/image.png"
            },
            {
                id: 424,
                name: "P2000",
                skin: "Oceanic",
                price: 11.47,
                chance: [
                    91847,
                    92693
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zAaAJSvozmxL-ElPL1PbLum25V4dB8xO2U8NT321Ln-0tlZWHwctTAIQ9oZlHXqFLryOjpg5DvuJrBmCAxvXM8pSGKQrO8-eg/130fx97f/image.png"
            },
            {
                id: 425,
                name: "MP9",
                skin: "Скромная угроза",
                price: 11.09,
                chance: [
                    92694,
                    93529
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FABz7P7YKAJB49C5mpnbxsj4OrzZgiVXsMEo3bCTpN-kigPs_UNuZjj6IobBJlNqMFqFrwO5xrjmgsW5ucjK1zI97d1xtbMt/130fx97f/image.png"
            },
            {
                id: 426,
                name: "MAC-10",
                skin: "Океанские мотивы",
                price: 10.52,
                chance: [
                    93530,
                    94348
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0v73fDxBvYyJm4OOlvn9DLPUl31Ippwg376T8I_33ALi8kBpY2vzco6cc1JtNVmFqVK5w7zug5O07pnNm3B9-n51HYlYkkg/130fx97f/image.png"
            },
            {
                id: 427,
                name: "Negev",
                skin: "Dazzle",
                price: 9.04,
                chance: [
                    94349,
                    95114
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf2-r3fzhF6cqJkIGRjfvxDLbUkmJE5Ysi2LjF84ijjgWx_0tkMG6hI4OWdwdtNAzW_1jrkO2705fvvJ7Nn3EypGB8smY-FtJF/130fx97f/image.png"
            },
            {
                id: 428,
                name: "G3SG1",
                skin: "Ventilator",
                price: 8.84,
                chance: [
                    95115,
                    95872
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZf1OD3dm5R642JgoWFg_74Mq_ehFRc7cF4n-SPoY6h2QK2qRA-MGChIoOVcAE7ZwzVqFfvkOno05S5vpvIzCQwuCIh5mGdwULOeaXr_w/130fx97f/image.png"
            },
            {
                id: 429,
                name: "Sawed-Off",
                skin: "Моррис",
                price: 8.29,
                chance: [
                    95873,
                    96606
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cCx9_92hkYTGmPHyDL3dmXxU-vp9g-7J4cKljA3sqUNkMDz7JISWJgI3NQmD-Ae5x7zuhcPqvsvKmiZk6yMh5nrdgVXp1lTx2r2f/130fx97f/image.png"
            },
            {
                id: 430,
                name: "Sawed-Off",
                skin: "Судак",
                price: 7.45,
                chance: [
                    96607,
                    97302
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cCx9_92hkYSEkfHLKbrfkm5Duvp9g-7J4cKg2QCy_BBqMG_zIoScdA49aQ7V_FG8webogsK7u5vLmndqvnRx4S2JgVXp1gGJxOF0/130fx97f/image.png"
            },
            {
                id: 431,
                name: "Tec-9",
                skin: "Ветеран",
                price: 7.14,
                chance: [
                    97303,
                    97983
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhnwMzcdD4b09qjloGZqPv9NLPF2DsB7pMl2rmWrNSm3QLlrUZrMGHzLNSXcVM3Y17QrwPrkOjrhpHu75rXiSw0u_Jn4OQ/130fx97f/image.png"
            },
            {
                id: 432,
                name: "Nova",
                skin: "Горелое дерево",
                price: 6.97,
                chance: [
                    97984,
                    98656
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhnwMzGfitD09SjmpSOhcj2Ia7Fk1Rd4cJ5nqeZ8N6g2gSy-UZsamHzIYDGIVI-YgrW_Vi2xOfrgJ7q6M7JyXQwunEl-z-DyIZLVv7H/130fx97f/image.png"
            },
            {
                id: 433,
                name: "UMP-45",
                skin: "Briefing",
                price: 6.94,
                chance: [
                    98657,
                    99327
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf0Ob3ZDBSuImJmYWfhf7gNqnQqWZU7Mxkh6fAo433iwS380FpazvwJ4SVclRsZVzX_1Lowe7thcfttZ_AyHpiuicg-z-DyLRzpo69/130fx97f/image.png"
            },
            {
                id: 434,
                name: "CZ75-Auto",
                skin: "Imprint",
                price: 6.89,
                chance: [
                    99328,
                    100000
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf1OD3cicVueOihoWKk8j5Nr_Yg2YfvJB32ryWoYinigXkqBdpMGyhctWXdlU8YguC_1G9webng5fvtZSfmmwj5HeClNCSjw/130fx97f/image.png"
            }
        ]
    },
    {
        id: 9,
        name: 'Изумрудный кейс',
        price: 0,
        discountPrice: null,
        wip: true,
        img: 'https://givedrop.ru/images/case/emerald-min.png',
        weapons: [
            {
                id: 1,
                name: "P2000",
                skin: "Защитник империи",
                price: 90,
                chance: [0, 4000],
                color: colors.blue,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zJfAJSvozmxL-CmufxIbLQmlRD7cFOhuDG_ZjKhFWmrBZyMG30cYSVdQU-Zl_S_wTqwLjm0J7v6pudyHZksnRwsyvemhe00h8dafsv26IzdkiNew/120fx90f/image.png"
            },
            {
                id: 2,
                name: "AK-47",
                skin: "Черный глянец",
                price: 1540.5,
                chance: [4001, 4100],
                color: colors.blue,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KcqPrxN7LEmyUDsJIh27-YpYmmiVDm_UFuZ2vzJYPDJlRsYw2C8lC5w-fu0Je_6ZrB1zI97TOUU9Z0/120fx90f/image.png"
            },
            {
                id: 3,
                name: "P250",
                skin: "Ворон",
                price: 40.5,
                chance: [4101, 34100],
                color: colors.purple,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhh0szYI2gS09uklZaOk_7zNL7DhVRc7cF4n-SPptn0iwHg-EA_NmDwdtSUcFI_MwzY-VLvl73ng8PvtZzKyXNn7Ckl4GGdwUJ7z4s0NQ/120fx90f/image.png"
            },
            {
                id: 4,
                name: "AWP",
                skin: "Фобос",
                price: 110.25,
                chance: [34101, 38700],
                color: colors.purple,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FABz7PLfYQJS5NO0m5O0m_7zO6-fkGhQsZMgieqYrI-i2ACy-0o_Z22mItOdcAU5aVzT_gTowbvth5a0u4OJlyU2Brz6WA/120fx90f/image.png"
            },
            {
                id: 5,
                name: "Tec-9",
                skin: "Красный кварц",
                price: 22.5,
                chance: [30701, 78700],
                color: colors.purple,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhh3szLYyRR-N26mImRkvPLPr7Vn35cpscl2OuZrI323ACyrxVrMmuhLdKQcFA3aF3Y-ge7kui608K4up3AnCF9-n51wa82sVI/120fx90f/image.png"
            },
            {
                id: 6,
                name: "AWP",
                skin: "Экзоскелет",
                price: 70.5,
                chance: [78700, 113700],
                color: colors.purple,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FABz7PLfYQJH9NOln4WHkuP7PYTZk2pH8fp9i_vG8MKs3VKyrUVsMWqhcYKTcAM-MwvV_1ToxujshJ65u52anyBi6XFz7XvYgVXp1pXCm5E1/120fx90f/image.png"
            },
            {
                id: 7,
                name: "USP-S",
                skin: "Сайрекс",
                price: 140.28,
                chance: [113701, 116700],
                color: colors.purple,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8j3KqnUjlRd4cJ5ntbN9J7yjRq3qhY6Zjz6cteSJwc3MluB_gfqx7juhpPou8ycyHBhviUrt3zZl0G3n1gSOddhMMaQ/120fx90f/image.png"
            },
            {
                id: 8,
                name: "AK-47",
                skin: "Синий глянец",
                price: 690.79,
                chance: [116701, 117200],
                color: colors.purple,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KHgvLLPr7Vn35cppJ02uyUrI2h3wDkrkFsZz-gLdXHIA87MFjTqFm-wevvjcC0tZrPnXp9-n51Y5J6evE/120fx90f/image.png"
            },
            {
                id: 9,
                name: "Сувенирный Tec-9",
                skin: "Красный кварц",
                price: 1317,
                chance: [117201, 117300],
                color: colors.purple,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhh3szLYyRR-N26mImRkvPLPr7Vn35c18lwmO7Eu46h2lbs8hI_Z22lcNCSIwRsaAzV-Ae3yOvnhcC575ucnyZnvCArsCzD30vgYXcbMBs/120fx90f/image.png"
            },
            {
                id: 10,
                name: "Five-SeveN",
                skin: "Обезьянье дело",
                price: 117,
                chance: [117301, 120500],
                color: colors.pink,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTj5X09q_goWYkuHxPYTTl2VQ5sROhuDG_Zi72lDj8xJqZWj3d9SWcA9vNQnY81Ltybrvh57p7piayyBnsiV053mLnwv330_hwP2Y_Q/120fx90f/image.png"
            },
            {
                id: 11,
                name: "ПП-19 Бизон",
                skin: "Азарт",
                price: 148.54,
                chance: [120501, 123500],
                color: colors.pink,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0Ob3czRY49KJlYyHqP76DLfYkWNFpsEi2-jErNvzjQDg8xFpZmmgctOVdFI4YF-EqwC9xOnq1pG76ZWayyN9-n51Ejfp6Vw/120fx90f/image.png"
            },
            {
                id: 12,
                name: "USP-S",
                skin: "Извилины",
                price: 183.11,
                color: colors.pink,
                chance: [123501, 126000],
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8j3Jq_ummJW4NE_376S84-tiwHt_0VqZDzwI47DcVNqaFDZ-gLrxea918S5tJucwSY2uj5iuygjNe-uOA/120fx90f/image.png"
            },
            {
                id: 13,
                name: "MP5-SD",
                skin: "Фосфор",
                price: 233.31,
                color: colors.pink,
                chance: [126001, 127000],
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6rwOANf1OD3fC0X09qzh5SCgfb4DL_Dn3tu4MBwnPCPporx31fj-BY-Nmj0J4LAJFU9aQmD-lG9yOvogMS1ucvLmHZm7CB05mGdwUJhnopgrQ/120fx90f/image.png"
            },
            {
                id: 14,
                name: "M4A4",
                skin: "Кибербезопасность",
                price: 270.77,
                chance: [127001, 128000],
                color: colors.pink,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09-vloWZh-L6OITZk2pH8fp9i_vG8MKh3lbi_BI6MDr3JtXAJw9oYQzXqwTqw7q-15O6uprPnSZrvidx43nYgVXp1obzxMix/120fx90f/image.png"
            },
            {
                id: 15,
                name: "P250",
                skin: "Азимов",
                price: 234,
                chance: [128000, 129500],
                color: colors.pink,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS092lnYmGmOHLP7LWnn9u5MRjjeyPoo_2jgDi_hVrNzr2IdKXJg84YVzW_wW6weq8hJbv7s7BmnZnuHN3sGGdwUIcgRyEsg/120fx90f/image.png"
            },
            {
                id: 16,
                name: "AK-47",
                skin: "Красный глянец",
                price: 1695.61,
                chance: [129501, 129550],
                color: colors.pink,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4iOluHtfb6EzjsA6pQi3ruZrd723wfi_0I4amjzIoeTJAQ8aFzT-wPvx-26gpei_MOe6z3geXU/120fx90f/image.png"
            },
            {
                id: 17,
                name: "M4A1-S",
                skin: "Синий фосфор",
                price: 19707.75,
                chance: [129551, 129555],
                color: colors.pink,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO3mb-Gw_alIITTmn5U-8h-gez--YXygECLpxIuNDztJobGcQ9tNV7Z_1m5kri60ZC1tcvInHM26HIi4CnZy0awgh0ZbuM7g-veFwtFvUBonA/120fx90f/image.png"
            },
            {
                id: 18,
                name: "Sawed-Off",
                skin: "Кракен",
                price: 627.44,
                chance: [129556, 129900],
                color: colors.red,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cih9_92hkYSEkfHLPLjFmXtE5dVOhuDG_Zi73wLlrxVpamjycdDGdFc3Z1jW-wK5k-3r0JK97Z-fn3Q26SYjsHrVzQv330-41vffvw/120fx90f/image.png"
            },
            {
                id: 19,
                name: "M4A4",
                skin: "Азимов",
                price: 7323.53,
                chance: [129901, 130000],
                color: colors.red,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJQJD_9W7m5a0mvLwOq7c2GlUucFwjruR9t7231DmrRc_NW7yItCRcVNoYVHS-APrwbzu0JK-78nXiSw0EnwDRM0/120fx90f/image.png"
            },
            {
                id: 20,
                name: "AWP",
                skin: "Азимов",
                price: 5154.65,
                chance: [130001, 130100],
                color: colors.red,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJD_9W7m5a0mvLwOq7c2G9SupUijOjAotyg3w2x_0ZkZ2rzd4OXdgRoYQuE8gDtyL_mg5K4tJ7XiSw0WqKv8kM/120fx90f/image.png"
            },
            {
                id: 21,
                name: "MP7",
                skin: "Кровавый спорт",
                price: 215.23,
                chance: [130101, 133100],
                color: colors.red,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFABz7P7YJgJA4NO5kJObmOXgDLfYkWNFpsRz3-qSpdis2AW3rhFvYWn3LISSdgRsYVzR8lC7lOm9gMO_786bwHd9-n51Z2R5ZH4/120fx90f/image.png"
            },
            {
                id: 22,
                name: "P90",
                skin: "Азимов",
                price: 507.21,
                chance: [133101, 135000],
                color: colors.red,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIXBD_9W_mY-dqPv9NLPF2DtS6ZJ33e_Cpd-niw3sqEY_MGzzItXGJlM3YwrT-QS7ye3p1J7ttJXXiSw09F9GDzA/120fx90f/image.png"
            },
            {
                id: 23,
                name: "AK-47",
                skin: "Азимов",
                price: 2325.34,
                chance: [135001, 135100],
                color: colors.red,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV092lnYmGmOHLO77QgHIf6pwpiO-RrIms2AC1-0NkZGihItDBJFVqZgrS_1TswOjn0Z-1vZjMyGwj5HeH24gOlg/120fx90f/image.png"
            },
            {
                id: 24,
                name: "AK-47",
                skin: "Вулкан",
                price: 4717.54,
                chance: [135101, 135500],
                color: colors.red,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV086jloKOhcj8NrrHjyVQ6cAji7rEo9v2jlKw-RdoN2r6LY-ddQ4-aQzV8wS7lO7o0ZXp6s_B1zI97ecvvlG_/120fx90f/image.png"
            }
        ]
    },
    {
        id: 10,
        name: 'Аметист кейс',
        price: 0,
        discountPrice: 0,
        wip: true,
        img: 'https://givedrop.ru/images/case/amethyst-min.png',
        weapons: [
            {
                id: 1,
                name: "P2000",
                skin: "Защитник империи",
                price: 90,
                chance: [0, 4000],
                color: colors.blue,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zJfAJSvozmxL-CmufxIbLQmlRD7cFOhuDG_ZjKhFWmrBZyMG30cYSVdQU-Zl_S_wTqwLjm0J7v6pudyHZksnRwsyvemhe00h8dafsv26IzdkiNew/120fx90f/image.png"
            },
            {
                id: 2,
                name: "AK-47",
                skin: "Черный глянец",
                price: 1540.5,
                chance: [4001, 4100],
                color: colors.blue,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KcqPrxN7LEmyUDsJIh27-YpYmmiVDm_UFuZ2vzJYPDJlRsYw2C8lC5w-fu0Je_6ZrB1zI97TOUU9Z0/120fx90f/image.png"
            },
            {
                id: 3,
                name: "P250",
                skin: "Ворон",
                price: 40.5,
                chance: [4101, 34100],
                color: colors.purple,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhh0szYI2gS09uklZaOk_7zNL7DhVRc7cF4n-SPptn0iwHg-EA_NmDwdtSUcFI_MwzY-VLvl73ng8PvtZzKyXNn7Ckl4GGdwUJ7z4s0NQ/120fx90f/image.png"
            },
            {
                id: 4,
                name: "AWP",
                skin: "Фобос",
                price: 110.25,
                chance: [34101, 38700],
                color: colors.purple,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FABz7PLfYQJS5NO0m5O0m_7zO6-fkGhQsZMgieqYrI-i2ACy-0o_Z22mItOdcAU5aVzT_gTowbvth5a0u4OJlyU2Brz6WA/120fx90f/image.png"
            },
            {
                id: 5,
                name: "Tec-9",
                skin: "Красный кварц",
                price: 22.5,
                chance: [30701, 78700],
                color: colors.purple,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhh3szLYyRR-N26mImRkvPLPr7Vn35cpscl2OuZrI323ACyrxVrMmuhLdKQcFA3aF3Y-ge7kui608K4up3AnCF9-n51wa82sVI/120fx90f/image.png"
            },
            {
                id: 6,
                name: "AWP",
                skin: "Экзоскелет",
                price: 70.5,
                chance: [78700, 113700],
                color: colors.purple,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FABz7PLfYQJH9NOln4WHkuP7PYTZk2pH8fp9i_vG8MKs3VKyrUVsMWqhcYKTcAM-MwvV_1ToxujshJ65u52anyBi6XFz7XvYgVXp1pXCm5E1/120fx90f/image.png"
            },
            {
                id: 7,
                name: "USP-S",
                skin: "Сайрекс",
                price: 140.28,
                chance: [113701, 116700],
                color: colors.purple,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8j3KqnUjlRd4cJ5ntbN9J7yjRq3qhY6Zjz6cteSJwc3MluB_gfqx7juhpPou8ycyHBhviUrt3zZl0G3n1gSOddhMMaQ/120fx90f/image.png"
            },
            {
                id: 8,
                name: "AK-47",
                skin: "Синий глянец",
                price: 690.79,
                chance: [116701, 117200],
                color: colors.purple,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KHgvLLPr7Vn35cppJ02uyUrI2h3wDkrkFsZz-gLdXHIA87MFjTqFm-wevvjcC0tZrPnXp9-n51Y5J6evE/120fx90f/image.png"
            },
            {
                id: 9,
                name: "Сувенирный Tec-9",
                skin: "Красный кварц",
                price: 1317,
                chance: [117201, 117300],
                color: colors.purple,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhh3szLYyRR-N26mImRkvPLPr7Vn35c18lwmO7Eu46h2lbs8hI_Z22lcNCSIwRsaAzV-Ae3yOvnhcC575ucnyZnvCArsCzD30vgYXcbMBs/120fx90f/image.png"
            },
            {
                id: 10,
                name: "Five-SeveN",
                skin: "Обезьянье дело",
                price: 117,
                chance: [117301, 120500],
                color: colors.pink,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTj5X09q_goWYkuHxPYTTl2VQ5sROhuDG_Zi72lDj8xJqZWj3d9SWcA9vNQnY81Ltybrvh57p7piayyBnsiV053mLnwv330_hwP2Y_Q/120fx90f/image.png"
            },
            {
                id: 11,
                name: "ПП-19 Бизон",
                skin: "Азарт",
                price: 148.54,
                chance: [120501, 123500],
                color: colors.pink,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0Ob3czRY49KJlYyHqP76DLfYkWNFpsEi2-jErNvzjQDg8xFpZmmgctOVdFI4YF-EqwC9xOnq1pG76ZWayyN9-n51Ejfp6Vw/120fx90f/image.png"
            },
            {
                id: 12,
                name: "USP-S",
                skin: "Извилины",
                price: 183.11,
                color: colors.pink,
                chance: [123501, 126000],
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8j3Jq_ummJW4NE_376S84-tiwHt_0VqZDzwI47DcVNqaFDZ-gLrxea918S5tJucwSY2uj5iuygjNe-uOA/120fx90f/image.png"
            },
            {
                id: 13,
                name: "MP5-SD",
                skin: "Фосфор",
                price: 233.31,
                color: colors.pink,
                chance: [126001, 127000],
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6rwOANf1OD3fC0X09qzh5SCgfb4DL_Dn3tu4MBwnPCPporx31fj-BY-Nmj0J4LAJFU9aQmD-lG9yOvogMS1ucvLmHZm7CB05mGdwUJhnopgrQ/120fx90f/image.png"
            },
            {
                id: 14,
                name: "M4A4",
                skin: "Кибербезопасность",
                price: 270.77,
                chance: [127001, 128000],
                color: colors.pink,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09-vloWZh-L6OITZk2pH8fp9i_vG8MKh3lbi_BI6MDr3JtXAJw9oYQzXqwTqw7q-15O6uprPnSZrvidx43nYgVXp1obzxMix/120fx90f/image.png"
            },
            {
                id: 15,
                name: "P250",
                skin: "Азимов",
                price: 234,
                chance: [128000, 129500],
                color: colors.pink,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS092lnYmGmOHLP7LWnn9u5MRjjeyPoo_2jgDi_hVrNzr2IdKXJg84YVzW_wW6weq8hJbv7s7BmnZnuHN3sGGdwUIcgRyEsg/120fx90f/image.png"
            },
            {
                id: 16,
                name: "AK-47",
                skin: "Красный глянец",
                price: 1695.61,
                chance: [129501, 129550],
                color: colors.pink,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4iOluHtfb6EzjsA6pQi3ruZrd723wfi_0I4amjzIoeTJAQ8aFzT-wPvx-26gpei_MOe6z3geXU/120fx90f/image.png"
            },
            {
                id: 17,
                name: "M4A1-S",
                skin: "Синий фосфор",
                price: 19707.75,
                chance: [129551, 129555],
                color: colors.pink,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO3mb-Gw_alIITTmn5U-8h-gez--YXygECLpxIuNDztJobGcQ9tNV7Z_1m5kri60ZC1tcvInHM26HIi4CnZy0awgh0ZbuM7g-veFwtFvUBonA/120fx90f/image.png"
            },
            {
                id: 18,
                name: "Sawed-Off",
                skin: "Кракен",
                price: 627.44,
                chance: [129556, 129900],
                color: colors.red,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cih9_92hkYSEkfHLPLjFmXtE5dVOhuDG_Zi73wLlrxVpamjycdDGdFc3Z1jW-wK5k-3r0JK97Z-fn3Q26SYjsHrVzQv330-41vffvw/120fx90f/image.png"
            },
            {
                id: 19,
                name: "M4A4",
                skin: "Азимов",
                price: 7323.53,
                chance: [129901, 130000],
                color: colors.red,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJQJD_9W7m5a0mvLwOq7c2GlUucFwjruR9t7231DmrRc_NW7yItCRcVNoYVHS-APrwbzu0JK-78nXiSw0EnwDRM0/120fx90f/image.png"
            },
            {
                id: 20,
                name: "AWP",
                skin: "Азимов",
                price: 5154.65,
                chance: [130001, 130100],
                color: colors.red,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJD_9W7m5a0mvLwOq7c2G9SupUijOjAotyg3w2x_0ZkZ2rzd4OXdgRoYQuE8gDtyL_mg5K4tJ7XiSw0WqKv8kM/120fx90f/image.png"
            },
            {
                id: 21,
                name: "MP7",
                skin: "Кровавый спорт",
                price: 215.23,
                chance: [130101, 133100],
                color: colors.red,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFABz7P7YJgJA4NO5kJObmOXgDLfYkWNFpsRz3-qSpdis2AW3rhFvYWn3LISSdgRsYVzR8lC7lOm9gMO_786bwHd9-n51Z2R5ZH4/120fx90f/image.png"
            },
            {
                id: 22,
                name: "P90",
                skin: "Азимов",
                price: 507.21,
                chance: [133101, 135000],
                color: colors.red,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIXBD_9W_mY-dqPv9NLPF2DtS6ZJ33e_Cpd-niw3sqEY_MGzzItXGJlM3YwrT-QS7ye3p1J7ttJXXiSw09F9GDzA/120fx90f/image.png"
            },
            {
                id: 23,
                name: "AK-47",
                skin: "Азимов",
                price: 2325.34,
                chance: [135001, 135100],
                color: colors.red,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV092lnYmGmOHLO77QgHIf6pwpiO-RrIms2AC1-0NkZGihItDBJFVqZgrS_1TswOjn0Z-1vZjMyGwj5HeH24gOlg/120fx90f/image.png"
            },
            {
                id: 24,
                name: "AK-47",
                skin: "Вулкан",
                price: 4717.54,
                chance: [135101, 135500],
                color: colors.red,
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV086jloKOhcj8NrrHjyVQ6cAji7rEo9v2jlKw-RdoN2r6LY-ddQ4-aQzV8wS7lO7o0ZXp6s_B1zI97ecvvlG_/120fx90f/image.png"
            }
        ]
    },
    {
        id: 11,
        limit: 5,
        name: 'Хэллоуин кейс',
        price: 200,
        discountPrice: 150,
        img: 'https://givedrop.ru/images/case/hall-min.png',
        weapons: [
            {
                id: 546,
                name: "Сэр «Чёртов Майами» Дэррил",
                skin: "Профессионалы",
                price: 782.23,
                chance: [
                    0,
                    209
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztDu4W1OQhm1uDbeDJM7dCJgoGZkbmmMeKGxzsH6ZEn0-yTp9r0iQy2_xJkYmyiIIaScAU7Zw7U8wC5l7u5m9bi61D1jDFG/130fx97f/image.png"
            },
            {
                id: 547,
                name: "Сэр «Чёртов болтун» Дэррил",
                skin: "Профессионалы",
                price: 664.4,
                chance: [
                    210,
                    512
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztDu4W1OQhm1uDbeDJM7dCJgoGZkaO6NejUxzhUuJBzjruXrNikjgbmqBFlYTqldY6UIAY_MF2F_FC2x-3m1Ij84soUGKPclQ/130fx97f/image.png"
            },
            {
                id: 548,
                name: "Особый агент Ава",
                skin: "ФБР",
                price: 451,
                chance: [
                    513,
                    1169
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztUoreaLQVp7OXJYzRD4si02tmIlaOkNemIxDwJv50jjuiQ94mjjVG3rhBpMGD2cIaSIwE6NQ7Z-wKggbC4nwIkFg8/130fx97f/image.png"
            },
            {
                id: 549,
                name: "Сэр «Чёртов череп» Дэррил",
                skin: "Профессионалы",
                price: 429,
                chance: [
                    1170,
                    1888
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztDu4W1OQhm1uDbeDJM7dCJgoGZkaW6a7qAzjMIv8NwiOrE89ii2Abg-BJpN2vxLdLAJgI8aFnRq1m8xuy5gIj84sqp6vWFng/130fx97f/image.png"
            },
            {
                id: 550,
                name: "Сэр «Чёртов тихоня» Дэррил",
                skin: "Профессионалы",
                price: 405.9,
                chance: [
                    1889,
                    2679
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztDu4W1OQhm1uDbeDJM7dCJgoGZkaa6YuzXkDoE7Zcp3b6T9t720Qe1-RY9ammld4bDcFBvZw2F-QO2k7rqhYj84sqjE36uJg/130fx97f/image.png"
            },
            {
                id: 551,
                name: "Капитан 3-го ранга Риксоу",
                skin: "NSWC SEAL",
                price: 397.1,
                chance: [
                    2680,
                    3501
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztUoreaOBM27OXJYzRD4si_2tfclPX1ZumIlD1SvcYjjLnAoo2i0Qbl80VkNmqiJoDAIwVvN1DV-lmggbC4G-Te-VQ/130fx97f/image.png"
            },
            {
                id: 552,
                name: "Сэр «Чёртова знать» Дэррил",
                skin: "Профессионалы",
                price: 331.12,
                chance: [
                    3502,
                    4600
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztDu4W1OQhm1uDbeDJM7dCJgoGZkaS6ZePUxGhUu8Am2-3HotSljAPl80o6ZWuhJtWTcwU4YluE-wDolLztjYj84srrFBISdA/130fx97f/image.png"
            },
            {
                id: 553,
                name: "Коммандер Мэй «Льдина» Джемисон",
                skin: "SWAT",
                price: 330,
                chance: [
                    4601,
                    5705
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztUoreaOBBhx8zecC9L7dKikc7bxaGsYr_SzjMCsZMhjO-Tp47x3gC3rktsZW_0JNSWclM7Z12Fq1fo366x0ikDfJt6/130fx97f/image.png"
            },
            {
                id: 554,
                name: "«Доктор» Романов",
                skin: "Кавалерия",
                price: 242,
                chance: [
                    5706,
                    7390
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztDu4WnKgtr0v33ZzxQ5d24gIjFz_OlZbqJxD4C68cp2u-Z9Ijw0AXmrUZoZm2iLI-cc1M7MAmC_FntwvCv28EpZvYmDw/130fx97f/image.png"
            },
            {
                id: 555,
                name: "Элитный мистер Мохлик",
                skin: "Элитный отряд",
                price: 143,
                chance: [
                    7391,
                    10167
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztDu4WpLgJ07OXJYzRD4siw2oaIlKHyMbqJlT9SsJQiie_DrI2hiVW2qBY6YGjwcoKTJgdvYlmD81OggbC4YwmkZXc/130fx97f/image.png"
            },
            {
                id: 556,
                name: "Номер К",
                skin: "Профессионалы",
                price: 526.9,
                chance: [
                    10168,
                    10657
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztDu4W1OQhm1uDbeDJM7dCJgoGZnrmjauOHlTIGvpwojuqZ9tuniQfn_xVlZWiiIIaSc1Q6Y1HSr1Loxebtm9bi60SKLiwN/130fx97f/image.png"
            },
            {
                id: 557,
                name: "Взломщица Вольцманн",
                skin: "Профессионалы",
                price: 224.4,
                chance: [
                    10658,
                    12498
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztDu4W1OQhm1uDbeDJM7dCJgoGZkLmjZrmIkj0Hv5Zz3-rEo9igiQLs8hI9Mmzwco6VcgY9Y16Gq1W5wOvpm9bi6yLW8eON/130fx97f/image.png"
            },
            {
                id: 558,
                name: "Старший лейтенант Фарлоу",
                skin: "SWAT",
                price: 173.8,
                chance: [
                    12499,
                    14880
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztUoreaOBBhx8zecC9L7dKiks7Tw6XxMOnQlTMF65wm0-iQpIn30Abk8xc5ajinddCWIwE6Y1zY_Vm5366x0hNmbFD7/130fx97f/image.png"
            },
            {
                id: 559,
                name: "«Дважды» Маккой",
                skin: "USAF TACP",
                price: 105.6,
                chance: [
                    14881,
                    18152
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztUoreaOBM27OXJYzRD4si72oSJk6SiYbnTkDtSsMcg2r6QoI6t2AHlqUtvZT_3LIeRcAU8ZAvY-AeggbC4xBSHpL8/130fx97f/image.png"
            },
            {
                id: 560,
                name: "Резан Готовый",
                skin: "Кавалерия",
                price: 97.9,
                chance: [
                    18153,
                    21513
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztDu4WnKgtr0v33ZzxQ5d24gIfFz_GsZuzUkm8Jv51zjL7ErdutigPt-kplZ2n0JdDDcQc3Yl2E-1nqw_Cv28FEsGqT3A/130fx97f/image.png"
            },
            {
                id: 561,
                name: "«Дважды» Маккой",
                skin: "Кавалерия TACP",
                price: 96.8,
                chance: [
                    21514,
                    24886
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztUoreaOBM27OXJYzRD4si62tKKlKelZOKFlztVv5ZzjOyVrdqtjAfmqhVoYjr2J4fDIQQ7aAyCrACggbC4LzEcez0/130fx97f/image.png"
            },
            {
                id: 562,
                name: "Черноволк",
                skin: "Кавалерия",
                price: 84.82,
                chance: [
                    24887,
                    28369
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztDu4WnKgtr0v33ZzxQ5d24gIrFkfanYuuAxTwBvpEnjOiYpt-tjg21-EJpamr6d4GTcg85NAmB-FLvxfCv28G6pbdknQ/130fx97f/image.png"
            },
            {
                id: 563,
                name: "Майкл Сайферс",
                skin: "ФБР: снайпер",
                price: 82.5,
                chance: [
                    28370,
                    31868
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztUoreaLQVp7OXJYzRD4si-2tjTxKbwaurSkDkIucYk3eyZ8Yr0jVKw-Es4ajzxJtCVIwI7aQnS81mggbC4ZxXmaFQ/130fx97f/image.png"
            },
            {
                id: 564,
                name: "Резан Красный",
                skin: "Кавалерия",
                price: 81.4,
                chance: [
                    31869,
                    35374
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztDu4WnKgtr0v33ZzxQ5d24gIvFxaKjMurTlzsAvJcm07CZrdvw2gzjqUpsNWjxcNTHJFBtMAvU8la2kPCv28He0eRe7A/130fx97f/image.png"
            },
            {
                id: 565,
                name: "Профессор Шахмат",
                skin: "Элитный отряд",
                price: 46.2,
                chance: [
                    35375,
                    38629
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztDu4WpLgJ07OXJYzRD4si_2tTdw6CmYuiBwG5X7ZBy2e-XrNys0VWw-0NrYGr2LdKRdgZqZFuDrgeggbC4C3A6m4I/130fx97f/image.png"
            },
            {
                id: 566,
                name: "Беглянка Салли",
                skin: "Профессионалы",
                price: 605,
                chance: [
                    38630,
                    38999
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztDu4W1OQhm1uDbeDJM7dCJgoGZnbnwZemGxzIGupV02LjDrN3zjgO18kE5az31JYbAdFA7YV_UrFXoxb25m9bi62Osj5bQ/130fx97f/image.png"
            },
            {
                id: 567,
                name: "Крошка Кев",
                skin: "Профессионалы",
                price: 243.1,
                chance: [
                    39000,
                    40675
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztDu4W1OQhm1uDbeDJM7dCJgoGZn7mgNuuGkDIF6ZEg373HoIqh2ADnqkFoN231coKSdVA7aQvZq1PrxObrm9bi6xYv37JH/130fx97f/image.png"
            },
            {
                id: 568,
                name: "Джон «Ван Лечитт» Каск",
                skin: "SWAT",
                price: 154,
                chance: [
                    40676,
                    43306
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztUoreaOBBhx8zecC9L7dKik87TxPKiNuPUlT8IvZEk3-iZotvw3Q3h-hZoa2ymdtKTcVM5aVzSqVe5366x0s6Z33z_/130fx97f/image.png"
            },
            {
                id: 569,
                name: "«Черничный» Бакшот",
                skin: "NSWC SEAL",
                price: 130.9,
                chance: [
                    43307,
                    46246
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztUoreaOBM27OXJYzRD4si82tOIxq_3N-yDl2hXuZQhibuUpN2jjQPtqRc5Z2zxd9DDclRqaArW_wWggbC4Uzmy7rk/130fx97f/image.png"
            },
            {
                id: 570,
                name: "Сержант Бомбсон",
                skin: "SWAT",
                price: 117.7,
                chance: [
                    46247,
                    49364
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztUoreaOBBhx8zecC9L7dKinc6Pk6-jNe6DlT5U68R3jLjFrY300QK3qBJrYzyicIKXJA9tNwzTr1br366x0pHsH5gW/130fx97f/image.png"
            },
            {
                id: 571,
                name: "Бакшот",
                skin: "NSWC SEAL",
                price: 84.7,
                chance: [
                    49365,
                    52848
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztUoreaOBM27OXJYzRD4six2tbdx66hMLmCxW0B6cEp2r2Y9t-hiwO1rUtsMGDwI4GVJwE9Z1_S_lOggbC4wPdGqT0/130fx97f/image.png"
            },
            {
                id: 572,
                name: "Маркус Делроу",
                skin: "ФБР: антитеррор",
                price: 71.5,
                chance: [
                    52849,
                    56389
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztUoreaLQVp7OXJYzRD4six2tLSxKWtZLiEkzJQvpdz3buYo9vz0AbjqUM4YmjzIYCVcQc6NAuGqwOggbC45ux7jTQ/130fx97f/image.png"
            },
            {
                id: 573,
                name: "Мясник",
                skin: "Феникс",
                price: 53.9,
                chance: [
                    56390,
                    59811
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztDu4W1Iwhl3frQTitD_tW3mpSM2fXyY7-Fx2kJ7Z0hjOqTp9v32ge1_kRqNzv7I4TDcwE-YVjQ_Vm2kOjxxcjryget60M/130fx97f/image.png"
            },
            {
                id: 574,
                name: "Осирис",
                skin: "Элитный отряд",
                price: 49.5,
                chance: [
                    59812,
                    63149
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztDu4WpLgJ07OXJYzRD4si-2taNwqKtMr3SkD5UvpV32-vCp46mjA3s-EU4N2H6cYKddAJvaF3Y_wKggbC41kReVwQ/130fx97f/image.png"
            },
            {
                id: 575,
                name: "Драгомир",
                skin: "Кавалерия",
                price: 40.28,
                chance: [
                    63150,
                    66206
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztDu4WnKgtr0v33ZzxQ5d24gIbFwKP3a-mEzjMC6pcgjLCQpoii2Qfl_xduNzihI9SUcwM7aV3TrgW2w_Cv28Gwk2M4PA/130fx97f/image.png"
            },
            {
                id: 576,
                name: "Максимус",
                skin: "Кавалерия",
                price: 36.01,
                chance: [
                    66207,
                    69075
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztDu4WnKgtr0v33ZzxQ5d24gInFwaf1MLiHxzwJscYg2rrD8dSkjVa1_kNoamGndYXGew4-ZVHX_Ve_yfCv28EmQy60yw/130fx97f/image.png"
            },
            {
                id: 577,
                name: "Специалист по химзащите",
                skin: "SWAT",
                price: 275,
                chance: [
                    69076,
                    70507
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztUoreaOBBhx8zecC9L7dKins7dwKHwZejTlG1QsMAhibzE9tj2igS2-hFrMmvxJ4WQdFA-ZAvUrADo366x0oPG6Jam/130fx97f/image.png"
            },
            {
                id: 578,
                name: "Третья рота коммандо",
                skin: "KSK",
                price: 198,
                chance: [
                    70508,
                    72613
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztUoreaOBM27OXJYzRD4si92tTYlKL3Yr2BxzNX7pMh2byW9o-i2way-UVvamz2JYfGJw88Ml-BqQeggbC4_1avT64/130fx97f/image.png"
            },
            {
                id: 579,
                name: "Специалист по биозащите",
                skin: "SWAT",
                price: 154,
                chance: [
                    72614,
                    75244
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztUoreaOBBhx8zecC9L7dKinM6Jw_TyNbnUxD0DscF02OyUrdiljgzs-EA9Yj32ddfEJlBrN1jZ-Fm9366x0hf9NmiL/130fx97f/image.png"
            },
            {
                id: 580,
                name: "Уличный солдат",
                skin: "Феникс",
                price: 154,
                chance: [
                    75245,
                    77875
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztDu4W1Iwhl3frQTitD_tW3mpSC2aKtYb7VwzwFuMEp3r3Fo43z0AawqkY4Y272I4CWewc8aF2C-VK8wr_xxcjrFbD02bU/130fx97f/image.png"
            },
            {
                id: 581,
                name: "Офицер отряда B",
                skin: "SAS",
                price: 117.7,
                chance: [
                    77876,
                    80993
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztUoreaOAZz7OXJYzRD4siw2taKwfStNemJwm0JuJB13r2Ro96m2Qfj_UFua27zJoPGd1U3YA3ZqwCggbC4feaSfpU/130fx97f/image.png"
            },
            {
                id: 582,
                name: "Солдат SEAL Team 6",
                skin: "NSWC SEAL",
                price: 107.23,
                chance: [
                    80994,
                    84245
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztUoreaOBM27OXJYzRD4siz2tPewvGnZLjQlTlSv8Aj3-iQo9mh2VGwrxU-MDjyJoDDegE8NAvT8wOggbC4KM_LwKw/130fx97f/image.png"
            },
            {
                id: 583,
                name: "Оперативник",
                skin: "ФБР: SWAT",
                price: 104.5,
                chance: [
                    84246,
                    87530
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztUoreaLQVp7OXJYzRD4siw2tLYwPGkMeOBwm8G7p1w2LnApY-h3wew-0BoY2jxLdfEJFdtMlDVrlWggbC4fR9fGGI/130fx97f/image.png"
            },
            {
                id: 584,
                name: "Драгомир",
                skin: "Пехота Кавалерии",
                price: 64.9,
                chance: [
                    87531,
                    91060
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztDu4WnKgtr0v33ZzxQ5d24gIzFkfOtYu2FzmkH6sFw0uvFpIrziga3-hE9Z22mLYeVIVRrMA7Wr1K5lPCv28FlpBx5pQ/130fx97f/image.png"
            },
            {
                id: 585,
                name: "Солдат",
                skin: "Феникс",
                price: 41.8,
                chance: [
                    91061,
                    94174
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztDu4W1Iwhl3frQTitD_tW3mpSD2faiYOnSkjhVupQl27iSrNSg2QCy_URuZzqmI4OSdwU4ZgrRqFW-we_xxcjrgk0lNIw/130fx97f/image.png"
            },
            {
                id: 586,
                name: "Диверсант",
                skin: "Элитный отряд",
                price: 39.6,
                chance: [
                    94175,
                    97204
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztDu4WpLgJ07OXJYzRD4six2tHclPWkZOKCkzoEupEp2LjE9I-l3FXt_EZrZ2D0JdTBdw83Zg6C_AOggbC4P78lR_M/130fx97f/image.png"
            },
            {
                id: 587,
                name: "Головорез",
                skin: "Феникс",
                price: 34.49,
                chance: [
                    97205,
                    100000
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztDu4W1Iwhl3frQTitD_tW3mpSN2a-larqCkzoC7cMg3bqWo46t2wTjqUpuZWqmdtOUegY_M1HSr1frwevxxcjrHXMfc5M/130fx97f/image.png"
            }
        ]
    },
    {
        id: 12,
        limit: 10,
        name: 'Twitch кейс',
        price: 150,
        discountPrice: 100,
        img: 'https://givedrop.ru/images/case/tw-min.png',
        weapons: [
            {
                id: 588,
                name: "AWP",
                skin: "Скоростной зверь",
                price: 2530,
                chance: [
                    0,
                    11
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz56I_OKMyJYcxPSPqhHTPAoywrpCDQm18pmUN6j-vUDeFi-4IbHNrcoNolIGMXRUvXVNwz_4khpgadefZzc9Hjmjny8bzxeRVO1rf9MwH3s/130fx97f/image.png"
            },
            {
                id: 589,
                name: "AK-47",
                skin: "Ягуар",
                price: 2140.36,
                chance: [
                    12,
                    28
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz56P7fiDzRyTRTDD7RWWecF9QO4Xhg_7cNqQdr49esEKA7us9bHO7J-MdBLTJTSWfKGZAypuUs-iPNaKJSM8Xm7i3jqaHBKBUSMHsVe9Q/130fx97f/image.png"
            },
            {
                id: 590,
                name: "USP-S",
                skin: "Неонуар",
                price: 1454.44,
                chance: [
                    29,
                    67
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh-TLPbTYhFRd4cJ5nqfE8dzz3Abg_hBtMWDzJ4fGdFI6YFjT-lHtlOi70Jfqvcifm3Vmvigj-z-DyA8aEmbE/130fx97f/image.png"
            },
            {
                id: 591,
                name: "«Доктор» Романов",
                skin: "Кавалерия",
                price: 242,
                chance: [
                    68,
                    2593
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztDu4WnKgtr0v33ZzxQ5d24gIjFz_OlZbqJxD4C68cp2u-Z9Ijw0AXmrUZoZm2iLI-cc1M7MAmC_FntwvCv28EpZvYmDw/130fx97f/image.png"
            },
            {
                id: 592,
                name: "Glock-18",
                skin: "Водяной",
                price: 551.96,
                chance: [
                    2594,
                    3064
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz58OOy2OwhkZzvFDa9dV7g2_Rn5DDQx7cl3a9qz87ITJBLmsoHEYbAtMNEeF8iBU_CFNVqrv09sgqJfKsTbqCu5iyrob2deCBC65Ctazz387ae9/130fx97f/image.png"
            },
            {
                id: 593,
                name: "AWP",
                skin: "Mortis",
                price: 276.58,
                chance: [
                    3065,
                    5070
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FABz7PLfYQJG6d2inL-HnvD8J_WAz2lV7cAh3uyX9Nz33FXnqUs6a2rxctKdJ1c_aQ6Fq1DrxOvn05Tpot2XnvIeBIAw/130fx97f/image.png"
            },
            {
                id: 594,
                name: "ПП-19 Бизон",
                skin: "Азарт",
                price: 251.64,
                chance: [
                    5070,
                    7434
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0Ob3czRY49KJlYyHqP76DLfYkWNFpsEi2-jErNvzjQDg8xFpZmmgctOVdFI4YF-EqwC9xOnq1pG76ZWayyN9-n51Ejfp6Vw/130fx97f/image.png"
            },
            {
                id: 595,
                name: "P90",
                skin: "Shapewood",
                price: 182.12,
                chance: [
                    7435,
                    11332
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIQJR5N2mkZeEmPPLP7LWnn8f7ZIm3r2Zodz20A22-hFkYDumLITBcFA4ZQqFqFTvx-nujMW4u8-dymwj5HeKrOWJ7A/130fx97f/image.png"
            },
            {
                id: 596,
                name: "Револьвер R8",
                skin: "Янтарный градиент",
                price: 96.97,
                chance: [
                    11333,
                    19045
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopL-zJAt21uH3cDx96t2ykb-GkuP1P7fYlVRD7dN-hv_E57P5gVO8v104Zm-mLIfDdw5sM1_R_ADtx72-hJW87snNyHpjuHJw7XbbnUHjgUsacKUx0hrD12_5/130fx97f/image.png"
            },
            {
                id: 597,
                name: "P2000",
                skin: "Янтарный градиент",
                price: 423.97,
                chance: [
                    19046,
                    19904
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zJcAJE7dizq42Og_b4P7LSqWZU7Mxkh6fErN_22VbkqRBrZmn3cIOTewdqZAqE8lm_xO7ngsW_vM6YzndjuSEm-z-DyNwC_Q0C/130fx97f/image.png"
            },
            {
                id: 598,
                name: "FAMAS",
                skin: "Валентность",
                price: 260.9,
                chance: [
                    19905,
                    22127
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0uL3dzxP7c-Jl4-Fg_jhIYTck29Y_cg_0rrEodik0FC38kU5NmqnJICddlc4aAnX-AO3lL2-08C4vp7Ayns1vD5iuygKw238fw/130fx97f/image.png"
            },
            {
                id: 599,
                name: "MAC-10",
                skin: "Малахит",
                price: 128.3,
                chance: [
                    22128,
                    28102
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz52NeDkYAhmfzvPAKMPDMo39QTtCi87_MJcWdKy_q4LZw_otYDAO7J6MN5JS5LZC_ePNwj1vkg9iaNbfJXfpn6-i3noaDoDU0D1ujVTAllEXO4/130fx97f/image.png"
            },
            {
                id: 600,
                name: "AWP",
                skin: "Бог червей",
                price: 119.26,
                chance: [
                    28103,
                    34536
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz56I_OKMSZYcxPSPrRJVfs_ywXpDS4n5YkxUoDv8esAegu8ttSTYLMlZI4dH5TXDPCGNFz-uE8_hvddJpbb9Czrw223bfuxyJYu/130fx97f/image.png"
            },
            {
                id: 601,
                name: "Glock-18",
                skin: "Moonrise",
                price: 67.35,
                chance: [
                    34537,
                    44125
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0vL3djFN79eJxdi0guX2MrXum2Re5vp3j__E57P5gVO8v109Y2vxI9Cdc1M6ZQyCq1e2kLy90JO1ucnNy3U3vCJ07CnUn0HmiBEYcKUx0m01ug-1/130fx97f/image.png"
            },
            {
                id: 602,
                name: "P250",
                skin: "Ворон",
                price: 58.63,
                chance: [
                    44126,
                    54195
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhh0szYI2gS09uklZaOk_7zNL7DhVRd4cJ5nqfF89qt2FHg_UdkNWymJI7AIQBraFqFrlK4kOu9jMW8ucycwSAwv3Ym-z-DyLzD5snZ/130fx97f/image.png"
            },
            {
                id: 603,
                name: "Glock-18",
                skin: "Weasel",
                price: 43.32,
                chance: [
                    54196,
                    64704
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79fnzL-ckvbnNrfum25V4dB8xL2UpNmg2wO3-BFrajz1dYCQdgZsNArZrFO3wLrs1p_tu8-bn3FisiU8pSGK6x7va44/130fx97f/image.png"
            },
            {
                id: 604,
                name: "Glock-18",
                skin: "Карамельное яблоко",
                price: 76.76,
                chance: [
                    64705,
                    73706
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxfwPz3YzhG09C_k4if2aajMeqJlzgF6ZF10r2RrNyg3Qzjrkptazj7IYaVdwE4NFHRqFHtk-fxxcjr1j3fJ1k/130fx97f/image.png"
            },
            {
                id: 605,
                name: "Five-SeveN",
                skin: "Серебряный кварц",
                price: 61.6,
                chance: [
                    73707,
                    83623
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjxP09-kjZOflvv4OqHUklRC4clnj_v--YXygED6-hBpNmuldoPEcQM6YF3S-Qe_l7js1JS06pnIyno3siN3sCvezhOw1wYMMLJHgOIdFw/130fx97f/image.png"
            },
            {
                id: 606,
                name: "Glock-18",
                skin: "Призраки",
                price: 24.27,
                chance: [
                    83624,
                    92638
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf1OD3djFN79fnzL-chfbgO6LCqWdY781lteXA54vwxgy3rUc9MTjxJNKUewVvYF7U_AO9xua-hsK8uMzPnyc2uXYk43jfm0apwUYbzF_ISHM/130fx97f/image.png"
            },
            {
                id: 607,
                name: "SG 553",
                skin: "Близкая опасность",
                price: 17.6,
                chance: [
                    92639,
                    100000
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFf1OD3YjoXuY-Jm5aOhcj8NrrFk29u5Mx2gv2P9I702wXs80BqYzvxdY6SIA44aV-E_VLvl-i8h8O_vJ7Ny3tjviAgtmGdwUKuDFVKtQ/130fx97f/image.png"
            }
        ]
    },
    {
        id: 15,
        limit: 500,
        name: 'Смок',
        price: 200,
        discountPrice: 150,
        img: 'https://givedrop.ru/images/case/smoke321.png',
        weapons: [
            {
                id: 608,
                name: "★ Нож-бабочка",
                skin: "Волны",
                price: 73700,
                chance: [
                    0,
                    0
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GGqPP7I6vdk3lu-M1wmeyQyoD8j1yg5RVtMmCmctOWJlI-YwyD_VG8w-nohsPt78zKz3Zhsygq4HnczEHk0k5SLrs4Un2yL0k/130fx97f/image.png"
            },
            {
                id: 609,
                name: "★ Керамбит",
                skin: "Волны",
                price: 49500,
                chance: [
                    1,
                    1
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlY20k_jkI7fUhFRB4MRij7r--YXygED6-EtrNmihLYaXIQ83Nw6C-1C6k-zvgMO7up7NmHs2uykl43fYnUG3hQYMMLINmYZu2g/130fx97f/image.png"
            },
            {
                id: 610,
                name: "★ Штык-нож M9",
                skin: "Волны",
                price: 36599.2,
                chance: [
                    2,
                    3
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KmsjwPKvBmm5D19V5i_rEprP5gVO8v11lZj-gIYbDclRqMA7Zq1S7lOm-0Za6753KmHoxvnQh5y7ZyhWxiRwecKUx0iL1oy6z/130fx97f/image.png"
            },
            {
                id: 611,
                name: "★ Нож с лезвием-крюком",
                skin: "Волны",
                price: 10129.35,
                chance: [
                    4,
                    8
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxP09i5hJCHkuXLI7PQhW4A18l4jeHVu9703Azs-hA_MTuncNWWIVU-aF7Z_1a7k-bo0cW_v8_OyXVqvyAqsy3D30vgdDGy9vw/130fx97f/image.png"
            },
            {
                id: 612,
                name: "AWP",
                skin: "Азимов",
                price: 7645,
                chance: [
                    9,
                    15
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz56I_OKMyJYcxPSPqFNVfg14jfhDCM7_cotUNTkp-gAKF3otIfBOuUoNdBIHMCDX_SCZF_9uR8w0fJUfpyPpC7n3jOpZDl_eS2fcg/130fx97f/image.png"
            },
            {
                id: 613,
                name: "M4A4",
                skin: "Азимов",
                price: 4112.79,
                chance: [
                    16,
                    27
                ],
                color: "#ff002f",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz52YOLkDzRyTQmWPqFNVfg14jfhDCM7_cotVtLn87oCewy8ttHBZ7J6ZIsaGMHWDPKFM1_940k60vRdfZTcpCi8iTOpZDkfJ7O9Pw/130fx97f/image.png"
            },
            {
                id: 614,
                name: "Glock-18",
                skin: "Сумеречная галактика",
                price: 2386.26,
                chance: [
                    28,
                    54
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0v73cCxX7eOwmIWInOTLP7LWnn8f7ZJ13rjC8NjxilLkqBduaj_ycdSWJldvZAuF-gPsxuvs1MTovZTJymwj5Hd3abH-_Q/130fx97f/image.png"
            },
            {
                id: 615,
                name: "USP-S",
                skin: "Орион",
                price: 1552.1,
                chance: [
                    55,
                    122
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8jnI7LFkGJD7fp8j-3I4IG73wLg-0dpNmj1d4PDdQZoYAnW-lDrx7-50J61787JmyBk7HRx53rZngv330-lwjYg6w/130fx97f/image.png"
            },
            {
                id: 616,
                name: "M4A4",
                skin: "Desolate Space",
                price: 815.56,
                chance: [
                    123,
                    453
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09izh4-HluPxDKjBl2hU18h0juDU-MKt0Fex-kpkMTumJobEdlU7ZFCF-AO4wOnv0Mft752azyRh7CZ2ty2MgVXp1k8SoycS/130fx97f/image.png"
            },
            {
                id: 617,
                name: "M4A1-S",
                skin: "Опустошитель",
                price: 570.78,
                chance: [
                    454,
                    1204
                ],
                color: "#f700ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uOxh7-Gw_alDL_UlWJc6dF-mNbN_Iv9nBrhqhVkYTz6LYSScVBtMliB_gDqwuu9h5-7vc_PynVrvXV37HfUyxPmn1gSOa-1kwUB/130fx97f/image.png"
            },
            {
                id: 618,
                name: "M4A4",
                skin: "Зірка",
                price: 1052.73,
                chance: [
                    1205,
                    1380
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz52YOLkDyR3TRfWALJhXuc74gfTBCI24dJuGoWz9OwHf165vdTEMbd4Y9hMGsHYX6DTNFypvks7hKhULJCPqSq83373ejBd8PX-PnY/130fx97f/image.png"
            },
            {
                id: 619,
                name: "Galil AR",
                skin: "Цербер",
                price: 1012.74,
                chance: [
                    1381,
                    1574
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczLZAJB6c60hpWYqPD1P7LdqWNU6dNoxLGWoI2liwG18hZsZW2hcY6cIFNvMAvS_Ffrye-6h8e4uJqbwHpnsyA8pSGK_cSp9dA/130fx97f/image.png"
            },
            {
                id: 620,
                name: "AK-47",
                skin: "Орбита, вер. 01",
                price: 956.63,
                chance: [
                    1575,
                    1798
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJegJB49C5mpnbxsjmNr_ummJW4NE_iL-ZrYj03wLl_hFqNm71cteWdlA5Zl2F-FG-yO_r0cW4uMnMynFl6T5iuyjnxSwaOw/130fx97f/image.png"
            },
            {
                id: 621,
                name: "Five-SeveN",
                skin: "Медная галактика",
                price: 432.5,
                chance: [
                    1799,
                    3127
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz59PfWwIzJxdwr9AK1hX_oq5A3-NiE-7cRoR-i78r8PPFHx4IeTN-F5Y9hPS5TWX_DQNQz46x9q1qJaesOPqCLm2Sy_aDoNWBa-_XVExrHOIgi-bw/130fx97f/image.png"
            },
            {
                id: 622,
                name: "AWP",
                skin: "Phobos",
                price: 134.87,
                chance: [
                    3128,
                    9895
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FABz7PLfYQJS5NO0m5O0mvLwOq7c2G4EucYk2L7Ep42t3VGx_RFtamHyLISXe1JsYw6Fr1e9wuvr1JS5vs7XiSw0S4ZJl1o/130fx97f/image.png"
            },
            {
                id: 623,
                name: "M4A1-S",
                skin: "Взгляд в прошлое",
                price: 72.79,
                chance: [
                    9896,
                    19317
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alDL3dl3hZ6sRygdbM8Ij8nVn6r0FtN2-gJteVIFJoNF6E_1O4k-rthMO66J3InHdhviBx7X2LnhaxhwYMMLKHMI1gQw/130fx97f/image.png"
            },
            {
                id: 624,
                name: "XM1014",
                skin: "Времена года",
                price: 68.17,
                chance: [
                    19318,
                    28867
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PLZTiVP09CzlYa0kfbwNoTdn2xZ_It33byS99333wXkqktsYWqmJo-cJgc3YFCDq1C7wbzrh5K0v86YyCE3pGB8sheESime/130fx97f/image.png"
            },
            {
                id: 625,
                name: "P250",
                skin: "Сверхновая",
                price: 66.18,
                chance: [
                    28868,
                    38463
                ],
                color: "#9400ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5rZrblDzRyTQbLFbRbTuYt8Q34Nio37M52WZngo-oCcQ68sdeTZbMvZItIH8DVWaWBN1j_6Uw40fcOe5Hb9X662irvJC5UDGuCsqml/130fx97f/image.png"
            },
            {
                id: 626,
                name: "SG 553",
                skin: "Ультрафиолет",
                price: 511.45,
                chance: [
                    38464,
                    39412
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5oM7bgZgh0fTvSFLJOUPAF-Q3oADI_ppQ7BYS1r-lSe17vsdfONbUsMtxEGpPRWvLSMFz9vkwx1KJYKseNpnjxnXO-LevKDKA/130fx97f/image.png"
            },
            {
                id: 627,
                name: "Desert Eagle",
                skin: "Метеорит",
                price: 109.99,
                chance: [
                    39413,
                    47277
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLFTj5Q9c-ilYyHnu3xN4TVl3la18l4jeHVu97x31Dj_kA9a2DwcdWWJAZvZV_Qqwe3x-fv1Me6uMmanCE3vSEm4ynD30vgrmdJqGM/130fx97f/image.png"
            },
            {
                id: 628,
                name: "Tec-9",
                skin: "Айзек",
                price: 79.21,
                chance: [
                    47278,
                    56479
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5vMeDsDzRyTRDHAvlhXeYz_QXjHxg_7cNqQdr4o-xTKgm7tobOYrUrZt4aHJHYU6TQZVj0vxg_ifBULMGN9ivqiH-9OHBKBUQ9rY3UNg/130fx97f/image.png"
            },
            {
                id: 629,
                name: "Glock-18",
                skin: "Пришелец",
                price: 23.54,
                chance: [
                    56480,
                    63394
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79eJnY6PnvD7DLbUkmJE5YtwjLGVpd6s2QKx-RI_Yzr6JtOUdQRvZ1HVrAC5wOvqhp65tcnAn3ZqpGB8sqVEHs1X/130fx97f/image.png"
            },
            {
                id: 630,
                name: "Five-SeveN",
                skin: "Капилляры",
                price: 23.07,
                chance: [
                    63395,
                    70207
                ],
                color: "#0073ff",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTj5X09q_goWYkuHxPYTHk2Jf18l4jeHVu9ij3FG3_UptMWqgJ9WcIQ48aQmB-wC2leq6h8S8u5udmCNn6Cdz4SnD30vgWlTck20/130fx97f/image.png"
            },
            {
                id: 631,
                name: "AWP",
                skin: "Солнце в знаке Льва",
                price: 799.34,
                chance: [
                    70208,
                    70554
                ],
                color: "#0bf",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FA957OnHdTRD746JnIWKge66ZezUkjNX7Jwp2rnCpo2t2Qfk8xJpMTqld47DdlI_ZgqCqQLsxbvmgIj84sqMMdFayA/130fx97f/image.png"
            },
            {
                id: 632,
                name: "MAC-10",
                skin: "Пассажир",
                price: 251.41,
                chance: [
                    70555,
                    73885
                ],
                color: "#0bf",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fShF692xkb-GlvSlY4TZk2pH8Yty37GTrYj2iwaw-kVlMTj3dtCRJFc9MluB-FG2kuq9h5S7vJTNzHYypGB8srnlEt5q/130fx97f/image.png"
            },
            {
                id: 633,
                name: "Nova",
                skin: "Луна в знаке Весов",
                price: 99,
                chance: [
                    73886,
                    82251
                ],
                color: "#0bf",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhoyszSfjlL7d_nq4iOluHtfbiEwDlQ65Up0rCQptXxjle1-hZlMWvzLIecewZqM1vV_AW-ye651sKi_MOegT0cVm4/130fx97f/image.png"
            },
            {
                id: 634,
                name: "Dual Berettas",
                skin: "Луна в знаке Весов",
                price: 96.8,
                chance: [
                    82252,
                    90716
                ],
                color: "#0bf",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf2-r3azJG5d21xb-GkvP9JrafkjkA7cYn2--TrY7z0QTk-hE-MD-lJITHegI9ZV3Vq1Xvx7jvgJG5tIOJlyWrNM96nA/130fx97f/image.png"
            },
            {
                id: 635,
                name: "MAG-7",
                skin: "Радиоактивная опасность",
                price: 77,
                chance: [
                    90717,
                    100000
                ],
                color: "#0bf",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhzw8zGZDZH_8iknZCOqPXmPKzfqWZU7Mxkh6fDo932iVHm_xBsZm6gIoHEIQI7ZFHW_FHqx-jn15Hq75TKziZnuSMr-z-DyCCeIKrx/130fx97f/image.png"
            }
        ]
    },
    {
        id: 21,
        limit: 0,
        name: 'Кейс мажора',
        price: 14999,
        discountPrice: null,
        img: 'https://givedrop.ru/images/case/majorka_228.png',
        weapons: [
            {
                id: 435,
                name: "★ Скелетный нож",
                skin: "Градиент",
                price: 139150,
                chance: [
                    0,
                    11
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwPjNfThW49KJlYG0kfbwNoTdn2xZ_Ish3LyQotugjlXmr0NpZmjwIY_AIQ84ZF3ZrFi2wu26h57q7Z3OwHNkpGB8spXTbTbn/130fx97f/image.png"
            },
            {
                id: 436,
                name: "★ Скелетный нож",
                skin: "Кровавая паутина",
                price: 133081.3,
                chance: [
                    12,
                    25
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwPjNfThW49KJnJm0gPL2IITZk2pH8YspiL7AptWl0VG28xY9ZG_0JtSSdlVqZlDTqAO_xOvtjZa7usnLnydkpGB8sugF-Uc7/130fx97f/image.png"
            },
            {
                id: 437,
                name: "★ Скелетный нож",
                skin: "Убийство",
                price: 82496.69,
                chance: [
                    26,
                    78
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwPjNfThW49KJlY20jfL2IbrummJW4NE_3b7D8dSn21DsrRdsNmvyd9SVcAVrZlqErFHsyO6-1MK-u5rJwXdn7j5iuyhVuujEYg/130fx97f/image.png"
            },
            {
                id: 438,
                name: "★ Скелетный нож",
                skin: "Вороненая сталь",
                price: 54890,
                chance: [
                    79,
                    213
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwPjNfThW49KJlZG0lfvhNr_ummJW4NE_j7qRo42i2QK3rhBuZD3yIoKVIQ82Zl6E-lDswubshpG46JXPnCRqsj5iuyg5BN72PQ/130fx97f/image.png"
            },
            {
                id: 439,
                name: "★ Коготь",
                skin: "Градиент",
                price: 50620.3,
                chance: [
                    214,
                    373
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfxPrMfipP7dezhr-KlsjyMr_UqWdY781lxLyV9t720ADlrkdoMmv0LdOVcgc2ZluG8lHoyObojZ65u5XJmyBivyY8pSGKXDuk4zw/130fx97f/image.png"
            },
            {
                id: 440,
                name: "★ Паракорд-нож",
                skin: "Градиент",
                price: 47190,
                chance: [
                    374,
                    557
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PzadQJD7eOwlYSOqPv9NLPF2DJQuZF32byUoNijiVXn-EBsYTzyLIPAdlI7Nw7RrFbqx7--1sS8upvXiSw0qJarYt4/130fx97f/image.png"
            },
            {
                id: 441,
                name: "★ Классический нож",
                skin: "Градиент",
                price: 45100,
                chance: [
                    558,
                    758
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ODbTjxD09q3kIW0m_7zO6-fkDgI6cB13rzDo9ms0VfkrkZkZmmgdo-RelQ2YA7U_1O4ybi618W0v4OJlyXq5FP8lw/130fx97f/image.png"
            },
            {
                id: 442,
                name: "★ Нож выживания",
                skin: "Градиент",
                price: 40859.45,
                chance: [
                    759,
                    1000
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PLGeC597d2JkoGPksj4OrzZgiUIup0m3OrHpt7xjQ3grRE4a22hLdPGcwBoZVjVqwfvx-bqjcO6vc_M1zI97Zq6-M4l/130fx97f/image.png"
            },
            {
                id: 443,
                name: "★ Скелетный нож",
                skin: "Поверхностная закалка",
                price: 40535,
                chance: [
                    1001,
                    1245
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwPjNfThW49KJlZG0mP74Nr_ummJW4NE_0ruT943x2Fay_kI5Z22iLIWTcQc8ZV2D-FXtkOu8h5-1tcmfyXtnsj5iuyg7hbtySg/130fx97f/image.png"
            },
            {
                id: 444,
                name: "★ Медвежий нож",
                skin: "Градиент",
                price: 38659.5,
                chance: [
                    1246,
                    1512
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfxuHbZC597d2JkoGPksj4OrzZgiUB6pMp07DFpNv03gTn-0U-ZWv0LdOTJFRrNFHY-wDtk-vshZC6ucua1zI97WOV7Cn1/130fx97f/image.png"
            },
            {
                id: 445,
                name: "★ Коготь",
                skin: "Убийство",
                price: 38500,
                chance: [
                    1513,
                    1781
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfxPrMfipP7dezhr-KmsjuNrnDl1Rd4cJ5nqeZpY3zi1K2rkM5YTiiJoKWd1U-Yl_V-FW5wO2-1p-4vZyayHcw63Ur-z-DyOv-XBFg/130fx97f/image.png"
            },
            {
                id: 446,
                name: "★ Паракорд-нож",
                skin: "Убийство",
                price: 36238.74,
                chance: [
                    1782,
                    2080
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PzadQJD4eOskYKZlsj4OrzZgiUF7sYk3LuXoI2ljQbs-kJtZG_2cYSUcA5qYFDW-lnoxO_ujMS9u8ua1zI97VaMzHfo/130fx97f/image.png"
            },
            {
                id: 447,
                name: "★ Скелетный нож",
                skin: "Патина",
                price: 35200,
                chance: [
                    2081,
                    2394
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwPjNfThW49KJlZG0kfjmML7VqWdY781lxOiWoN73jQW1qBVqMW33IIPDJA9vYFCF_gO-ley9gpDu7prAynMxuyE8pSGKw_IRsFE/130fx97f/image.png"
            },
            {
                id: 448,
                name: "★ Нож «Бродяга»",
                skin: "Градиент",
                price: 34485,
                chance: [
                    2395,
                    2719
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3ObcdTJN_uO3lb-NlvPxDLfYkWNFpsMj3uzH9o72iwbsqEs6YD2ncoedJwdqZl_XqQXrxejt15PvvM7Oynt9-n51Tluuuio/130fx97f/image.png"
            },
            {
                id: 449,
                name: "★ Скелетный нож",
                skin: "Ночная полоса",
                price: 30580,
                chance: [
                    2720,
                    3112
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwPjNfThW49KJh5C0mf7zO6_CgnlY-MBOhuDG_Zi7iVDi-kY-ZTz7dtDDelc3Yl-GrwW8w7zvhpO_78ucmiAw7iZwsHjfyQv3309VKgWWWw/130fx97f/image.png"
            },
            {
                id: 450,
                name: "★ Скелетный нож",
                skin: "Пиксельный камуфляж «Лес»",
                price: 28556,
                chance: [
                    3113,
                    3548
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwPjNfThW49KJnJm0k_PkMq_ummJW4NE_3LiY9on22AXkqBFka2v1cISddldvNFnQ_1nrkLy518W_6Mmcz3Rjuj5iuygE5EcUIg/130fx97f/image.png"
            },
            {
                id: 451,
                name: "★ Скелетный нож",
                skin: "Северный лес",
                price: 26950,
                chance: [
                    3549,
                    4021
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwPjNfThW49KJnJm0kfjmNqjFqWle-sBwhtbN_Iv9nBqy_ENuNzr3ddTGdwVsZw7TrFm2xb_ojcLttJXIzno3syNw53_Uy0ezn1gSObdW7fei/130fx97f/image.png"
            },
            {
                id: 452,
                name: "★ Классический нож",
                skin: "Убийство",
                price: 26377.87,
                chance: [
                    4022,
                    4509
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ODbTjxP08azlpKKqPv9NLPF2GpUupN307uR89yn2lLmrxBkN27zJNTHIwRqNA3Ur1a-we3qgJTtuM_XiSw0WXmjPwM/130fx97f/image.png"
            },
            {
                id: 453,
                name: "★ Паракорд-нож",
                skin: "Кровавая паутина",
                price: 26304.2,
                chance: [
                    4510,
                    4999
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PzadQJK9eOhkYKYqPrxN7LEmyUH68Ylj7HH9Nv02wDj-RBlZTj1JtKScVc9YwqC-Ae6xry6hpftuZ_I1zI97W4S6JfA/130fx97f/image.png"
            },
            {
                id: 454,
                name: "★ Скелетный нож",
                skin: "Городская маскировка",
                price: 26013.79,
                chance: [
                    5000,
                    5496
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwPjNfThW49KJh5C0g_bkNoTEhGlQ5vp9g-7J4cL3jQy3qRY5Yj-hJtKVe1JsYlyFrAPqxu7p1MO_7c-fmHNr73In4nmOgVXp1mHP2K2j/130fx97f/image.png"
            },
            {
                id: 455,
                name: "★ Нож выживания",
                skin: "Убийство",
                price: 25671.5,
                chance: [
                    5497,
                    6002
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PLGeC597dGJjoWJhfbLP7LWnn8fscEmjLrCoYik2VXg-ENqNm-mI46VcFVtZg2GrlLtl7q7hsO57ZzMzmwj5HeZC0yaOA/130fx97f/image.png"
            },
            {
                id: 456,
                name: "★ Коготь",
                skin: "Кровавая паутина",
                price: 24200,
                chance: [
                    6003,
                    6550
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfxPrMfipP7dezhr-DjsjjNrnCqWdY781lxLGWoIj3jVDi8xA9Zm3zIdeTJgRrZ16F_1W7x7_r0JG9vs7OzHpgviI8pSGKNRkWESg/130fx97f/image.png"
            },
            {
                id: 457,
                name: "★ Нож «Бродяга»",
                skin: "Убийство",
                price: 23737.9,
                chance: [
                    6551,
                    7111
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3ObcdTJN_uO3mb-RkvXmMoTdn2xZ_Ity2b6T9NzzigewrUM4MWnzdYDBcwc7aF2GrFW8wb3vhJK-6JTLzCBhpGB8sno8Ty4-/130fx97f/image.png"
            },
            {
                id: 458,
                name: "★ Скелетный нож",
                skin: "Африканская сетка",
                price: 23564.18,
                chance: [
                    7112,
                    7678
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwPjNfThW49KJh5C0mvLnO4TFl2Vu5cB1g_zMu9qhjQaw8ks9ajv0JNDAdgQ4Mg3UqFm-lerphJK66ZTNn3tmvXZ3tnnD30vgLhS6WI0/130fx97f/image.png"
            },
            {
                id: 459,
                name: "★ Коготь",
                skin: "Поверхностная закалка",
                price: 23541.98,
                chance: [
                    7679,
                    8245
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfxPrMfipP7dezhr-Khsj7OrfUklRd4cJ5nqeWrNnw3QK2_Us_Yzr0J4ecdgE-M1_R-lLswefs0cW4tMvAmnZkuSEj-z-DyPixM2xE/130fx97f/image.png"
            },
            {
                id: 460,
                name: "★ Стилет",
                skin: "Градиент",
                price: 23292.49,
                chance: [
                    8246,
                    8820
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwOfBfThW-NOJlYG0kfbwNoTdn2xZ_Ityj7rDp4qjjFC3-xJuMGz3IIWUcA5oZFvVrlnokO-90JfttJ2dziQypGB8soIAQfsS/130fx97f/image.png"
            },
            {
                id: 461,
                name: "★ Коготь",
                skin: "Вороненая сталь",
                price: 23080.71,
                chance: [
                    8821,
                    9402
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfxPrMfipP7dezhr-Khsj2P67UklRd4cJ5nqeU89XzjFC28hdkZWvwJoOSJgA8N13U_lG8xrq805W8uczJwXUx63Ij-z-DyPzg26pK/130fx97f/image.png"
            },
            {
                id: 462,
                name: "★ Классический нож",
                skin: "Кровавая паутина",
                price: 22929.5,
                chance: [
                    9403,
                    9988
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ODbTjVb08uzlpO0m_7zO6-fz20B7cQj0u2W9N6s2AfgrhI9Nzz0J4PDclRoNV2E8gPtxOjvhcO1tYOJlyX09MKHHQ/130fx97f/image.png"
            },
            {
                id: 463,
                name: "★ Медвежий нож",
                skin: "Кровавая паутина",
                price: 22844.8,
                chance: [
                    9989,
                    10577
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfxuHbZC595MWJg4WJhMj4OrzZgiUJu5Ry37iYotWk3ALtrRI9ZG_0cYTEIAM2YwzYr1bvybjtg5W9vpvO1zI97e-ieqen/130fx97f/image.png"
            },
            {
                id: 464,
                name: "★ Медвежий нож",
                skin: "Убийство",
                price: 22082.58,
                chance: [
                    10578,
                    11191
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfxuHbZC597dGJjoWJhfbLP7LWnn8fsMB037_HoYn3jQbh-UQ4Nzv2I46cJAJrZgqF-VK7w-bohsC5tZqfmGwj5HeNK_nGag/130fx97f/image.png"
            },
            {
                id: 465,
                name: "★ Нож «Бродяга»",
                skin: "Кровавая паутина",
                price: 21994.58,
                chance: [
                    11192,
                    11808
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3ObcdTJN_uO-jb-ckvXnDLbUkmJE5Ysk3r2WoN-h3Aa28xVsZTugJoGSdwM_ZV3Wr1W5k-bn0JTqvJXBzndnpGB8svUjwJP2/130fx97f/image.png"
            },
            {
                id: 466,
                name: "★ Скелетный нож",
                skin: "Сажа",
                price: 21780,
                chance: [
                    11809,
                    12432
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwPjNfThW49KJh5C0k_bkI7fUqWdY781lxL_Hp9uli1ft_0NoYjzxIIKScQ84YQ7Z_lS-kL3u15a56cvNmyFqu3I8pSGKYadH8TA/130fx97f/image.png"
            },
            {
                id: 467,
                name: "★ Медвежий нож",
                skin: "Зуб тигра",
                price: 21777.58,
                chance: [
                    12433,
                    13056
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfxuHbZC597dKJgImMkuXLPKnQmGxU18l4jeHVu9-hilHi_EU9amqlINKTJAQ5ZA3Q_Fi-lejr1JXvup3InHNluyJ2tnbD30vgXxwVgbk/130fx97f/image.png"
            },
            {
                id: 468,
                name: "★ Нож «Бродяга»",
                skin: "Поверхностная закалка",
                price: 21538,
                chance: [
                    13057,
                    13689
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3ObcdTJN_uO3hb-EnvvxN4Tdn2xZ_Isoi-3Fpo2t0VCw-xZsYDr7IdCQcANsZ1HQ_AK7wrq5jZS17s6awXpmpGB8sjAKo-eb/130fx97f/image.png"
            },
            {
                id: 469,
                name: "★ Коготь",
                skin: "Патина",
                price: 21040.69,
                chance: [
                    13690,
                    14339
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfxPrMfipP7dezhr-KhsjyPKnSk29u5Mx2gv2P9Nyk3wK3_kRoY2nxdoXDdgdtNQzYrge3x7rphJW4vs-fzyMysnMlt2GdwUL6y8Wxdg/130fx97f/image.png"
            },
            {
                id: 470,
                name: "★ Нож выживания",
                skin: "Кровавая паутина",
                price: 20971.76,
                chance: [
                    14340,
                    14992
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PLGeC595MWJg4WJhMj4OrzZgiUGupMgjOqWp4_x3FDm8hJsYWulcoaVcgFoM1nZ_Vjox-no08Xo6MzM1zI97YS31G99/130fx97f/image.png"
            },
            {
                id: 471,
                name: "★ Паракорд-нож",
                skin: "Поверхностная закалка",
                price: 18271,
                chance: [
                    14993,
                    15750
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PzadQJD_eO5nYyOk8j4OrzZgiVUsJMk3e3ErdukigTmqktrZz37cNPBJAI3MluB-gW7xebqgpTtvsvJ1zI97Q0QpRqH/130fx97f/image.png"
            },
            {
                id: 472,
                name: "★ Стилет",
                skin: "Зуб тигра",
                price: 17918.35,
                chance: [
                    15751,
                    16523
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwOfBfThW-NOJlY60g_7zNqnumXlQ5sJ0teXI8oThxlCw_ko4NT2iIdeWclU9NF-C-gXslOzqg56_vciawHMwviQi4C2OnBGpwUYbtkXlMZI/130fx97f/image.png"
            },
            {
                id: 473,
                name: "★ Стилет",
                skin: "Убийство",
                price: 16963.91,
                chance: [
                    16524,
                    17338
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwOfBfThW-NOJlY20jfL2IbrummJW4NE_2-qS89zxiwLg_0A6Nz_xd9KRelVtZg3YrFboyb3u1JXp7svLySZq7j5iuyiMiVolog/130fx97f/image.png"
            },
            {
                id: 474,
                name: "★ Паракорд-нож",
                skin: "Вороненая сталь",
                price: 16643.55,
                chance: [
                    17339,
                    18168
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PzadQJD_eO0mJWOk8j4OrzZgiVX6pMl3L-Z8N6nigbkqBY9ZGjyINOSc1I8ZQyBr1K2wevm1sLttM6f1zI97Y2o0k9H/130fx97f/image.png"
            },
            {
                id: 475,
                name: "★ Коготь",
                skin: "Ночная полоса",
                price: 16564.9,
                chance: [
                    18169,
                    19002
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfxPrMfipP7dezhr-Yh8j6OrzZgnhF-sxhj9bN_Iv9nBrkqEtkYmz3LYCTIQA-aAyE-Vi6w-rn0J-5uczMnSBr6CJx7S2Omkewn1gSOWRDA-im/130fx97f/image.png"
            },
            {
                id: 476,
                name: "★ Коготь",
                skin: "Городская маскировка",
                price: 15657.76,
                chance: [
                    19003,
                    19879
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfxPrMfipP7dezhr-Yh8jgMqvUqX5D6sR_teXI8oThxlLi_UQ4Yz2hIIPDJlNoZlGD8gDvlOy8g8LvtZ_Lm3ti7HQgsHbVyhCpwUYb09WbXt0/130fx97f/image.png"
            },
            {
                id: 477,
                name: "★ Коготь",
                skin: "Сажа",
                price: 14580.49,
                chance: [
                    19880,
                    20809
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfxPrMfipP7dezhr-Yh8jwMqvBmm5u5Mx2gv2PoNWk2A3k8xZrMD37LYXEegFsZ13R_QO2l-i615K_tZrPwCNi7CAk5WGdwUJYDdOaJA/130fx97f/image.png"
            },
            {
                id: 478,
                name: "★ Паракорд-нож",
                skin: "Патина",
                price: 14184.56,
                chance: [
                    20810,
                    21759
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PzadQJD_eOwm5KIkvPLP7LWnn8fv8Eh3LuToI6h3g3k-EI4ZmHxJdTHdwE6Z1nU-1folOi618LovJicwGwj5Hfgp6Y2gA/130fx97f/image.png"
            },
            {
                id: 479,
                name: "★ Классический нож",
                skin: "Поверхностная закалка",
                price: 14157,
                chance: [
                    21760,
                    22711
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ODbTjxT09O_mIWPqPv9NLPF2DkBuJUgib2Q8NX3jgex-hBtNzj6LYWdIQ9oZlqB81K7w-rugpO575XXiSw0EEOhUO8/130fx97f/image.png"
            },
            {
                id: 480,
                name: "★ Коготь",
                skin: "Африканская сетка",
                price: 14036,
                chance: [
                    22712,
                    23669
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfxPrMfipP7dezhr-Yh8j5NqjZqX9Q5vp9g-7J4cLx2FKxrUNvNW77JdKdewNoY1jUqVW2yebrg5W7uZ6amHBmuiMr4i7ZgVXp1sc9RoEr/130fx97f/image.png"
            },
            {
                id: 481,
                name: "★ Стилет",
                skin: "Кровавая паутина",
                price: 13999.95,
                chance: [
                    23670,
                    24629
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwOfBfThW-NOJnJm0gPL2IITdn2xZ_IskjOjA8Nz33QDi-UppZmz6INLDdQE7aF3SrAPqwOjthZbvuJ7JmCRgpGB8smme8pvO/130fx97f/image.png"
            },
            {
                id: 482,
                name: "★ Коготь",
                skin: "Пиксельный камуфляж «Лес»",
                price: 13327.8,
                chance: [
                    24630,
                    25624
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfxPrMfipP7dezhr-DjsjwN6vQglRd4cJ5nqeT89j221fnrUU6MTr3J9ecegZvM1uF8wXtwOns1MK6tJvPzHc1snN2-z-DyFYpM92h/130fx97f/image.png"
            },
            {
                id: 483,
                name: "★ Нож выживания",
                skin: "Поверхностная закалка",
                price: 13310,
                chance: [
                    25625,
                    26619
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PLGeC597c2Jm4mHkvPLP7LWnn8fusNw3r7D99nx2APlr0c_am77LYfEdgBtYAzYq1m-yLrq0MK96MvImGwj5He4-fBu6A/130fx97f/image.png"
            },
            {
                id: 484,
                name: "★ Коготь",
                skin: "Северный лес",
                price: 13285.16,
                chance: [
                    26620,
                    27616
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfxPrMfipP7dezhr-DjsjyPKnUhX9u6spjj-jNyoD8j1yg5UZlYD2nJtedIQJqY1rZr1G7w-_vgse4uJ-dznthuHEmsHnVmxPkgU5SLrs4mgXFC7s/130fx97f/image.png"
            },
            {
                id: 485,
                name: "★ Нож выживания",
                skin: "Северный лес",
                price: 13026.61,
                chance: [
                    27617,
                    28626
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PLGeC595MWJko-ZkuTgDLnehG5Q5Pp9g-7J4cL23lDk8hZoY2CmLYOSdlM-MAnW8wO4wOjr08Puu57Bzic3vXYhsHrYgVXp1vbWsr_d/130fx97f/image.png"
            },
            {
                id: 486,
                name: "★ Нож выживания",
                skin: "Вороненая сталь",
                price: 12760,
                chance: [
                    28627,
                    29650
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PLGeC597c2JloyekvPLP7LWnn8fvcB00-rCodX03AXk_0I-Z2vxJtOSdgc_M1nQrgC9xOfsgpHtus7MzGwj5HffgEdnYA/130fx97f/image.png"
            },
            {
                id: 487,
                name: "★ Нож выживания",
                skin: "Ночная полоса",
                price: 12737.67,
                chance: [
                    29651,
                    30676
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PLGeC59_8yJmomMn-PnJ6nYhm5u5Mx2gv2P8NmsjADiqEc_Zm2gII-dcFVoY1jT-Ae5xe67jMTv78nLy3tm6Ski52GdwUKP0Vw3Ew/130fx97f/image.png"
            },
            {
                id: 488,
                name: "★ Паракорд-нож",
                skin: "Ночная полоса",
                price: 12705,
                chance: [
                    30677,
                    31703
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PzadQJR_OO4nYeDg-TgIbLBk1Rd4cJ5nqeTpdmgiQfmrko4YmD0cobEJgA4YV6D-wDqkum6hMK56JTAyCdnsnQm-z-DyLjswY6B/130fx97f/image.png"
            },
            {
                id: 489,
                name: "★ Стилет",
                skin: "Поверхностная закалка",
                price: 12568.51,
                chance: [
                    31704,
                    32738
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwOfBfThW-NOJlZG0mP74Nr_ummJW4NE_jOyX9N2hjVG3rRY4NzqlIYaXdgE8NF_Q_VDvkOm60JW_7Z6fnXVhvT5iuygNSm9f_w/130fx97f/image.png"
            },
            {
                id: 490,
                name: "★ Стилет",
                skin: "Вороненая сталь",
                price: 12463,
                chance: [
                    32739,
                    33778
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwOfBfThW-NOJlZG0lfvhNr_ummJW4NE_2rqXo4-t3gfm_URlYWmmJtKccwM7NVjR_lO3l-3nhsW76JTMm3tn6z5iuyjqAVarrA/130fx97f/image.png"
            },
            {
                id: 491,
                name: "★ Классический нож",
                skin: "Патина",
                price: 12310.31,
                chance: [
                    33779,
                    34826
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ODbTjxT09q5hoOOk8j4OrzZgiUG7pMmjOzCotmm0QDi_UU5ZT2lItfEelc9YAmB_li8lerqgZbq75TN1zI97Sk8PhOw/130fx97f/image.png"
            },
            {
                id: 492,
                name: "★ Паракорд-нож",
                skin: "Городская маскировка",
                price: 12268.95,
                chance: [
                    34827,
                    35876
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PzadQJR_OOilZCOqOLmMbrfqWdY781lxLuVrNyk3gPnr0s6Yjv3cIfEIwA-ZgmB-wO4x-ru15TvvMvLzXcw6CI8pSGKRApfumE/130fx97f/image.png"
            },
            {
                id: 493,
                name: "★ Нож выживания",
                skin: "Городская маскировка",
                price: 11933.3,
                chance: [
                    35877,
                    36944
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PLGeC59_8yJgIGbksjhIbnQmFRc7cF4n-SPrY2t2QfmqUU5Mm2hLYXHcQ48ZA6G81i7wOjuhJC86JzNnyYy6XIq7GGdwUL_i7ysig/130fx97f/image.png"
            },
            {
                id: 494,
                name: "★ Медвежий нож",
                skin: "Поверхностная закалка",
                price: 11694.65,
                chance: [
                    36945,
                    38025
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfxuHbZC597c2Jm4mHkvPLP7LWnn8fvZYg3LuWrdqijgXsrRBoMmCmco6WIA88ZlzQrli4kurvjJ-_upmdn2wj5HesNJVm7Q/130fx97f/image.png"
            },
            {
                id: 495,
                name: "★ Паракорд-нож",
                skin: "Северный лес",
                price: 11374,
                chance: [
                    38026,
                    39123
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PzadQJK9eOwm5KOhOPLMbTDk2pd18h0juDU-MLw3gfgr0VoY2vyJ9PDcAU_aFrY8lbvlO7shZfutMmfyyQ263Ej7H3ZgVXp1r2ztRdo/130fx97f/image.png"
            },
            {
                id: 496,
                name: "★ Нож «Бродяга»",
                skin: "Вороненая сталь",
                price: 11364.83,
                chance: [
                    39124,
                    40221
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3ObcdTJN_uO3hb-Jm-LxN4Tdn2xZ_It30r-T8YqmjgLg-Us-YWv1J9fHIQY5NF3W81W4x7q5h5O96MmbnXRkpGB8skwiM2j_/130fx97f/image.png"
            },
            {
                id: 497,
                name: "★ Классический нож",
                skin: "Ночная полоса",
                price: 11354.23,
                chance: [
                    40222,
                    41320
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ODbTi5S09K_k4ifhOPmOqvUqWdY781lxL2XoY2jjAPiqRA_ZTrwIoKdI1c-ZlGDq1K6x7u6hpa7uprByiBmv3I8pSGKIHnWg54/130fx97f/image.png"
            },
            {
                id: 498,
                name: "★ Классический нож",
                skin: "Вороненая сталь",
                price: 11112.99,
                chance: [
                    41321,
                    42431
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ODbTjxT0966gYWPqPv9NLPF2DIAv8N03u_Cpt6m2ADmqhBsamjzLdWccw47ZlzSqAC8w-bqhp-1tJjXiSw0ss-OWvg/130fx97f/image.png"
            },
            {
                id: 499,
                name: "★ Нож выживания",
                skin: "Патина",
                price: 10966.23,
                chance: [
                    42432,
                    43550
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PLGeC597c2Jko-ZlPLwDLfYkWNFppBz2b-UoNT32VDlqhJrYD3ydoPBewU8NQ7Z-AS8xrvm15Lou57AyiZ9-n51S4cUezI/130fx97f/image.png"
            },
            {
                id: 500,
                name: "★ Паракорд-нож",
                skin: "Сажа",
                price: 10890,
                chance: [
                    43551,
                    44673
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PzadQJR_OOylZCbm_LLP7LWnn8f6sZ1i-iSpdn2jFa1rRE-Z272ddPDIQY4N1uCqVO_xLrngsK1tJ2YnGwj5HdPISSZQA/130fx97f/image.png"
            },
            {
                id: 501,
                name: "★ Наваха",
                skin: "Градиент",
                price: 10670,
                chance: [
                    44674,
                    45807
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1OrYYiR95t21n4uFnvHxDLrQqW1Q7MBOhuDG_Zi72gfkrUpqMG_7cYXBJFI5aFvWrla4k-rr0ZG8tZ6anSFiuilw5SvZmgv330_81mFXSA/130fx97f/image.png"
            },
            {
                id: 502,
                name: "★ Классический нож",
                skin: "Северный лес",
                price: 10550.61,
                chance: [
                    45808,
                    46947
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ODbTjVb09q5hoWYg8j2PKnUl2du5Mx2gv2Po92m0Vex-hdvZ2D7IoaUIAA_YFzT8ljqkrq9h56_uZzMzic1vCEqt2GdwUInApSabQ/130fx97f/image.png"
            },
            {
                id: 503,
                name: "★ Стилет",
                skin: "Ночная полоса",
                price: 10477.5,
                chance: [
                    46948,
                    48091
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwOfBfThW-NOJh5C0mf7zO6_CgnlY-MBOhuDG_Zi7jQy1_EE9Yjj6IIDDcg47YlvV-ATqyOu90ZS07smdnHc2uSBwsHbYnAv3309yWdx0Qg/130fx97f/image.png"
            },
            {
                id: 504,
                name: "★ Медвежий нож",
                skin: "Патина",
                price: 10427.74,
                chance: [
                    48092,
                    49238
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfxuHbZC597c2Jko-ZlPLwDLfYkWNFpp0h3-uUotrxigyx_BBuZGnyJo_AIFRoYVnT-FftkL29hZa9vJ2fz3F9-n515D3fCGg/130fx97f/image.png"
            },
            {
                id: 505,
                name: "★ Нож выживания",
                skin: "Пиксельный камуфляж «Лес»",
                price: 10164,
                chance: [
                    49239,
                    50398
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PLGeC595MWJkISbluPLP7LWnn8fvcN13LmX9t723gfh_RI6MTyhcYKVc1BrN1zV_Vi3kOnnh8S_vJXPzGwj5HetZZfWfA/130fx97f/image.png"
            },
            {
                id: 506,
                name: "★ Классический нож",
                skin: "Пиксельный камуфляж «Лес»",
                price: 10156.74,
                chance: [
                    50399,
                    51558
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ODbTjVb09iyhIGfqPv9NLPF2D0Hv5EhjuuXotWi2Qfnr0E4YT30JoKVIAVtNF_QrFS9wbvm1JbttJzXiSw0QpjY1T0/130fx97f/image.png"
            },
            {
                id: 507,
                name: "★ Наваха",
                skin: "Зуб тигра",
                price: 9948.4,
                chance: [
                    51559,
                    52728
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1OrYYiR95t21n4uFnvHxDLrfqX9Y78BjtebT9ILyjWu4ohQ0J3f3JdTAcVRsNwmG_Fi-k7vpgp-5us_BnHU36ykg5S3flha1hE5KPLNtm7XAHhrzvchO/130fx97f/image.png"
            },
            {
                id: 508,
                name: "★ Медвежий нож",
                skin: "Вороненая сталь",
                price: 9791.78,
                chance: [
                    52729,
                    53906
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfxuHbZC597c2JloyekvPLP7LWnn8f6ZxyiOuWotj331e1_0RuZG_7doXEJ1M_ZF_Q-lG4wbjuhp7t7pqbzWwj5Hed5HTenQ/130fx97f/image.png"
            },
            {
                id: 509,
                name: "★ Классический нож",
                skin: "Сажа",
                price: 9678.79,
                chance: [
                    53907,
                    55089
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ODbTi5S09i3hJCHksj4OrzZgiUF7sMpjO2Zp4r03gzhrRY9ZDjxcISRcVNrMg7YqFbvw-3v1pK66cjA1zI97V2XVs8W/130fx97f/image.png"
            },
            {
                id: 510,
                name: "★ Паракорд-нож",
                skin: "Африканская сетка",
                price: 9537.9,
                chance: [
                    55090,
                    56278
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PzadQJR_OO7kZODqOP1PYTdn2xZ_Isijr3Ap92h3AHjr0FsZW2ndo7BcVU9YAqCrFbtx-7ugpHuusnOyXdnpGB8smIYhmKE/130fx97f/image.png"
            },
            {
                id: 511,
                name: "★ Наваха",
                skin: "Убийство",
                price: 9365.41,
                chance: [
                    56279,
                    57475
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1OrYYiR95t21n4uFnvHxDLrcqXFU6tdwteXI8oThxlDk_kFqazqiJoHDJFU_ZFmGqVW_kL_ohZDvvsudwXJq6yMit3uMlhapwUYbwEf1zcM/130fx97f/image.png"
            },
            {
                id: 512,
                name: "★ Медвежий нож",
                skin: "Ночная полоса",
                price: 9350,
                chance: [
                    57476,
                    58673
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfxuHbZC59_8yJmomMn-PnJ6nYhm5u5Mx2gv2P99WnjgHm-0s5ZD2gIoaQdVI5aQnXr1S6k-bngJDovp3Lmnpqs3Ym7GGdwUIZlABDbA/130fx97f/image.png"
            },
            {
                id: 513,
                name: "★ Паракорд-нож",
                skin: "Пиксельный камуфляж «Лес»",
                price: 8800,
                chance: [
                    58674,
                    59894
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PzadQJK9eOykJCKg8j4OrzZgiUA7ZcjjLqWpI_32Vbj_0Y6Nmv1cY7Ddgc6N1yB8ge-l-nsg5676Zqf1zI97c8O9V7x/130fx97f/image.png"
            },
            {
                id: 514,
                name: "★ Классический нож",
                skin: "Африканская сетка",
                price: 8772.5,
                chance: [
                    59895,
                    61116
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ODbTi5S09Gzh4i0g_b6DLfYkWNFppRy2uvFrN6l2wLi-RI_Zm6iI4KVcwc5NVmD-FPolL-7g8O7tJvKnSR9-n51DQd9iVY/130fx97f/image.png"
            },
            {
                id: 515,
                name: "★ Наваха",
                skin: "Поверхностная закалка",
                price: 8752.93,
                chance: [
                    61117,
                    62339
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1OrYYiR95t21n4uFnvHxDLrAqWRY5MB1teXI8oThxlawqkZvamj3LISWIQ8_Zw3Z-FTowL2808Lv78_OzntnuShz7XzayhKpwUYb2jcFSJA/130fx97f/image.png"
            },
            {
                id: 516,
                name: "★ Нож выживания",
                skin: "Сажа",
                price: 8739.74,
                chance: [
                    62340,
                    63563
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PLGeC59_8yJkIGbh_vxDLfYkWNFppNzie3E8N-j3FLm_EttZ2-hdoeSdgY3YlqB_1jqkOjugcK86M_LznZ9-n514MBbUh8/130fx97f/image.png"
            },
            {
                id: 517,
                name: "★ Нож «Бродяга»",
                skin: "Патина",
                price: 8690,
                chance: [
                    63564,
                    64789
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3ObcdTJN_uO3hb-NmOX3Nr_um25V4dB8xLqQ94mk0FHtqBVvNjqiddfAelQ4YlvRrli-wu66gJW9uJmYm3sxvCE8pSGKXIdhsyI/130fx97f/image.png"
            },
            {
                id: 518,
                name: "★ Нож «Бродяга»",
                skin: "Городская маскировка",
                price: 8668.91,
                chance: [
                    64790,
                    66015
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3ObcdTJN_uOlhL-flufxDK7DlGpf18l4jeHVu9Si2Qbh-0tlZ2ilLdTDIQE3Yw7Y_gW-l-rogZG8vZnMy3plunYq4HnD30vgTM0VuZA/130fx97f/image.png"
            },
            {
                id: 519,
                name: "★ Стилет",
                skin: "Патина",
                price: 8580,
                chance: [
                    66016,
                    67245
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwOfBfThW-NOJlZG0kfjmML7VqWdY781lxL7Co4qk3gTs-UpqYjz1J4CQJgM6Z1_Q-Fm9yO7p1pDuuZWdmHEwuSM8pSGKdgY2PTY/130fx97f/image.png"
            },
            {
                id: 520,
                name: "★ Наваха",
                skin: "Кровавая паутина",
                price: 8264.07,
                chance: [
                    67246,
                    68486
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1OrYYiR95t21n4uFnvHxDLPIqXxU6tZOhuDG_Zi73QK3-0dlNjuhcYXDdAdtYlGCqAK4wLzmg5O0uZvPmCdn6XF05XbUlwv3309vM0fozg/130fx97f/image.png"
            },
            {
                id: 521,
                name: "★ Нож выживания",
                skin: "Африканская сетка",
                price: 8250,
                chance: [
                    68487,
                    69728
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PLGeC59_8yJmYWYn8jgMrXummJW4NE_ieiWpImt2FG2rxA9YT31LdWWcgc8YgnQrwS2lLu-gpe66pXJnCRguj5iuyjXpB5D5A/130fx97f/image.png"
            },
            {
                id: 522,
                name: "★ Классический нож",
                skin: "Городская маскировка",
                price: 8228.36,
                chance: [
                    69729,
                    70970
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ODbTi5S08i3hIW0guX2MrXummJW4NE_3r2Q8Imk2gTn_0M5amryJIaTeg43NFzY_lntx-nsh5a86JnNm3ZkvD5iuyhd_CGC1Q/130fx97f/image.png"
            },
            {
                id: 523,
                name: "★ Нож «Бродяга»",
                skin: "Ночная полоса",
                price: 8225.58,
                chance: [
                    70971,
                    72212
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3ObcdTJN_uOlhL-FnvD8J6jFhGJB7fp9g-7J4cKmiVWw-kVkYDvwcoDDJFM_Y1jUrFPvlbu7gsDtv8-czSRnvXQrtnmIgVXp1j9iz-lG/130fx97f/image.png"
            },
            {
                id: 524,
                name: "★ Медвежий нож",
                skin: "Городская маскировка",
                price: 8194.67,
                chance: [
                    72213,
                    73455
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfxuHbZC59_8yJgIGbksjhIbnQmFRd4cJ5nqeV9tXw31HhrxBtMG77LdeQIwBsN1zU_1Prx-_uhMC_7ZvPziZn7CYn-z-DyKqpl423/130fx97f/image.png"
            },
            {
                id: 525,
                name: "★ Нож «Бродяга»",
                skin: "Пиксельный камуфляж «Лес»",
                price: 8184.02,
                chance: [
                    73456,
                    74699
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3ObcdTJN_uO-jb-Pk-f1J4Tdn2xZ_Ity0r6ZpImi0QOyrhY6ZGjzJoeTcAQ-Yw7X_gPole3shJ-_ucvLyyYwpGB8sn0_ObN_/130fx97f/image.png"
            },
            {
                id: 526,
                name: "★ Нож «Бродяга»",
                skin: "Северный лес",
                price: 8140,
                chance: [
                    74700,
                    75944
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3ObcdTJN_uO-jb-NmOXxIK_ulGRD7cR9teXI8oThxlDl_kBqZ27zIoPAJgM2YljT_Vi6wO26jMW8vJnNy3FksnMqtizenhWpwUYbn6Tz21E/130fx97f/image.png"
            },
            {
                id: 527,
                name: "★ Стилет",
                skin: "Северный лес",
                price: 7930.82,
                chance: [
                    75945,
                    77195
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwOfBfThW-NOJnJm0kfjmNqjFqWle-sBwhtbN_Iv9nBq2rkZvMWH3J4CQdlc6YViB_gK7kOjojZHvup_KziRlsyArsH3UmUbin1gSOeo9QSC9/130fx97f/image.png"
            },
            {
                id: 528,
                name: "★ Стилет",
                skin: "Городская маскировка",
                price: 7792.4,
                chance: [
                    77196,
                    78450
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwOfBfThW-NOJh5C0g_bkNoTEhGlQ5vp9g-7J4cKj3APlqURtN2H0cIeUIwM9aV_TrAW3we-7hJHpupXAmyRqviVx5HqIgVXp1v5Mi-Jf/130fx97f/image.png"
            },
            {
                id: 529,
                name: "★ Медвежий нож",
                skin: "Северный лес",
                price: 7727.29,
                chance: [
                    78451,
                    79707
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfxuHbZC595MWJko-ZkuTgDLnehG5Q5Pp9g-7J4cKh2ALk8hVuaz2gIYGVI1NrNVuFrFO3wei8hcW-7snNzXRlv3Mn7XfUgVXp1ltYaSOM/130fx97f/image.png"
            },
            {
                id: 530,
                name: "★ Медвежий нож",
                skin: "Пиксельный камуфляж «Лес»",
                price: 7515.3,
                chance: [
                    79708,
                    80969
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfxuHbZC595MWJkISbluPLP7LWnn8f6pYjjOrC8Y30igPl_RY9MTr2dtLEIAY6Z17V-ge5ku3ujMK66JibwWwj5HdHt2Z5jQ/130fx97f/image.png"
            },
            {
                id: 531,
                name: "★ Нож «Бродяга»",
                skin: "Сажа",
                price: 7489.03,
                chance: [
                    80970,
                    82232
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3ObcdTJN_uOlhL-PlufkP77ummJW4NE_j7yZotyi31Dj_0M4MmH2cNCVe1U6MgvU_1i4webngZfpu8nLmiM17j5iuyhr6gH4xw/130fx97f/image.png"
            },
            {
                id: 532,
                name: "★ Медвежий нож",
                skin: "Африканская сетка",
                price: 7390.94,
                chance: [
                    82233,
                    83497
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfxuHbZC59_8yJmYWYn8jgMrXummJW4NE_2b-Z99SnjQCx8hVpYm-gLIOUcQFoN1DX_Vm8l-3mjZ-5uJzKy3QyvT5iuyhvM81TMA/130fx97f/image.png"
            },
            {
                id: 533,
                name: "★ Нож «Бродяга»",
                skin: "Африканская сетка",
                price: 7332.72,
                chance: [
                    83498,
                    84763
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3ObcdTJN_uOlhL-GkuT8DK_QmFRd4cJ5nqeW9t_20AS1-EI6ZWv2IY6RdQU4aQyD-VnvyOi91sK075zOmCAw6yAg-z-DyEkq_2sb/130fx97f/image.png"
            },
            {
                id: 534,
                name: "★ Медвежий нож",
                skin: "Сажа",
                price: 7194.59,
                chance: [
                    84764,
                    86031
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfxuHbZC59_8yJkIGbh_vxDLfYkWNFpsBw2b-WodWh0A3i-EJqZW6gdtfBdAY6ZFjS8we7yLzqgce8u53MmCN9-n51vxtyKNg/130fx97f/image.png"
            },
            {
                id: 535,
                name: "★ Стилет",
                skin: "Африканская сетка",
                price: 7071.08,
                chance: [
                    86032,
                    87301
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwOfBfThW-NOJh5C0mvLnO4TFl2Vu5Mx2gv2Po4r33wHt8kA5MWvzJI7AdAU3Yl2B-wS7ye6-1J7q6s7BnCE27HYrtGGdwUJlUYFv4A/130fx97f/image.png"
            },
            {
                id: 536,
                name: "★ Стилет",
                skin: "Сажа",
                price: 6958.53,
                chance: [
                    87302,
                    88572
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwOfBfThW-NOJh5C0k_bkI7fUqWdY781lxLmTpI6g3gHl8kVvYTylI9OdcwFqNFDS_VO3l-fqjcK7u5_AmnRiuXU8pSGKC992Qfo/130fx97f/image.png"
            },
            {
                id: 537,
                name: "★ Наваха",
                skin: "Вороненая сталь",
                price: 6709.48,
                chance: [
                    88573,
                    89845
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1OrYYiR95t21n4uFnvHxDLrAqWld_cB1teXI8oThxgW3rkE4Z2z2ItKQclI_MlnTqQC7wb3pgMe17ZvBn3s2syQhtC3cmxKpwUYbvFc7ZAk/130fx97f/image.png"
            },
            {
                id: 538,
                name: "★ Наваха",
                skin: "Африканская сетка",
                price: 6411.41,
                chance: [
                    89846,
                    91117
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1OrYYiR95t21n4uFnvHxDKjBqWZU-81OnujPyoD8j1yg5RVkMjz6coXGdwBsMg3Z-FS9k-_v0Z7vv5TJwXtn7HFz5nvZyxa31ExSLrs4rFNj120/130fx97f/image.png"
            },
            {
                id: 539,
                name: "★ Наваха",
                skin: "Городская маскировка",
                price: 6291.99,
                chance: [
                    91118,
                    92388
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1OrYYiR95t21n4uFnvHxDKjBqX9Q-MBOn_vD9ILKhF2zowdyMG7wcNTBcQ8_ZlyE_Vm4x-260JO76s_PnXpi6yRzt3bdyRbj0BsZZvsv26L9IL5R8Q/130fx97f/image.png"
            },
            {
                id: 540,
                name: "★ Наваха",
                skin: "Сажа",
                price: 6208.99,
                chance: [
                    92389,
                    93658
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1OrYYiR95t21n4uFnvHxDKjBqW9Q-NV9j9bN_Iv9nBrs_Eo-MmmnJoTAIFdtMgzSqAC6k-jt1pG5v8jLnSBmsnIq4HqMmES3n1gSObrzV-jH/130fx97f/image.png"
            },
            {
                id: 541,
                name: "★ Наваха",
                skin: "Пиксельный камуфляж «Лес»",
                price: 6204.28,
                chance: [
                    93659,
                    94928
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1OrYYiR95t21n4uFnvHxDLPIqW9V-MRlteXI8oThxga28hI4ZTrwJIeTJwE2M13VrFfsw-rq1pS56ZqYynVg7CAn7HbeyxSpwUYbCTD49gU/130fx97f/image.png"
            },
            {
                id: 542,
                name: "★ Стилет",
                skin: "Пиксельный камуфляж «Лес»",
                price: 6154.5,
                chance: [
                    94929,
                    96198
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwOfBfThW-NOJnJm0k_PkMq_ummJW4NE_37uYrIjx0FLs_Eo4amHzLICWJlRoZFjT-VW9lbu8gpK4ucnPyXVivD5iuyhKpkQ-dw/130fx97f/image.png"
            },
            {
                id: 543,
                name: "★ Наваха",
                skin: "Патина",
                price: 6050,
                chance: [
                    96199,
                    97466
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1OrYYiR95t21n4uFnvHxDLrAqW1e-sZ0jtbN_Iv9nBq1rkQ9ZTr2cIaWIwU6NFqF8wPswOvuhZC-uMmbnXpmuHEkt3zenBOwn1gSOR0c8esL/130fx97f/image.png"
            },
            {
                id: 544,
                name: "★ Наваха",
                skin: "Северный лес",
                price: 5988.27,
                chance: [
                    97467,
                    98733
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1OrYYiR95t21n4uFnvHxDLPIqW1e-sBintbD-p7wiViLpxo7Oy3tdtOUIAFoM17U_VDswejshcC8u53AnHExsiUm4yrbn0G_0BtJOLZuh-veFwsPiGPUjA/130fx97f/image.png"
            },
            {
                id: 545,
                name: "★ Наваха",
                skin: "Ночная полоса",
                price: 5921.74,
                chance: [
                    98734,
                    100000
                ],
                color: "#fffb00",
                img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1OrYYiR95t21n4uFnvHxDKjBqWVY781lmf3T_Jzwt1i9rBsofTuhIoWSJgQ7aFyC-QW7kuu5gcTv7pXLmHJnunJ35nfdmRO30x9LbLRxxavJKX2NTAw/130fx97f/image.png"
            }
        ]
    },
]

const getArrayOfWeapons = () => {
    let weapons = cases
        .reduce((prev, caseItem) => [...prev, ...caseItem.weapons], [])
        .map(weapon => ({
            id: weapon.id,
            color: weapon.color,
            img: weapon.img,
            name: weapon.name,
            skin: weapon.skin,
            price: weapon.price
        }))
        .sort((a, b) => a.price - b.price);
    return JSON.stringify(weapons);
}

//console.log(getArrayOfWeapons());