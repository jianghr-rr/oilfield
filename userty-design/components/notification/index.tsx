/**
 * @file toast组件 显示倒计时
 * @author jianghaoran01
 */

import React, {useState, useEffect} from 'react';
import NotificationApi from './base';
import classNames from 'classnames';
import {globalConfig} from '../config-provider';

const {getPrefixCls} = globalConfig();
const PREFIX = 'notification-hastime';
const MAXTOASTARRLENGTN = 4; // 最多显示多少个toast

/**
 * 代理对象
 * 使用时: target.xxx会全部丢给notification 类似notification.xxx
 */
let target = {};
const toastArr = [];

// 向数组尾部添加一个元素
function addToastKey(key): void {
    toastArr.push(key);
};

// 弹出数组头部元素
function unshiftToast(): string {
    return toastArr.splice(0, 1)[0];
};

// 移除数组元素
function removeToastKey(key): void {
    for (let i = 0; i < toastArr.length; i++) {
        if (key === toastArr[i]) {
            toastArr.splice(i, 1);
            break;
        }
    }
};

function ToastDom(props) {
    const {
        message,
        description,
        countdown,
        notificationKey,
        onClose = null
    } = props;
    const [timerID, setTimerID] = useState(null);
    const [counter, setCounter] = useState(countdown);
    const prefixCls = getPrefixCls('toast-wrap', '');

    useEffect(() => {
        if (counter !== undefined) {
            if (counter > 0) {
                let timer = setTimeout(() => {
                    setCounter(counter - 1);
                }, 1000);
                setTimerID(timer);
            }

            if (counter === 0) {
                NotificationApi.close(notificationKey);
                onClose && onClose();
                removeToastKey(notificationKey);
            }
        }

        return () => {
            if (timerID) {
                setTimerID(null);
            }
        };
    }, [counter]);

    return (
        <div className={prefixCls}>
            <div
                className={classNames(`${prefixCls}-left`, {[prefixCls + '-no-description']: !description})}
            >{message}</div>
            {
                counter === undefined
                    ? null
                    : <div className={prefixCls + '-right'}>({counter}<span>S</span>)</div>
            }
        </div>
    );
};

function DescriptionDom(props) {
    const {
        description
    } = props;

    return (
        description
            ? (
                <div className="description-wrap">
                    {description}
                </div>
            )
            : null
    );
};

let handler = {
    get: (...args) => {
        const name = args[1];
        let key = (new Date()).getTime() + ''; // 通过key来强制关闭notification

        if (toastArr.length < MAXTOASTARRLENGTN) {
            addToastKey(key);
        } else {
            NotificationApi.close(unshiftToast());
            addToastKey(key);
        }

        return props => {
            // 定义默认图标
            const iconProps = {
                icon: null
            };

            const args = {
                key,
                type: 'info',
                ...iconProps,
                ...props
            };

            // 初始化倒计时
            // let tempDuration;
            // if (!args.duration) {
            //     tempDuration = 0;
            // }
            // else {
            //     tempDuration = args.duration;
            // }
            let tempDuration = args.duration;
            args.duration = 0;

            // 设置样式 有描述和没描述间距不一样
            let tempClassName = props.className + ' ' + PREFIX;
            if (args.description) {
                tempClassName += ' ' + getPrefixCls('notification') + '-has-description';
            }
            if (props && props.className) {
                args.className = props.className + ' ' + tempClassName;
            } else {
                args.className = tempClassName;
            }

            // 设置DOM
            args.message = (
                <ToastDom
                    message={args.message}
                    description={args.description}
                    countdown={tempDuration}
                    notificationKey={key}
                    onClose={props.onClose}
                />
            );
            args.description = <DescriptionDom description={args.description} />;

            return Reflect.get(NotificationApi, name)(args);
        };
    }
};

const notification = new Proxy(target, handler);

export default notification;
