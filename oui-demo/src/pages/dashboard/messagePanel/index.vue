<template>
    <div class="wrapper">
        <p class="subtitle">
            将一个冗长或用户不熟悉的消息通过垂直排列的时间流进行梳理信息。
        </p>
        <div style="display: flex;justify-content: center">
            <o-timeline mode="left" class="panel">
                <o-timeline-item>
                    <o-icon slot="dot" type="clock-circle-o" style="font-size: 14px;color: #990F0F" />
                    <o-card class="card" :bordered="false">创建成功</o-card>
                    <div class="time">2021-09-01</div>
                </o-timeline-item>
                <o-timeline-item color="#E5B217">
                    <o-card class="card" :bordered="false">支持自定义颜色</o-card>
                    <div class="time">2021-09-01</div>
                </o-timeline-item>
                <o-timeline-item color="#258006">
                    <o-card class="card" :bordered="false">此条表示成功</o-card>
                </o-timeline-item>
                <o-timeline-item color="#F27F0C">
                    <o-card class="card" :bordered="false">
                        <p>此条表示警告</p>
                        <p>技术测试 1</p>
                        <p>技术测试 2</p>
                    </o-card>
                    <div class="time">2021-09-01</div>
                </o-timeline-item>
                <o-timeline-item color="#828899">
                    <o-card class="card" :bordered="false">此条表示提示</o-card>
                </o-timeline-item>
                <o-timeline-item color="#990F0F">
                    <o-card class="card" :bordered="false">
                        <p>默认样式节点</p>
                        <p>技术测试 1</p>
                        <p>一个长期迭代多人合作的系统或多个系统中，为解决因不同系统需求，用户……一个长期迭代多人合作的系统或多个系统中，为解决因不同系统需求，用户……一个长期迭代多人合作的系统或多个系统中，为解决因不同系统需求，用户……一个长期迭代多人合作的系统或多个系统中，为解决因不同系统需求，用户……</p>
                    </o-card>
                    <div class="time">2021-09-01</div>
                </o-timeline-item>
                <o-timeline-item color="#D7D7D7">
                    <o-card class="card" :bordered="false">
                        <span style="color: #DCDCDC">此条已完成</span>
                    </o-card>
                    <div class="time" style="color: #DCDCDC">2021-09-01</div>
                </o-timeline-item>
            </o-timeline>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MessagePanel'
}
</script>

<style lang="less" scoped>
    @import "./index.less";
</style>