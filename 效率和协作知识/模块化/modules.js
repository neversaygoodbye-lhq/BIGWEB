/***
 * 模块化要解决什么问题
 * 1.全局变量冲突
 * 2.依赖管理混乱
 * 3.功能细分，方便管理维护
 * 
 * commonJS和ES6 module的区别
 * commonjs是node终端的一种标准，浏览器并不支持
 * ES6 module是浏览器模块化的一种标准
 * 那么commonjs和es6 module没出来之前，是怎么处理的
 * 利用立即执行函数+闭包的原理
 * 立即执行函数可以创建作用域，闭包则可以形成私有变量和函数
 */

//1.commonjs
//导出
module.exports={

}
//导入
const obj= require('./index.js');

//2.ES6 module
//导出
export function(){}
export const a=1;
//导入
import {a} from '.index.js'//基本导入
import fun from 'index.js'//默认导入
import 'index.js'//只执行不导入





