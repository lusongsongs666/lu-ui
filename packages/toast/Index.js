/**
 * @author : songsong.lu
 * @date : 2020/03/24
 * @description : 重写toast样式
 **/
import Vue from 'vue';
import toastComponent from './Toast'

const ToastComponent = Vue.extend(toastComponent);

let showToast = (text, duration=2000)=>{
    const toastDom = new ToastComponent({
        el: document.createElement('div'),
        data(){
            return {
                text: text,
                show: false
            }
        }
    });
    document.body.appendChild(toastDom.$el);
    setTimeout(()=>{toastDom.show = true});
    setTimeout(()=>{
      toastDom.show = false;
      setTimeout(()=>{
        document.body.removeChild(toastDom.$el)
      },500)
    },duration)
};

let registryToast = (vue) => {
  vue.prototype.$toast = showToast
};

export default registryToast
