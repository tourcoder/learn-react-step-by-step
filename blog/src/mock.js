import Mock from 'mockjs'

const domain = '/api/'

Mock.mock(domain + 'posts', function () {
    let result = {
        code: 200,
        message: true,
        data: Mock.mock({
            'array|5-10': [{
                'id|+1': 1000000,
                'title': '@title',
                'body': '@sentence',
            }],
        }),
    }
    return result
})

Mock.mock(domain + 'comments', function () {
    let result = {
        code: 200,
        message: true,
        data: Mock.mock({
            'array|5-10': [{
                'id|+1': 1000000,
                'author': '@title',
                'content': '@sentence',
            }],
        }),
    }
    return result
})