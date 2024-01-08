export default function () {
    let a = {
        title: 'Здоровье',
        path: '/catalog/zdorove',
        subCategories: [
            {
                title: 'Турецкие витамины/бады',
                path: '/catalog/zdorove/turetskie-vitaminy',
                prev: [{title: 'Здоровье', path: '/catalog/zdorove'}],
            }]
    }

    return [
        {
            title: 'Здоровье',
            path: '/catalog/zdorove',
            subCategories: [
                {
                    title: 'Турецкие витамины/бады',
                    path: '/catalog/zdorove/turetskie-vitaminy',
                    prev: [{title: 'Здоровье', path: '/catalog/zdorove'}],
                    subCategories: [
                        {
                            title: 'Voonka',
                            path: '/catalog/turetskie-vitaminy/voonka',
                            prev: [{title: 'Здоровье', path: '/catalog/zdorove'},
                                {title: 'Турецкие витамины', path: '/catalog/zdorove/turetskie-vitaminy'}],

                        },
                        {
                            title: 'Balen', path: '/catalog/turetskie-vitaminy/balen',
                            prev: [{title: 'Здоровье', path: '/catalog/zdorove'},
                                {title: 'Турецкие витамины', path: '/catalog/zdorove/turetskie-vitaminy'}]
                        }
                    ]
                },

                {
                    title: 'Voonka',
                    path: '/catalog/zdorove/voonka',
                    prev: [{title: 'Здоровье', path: '/catalog/zdorove'}],
                },
                {
                    title: 'Balen',
                    path: '/catalog/zdorove/balen',
                    prev: [{title: 'Здоровье', path: '/catalog/zdorove'}],
                }
            ],
        },
    ]
}