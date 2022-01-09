<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## src 目录结构

- modules 模块
  - article 以文章模块为例
    - dto (Data Transfer Object: 数据传输对象)
      - create-article.dto.ts
      - update-article.dto.ts
    - entities (实体类)
      - article.entity.ts
    - article.controller.ts (控制器)
    - article.module.ts (模块)
    - article.service.ts (提供者/服务 负责数据存储和检索、处理业务逻辑)
- app.controller.ts (基本控制器)
- app.module.ts (应用程序的根模块)
- app.service.ts (带有单个方法的基本服务)
- main.ts (应用程序入口文件)

## 笔记

### 什么是 DTO

数据传输对象（DTO)(Data Transfer Object)，是一种设计模式之间传输数据的软件应用系统。数据传输目标往往是数据访问对象从数据库中检索数据。数据传输对象与数据交互对象或数据访问对象之间的差异是一个以不具有任何行为除了存储和检索的数据（访问和存取器）。

## 参考

- [swagger](https://docs.nestjs.cn/8/recipes?id=swagger)
- [crud 生成器](https://docs.nestjs.cn/8/recipes?id=crud%e7%94%9f%e6%88%90%e5%99%a8)
