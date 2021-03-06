# finance
实战模拟京东金融



#### 组件化面临的问题  
1. 组件化缺乏方法论
2. 组件化设计不合理，项目难以把控
3. 组件化的敏捷度，复用性体现不足 



## 技术选型注意点
+ 构建工具（将浏览器不支持的转化为浏览器支持的）  
    1. 构建工具：gulp grunt webpack fis prepack
    2. 为什么要构建工具：资源压缩 静态资源替换 模块化处理 编译处理
+ MVVM框架选择
+ 模块化设计
    1. css模块化设计（继承，重用）
    2. js模块化设计
+ 自适应方案设计
    1. js+css
+ 代码维护及复用性设计的思考
    1. 需求变更后，代码的处理（解耦）
    2. 产品迭代 
    3. Bug定位
    4. 新功能开发



## css模块化设计
+ 设计原则
    1. 可复用能继承要完整
    2. 周期性迭代
+ 设计方法
    1. 先整体后部分再颗粒化（布局-》页面-》功能-》业务）
    2. 先抽象再具体（将看上去不一样的抽象成一个统一的模块，通过隐藏变量配置实现）



## js组件设计
+ 设计原则
    1. 高内聚，低耦合（具体交互要封装到组件本身，不要被其他组件所控制。）
    2. 周期性迭代
+ 设计方法
    1. 先整体后部分再颗粒化
    2. 尽可能抽象



## 自适应
+ 基础概念
    1. css像素，设备像素，逻辑像素，设备像素比[参考](https://github.com/jawil/blog/issues/21)
    2. viewport
    3. rem（相对于根元素）
+ 工作原理
    1. 利用viewport和设备像素比调整基础准像素（设计稿：宽320，dpr2，像素点640；设备尺寸：宽375，dpr3，像素点则为1125）
    2. 利用px2rem自动转换css单位

### viewport
`<meta name="viewport" content="width=device-width,initial-scale=1.0"> `  
- width:控制viewport的大小，可以指定的一个值，如600，或者特殊的值，如 device-width 为设备的宽度（单位为缩放为100%时的css的像素）。  
- height:he width相对应，指定高度。  
- initial-scale：出始缩放比例，也即是当页面第一次load的时候缩放比例。  
- maximum-scale：允许用户缩放到的最大比例  
- minimun-scale：允许用户缩放到的最小比例  
- user-scalable：用户是否可以手动缩放



## spa设计
1. 设计意义  
    - 前后端分离  
    - 减轻服务端压力  
    - 增强用户体验  
    - prerender预渲染优化seo  
2. 工作原理 
    - history api（更优雅 onpopstate/pushState） `//注册路由 window.history.pushState({name:'api},link,url `  
    - hash（兼容性更好 hashchange/location.hash）`//注册路由 location.hash=link `














## 注意
1. bable
2. npm script
3. EsLint
4. Sass