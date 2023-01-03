[TOC]
# 20221227-firstproject Note

## 基本 HTML 标签
### 网页的基础知识

- 网页的显示过程
- 缓存 (cache) 技术
- 浏览器内核
- 常用 HTML 元素

#### <!DOCTYPE html> 
- 这是文档说明，不能省略
- 一定要放在最顶部

#### html 元素：
- 根元素 lang 属性 
#### head 元素：
- 存放元数据 
#### title 元素：
- 显示网页的标题 
#### meta 元素：
- 设置网页的字符编码 一般是**UTF-8**
#### body 元素：
- 网页的具体内容和结构
#### h1-h6
- 显示标题
- 一个网页中最好只有一个h1
#### p
- 用来显示一个段落
#### strong 元素：文本样式
#### pre、code、br 元素：结构样式
#### 字符实体：显示特殊符号
#### img 元素：
- 显示图片 图片与像素
#### base元素: 设置 a 元素的默认行为，&lt;base target="_blank" href="https://www.baidu.com"> 默认所有的 a标签的target都是_blank, 所有未指定的路径加上地址
#### a 元素：
- 用来显示超链接 
#### iframe 元素：
- 嵌入 HTML 文档 锚点链接：在网页内进行跳转 伪链接：点击后不跳转 URL 图片链接

### URL

### 标签语义化

## 基本 CSS 属性

### CSS 简介

- 内联样式、文档样式表、外部样式表
- @charset、@import
- 注释
- HTML 和 CSS 的编写准则
- 设置网页的图标
- 常用 CSS 属性

### 初识 CSS
- background-color、color、span 元素
- div 元素
- 颜色
### CSS 属性 - 文本

- text-decoration 设置文字的装饰线
- letter-spacing、word-spacing 设置间距
- text-transform 设置大小写转换
- text-indent 设置第一行的缩进
- text-align 设置水平对齐方式
### CSS 属性 - 字体

- font-size 设置文字大小
- font-family 设置文字的字体名称
- @font-face 让网页支持网络字体
- font-weight 设置文字的粗细
- font-style 设置文字的常规、斜体显示
- font-variant 设置小写字母的显示形式
### CSS 选择器

- 元素选择器 (type selectors)：div {}
- 通用选择器 (universal selector)：* {}
- id 选择器 (id selectors)：#xxx {}
- 类选择器 (class selectors)：.xxx {}
  - 使用class选择器来修改这个项目的好处：
    1、方便项目维护（需求的更改）
    2、保证了样式和结构分离
    3、能够统一修改局部的某一类元素，而不会影响其他元素
  - 类选择器实现多种按钮样式
