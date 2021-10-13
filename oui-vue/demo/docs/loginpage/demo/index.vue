<script>
import LoginPage from '../../../components/LoginPage/index.vue';
export default {
    category: 'Components',
    cols: 1,
    type: 'Other',
    title: 'Login Page',
    subtitle: '登录页',
    components: {
        LoginPage
    },
    render() {
        return (
            <div>
                <LoginPage />
            </div>
        );
    }
};
</script>
<style></style>
