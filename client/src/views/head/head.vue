<template>
    <div class="head-wrap">
        <h2>my-blog</h2>
        <Menu
            class="wrap-menus"
            mode="horizontal"
            active-name="1">
            <MenuItem name="1">
                <Icon type="ios-paper" />
                内容管理
            </MenuItem>
            <MenuItem name="2">
                <Icon type="ios-people" />
                用户管理
            </MenuItem>
        </Menu>    
    </div>
</template>

<script>
export default {
    data () {
        return {
            
        }
    }
}
</script>

<style scoped lang="less">
.head-wrap {
    width: 100%;
    padding: 10px 20px;
    background: #eeeeee;
    h2 {
        border-radius: 10px;
        width: 100px;
        color: white;
        text-align: center;
        background-color: #ec6149;
    }
    p {
        padding-top: 20px;
        text-align: center;
    }
    .wrap-menus {
        
    }
}
</style>
