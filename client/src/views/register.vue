<template>
    <div class="register-wrap">
        <h2>注册账号!</h2>
        <ul class="wrap-list">
            <li>
                <label>用户名<span class="symbol">*</span>：</label>
                <input type="text" />
            </li>
            <li>
                <label>密码<span class="symbol">*</span>：</label>
                <input type="password" />
            </li>
            <li>
                <label>重复密码<span class="symbol">*</span>：</label>
                <input type="password" />
            </li>
            <li>
                <label>性别：</label>
                <input type="password" />
            </li>
            <li>
                <label>头像：</label>
                <Upload
                    style="display: inline-block"
                    action=“”>
                    <Button>点击上传</Button>
                </Upload>
            </li>
            <li>
                <label style="vertical-align: top;">个人简介：</label>
                <textarea placeholder="请输入个人简介" name="" id="" cols="30" rows="10"></textarea>
            </li>
        </ul>
        <div class="wrap-btn">
            <Button size="large">注册</Button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'register',
    data () {
        return {
            
        }
    },
    created () {
        
    },
    methods: {

    }
}
</script>

<style scoped lang="less">
.register-wrap {
    width: 60%;
    min-width: 540px;
    margin: 0 auto;
    border: 1px solid #eeeeee;
    border-radius: 10px;
    background: #eeeeee;
    padding: 50px 0;
    h2 {
        padding: 10px;
        text-align: center;
    }
    .wrap-list {
        li {

            padding: 10px 20px 10px 90px;
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
            textarea {
                width: 250px;
                padding: 10px;
            }
        }
    }
    .wrap-btn {
        //margin-left: calc(50% - 40px);
        text-align: center;
        button {
            color: white;
            font-weight: bold;
            background-color: #ec6149;
        }
    }
}
</style>
