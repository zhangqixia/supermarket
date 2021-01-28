module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets' : '@/assets',
                'components' : '@/components',
                'common' : '@/components/common',
                'conent' : '@/components/conent',
                'network' : '@/network',
                'views' : '@/views',
                'common2' : '@/common'
            }
        }
    }
}