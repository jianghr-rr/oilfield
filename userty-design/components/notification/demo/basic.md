---
order: 0
title: 基本使用
---

```jsx
import {notification, Button, Link} from 'skd';

const MessageTitle = () => {
    return (
        <div>
            账户已欠费，请立即<Link>充值</Link>
        </div>
    );
};

function handleClick(e) {
    notification.open({
        message: '通知提示',
        description: '通知用户的信息',
        duration: 5,
        onClick: () => {
            console.log('点击回调');
        },
        onClose: () => {
            console.log('toast 关闭了');
        }
    });
}

function handleClick2(e) {
    notification.open({
        message: '通知提示',
        // description: '通知用户的信息',
        duration: 5,
        onClick: () => {
            console.log('点击回调');
        },
        onClose: () => {
            console.log('toast 关闭了');
        }
    });
}

function handleClick3(e) {
    notification.open({
        message: <MessageTitle />,
        // description: '通知用户的信息',
        duration: 5,
        onClick: () => {
            console.log('点击回调');
        },
        onClose: () => {
            console.log('toast 关闭了');
        }
    });
}

ReactDOM.render(
    <div>
        <Button
            type="primary"
            onClick={e => handleClick(e)}
        >基本提示</Button>
        <p />
        <Button
            type="primary"
            onClick={e => handleClick2(e)}
        >基本提示无简介</Button>
        <p />
        <Button
            type="primary"
            onClick={e => handleClick3(e)}
        >带操作的提示</Button>
    </div>,
    mountNode,
);
```

```css
.container {
    display: flex;
    margin: 10px;
    flex-wrap: wrap;
}
.container .acud-dropdown-trigger {
    margin-right: 18px;
    margin-bottom: 12px;
}
```
