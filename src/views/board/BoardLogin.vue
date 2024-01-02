<template>
    <v-container>
        <v-card elevation="3" width="20%" class="mx-auto my-16">
            <v-card-title>
                <p>Login</p>
            </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col class="my-0">
                        <v-text-field label="아이디" variant="underlined" v-model="userId"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="my-0">
                        <v-text-field label="비밀번호" variant="underlined" v-model="userPw"></v-text-field>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions>
                <div class="mx-auto">
                <v-btn @click="login" class="ma-2" color="primary" elevation="3">
                    Login
                    <v-icon end icon="mdi-checkbox-marked-circle"></v-icon>
                </v-btn>
                <v-btn @click="this.$router.go(-1)" class="ma-2" color="grey" elevation="3">
                    List
                    <v-icon end icon="mdi-cancel"></v-icon>
                </v-btn>
                </div>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            userId: '',
            userPw: ''
        }
    },
    methods: {
        async login() {
            console.log(this.userId);
            console.log(this.userPw);
            try {
            let formData = new FormData();
            formData.append("userId", this.userId);
            formData.append("userPw", this.userPw);
            await this.$axios
                .post('/api/v1/users/login', formData)
                .then(() => {
                    this.$route.push('/board')
                })
            } catch (error) {
                console.log("로그인 중 오류: ", error);
            }
        }
    },
}
</script>