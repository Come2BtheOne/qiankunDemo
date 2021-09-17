import { useState, useEffect } from 'react'
import { Button, Modal } from 'antd'
import {onStateChangeFn, setStateFn} from '../micro/globalState.js'
import Logo from '../assets/logo192.png'

const Home = () => {
  const [visible, setVisible] = useState(false)

  useEffect(()=>{
    window.__POWERED_BY_QIANKUN__ && onStateChangeFn((value, prev)=>{
      console.log(222,value, prev)
      setVisible(value.ReactMicroDisable)
    })
  },[])

  const onOk = () => {
    window.__POWERED_BY_QIANKUN__ && setStateFn({
      ReactMicroDisable: false
    })
    setVisible(false)
  }

  const onCancel = () => {
    window.__POWERED_BY_QIANKUN__ && setStateFn({
      ReactMicroDisable: false
    })
    setVisible(false)
  }

  return (
    <div>
      <a href=" ">React子应用</a>
      <img src={Logo} alt=""/>
      <Button onClick={()=> setVisible(true)}>弹窗</Button>
      <Modal title="Basic Modal" getContainer={false} visible={visible} onOk={onOk} onCancel={onCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  )
}
export default Home