## 若木页面配置

ruomu-page

## 开发指南

### 设计器

#### 组件开发

组件开发分为 2 块，界面渲染和属性配置，后期再增加事件、数据源等其他方面的配置

组件渲染主要在 /src/components/designer/widget 下，并按照组件的类型分组，每个组件都应有自己的类，并继承自 Widget 类，实现 clone 方法

组件配置主要在 /src/components/designer/property/settings 下，并按照组件类型分组，每个组件都应用自己的配置类，并实现 Property 接口，实现 clone 方法

以上 vue 文件需要有 default.name，会自动被识别并注入组件
