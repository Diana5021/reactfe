import styled from 'styled-components'
import border from 'cpts/styled/border'

export const HomeCon = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  >main {
    flex: 1;
    overflow: hidden
  }
`

const tarbarCon = styled.div`
  height: .5rem;
  display: flex;
  background: #fff;
  a {
    flex: 1;
    padding: .02rem;
    position: relative;
    span {
      position: absolute;
      left: 55%;
      font-size: 16px;
      color: white;
      padding: 0 .03rem;
      background-color: #f23030;
      border-radius: 2.13333vw;
      font-size: 1.86667vw;
    }
  }
  .homepage{
    background: url(https://m.360buyimg.com/mobilecms/jfs/t18526/211/696109898/3876/a61be82c/5aa10cd2N1318ac50.png) center center /  60px 46px no-repeat 
  }
  .homepage.selected {
    background: url(https://m.360buyimg.com/mobilecms/jfs/t15145/137/2502885754/3106/de5e0b14/5aa10cd2N46f18ce6.png) center center /  60px 46px no-repeat
  }
  .categ {
    background: url(https://m.360buyimg.com/mobilecms/jfs/t19183/49/696491919/3763/dec8cceb/5aa10cdbNa9cd0320.png) center center /  60px 46px no-repeat       
  }
  .categ.selected {
    background: url(https://m.360buyimg.com/mobilecms/jfs/t17578/307/690695366/3731/8695ed50/5aa10cdbNf3977e9f.png) center center /  60px 46px no-repeat
  }
  .cart {
    background: url(https://m.360buyimg.com/mobilecms/jfs/t18583/69/717127328/4407/5e47882b/5aa10ceaN649eec12.png) center center /  60px 46px no-repeat
  }
  .cart.selected {
    background: url(https://m.360buyimg.com/mobilecms/jfs/t14983/54/2414761122/4202/791a2cfe/5aa10ceaN8b20f49b.png) center center /  60px 46px no-repeat
  }
  .profile {
    background: url(https://m.360buyimg.com/mobilecms/jfs/t16849/271/702371255/4462/d55edd83/5aa10cf6Nee5122a5.png) center center /  60px 46px no-repeat
  }
  .profile.selected {
    background: url(https://m.360buyimg.com/mobilecms/jfs/t18598/41/712219415/3756/7828621f/5aa10cf6Nbfbdc1af.png) center center /  60px 46px no-repeat
  }
  .unlogin {
    background: url(https://m.360buyimg.com/mobilecms/jfs/t17782/11/2358895717/4684/ad19de7f/5af43af1N04ef5a16.png) center center /  60px 46px no-repeat
 }
`

export const TabCon = border({
  component: tarbarCon,
  width: '1px 0 0 0'
})