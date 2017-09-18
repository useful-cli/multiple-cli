# multiple-pagewebsite-cli

use gulp

https://www.w3cplus.com/blogs/blueed

# multiple-cli

multiple page cli

## gulp

1) node升级到8.4.0后 gulp报错

```
报错信息require.extensions.hasOwnProperty(ext) is not a function

查询node官网发现, node 8.4.0中 require.extensions API被废弃(http://nodejs.cn/api/modules.html#modules_require)

临时解决方法：在 node_modules/require-dir/index.js中注释掉require.extensions

改进方法：用其它 Node.js 程序加载模块， 或者提前将它们编译为 JavaScript 模块
```

注册路由

app.quandikeji.com:8088/regist/view/registstation.html
