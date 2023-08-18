<template>
    <div class="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#f5f5f5cc] text-black">
        <div class="shrink-0 flex items-center font-medium">
            <img src="../assets/images/logo1.png" class=" w-[80px]"> <span>楽しいバトミントン俱楽部</span>
        </div>
        <ul class="hidden sm:flex">
            <NuxtLink to="/"><li>Home</li></NuxtLink>
            <NuxtLink to="./about"><li>About</li></NuxtLink>
            <NuxtLink to="./skills"><li>Skills</li></NuxtLink>
            <NuxtLink to="./work"><li>Work</li></NuxtLink>
            <NuxtLink to="./contact"><li>Contact</li></NuxtLink>
        </ul>

        <div class="sm:hidden z-10" @click="handleClick">
            <Icon v-if="!nav" name="uim:align-justify" class="h-9 w-9" />
            <Icon v-else name="uiw:close" class="h-9 w-9" />
            <!-- <img src="~/assets/image/menu.svg"> -->
        </div>
        <ul class=" absolute top-0 left-0 w-full h-screen bg-[#f5f5f5cc] flex flex-col justify-center items-center"
            :class="nav ? 'flex' : 'hidden'">
            <NuxtLink to="/"><li class="py-6 text-4xl">Home</li></NuxtLink>
            <NuxtLink to="./about"><li class="py-6 text-4xl">About</li></NuxtLink>
            <NuxtLink to="./about"><li class="py-6 text-4xl">Skills</li></NuxtLink>
            <NuxtLink to="./about"><li class="py-6 text-4xl">Work</li></NuxtLink>
            <NuxtLink to="./about"><li class="py-6 text-4xl">Contact</li></NuxtLink>
        </ul>
        <div class="max-sm:hidden flex fixed flex-col top-[35%] left-0 ">
            <ul class="bg-blue-600 text-gray-300">
                <li class="ml-[-80px] hover:ml-[-10px] duration-300">
                    <a class="w-[100px] h-[60px] flex justify-between items-center ">
                        <span>Wechat</span>
                        <Icon name="uiw:weixin" class="h-7 w-7" />
                    </a>
                </li>
                <!-- <li class="w-[160px]">
                    <a>
                        Facebook
                        <Icon name="uiw:facebook" class="h-8 w-8" />
                    </a>
                </li>
                <li class="w-[160px]">
                    <a>
                        Twitter
                        <Icon name="uiw:twitter" class="h-8 w-8" />
                    </a>
                </li> -->
            </ul>
        </div>
    </div>
</template>

<script setup>
const nav = ref(false)
const handleClick = () => {
    nav.value = !nav.value
}
</script>

<style lang="scss" scoped></style>