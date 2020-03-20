(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{299:function(t,s,a){"use strict";a.r(s);var r=a(29),n=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mtproto-代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mtproto-代理"}},[t._v("#")]),t._v(" MTProto 代理")]),t._v(" "),a("p",[t._v("V2ray内实现了一个让"),a("a",{attrs:{href:"https://telegram.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("telegram"),a("OutboundLink")],1),t._v("使用的代理MTProto。 MTProto是Telegram官方开发的代理协议，只能由Telegram程序使用。")]),t._v(" "),a("h2",{attrs:{id:"现状和建议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#现状和建议"}},[t._v("#")]),t._v(" 现状和建议")]),t._v(" "),a("p",[t._v("到目前为止（2020年3月），因为防火墙的探测封锁，MTProto协议已经迭代了三代；而V2ray内置的支持MTProto只有第一代，直接部署会受到防火墙的精准探测和封锁，因此这里"),a("strong",[t._v("并不推荐使用V2ray提供MTProto服务")]),t._v("，而推荐使用专业的MTProto程序，并配置使用最新的第三代FakeTLS模式：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/9seconds/mtg",target:"_blank",rel:"noopener noreferrer"}},[t._v("9seconds / mtg"),a("OutboundLink")],1),t._v(" (GO语言实现)")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/seriyps/mtproto_proxy",target:"_blank",rel:"noopener noreferrer"}},[t._v("seriyps / mtproto_proxy"),a("OutboundLink")],1),t._v(" (Erlang实现)")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/alexbers/mtprotoproxy",target:"_blank",rel:"noopener noreferrer"}},[t._v("alexbers / mtprotoproxy"),a("OutboundLink")],1),t._v(" (Python实现)")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/TelegramMessenger/MTProxy",target:"_blank",rel:"noopener noreferrer"}},[t._v("TelegramMessenger / MTProxy"),a("OutboundLink")],1),t._v(" (Telegram官方)")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("MTProto可通过secret字段区分三代的区别：")]),t._v(" "),a("ul",[a("li",[t._v("第一代secret为32位16进制字符；")]),t._v(" "),a("li",[t._v("第二代secret为"),a("code",[t._v("dd")]),t._v("开头加32位16进制字符，一共34位；")]),t._v(" "),a("li",[t._v("第三代secret为"),a("code",[t._v("ee")]),t._v("开头加不定长的字符，也叫FakeTLS模式；")])])]),t._v(" "),a("h2",{attrs:{id:"v2ray的mtproto墙内转发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v2ray的mtproto墙内转发"}},[t._v("#")]),t._v(" V2Ray的MTProto墙内转发")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("提醒")]),t._v(" "),a("p",[t._v("目前在境内架设转发代理服务或许有法律风险，建议仅个人使用。")])]),t._v(" "),a("p",[t._v("如果一定要使用V2ray提供的MTProto代理，可以通过在家庭网关配合境外服务器转发实现，以下摘录V2ray作者博客：（原文连接："),a("a",{attrs:{href:"https://steemit.com/cn/@v2ray/v2ray-mtproto",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何使用 V2Ray 中新增的 MTProto 代理"),a("OutboundLink")],1),t._v("）")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("V2Ray 从 3.29 开始增加了一组新的"),a("a",{attrs:{href:"https://www.v2fly.org/chapter_02/protocols/mtproto.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("传入传出协议：MTProto Proxy"),a("OutboundLink")],1),t._v("。这个协议是 Telegram 开发的，仅用于 Telegram 流量的代理。")]),t._v(" "),a("p",[t._v("上述的链接中已经附了一个简单的配置方式，这里介绍一个较复杂的用法。")]),t._v(" "),a("p",[t._v("由于 MTProto 是一组对应的传入传出，它实际上没有用到 V2Ray 的优势，比如 TLS + WebSocket。当这个代理有朝一日被检测并屏蔽的时候，简单的搭配可能就用不了了。")]),t._v(" "),a("p",[t._v("如果真到了那么一天，你可能需要在墙内搭一个中传服务器，在这个服务器上接收 MTProto 传入，然后用 VMess 或其它协议把流量中转到墙外，这样被屏蔽的可能性更低。")]),t._v(" "),a("p",[t._v("好了，具体要怎么配置呢？")]),t._v(" "),a("p",[t._v("首先一组传入传出加路由是没有疑问的：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tg-in"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mtproto"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"users"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"secret"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b0cbcef5a486d9636472ac27f8e11a9d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tg-out"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mtproto"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"field"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inboundTag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tg-in"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outboundTag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tg-out"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("然后，如果你有一个另外的 VMess 传出，比如你买了一个商用的 VMess 代理，假设配置如下：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vmess-out"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vmess"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vnext"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v2ray.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"users"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"27848739-7e62-4138-9fd3-098a63964b6b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("然后我们把tg-out和vmess-out桥接起来就可以了，做法很简单，在tg-out上加一个proxySettings：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tg-out"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mtproto"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"proxySettings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vmess-out"')]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把 tg-out 的流量由 vmess-out 转发")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这样就可以让流量走一个类似 tg-in <-> vmess-out <-> vmess-in <-> tg-out 的转发方式。")]),t._v(" "),a("p",[t._v("当然 V2Ray 有其它的自由组合，比如你也可以使用 dokodemo 做透明代理完成上述的中转。但上述做法的好处是，你可以使用第三方的代理（比如买来的），这种情况下没办法修改代理服务器的配置。使用proxySettings可以在不修改下一个代理节点，仅修改当前节点配置的情况下，实现任意协议的中转。")])])}),[],!1,null,null,null);s.default=n.exports}}]);