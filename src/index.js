import _ from 'lodash';
import './style.css';

// lodashの機能を使用する
// 配列連結させて表示する
const component = () => {
 const element = document.createElement('div');
 const array = ['hello', 'webpack', '!'];
 element.innerHTML = _.join(array, ' ')
 return element;
}

document.body.appendChild(component());
document.body.classList.add('haikei');