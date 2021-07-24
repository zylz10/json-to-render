import{o as e,c as r,a}from"./app.b15155e8.js";const l='{"title":"介绍","description":"","frontmatter":{},"headers":[{"level":2,"title":"开发动机","slug":"开发动机"},{"level":3,"title":"json 数据的限制","slug":"json-数据的限制"},{"level":3,"title":"组件库限制","slug":"组件库限制"},{"level":3,"title":"基于 vue2 的版本","slug":"基于-vue2-的版本"},{"level":2,"title":"目标及特性","slug":"目标及特性"},{"level":2,"title":"它是如何工作的?","slug":"它是如何工作的"}],"relativePath":"guide/index.md","lastUpdated":1627119363984}',o={},n=a('<h1 id="介绍"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h1><p>json to render 是一个前端界面渲染库，采用 <a href="https://github.com/fyl080801/vjform" target="_blank" rel="noopener noreferrer">vjform</a> 的思想使用 typescript 重构，可以将 json 定义渲染成可交互界面，目前提供基于 vue3 版本支持</p><p>支持任何 html 标签和组件库以及自定义组件</p><h2 id="开发动机"><a class="header-anchor" href="#开发动机" aria-hidden="true">#</a> 开发动机</h2><h3 id="json-数据的限制"><a class="header-anchor" href="#json-数据的限制" aria-hidden="true">#</a> json 数据的限制</h3><p>json 是一种在前端开发中广泛应用的数据格式，但 json 数据具有局限性，描述对象时 json 只能使用几种基本类型数据作为对象属性值，而且 json 数据无法表示属性与数据之间的关联关系以及函数，json 不是 js 对象存储时特殊属性值会丢失</p><h3 id="组件库限制"><a class="header-anchor" href="#组件库限制" aria-hidden="true">#</a> 组件库限制</h3><p>常规的 json 动态渲染库一般都是基于某个组件库开发或提供一组固定的组件支持，如果想支持新的组件库或新的组件则需要额外开发</p><h3 id="基于-vue2-的版本"><a class="header-anchor" href="#基于-vue2-的版本" aria-hidden="true">#</a> 基于 vue2 的版本</h3><p>之前开发过基于 vue2 的动态渲染组件 <a href="https://github.com/fyl080801/vjform" target="_blank" rel="noopener noreferrer">vjform</a> 以及设计器 <a href="https://fyl080801.github.io/vjdesign/" target="_blank" rel="noopener noreferrer">vjdesign</a>，由于 vue2 和 vue3 存在一些本质的区别，例如数据变化的监听方式，而且 vue3 基于 Proxy 的实现也给动态渲染提供了一个思路，优化以前的实现</p><h2 id="目标及特性"><a class="header-anchor" href="#目标及特性" aria-hidden="true">#</a> 目标及特性</h2><p>json to render 的核心思想主要有两点：</p><ol><li>解析 json 数据特殊定义，用来表示组件属性与数据的关联关系、联动关系以及数据计算处理</li><li>在渲染前根据特殊条件对 json 进行操作，实现自定义的规则</li></ol><p>要实现的目标包括：</p><ul><li>通过 json 动态渲染界面（必要）</li><li>支持通过 json 渲染任何 html 标签、组件库、自定义组件（必要）</li><li>通过特定表达式表示数据与组件属性的关联关系和函数的定义（必要）</li><li>通过二次开发支持更多的表达式解析方式和渲染前对 json 数据的处理方式（必要）</li><li>可视化设计器（计划中）</li><li>react 支持（计划中）</li><li>angular 支持（计划中）</li></ul><h2 id="它是如何工作的"><a class="header-anchor" href="#它是如何工作的" aria-hidden="true">#</a> 它是如何工作的?</h2><p>界面元素被定义成组件，每个组件包含组件的属性和子集，用专门的 Node 节点根据当前节点的 json 数据处理每个组件的渲染，在渲染之前利用 <code>Proxy</code> 将节点数据转换成代理对象，节点属性值如果是特殊的定义格式（比如关联关系、函数）则会在渲染时将定义转换成真实结果，在渲染前也允许对 json 数据进行改变，实现只操作 json 数据就可以改变最终渲染结果</p>',17);o.render=function(a,l,o,i,t,s){return e(),r("div",null,[n])};export default o;export{l as __pageData};
