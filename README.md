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
    - article.controller.ts (控制器，负责处理路由、中转、验证等一些简洁的业务)
    - article.service.ts (提供者/服务，负责处理具体的业务，如数据库的增删改查)
    - article.module.ts (模块，负责将 Controller 和 Service 连接起来)
- app.controller.ts (基本控制器)
- app.module.ts (应用程序的根模块)
- app.service.ts (带有单个方法的基本服务)
- main.ts (应用程序入口文件)

## 快捷键

[crud 生成器](https://docs.nestjs.cn/8/recipes?id=crud%e7%94%9f%e6%88%90%e5%99%a8)

## 接口文档: Swagger

[swagger](https://docs.nestjs.cn/8/recipes?id=swagger)

## ORM 框架: Sequelize

[sequelize 中文网](https://www.sequelize.com.cn/)
