(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{603:function(e,s,a){"use strict";a.r(s);var t=a(9),n=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"background"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[e._v("#")]),e._v(" Background")]),e._v(" "),a("p",[e._v("Used to using "),a("code",[e._v("netplan")]),e._v(" and "),a("code",[e._v("networkmanager")]),e._v("(as netplan's interface) to manager network on Linux headless servers. The "),a("code",[e._v("netplan")]),e._v(" is easy to configure by just using a signle configuration file. And "),a("code",[e._v("networkmanager")]),e._v(" is more powerful than other tools on both CLI and GUI interfaces (such as Wake-On-Lan).")]),e._v(" "),a("p",[e._v('But recently I find that the "WOL" feature is realy depends on the motherboard soppurting (some of the motherboard is enabled in Linux by default. Thus no need to do configure on '),a("code",[e._v("networkmanagers")]),e._v(")")]),e._v(" "),a("p",[e._v("So far, I need a quicker and more simple way even than "),a("code",[e._v("netplan")]),e._v(" to configure nerwork on Linux headless server.")]),e._v(" "),a("h2",{attrs:{id:"the-systemd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-systemd"}},[e._v("#")]),e._v(" The "),a("code",[e._v("systemd")]),e._v(" !")]),e._v(" "),a("p",[e._v("The systemd is very common on modern Linux distributions to manage differents kind of deamons (or servives)")]),e._v(" "),a("h2",{attrs:{id:"practice-on-kali"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#practice-on-kali"}},[e._v("#")]),e._v(" Practice on Kali")]),e._v(" "),a("ol",[a("li",[e._v("Make Linux headless if you want:"),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl disable --now lightdm\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])]),e._v(" "),a("li",[e._v("Stop running network daemons (e.g. NetworkManager)"),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl disable --now NetworkManager\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])]),e._v(" "),a("li",[e._v("Configure the "),a("code",[e._v("networkd")]),e._v(" of "),a("code",[e._v("systemd")]),e._v(" "),a("ul",[a("li",[e._v("if using DHCP, then modify file "),a("code",[e._v("/etc/systemd/network/dhcp.network")])])]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Match"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("Name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("en* "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# here is the network interface you want to control, use "ip a" in shell to list')]),e._v("\n\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Network"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("DHCP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("yes\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("ul",[a("li",[e._v("if using static IP, then modify file "),a("code",[e._v("/etc/systemd/network/static.network")])])]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Match"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("Name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("en*\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Network"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("Address")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".0.15/24 "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# change the address to your owns")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("Gateway")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".0.1\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])])]),e._v(" "),a("li",[e._v("Enable the control daemon:"),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("enable")]),e._v(" --now systemd-networkd\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])])]),e._v(" "),a("h2",{attrs:{id:"using-avahi-daemon-for-dhcp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-avahi-daemon-for-dhcp"}},[e._v("#")]),e._v(" using Avahi-Daemon for DHCP")]),e._v(" "),a("p",[e._v("If you are using a danamic IP which controled by DHCP, it's better to use a Multi-cast DNS to find your server in case the IP changes.")]),e._v(" "),a("p",[e._v("A good practice is using "),a("code",[e._v("avahi-daemon")])]),e._v(" "),a("ol",[a("li",[a("p",[e._v('install the packages ("avahi" and '),a("code",[e._v("nss-mdns")]),e._v(' in ArchLinux)("avahi-daemon" in Debian Based Distro)')])]),e._v(" "),a("li",[a("p",[e._v("The "),a("code",[e._v("avahi")]),e._v(' start and enabled after installed. And the local doamin should be in "'),a("code",[e._v("<your-host-name>.local")]),e._v('"')])]),e._v(" "),a("li",[a("p",[e._v("If not work, edit the "),a("code",[e._v("/etc/nsswitch.conf")])]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("hosts: mymachines mdns_minimal "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("NOTFOUND"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("return"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" resolve "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("UNAVAIL"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("return"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" files myhostname dns\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("the "),a("code",[e._v("mdns_minimal")]),e._v(" "),a("code",[e._v("[NOTFOUND=return]")]),e._v(" should before "),a("code",[e._v("resolve")]),e._v(" and "),a("code",[e._v("dns")]),e._v(". Using "),a("code",[e._v("mdns4_minimal")]),e._v(" instead of "),a("code",[e._v("mdns_minimal")]),e._v(" could speed up resolve in some cases.")])]),e._v(" "),a("li",[a("p",[e._v('Then, try to ssh into your server using "'),a("code",[e._v("<your-host-name>.local")]),e._v('" to replace the ip address and enjoying!')])])]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://www.debian.org/doc/manuals/debian-reference/ch05.en.html#_the_modern_network_configuration_without_gui",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.debian.org/doc/manuals/debian-reference/ch05.en.html#_the_modern_network_configuration_without_gui"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://wiki.archlinux.org/title/systemd-networkd#Required_services_and_setup",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.archlinux.org/title/systemd-networkd#Required_services_and_setup"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);