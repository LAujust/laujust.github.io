# Run-Duo Liang 个人网站维护指南

网站源码在 `main` 分支。改完内容并推送后，GitHub Actions 会用 Jekyll 生成静态网页，将成品写入 `gh-pages`，再由 GitHub Pages 更新正式站。[源码仓库](https://github.com/LAujust/laujust.github.io) · [正式网站](https://laujust.github.io/)

## 找到要改的文件

| 想更新什么 | 编辑位置 |
| --- | --- |
| 个人简介、头像 | [首页正文](_pages/about.md)。头像放在 [assets/img/](assets/img/)，文件名和替代文字分别填入首页的 `profile.image` 和 `profile.alt` |
| 姓名、身份、联系方式 | 站点姓名在 [站点配置](_config.yml)，首页标题下的身份和单位在 [首页布局](_layouts/about.liquid)，邮箱、ORCID、GitHub 和 Google Scholar 在 [社交账号](_data/socials.yml) |
| 论文和首页精选 | [BibTeX 书目](_bibliography/papers.bib) |
| 研究介绍和配图 | [Research 页](_pages/research.html) 与 [研究图片目录](assets/img/research/) |
| 项目和展示顺序 | [项目目录](_projects/) 中每个项目对应一个 Markdown 文件 |
| CV | [简历数据](assets/json/resume.json) 中的 `basics.summary`、`education`、`work` 和 `languages`。联系方式有变时也同步这里的 `basics` |
| 全站背景、图片署名 | [背景图片目录](assets/img/sky/)、[站点样式](_sass/_academic.scss) 和 [页脚](_includes/footer.liquid) |

## 直接在 GitHub 更新

1. 在仓库选择 `main`，打开目标文件，点铅笔图标编辑。修改一段简介时，可以直接点 **Commit changes** 提交到 `main`。
2. 一次更新涉及图片和文字时，可以先建一个分支。在目标图片目录点 **Add file → Upload files**，随后在同一分支修改页面。这样两项改动会一起上线。
3. 从该分支向 `main` 打开 Pull Request，查看 **Files changed**，确认图片、文字和链接，构建通过后合并。发布进度可在 [Deploy site](https://github.com/LAujust/laujust.github.io/actions/workflows/deploy.yml) 查看。

## 加论文和研究图

**论文列表**由仓库中的 BibTeX 生成。在 ORCID 或 arXiv 新增成果后，也要同步这份书目。先按 DOI 或 arXiv 编号搜索已有条目。已有预印本后来正式发表时，就地更新同一条记录，保留引用键与 `eprint`，这样预印本和期刊版共享一个列表项。

- **预印本**可参考书目里的 `yin2026discoveryshortdurationfastxray`。使用 `@misc`，填写唯一引用键、`title`、`author`、`year`、`month`、`eprint` 和 `url`。例如 `eprint = {2611.18210}`、`url = {https://arxiv.org/abs/2611.18210}`。以原文顺序填写全部作者，用 `and` 分隔。共同一作等说明可填入 `note`。
- **正式发表**后改为 `@article`，按期刊记录更新标题、年份、月份、`journal`、`volume`、`pages`（也可填文章号）和 `doi`。例如 `doi = {10.3847/1538-4357/ae41b1}`。标题会优先链接 DOI，已有的 arXiv 链接仍可单独打开。
- **首页精选**由 `selected = {true}` 控制。给希望在首页展示的条目加上它，普通条目省略该字段。保留书目开头原有的两行 `---`，各字段之间用逗号分隔。保存后在 [论文页](https://laujust.github.io/publications/) 搜索新论文标题，再检查首页精选。

**Research 图文**单独编辑。上传图片后，在 Research 页复制一个完整的 `<section class="research-topic">` 区块。填写新标题与研究结果，把 `aria-labelledby` 和对应 `<h2 id>` 改成相同、唯一的标识。首篇展示的位置在引言之后。

将 `<a href>` 和 `<img src>` 都改为同一张本地图片，沿用区块中的 `relative_url` 写法，并同步真实像素宽高。用 `alt` 描述图中展示的对象或趋势。图注写清图意、作者和原文图号，并链接所用版本的图或文章。使用有公开许可的图片时，把许可链接也放在图注中。排通栏图使用 `research-figure-wide`，正文右侧配图使用 `research-figure-side`。[Research 源文件](_pages/research.html)

## 换背景、项目或简历

- **背景**可以用新的 WebP 替换 `assets/img/sky/survey-field.webp`。若要保留原文件，就给新图取不同的名字，在样式的 `.academic-site::before` 中更新 `url("../img/sky/文件名.webp")`。检查页脚中的图片来源与新图一致。桌面使用 `cover`，窄屏单独设置了背景高度。请分别预览宽屏和手机竖屏，确认想展示的区域能看清。
- **项目**可复制 [KN Classifier 的项目文件](_projects/kn-classifier.md)。填写 `title`、`github`、`description` 和数值型 `importance`。数字越小越靠前，`paper` 可选。首页和 Projects 页会读取同一条记录。
- **简历**按期望展示的顺序排列 JSON 数组。已获学位用 `endDate`，预计毕业用 `expectedEndDate`。修改后可以运行 `python3 -m json.tool assets/json/resume.json > /dev/null` 检查语法。

## 本地预览与发布

首次使用可运行 `git clone https://github.com/LAujust/laujust.github.io.git`，再用 `cd laujust.github.io` 进入仓库。已有本地副本时先在 `main` 执行 `git pull --ff-only`。

准备 Ruby 3.3、Bundler、Node.js、支持 WebP 的 ImageMagick 和 Python。在仓库根目录执行以下命令，可使用自己的 Python 虚拟环境。

```sh
bundle install
python3 -m pip install -r requirements.txt
bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

打开 [本地预览](http://127.0.0.1:4000/)。改动 `_config.yml` 后按 `Ctrl+C`，重新运行预览命令。以下示例展示一次只改书目的发布。若同时更新研究图文，把对应 HTML 和图片路径也加入同一提交。

```sh
JEKYLL_ENV=production bundle exec jekyll build
git status --short
git add -- _bibliography/papers.bib
git diff --cached --check
git commit -m "Update publications"
git push origin main
```

`_site/` 是本地生成的网页目录。提交源码即可，线上工作流会重新构建。在 [Actions](https://github.com/LAujust/laujust.github.io/actions) 找到本次提交对应的 **Deploy site**，随后查看 **pages build and deployment**。两者成功后打开正式网址，用新增标题搜索论文、点开 DOI 或 arXiv、在手机尺寸下打开菜单并放大研究图。若页面仍显示旧版，先核对 Actions 中的提交号，再刷新页面。

**回退一次已发布的修改**时，在已同步的 `main` 运行 `git log --oneline -5` 找到需撤销的普通提交，执行 `git revert 提交号` 和 `git push origin main`。这会生成一个保留历史的回退提交，并再次触发发布。通过 Pull Request 合并的修改也可从已合并的请求页点 **Revert**，再合并生成的回退请求。
