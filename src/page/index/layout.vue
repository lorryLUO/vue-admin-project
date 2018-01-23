<template>
      <div class="manage_page fillcontain">
		<el-row style="height: 100%; overflow:hidden;">
	  		<div class="el-sider">
                <el-button  size="mini"  @click="rightClick($event)" >
                    <i :class="classIcon" ></i>
                </el-button>
                <el-menu  
                    :default-active="defaultActive" 
                    class="el-menu-vertical-demo" 
                    @open="handleOpen" 
                    @close="handleClose" 
                    active-text-color = "#009cff"
                    :router = "true"
                    :collapse="isCollapse">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span slot="title">导航一</span>
                        </template>
                        <!-- <el-menu-item-group title="分组1">
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group> -->
                        <el-submenu index="1-3">
                            <span slot="title">选项3</span>
                            <el-menu-item index="/">去登录</el-menu-item>
                        </el-submenu>
                        <el-submenu index="1-4">
                            <span slot="title">选项4</span>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
               </el-menu>
            </div>
                
			<div style="flex:1;float:left">
				<keep-alive>
				    <router-view></router-view>
				</keep-alive>
			</div>
		</el-row>
  	</div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
      classIcon:'el-icon-d-arrow-right'
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    // 汉堡包按钮点击事件（小屏）
    rightClick($event) {
        this.isCollapse = !this.isCollapse
        if(this.classIcon == 'el-icon-d-arrow-right'){
            this.classIcon =  'el-icon-d-arrow-left'
        }else if(this.classIcon ==  'el-icon-d-arrow-left'){
            this.classIcon =  'el-icon-d-arrow-right'
        }
    }
  },
  computed: {
    defaultActive: function() {
      return this.$route.path.replace("/", "");
    }
  }
};
</script>


<style lang="less" scoped>
    @import "../../style/mixin";
    .el-sider{
        float:left;
        height: 100%;
        overflow: hidden;
        position: relative; 
        background:@deepBlue;
        .el-button{
            position: absolute;
            right: 11px; 
            top: 10px; 
            background-color: #1f2d3d;
            border-color:#1f2d3d; 
            color: #ccc;
            z-index: 1;
        }
        .el-menu-vertical-demo{
            background:@deepBlue;
            padding-top: 44px;
            height: 100%;
            .el-submenu{
                .el-submenu__title{
                    span{
                        .sc(16px, #ccc);
                    }
                }
                .el-menu{
                    .el-submenu{
                        .el-menu{
                            .el-menu-item{
                                color: #999;
                            }
                        }
                    }
                }
            }
        }
    }
    
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        background:@deepBlue;
    }
</style>
