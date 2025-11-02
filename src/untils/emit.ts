//导入
import mitt from "mitt";
//创建emitter对象 定义mitt
const emitter = mitt();
//mitt方法实操
//1.绑定事件
// emitter.on("test1", () => {
//   console.log("绑定测试1");
// });
// emitter.on("test2", () => {
//   console.log("绑定测试2");
// });
// //2.触发事件
// setInterval(() => {
//   emitter.emit("test1");
//   emitter.emit("test2");
// }, 1000);

// //3.解绑事件
// setTimeout(() => {
//   //只解绑一个
//   // emitter.off("test1");
//   //解绑全部
//   emitter.all.clear();
// }, 2000);
//暴露出去
export default emitter;
