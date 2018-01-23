<template>
	<div>
        5555555555
		<el-button type="success" @click="btnClick()">成功按钮</el-button>
    </div>
</template>

<script>
	import { mapActions, mapState } from 'vuex'
	import api from '@/api/getData'
   
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			btnClick : () =>{
				let request = new Request('http://192.168.1.129:8081/noLogin/addRole', {

					method: 'POST', 
					mode: 'no-cors', 
					redirect: 'follow',
					headers:{
						'content-type':'application/json'
					}
				});
				fetch(request)
					.then(function(response) {
						if (response.status >= 400) {
							throw new Error("Bad response from server");
						}
						return response.json();
					})
					.then(function(stories) {
						console.log(stories);
					});

				/*  async btnClick(){
				    const res = await api.auth('post')
			    } */
			}
		}
	}
</script>

<style lang="less" scoped>
	
</style>