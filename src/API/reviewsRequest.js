export default class ReviewsRequest {
    static async getAll() {
        // const response = await axios.get('');
        const response = [{
            id: 1,
            userName: 'Лилия Шиляева',
            imgSrc: "https://s3-alpha-sig.figma.com/img/967b/8f3c/72e3f7e22299af60d1a5ce5af2e754f7?Expires=1704672000&Signature=K~RrN9Chrhy15CTas8Y5qnKn5jQgxHa8gQt23Vv4plEdesag3WgMfQ6fW1omchVPfF6vfqtSBlx1NBJPqEBuRJ5sq7zROq2TSYnP78MaAWWK-Si0ZxEOCcT98eUx7vvP7SXFRfh4x9YOnJnoEGEFfuEAH-z2h3~wAH5m2bJhZQPdtb1C9rBG3j1p-EniHtTabvjtuvPZsGIDw7aWV5p7Y4Z5yjF5FlxHCdeH9hG7iQDZ~uOgcLMUB86c3wlVHfBDPgUAHhpTJcgJd2du2gvzhD--yT1ZZlgkMTTI05IsyvnZQ8OtQSE91~mz-nHJawDQuweGPQ9VG7H5cjZ5YSfMAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            title: 'ORZAX Ocean B Complex 50 capsules',
            reviewTitle: 'ORZAX Ocean B Complex: Мой Энергетический Подъем и Улучшение Памяти в Каждой Капсуле',

            reviewBody: 'ORZAX Ocean B Complex 50 капсул - это источник витаминов группы B, который поражает своей эффективностью. Этот продукт стал надежным спутником в моем ежедневном рационе, помогая поддерживать мое общее здоровье и повышать уровень энергии.\n' +
                '\n' +
                'Я обратил внимание на значительное улучшение работы нервной системы и повышение устойчивости к стрессам после начала приема этих капсул. Благодаря сбалансированному содержанию витаминов B, я заметил улучшение памяти и концентрации внимания, что сказывается на моей работоспособности.\n' +
                '\n' +
                'Помимо этого, ORZAX Ocean B Complex 50 капсулы имеют приятный состав, который легко усваивается. Рекомендую данный продукт всем, кто стремится укрепить свое здоровье и повысить уровень энергии на каждый день.',
            publicationDate: new Date('2021-5-8:5:00').toString(),
        }, {
            id: 2,
            userName: 'Лилия Шиляева',
            imgSrc: "https://s3-alpha-sig.figma.com/img/967b/8f3c/72e3f7e22299af60d1a5ce5af2e754f7?Expires=1704672000&Signature=K~RrN9Chrhy15CTas8Y5qnKn5jQgxHa8gQt23Vv4plEdesag3WgMfQ6fW1omchVPfF6vfqtSBlx1NBJPqEBuRJ5sq7zROq2TSYnP78MaAWWK-Si0ZxEOCcT98eUx7vvP7SXFRfh4x9YOnJnoEGEFfuEAH-z2h3~wAH5m2bJhZQPdtb1C9rBG3j1p-EniHtTabvjtuvPZsGIDw7aWV5p7Y4Z5yjF5FlxHCdeH9hG7iQDZ~uOgcLMUB86c3wlVHfBDPgUAHhpTJcgJd2du2gvzhD--yT1ZZlgkMTTI05IsyvnZQ8OtQSE91~mz-nHJawDQuweGPQ9VG7H5cjZ5YSfMAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            title: 'ORZAX Ocean B Complex 50 capsules',
            reviewTitle: 'Супер',
            reviewBody: 'Как принимать взрослым?',
            publicationDate: new Date('2021-5-8:5:00').toString(),
        }, {
            id: 3,
            userName: 'Лилия Шиляева',
            imgSrc: "https://s3-alpha-sig.figma.com/img/967b/8f3c/72e3f7e22299af60d1a5ce5af2e754f7?Expires=1704672000&Signature=K~RrN9Chrhy15CTas8Y5qnKn5jQgxHa8gQt23Vv4plEdesag3WgMfQ6fW1omchVPfF6vfqtSBlx1NBJPqEBuRJ5sq7zROq2TSYnP78MaAWWK-Si0ZxEOCcT98eUx7vvP7SXFRfh4x9YOnJnoEGEFfuEAH-z2h3~wAH5m2bJhZQPdtb1C9rBG3j1p-EniHtTabvjtuvPZsGIDw7aWV5p7Y4Z5yjF5FlxHCdeH9hG7iQDZ~uOgcLMUB86c3wlVHfBDPgUAHhpTJcgJd2du2gvzhD--yT1ZZlgkMTTI05IsyvnZQ8OtQSE91~mz-nHJawDQuweGPQ9VG7H5cjZ5YSfMAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            title: 'ORZAX Ocean B Complex 50 capsules',
            reviewTitle: 'Супер',
            reviewBody: 'Как принимать взрослым?',
            publicationDate: new Date('2021-5-8:5:00').toString(),
        }]
        return response;
    }
}

