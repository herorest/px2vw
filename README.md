
## 这是一款针对webpack的像素转vw单位的loader插件

### 安装：
```javascript
npm i px2vw-view-loader
```


### 配置：
按以下loader格式，添加进入webpack配置文件，实现从px转换成vw，适用于移动端项目
```javascript
module: {
  rules: [{
    test: /\.css$/,
    loader:'px2vw-view-loader',
      query:{
        viewportWidth: 750,
        viewportUnit: 'vw',
        minPixelValue:1,
        decimal:3
      }
  }]
}
```

### 参数：
| 参数名        | 默认值   |  备注  |
| --------   | -----:  | :----:  |
| viewportWidth     | 750 |   设计稿宽度，单位像素     |
| viewportUnit        |   'vw'   |   转换单位   |
| minPixelValue        |    1    |  最小转换单位，例如minPixelValue:1，则1px及以下不进行转换  |
| decimal        |    3    |  转换后保留的小数位数  |
