(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{596:function(s,a,e){"use strict";e.r(a);var t=e(9),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"记一次在linux服务器上搭建halo博客系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#记一次在linux服务器上搭建halo博客系统"}},[s._v("#")]),s._v(" 记一次在Linux服务器上搭建Halo博客系统")]),s._v(" "),e("hr"),s._v(" "),e("p",[s._v("2020/10/6")]),s._v(" "),e("p",[s._v("​\t之前在华为云上搭建的博客系统总感觉慢慢的，有点不对劲。突然想起来华为云的这个服务器不是x86_64平台的，而是基于鲲鹏ARM64的！用"),e("code",[s._v("uname -a")]),s._v("查看后确认了（呜呜呜呜）我居然还专门改镜像来更新，现在是不是我的服务器的软件包都是x86平台的了，hhhhh")]),s._v(" "),e("p",[s._v("​\t反正备案出来还有段时间，我重新搭建一次服务器和博客系统算了。更正下mirrors顺便记录下搭建的过程。（不过这样之前文章的日期又要重置了）（为啥不用halo的备份功能？因为，莫得灵魂！！！）")]),s._v(" "),e("h3",{attrs:{id:"重置系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重置系统"}},[s._v("#")]),s._v(" 重置系统")]),s._v(" "),e("p",[s._v("直接去服务器的控制台，重装系统，这次我选择的是Ubuntu18！（之前的CentOS7和8我试了好久，依赖关系都有些问题，而且自己不清楚怎么解决，就换成Ubuntu了。也许镜像一直在同步？）")]),s._v(" "),e("p",[s._v("（记得设置个密码，不然一会儿ssh连接的时候会很难受）")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@xxx.xxx.xxx.xxx\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("试试看能不能顺利连接的上吧！")]),s._v(" "),e("h3",{attrs:{id:"配置免密登录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置免密登录"}},[s._v("#")]),s._v(" 配置免密登录")]),s._v(" "),e("p",[s._v("为了方便，还是要配置一下ssh的免密登录的！（如果已经本地已经又公钥的话）（如果没有就"),e("code",[s._v("ssh-keygen")]),s._v(")")]),s._v(" "),e("p",[s._v("首先，进入本地主机的ssh目录")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" .ssh\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("然后用"),e("code",[s._v("scp")]),s._v("命令将公钥拷贝到服务器的ssh目录下")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" id_rsa.pub root@xxx.xxx.xxx.xxx:/root/.ssh      \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("然后登陆服务器：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@xxx.xxx.xxx.xxx\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("同样，进入服务器的ssh目录：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" .ssh\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("使用"),e("code",[s._v("cat")]),s._v("命令将公钥导入到"),e("code",[s._v("authorized_keys")]),s._v("文件中：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" id_rsa.pub "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" authorized_keys\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("然后"),e("code",[s._v("exit")]),s._v("，重新登陆服务器，是不是不需要输入密码了呢？哦耶！！！")]),s._v(" "),e("h3",{attrs:{id:"搭建环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#搭建环境"}},[s._v("#")]),s._v(" 搭建环境")]),s._v(" "),e("p",[s._v("博客框架使用的是Halo。")]),s._v(" "),e("p",[s._v("配置好mirrors以后，更新下系统")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" upgrade\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("安装JDK")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" java-1.8.0-openjdk\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("查看Java的安装状态")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("java -version\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("创建新用户halo")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" -m halo\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("更改halo用户的密码")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" halo\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("给halo提权：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("visudo\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("在以下字段下边")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Allow members of group sudo to execute any command")]),s._v("\n%sudo   "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ALL")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ALL:ALL"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ALL\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("加入")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("halo    "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ALL")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ALL"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("       ALL\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("保存，退出。")]),s._v(" "),e("p",[s._v("以halo用户身份登录,并进入用户目录")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" halo \n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("下载配置文件：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -o ~/.halo/application.yaml --create-dirs https://dl.halo.run/config/application-template.yaml\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("再通过镜像下载halo框架的jar包（服务器上配置代理麻烦点，就通过镜像吧）我安装时的最新版本为1.4.1：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://halo.cary.tech/release/halo-1.4.1.jar -O halo-latest.jar\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("测试下，能否跑起来：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("java -jar halo-latest.jar\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("输出日志会提示是否成功，在浏览器，把127.0.0.1换成服务器IP就可以查看前端和后台了。")]),s._v(" "),e("p",[s._v("然后回到root身份：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("开始配置自启动，先下载systemd要使用的.service模板：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -o /etc/systemd/system/halo.service --create-dirs https://dl.halo.run/config/halo.service\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("编辑模板，更改jar包的位置：")]),s._v(" "),e("p",[e("code",[s._v("YOUR_JAR_PATH")]),s._v("改成自己刚刚运行的jar包的位置。")]),s._v(" "),e("p",[s._v("依次执行：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl daemon-reload\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" halo\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start halo\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl status halo\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("再次访问页面并刷新，看看能不能正常访问吧。")]),s._v(" "),e("h3",{attrs:{id:"域名访问-ssl证书配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#域名访问-ssl证书配置"}},[s._v("#")]),s._v(" 域名访问/SSL证书配置")]),s._v(" "),e("p",[s._v("请参考https://halo.run/archives/install-reverse-proxy.html")]),s._v(" "),e("p",[s._v("在后台配置好主题，就可以愉快、优雅的写博客啦！！！")])])}),[],!1,null,null,null);a.default=n.exports}}]);