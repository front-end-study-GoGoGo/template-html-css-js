# 笔记

## 异步编程
* fs 文件操作
    ```js
    require('fs').readFile('./index.html', (err,data)=>{})
    ```
* 数据库操作
* AJAX 
  ```js
    $.get('/server', (data)=>{})
  ```
* 定时器 
  ```js
  setTimeout(()=>{}, 2000);
  ```

## Promise 的状态
实例对象中的一个属性 『PromiseState』
* pending  未决定的
* resolved / fullfilled  成功
* rejected  失败

## Promise 对象的值
实例对象中的另一个属性 『PromiseResult』
保存着异步任务『成功/失败』的结果
* resolve
* reject 