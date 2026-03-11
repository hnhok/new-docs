# 🚀 星舰计划 - 积木箱复制与新项目克隆指南

> *“我们不仅制造神兵，我们也开放整条兵工厂的流水线。”*
>
> 探索版全栈 CMS 不仅仅是某个单一的站点，它是一种**“多端联动 + Github Actions 全自动容器化布署”**的开发哲学。如果你想基于当前打造得极其完善的这套架构（前端 + H5 + 后端 + 文档），快速复制出一套隶属于其他域名或业务线的新项目，请遵循下述最高指示。

---

## 🛠️ 第一阶段：母体切断与极速克隆 (Clone Base)

摒弃传统“傻瓜式”的手工复制再到处寻找 `.git` 文件夹删除的原始操作！对于这种多端全栈星舰级的架构，我们提供了两种极其优雅的“工业级”克隆洗礼。

### 方案 A：终端里的“全自动一键降临” (强烈推荐)

如果你想瞬间在电脑上孵化这套包含四个微服务内核的新宇宙，且不残留上一个主人的任何一条提交记录和历史脏数据。可以直接在你的命令行空投这段**一行代码装配线**：

*(以新建 `my-new-cms` 文件夹为例)*

**🔗 对于 Mac / Linux / Git Bash 环境：**
```bash
mkdir my-new-cms && cd my-new-cms
git clone --depth 1 https://github.com/hnhok/new-backend.git backend
git clone --depth 1 https://github.com/hnhok/new-fronntend.git frontend
git clone --depth 1 https://github.com/hnhok/new-h5.git h5
git clone --depth 1 https://github.com/hnhok/new-docs.git docs
rm -rf */.git backend/prisma/dev.db
```

*(✨ **原理解析**：这段充满魔法的命令使用了参数 `--depth 1`。这代表它不仅拥有光速下载能力，而且天生**自动切断且不挂载过去的旧历史链条**，随后 `rm -rf` 指令精准无误地蒸发掉了各个目录的所有骨架壳与 `dev.db` 脏数据。这让你的新工作站立刻犹如白纸一般干净！)*

### 方案 B：GitHub 官方模板克隆 (Template Repo)
我们正在计划将这四大仓库设置为 `Template Repository`。你在其它团队或者企业的新电脑上，甚至连终端都不用打开，直接在页面上点击超大的绿色按钮 **[Use this template]**。GitHub 也会在 1 秒钟内为你生成剥掉各种旧羁绊体系的超凡克隆体！

---

### 2. 本地数据库剥离预热
在新项目的 `backend` 里：
- 删除 `prisma/dev.db` （如果它存在的话），确保旧项目的陈年数据不会被带进新天地。
- 重新运行一次 `npx prisma db push`，让这颗系统的大脑拥有全新的白色神经突触。

---

## ☁️ 第二阶段：云服务资产与参数配置 (Cloud Setup)

这套自动化运维体系极大地压榨了云算力，几乎摒弃了人工的 SSH 干预。但也意味着新项目需要你这名“造物主”赐予它三把钥匙。

### 🚨 绝对不可缺少的部署核心密钥 (GitHub Secrets)

不管你新建了几个项目，只要你想在 Push 代码的瞬间看到它们在云端化为现实，你必须去每个 Github 新仓库的 **`Settings -> Secrets and variables -> Actions`** 中配置如下三个超能秘钥：

| 秘钥名称 (Name) | 值 (Value/Secret) | 说明与必填必设 |
| :--- | :--- | :--- |
| `SERVER_HOST` | 例: `180.76.238.46` | 你拥有的那台打算作为算力接盘的云主机的公网IP |
| `SERVER_USER` | 例: `root` | 云主机系统用户名，强关联 Docker 操作权限 |
| `SERVER_PASSWORD` | 例: `Aa12356*` | 该用户登录这台虚拟主机的纯文本密码。 |

*注：四个仓库（包括 Docs 等页面如需要自定义发布）凡是部署脚本里有 `$secrets.SERVER_HOST` 字眼的地方，都会抓取并加密这些凭证向远端 SSH。*

### 🧱 端口红线与云服务器安全组分配
当这些自动化的 Docker 指挥舱从天上通过 SCP 包丢到你的服务器上并启动时，它们会在机器上横向索要端口号。你必须去你的服务商（如阿里云、腾讯云、百度云）控制台开放以下安全组：

- **`80/443 区间`** - 默认给予【Admin 舰长指挥室前端 (`frontend`)】占用
- **`3000 特权端口`** - 默认给予【NestJS 后方大脑中枢 (`backend`)】独占
- **`8080 边缘端口`** - 默认给予【消费者 H5 (`h5`)】用于炫酷展示隔离使用

*(💡如果你希望在复用时更改绑定，请分别进入对应仓库的 `.github/workflows/deploy.yml` 的最后一行 `docker run` 参数指令中修改抛头露面的对外端口)。*

---

## 🧬 第三阶段：如何打散、换皮、并快速迭代？

系统被你克隆出全新的双胞胎之后，你可以任意改变其基础 UI（换皮）：

### 1. 颜色大换血 (Design System)
进入你的 `h5/src/style.css` 顶部，改变 `--primary-color` 和 `--secondary-color`；同理，去 `frontend/src/assets` 里替换 Element Plus 原色，整个宇宙就会变为你想要的基调。

### 2. API 通信与跨域中转站
默认情况下：
- 你的 `frontend/vite.config.ts` 里装有防跨域的反向代理（`/api` 会飞往本地 3000）。
- 你的 `h5/src/api/index.ts` 更是自带了直接拨号（`baseURL`）和本地 Mock 系统。
你想要挂载新的应用，只需要在这里简单改变 URL，就像更换对讲机频道一样简单！

*(✨ 恭喜，掌握了这些，你已不仅仅是一名开发者，而是一名具有多维全栈算力的流水线控制官！)*
