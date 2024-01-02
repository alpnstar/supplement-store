export default function () {
    return [
        {
            title: 'Здоровье',
            path: '/catalog/zdorove',
            subCategories: [
                {
                    title: 'Турецкие витамины/бады',
                    path: '/catalog/zdorove/turetskie-vitaminy',
                    subCategories: [
                        {
                            title: 'Voonka', path: '/catalog/turetskie-vitaminy/voonka'
                        },
                        {
                            title: 'Balen', path: '/catalog/turetskie-vitaminy/balen'
                        }
                    ]
                },

                {
                    title: 'Voonka',
                    path: '/catalog/zdorove/voonka'
                },
                {
                    title: 'Balen',
                    path: '/catalog/zdorove/balen',
                }
            ],
        }, {
            title: 'Красота',
            path: '/catalog/krasota',
            subCategories: [
                {
                    title: 'Уход',
                    path: '/catalog/krasota/uhod',
                    subCategories: [
                        {
                            title: 'Кремы',
                            path: '/catalog/krasota/uhod/kremi',
                        },
                        {
                            title: 'Сыворотки',
                            path: '/catalog/krasota/uhod/sivorotki',
                        },
                        {
                            title: 'Сыворотки',
                            path: '/catalog/krasota/uhod/sivorotki',
                        }
                    ]
                },
                {
                    title: 'Voonka',
                    path: '/catalog/krasota/voonka',
                },
                {
                    title: 'Balen',
                    path: '/catalog/krasota/balen',
                }],
        },
    ]
}