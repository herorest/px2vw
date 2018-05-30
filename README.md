## 使用方法：

按以下loader格式，添加进入webpack配置文件，实现从px转换成vw，适用于移动端项目

```javascript
module: {
    rules: [{
    test: /\.css$/,
    loader:'webpack-px2vw-loader',
        query:{
            viewportWidth: 750,
            viewportUnit: 'vw',
            minPixelValue:1,
            decimal:3
        }
    }]
}
```

## 配置参数：
```javascript
    viewportWidth: 设计稿宽度，单位像素
    viewportUnit： 转换单位
    minPixelValue: 最小转换单位，例如minPixelValue:1，则1px及以下不进行转换
    decimal: 转换后保留的小数位数
```