- 属性选择器 (attribute selectors)

  - [att]
  - [[att=val]
  - [[attr~=val]
  - [[attr|=val]
  - [[attr^=val]
  - [[attr$=val]
  - [[attr*=val]
- 后代选择器 (descendant combinator)：div span {}
- 子选择器 (child combinators)：div>span {}
- 相邻兄弟选择器 (adjacent sibling combinator)：div+p
- 全体兄弟选择器 (general sibling combinator)：div~p
- 选择器组

  - 交集选择器：div.one {}
  - 并集选择器：div, .one, [title="test"] {}
- 让所有文本输入框的文字颜色都为红色

- 找到内容为 em2、em3、em4 的 em 元素


### 动态伪类：

- a:link 未访问的链接
- a:visited 已访问的链接
- a:hover 鼠标挪动到链接上
- a:active 激活的链接（鼠标在链接上长按住未松开）
- a:focus 指当前拥有输入焦点的元素（能接收键盘输入）
### 目标伪类 :target 当元素被锚点链接当作目标跳转之后起作用 语言伪类 :lang

### 元素状态伪类：

- :enabled 启用状态
- :disabled 禁用状态
- :checked 被选中状态
### 结构伪类：

- :nth-child(an + b)
- :nth-last-child(an + b)
- :nth-of-type(an + b)
- :nth-last-of-type(an + b)
- :empty 代表里面完全空白的元素
否定伪类：:not(x)，x 为简单选择器

### 伪元素：

- ::first-line 可以针对首行文本设置属性
- ::first-letter 对首字母设置属性
- ::before 在元素内容之前插入其他内容
- ::after 在元素内容之后插入其他内容
## CSS 特性

- CSS 属性的继承
- CSS 属性的层叠
- CSS 属性的优先级 !important > 内联样式 > id > class、属性、伪类 > 标签（元素）、伪元素 > 通用（*）
- CSS 属性使用总结
### HTML 列表、表格、表单

#### 列表

- 有序列表 ol、li
- 无序列表 ul、li
- 定义列表 dl、dt、dd
- 列表相关的 CSS 属性：list-style-type、list-style-image、list-style-position、list-style
#### 表格

- table 的常用属性
- tr 的常用属性
- th、td 的常用属性
- 细线表格的实现 border-collapse
- 表格的其他元素 tbody、caption、thead、tfoot、th
- 单元格的合并
- CSS 属性 - border-spacing
#### 表单

- input 常用属性 布尔属性的概念
- 按钮 - input 和 button
- label 绑定 input
- radio
- checkbox
- 隐藏域 (type=hidden)
- select 和 option
- fieldset 和 legend
- form 的常用属性
- get 和 post
- 表单集成各种搜索引擎
### HTML 元素类型


#### 元素类型

- 块级、行内级元素
- 替换、非替换元素
- 元素的分类总结
#### CSS 属性 - display

- inline-block
- 邮箱显示与选择
- 分页跳转栏
- display 的其他取值
#### CSS 属性 - visibility

#### CSS 属性 - overflow

#### 元素之间的空格

### 盒子模型相关知识点


#### 盒子模型 (Box Model)

#### 宽度、高度相关 CSS 属性 - width、height

#### 内边距相关 CSS 属性 - padding

#### 外边距相关 CSS 属性 - margin

- 上下 margin 传递
- 上下 margin 折叠
#### border 边框

- CSS 属性 - border-width、border-color、border-style
- CSS 属性 - border-top、border-right、border-bottom、border-left、border
- 边框的形状 - 三角形、双色平分
- 行内级非替换元素的注意点
- CSS 属性 - border-radius 圆角
#### CSS 属性 - outline

#### CSS 属性 - box-shadow

#### CSS 属性 - text-shadow

#### CSS 属性 - box-sizing

#### 元素的水平居中显示（行内级、块级、inline-block）

### Photoshop 简单使用

#### Photoshop 简介

- 常用功能、面板、设置
- 常用快捷键
- 矩形选框工具 (D)
- 裁剪工具、切片工具 (C)
- 吸管工具 (I)
- 参考线
- 文字工具 (T)
- 移动工具 (V)
#### Photoshop 操作 - 切图

- 规则图形：矩形选择框工具
- 规则图形：切片工具
- 不规则图形：利用魔棒工具 + 矩形选择框
#### Photoshop 操作 - 测量

- 盒子模型属性：矩形选框工具
- 盒子模型属性：切片工具
- 文字测量：参考线 + 矩形选框工具
#### Photoshop 文件格式 - psd

### 背景相关知识点


- CSS 属性 - background-image 设置元素背景图片
- CSS 属性 - background-repeat 设置背景图片是否平铺
- CSS 属性 - background-size 设置背景图片大小
- CSS 属性 - background-position 设置背景图片具体位置
- 滑动门技术
- 大图适配
- CSS Sprite（精灵图）
- CSS 属性 - background-attachment
- CSS 属性 - background
> background-image 元素 和 img 标签 的选择

### 定位相关知识点


#### 标准流 (Normal Flow)

#### CSS 属性 - position

- relative - 相对定位
- static - 静态定位
- fixed - 固定定位 画布 (Canvas) 和视口 (Viewport) 脱标元素的特点
- absolute - 绝对定位
- 子绝父相
- 蒙版
- 绝对定位技巧
#### 元素的层叠

    - CSS属性 - z-index
### 浮动相关知识点


#### CSS 属性 - float

- 浮动的规则
- 浮动的应用
- 浮动存在的问题：高度坍塌
- 清浮动的常见方法
- CSS 属性 - clear
- 各种定位方案对比
### 官方文档的阅读

#### CSS 属性的描述

#### CSS 属性的取值

- 组合 (combinators)
- 出现次数 (multipliers)
- 类型 (types) < number >、< integer > < length > < time > < angle > < percentage > < string > < url >
### 项目实战 - 网易严选主页



#### 项目整体页面：项目预览图

- 常见项目目录
- CSS Reset
- CSS 编码规范
- 浏览器私有前缀
- CSS 知识补充 CSS 属性 - white-space CSS 属性 - text-overflow image-set inline-level box 和 line box 基线 - baseline CSS 属性 - vertical-align
- 代码相关 去除空格的js函数 单行文字显示省略号
- 项目界面
### HTML + CSS 总结

#### HTML 元素

- 脱标元素
- 非脱标元素
#### CSS属性

- 盒子模型
- 定位
- 文字
- 字体
- 背景
- 动画
### WebStorm 常用快捷键


>文本编辑相关快捷键：

作用	快捷键
使用特定代码包裹选中的内容	Ctrl + Alt + T

>其他快捷键：

作用	快捷键
重命名文件	Shift + F6
展开项目结构	Alt + 1
#### flex 布局

#### flex container 相关属性

- flex 模块布局
- flex-direction：设置 main axis 的方向
- justify-content：设置 flex items 在 main axis 对齐方式
- align-items：设置 flex items 在 cross axis 对齐方式
- flex-wrap：设置 flex container 单行还是多行
- flex-flow：简写属性 (flex-direction || flex-wrap)
- align-content：多行 flex items 在 cross axis 上的对齐方式

#### flex items 相关属性

- order：决定 flex items 的排布顺序
- align-self：覆盖 flex container 设置的 align-items
- flex-grow：决定了 flex items 如何拓展
- flex-shrink：决定了 flex items 如何收缩
- flex-basic：设置 flex items 在 main axis 上的 base size
- flex：简写属性 (flew-grow flew-shrink? || flex-basis)

### VsCode 好用的前端插件
- Auto Rename Tag：自动完成另一侧标签的同步修改
- HTML CSS Support：智能提示 CSS 类名以及id
- Bracket Pair Colorizer：给括号加上不同的颜色
- HTML Snippets：智能提示 HTML 标签，以及标签含义
- Path Intellisense：自动补全路径
- CSS Peek：根据类名寻找 CSS 代码
- open in browser：快速使用浏览器打开 Html 页面
- Live Server：打开网页更改代码后自动更新页面，无需刷新
- jQuery Code Snippets：jQuery 代码智能提示
- filesize：显示当前文件大小
- vscode-icons：好看的图标样式
- Panda Theme：好看的黑白主题配色