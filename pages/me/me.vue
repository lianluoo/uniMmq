<template>
	<view>
		<div v-if="!userData">
			<a href="#" @click="redirectLogin()">登录</a>
		</div>
		<div v-else>
			欢迎, {{userData.userName}},  <a href="#" @click="logout()">退出</a>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userData: null
			}
		},
		created() {
			try {
				this.userData = uni.getStorageSync('userData');
				console.log(this.userData)
			} catch (e){
				console.log(e);
			}
		},
		methods: {
			redirectLogin(){
				uni.redirectTo({
					url: '../login/login'
				})
			},
			logout(){
				try {
					uni.removeStorageSync('userData');
				} catch (e) {
					console.log(e);
				}
				uni.showToast({
					icon: 'success',
					position: 'bottom',
					title: '退出成功'
				})
				this.userData = "";
			}
			
		}
	}
</script>

<style>

</style>
