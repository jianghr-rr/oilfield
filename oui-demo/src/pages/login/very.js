export default {
	data(){
		return{
			timer: null,
			tips: '获取验证码',
			time: 5,
			currentTime: 0,
			// 验证码防抖
			isDisabled: false
		}
	},
    watch: {
        currentTime(val) {
            if(val === 0){
                this.tips = '获取验证码';
            }else{
                this.tips = `(${val}s)后重新获取`;
            }
        }
    },
	methods:{
		// 获取验证码
		async getVeryCd(tel){
			if(!tel){
                this.$omnotification['error']({
                    message: '请输入手机号'
                });
				return;
			}
			if(this.isDisabled){
				return;
			}
            this.commonInterval();
		},
		// 定时器
		commonInterval(){
			this.isDisabled = true;
			this.currentTime = this.time;
            this.currentTime--;
			this.timer = setInterval(()=>{
                if (this.currentTime === 0){
                    this.clearCommonInterval();
                }
                else {
                    this.currentTime--;
                }
			}, 1000)
		},
		clearCommonInterval(){
			this.isDisabled = false;
            clearInterval(this.timer);
            this.timer = null;
		}
	}
};