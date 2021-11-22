<template>
    <div class="wrapper">
        <p>
            将一个冗长或用户不熟悉的消息通过垂直排列的时间流进行梳理信息。
        </p>
        <o-card style="display: flex;justify-content: center">
            <o-timeline mode="left" :style="style.panel">
                <o-timeline-item color="red">
                    <o-icon slot="dot" type="clock-circle-o" style="font-size: 16px;" />
                    <o-card :style="style.card" :bordered="false">创建成功</o-card>
                    <div :style="style.time">2021-09-01</div>
                </o-timeline-item>
                <o-timeline-item color="#FAAD14">
                    <o-card :style="style.card" :bordered="false">支持自定义颜色</o-card>
                    <div :style="style.time">2021-09-01</div>
                </o-timeline-item>
                <o-timeline-item color="green">
                    <o-card :style="style.card">此条表示成功</o-card>
                </o-timeline-item>
                <o-timeline-item color="red">
                    <o-card :style="style.card" :bordered="false">
                        <p>此条表示警告</p>
                        <p>技术测试 1</p>
                        <p>技术测试 2</p>
                    </o-card>
                    <div :style="style.time">2021-09-01</div>
                </o-timeline-item>
                <o-timeline-item>
                    <o-card :style="style.card" :bordered="false">此条表示提示</o-card>
                </o-timeline-item>
                <o-timeline-item>
                    <o-card :style="style.card" :bordered="false">
                        <p>默认样式节点</p>
                        <p>技术测试 1</p>
                        <p>一个长期迭代多人合作的系统或多个系统中，为解决因不同系统需求，用户……一个长期迭代多人合作的系统或多个系统中，为解决因不同系统需求，用户……一个长期迭代多人合作的系统或多个系统中，为解决因不同系统需求，用户……一个长期迭代多人合作的系统或多个系统中，为解决因不同系统需求，用户……</p>
                    </o-card>
                    <div :style="style.time">2021-09-01</div>
                </o-timeline-item>
                <o-timeline-item color="#DCDCDC">
                    <o-card :style="style.card" :bordered="false">
                        <span style="color: #DCDCDC">此条已完成</span>
                    </o-card>
                    <div :style="style.time">2021-09-01</div>
                </o-timeline-item>
            </o-timeline>
        </o-card>
    </div>
</template>

<script>
const style = {
    panel: {
        paddingLeft: '80px'
    },
    time: {
        position: 'absolute',
        left: '-100px',
        top: 0,
        width: '80px'
    },
    card: {
        width: '700px'
    }
};
export default {
    name: 'MessagePanel',
    data() {
        return {
            style
        }
    }
}
</script>

<style lang="less" scoped>
    p{
        margin: 40px 0;
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: @title-color;
        line-height: 26px;
    }
</style>