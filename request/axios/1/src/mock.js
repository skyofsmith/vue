const Mock = require('mockjs')
const { Random } = Mock

var data = Mock.mock({
    'list|1-10': [{
        'id|+1': 1
    }]
})
console.log(data);

Mock.mock('/api/a', 'get', () => {
    let res = [];
    res = Mock.mock({
        'list|100': [{
            'id|+1': 1,
            'title': Random.csentence(5, 9),
            'name': Random.cname(2, 4)
        }]
    });
    return res;
})
Mock.mock('/api/b', 'get', () => {
    let res = [];
    res = Mock.mock({
        'list|100': [{
            'id|+-1': -1,
            'title': Random.csentence(5, 9),
            'name': Random.cname(2, 4)
        }]
    });
    return res;
})