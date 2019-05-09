import styled from 'styled-components'
import border from 'cpts/styled/border'
// https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557059155031&di=7cd737dabfe8c26e910d61a22842edda&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Fback_pic%2F04%2F23%2F51%2F72583458639e872.jpg%2521%2Ffwfh%2F804x1598%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue
// https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557653907&di=3b4c447012220006d6c8dd82c70683ba&imgtype=jpg&er=1&src=http%3A%2F%2Fku.90sjimg.com%2Fback_pic%2F05%2F42%2F96%2F585a6c92fd9671a.jpg%21%2Ffwfh%2F804x1429%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue
// https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557065028844&di=17140956ba182ceeb9b5bb49f162aa55&imgtype=0&src=http%3A%2F%2Fimg.sccnn.com%2Fbimg%2F339%2F10617.jpg
// https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=900666101,1646442076&fm=26&gp=0.jpg

export const LoginCon = styled.div`
  height: 100%;
  background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557058982885&di=6e900018b0e55d57e0fc0cdf1ba2569c&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F450be172e725c8dab69fc0750812ee806eb60270e15f-qpQDke_fw658) no-repeat;
  background-size: 100% 100%;
  /* opacity: 0.7; */
  position: relative;
`
export const RegCon = styled.div`
  height: 100%;
  background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557653907&di=3b4c447012220006d6c8dd82c70683ba&imgtype=jpg&er=1&src=http%3A%2F%2Fku.90sjimg.com%2Fback_pic%2F05%2F42%2F96%2F585a6c92fd9671a.jpg%21%2Ffwfh%2F804x1429%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue) no-repeat;
  background-size: 100% 100%;
  /* opacity: 0.7; */
  position: relative;
`
export const MainCon = styled.main`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: .9rem .25rem;
  em {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  em>span {
    margin-top: .3rem;
    display: flex;
    width: 100%;
    height: .5rem;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    background-color: #efefef;
    border-radius: .25rem;
    color: #fff;
    background-image: linear-gradient(90deg,#fab3b3,#ffbcb3 73%,#ffcaba);
    &.active {
      background-image: linear-gradient(90deg,#f10000,#ff2000 73%,#ff4f18);
    }
  }
  em>.cancel {
    margin-top: .1rem;
    background: transparent;
    color: #ff2000;
    border: 1px solid #ff2000;
  }
  em>i {
    width: 100%;
    height: .22rem;
    margin-top: .2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    a {
      color: salmon;
    }
  }
  .am-list-item {
    background: transparent !important
  }

`

const InputCons = styled.div`
  width: 100%;
  height: .5rem;
  display: flex;
  padding: .05rem .1rem;
  margin-top: .1rem;
  span {
    width: .4rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  b {
    flex: 1;
    padding: .02rem .1rem;
    input {
      width: 100%;
      height: 100%;
      outline: none;
      border: none;
      background: transparent;
      font-size: 16px;
    }
  }
  i {
    width:.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div {
    width: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  s {
    width: .8rem;
    font-size: 14px;
    padding: 0 .05rem;
    text-align: center;
    color: tomato
  }
`

export const InputCon = border({
  component: InputCons,
  color: '#aaa',
  width: '0 0 1px 0'
})