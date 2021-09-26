// import printMe from './print.js';
// import './styles.css';
// import { cube } from './math.js';
// function component() {
// var element = document.createElement('div');
// var btn = document.createElement('button');
// var element = document.createElement('pre');
//  element.innerHTML = [
//      'Hello webpack!',
//      '5 cubed is equal to ' + cube(5)
//    ].join('\n\n');
// element.innerHTML = _.join(['Hello', 'webpack'], ' ');

// btn.innerHTML = 'Click me and check the console!';
// btn.onclick = printMe;  // onclick 事件绑定原始的 printMe 函数上

// element.appendChild(btn);

//   return element;
// }
//  let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
//  document.body.appendChild(element);

// if (module.hot) {
//   module.hot.accept('./print.js', function() {
//     console.log('Accepting the updated printMe module!');
//     document.body.removeChild(element);
//     element = component(); // 重新渲染页面后，component 更新 click 事件处理
//     document.body.appendChild(element);
//   })
// }
// async function getComponent() {
//     var element = document.createElement('div');
//     const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');

//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//     return element;

// }
// document.body.appendChild(component());
// getComponent().then(component => {
//   document.body.appendChild(component);
// })
// getComponent().then(component => {
//   document.body.appendChild(component);
// });

//  import _ from 'lodash';

//  function component() {
//    var element = document.createElement('div');
//    var button = document.createElement('button');
//    var br = document.createElement('br');
//    button.innerHTML = 'Click me and look at the console!';
//    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//    element.appendChild(br);
//    element.appendChild(button);

// Note that because a network request is involved, some indication
// of loading would need to be shown in a production-level site/app.
//    button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
//      var print = module.default;

//      print();
//    });
//    return element;
//  }
//  document.body.appendChild(component());
import _ from 'lodash';

  function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
  }

 document.body.appendChild(component());
 
 fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(json => {
     console.log('We retrieved some data! AND we\'re confident it will work on a variety of browser distributions.')
     console.log(json)
   })
   .catch(error => console.error('Something went wrong when fetching this data: ', error))