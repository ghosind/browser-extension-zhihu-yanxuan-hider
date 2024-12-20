# 知乎盐选屏蔽插件

用于隐藏知乎严选内容的浏览器插件。

## 支持浏览器

| 浏览器  |         支持状态          |
| :-----: | :-----------------------: |
| Chrome  | :white_check_mark: 已支持 |
| Safari  | :white_check_mark: 已支持 |
| Firefox |        :x: 计划中         |
|  Edge   |     :question: 未测试     |

## 目录结构

|   目录   | 说明                                          |
| :------: | :-------------------------------------------- |
| `shared` | 通用插件文件，包括`manifest.json`及脚本文件等 |
| `safari` | Safari项目文件                                |

## 使用方法

### Chrome

1. 打开Chrome管理扩展程序界面：

    - 点击菜单栏 扩展程序 -> 管理扩展程序。
    - 打开 菜单 -> 更多工具 -> 扩展程序。
    - 打开 菜单 -> 设置 -> 扩展程序 。

2. 点击加载已解压的扩展程序。

3. 选择`shared`目录。

### Safari

1. 通过XCode打开`safari`目录下的`zhihu-yanxuan-hider.xcodeproj`项目文件。

2. 选择目标为`macOS`，构建并运行。

3. 在构建的程序界面中点击`Quit and Open Safari Extensions Preferences`按钮打开Safari插件设置窗口。

4. 勾选`知乎盐选隐藏器`以启用插件。

> 若Safari插件管理设置中没有展示`知乎盐选隐藏器`插件，需要开启 菜单栏 -> 开发 -> 允许未签名的插件。
