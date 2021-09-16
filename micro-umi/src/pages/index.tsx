import styles from './index.less';
import { Button, ConfigProvider} from 'antd';

export default () => {
  return (
    // <ConfigProvider prefixCls="UMI">
      <div>
        <h1 className={styles.title}>Page index</h1>
        <Button>按钮</Button>
      </div>
    // </ConfigProvider>
  );
}
