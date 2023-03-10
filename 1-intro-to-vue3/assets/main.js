


const app = Vue.createApp({
    // el: "#app",
    data() {
        return {
            product: 'Socks',
            dec: 'A warm fuzzy pair of socks. ',
            img: '../images/socks_green.jpg',
            count: 0,
            classes: [
                {
                    img: 'https://public-cdn-oss.mosoteach.cn/mssvc/cover/2023/02/e81eb0929b869d2098cb441da709ae66.jpeg?x-oss-process=style/s300x300',
                    name: '后端工程化开发',
                    class: '软件2242 Web2班',
                    teacher: '许莫淇',
                    finish: false
                }, {
                    img: 'https://public-cdn-oss.mosoteach.cn/mssvc/cover/2023/02/effaea97669cecb86c6b9e9d2dce54cd.jpg?x-oss-process=style/s300x300',
                    name: '前端工程化开发',
                    class: '软件2242 Web2班',
                    teacher: '许莫淇',
                    finish: false
                }, {
                    img: 'https://public-cdn-oss.mosoteach.cn/mssvc/cover/2023/02/319aa0a5a02386312000d5df99aa1a9d.jpeg?x-oss-process=style/s300x300',
                    name: 'Web应用开发',
                    class: '软件2242 Web2班',
                    teacher: '许莫淇',
                    finish: true
                }
            ]
        }
    },

})