<template>
    <div class="login-wrap">
        <h2>登录</h2>
        <ul class="wrap-list">
            <li>
                <label>用户名<span class="symbol">*</span>：</label>
                <input type="text" />
            </li>
            <li>
                <label>密码<span class="symbol">*</span>：</label>
                <input type="password" />
            </li>
        </ul>
        <button>登录</button>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.login-wrap {
    width: 60%;
    min-width: 540px;
    margin: 0 auto;
    border: 1px solid #eeeeee;
    border-radius: 10px;
    background: #eeeeee;
    padding: 50px 0;
    text-align: center; 
    h2 {
        padding: 10px;
    }
    .wrap-list {
        li {
            padding: 10px 20px;
            label {
                display: inline-block;
                width: 80px;
                .symbol {
                    color: red;
                }
            }
            input {
                width: 250px;
                height: 30px;
                padding: 0 10px;
            }
        }
    }
    button {
        width: 80px;
        height: 40px;
        font-size: 20px;
        background: #ec6149;
        color: white;
        cursor: pointer;
        margin-top: 20px;
    }
}

</style>
