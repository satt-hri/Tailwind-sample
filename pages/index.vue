<template>
    <div class=" w-full h-screen pt-20 bg-[#0a192f] text-gray-300">
        <div class="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-3/5">
            <p class="text-pink-600">Hi, my name is</p>
            <h1 class="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">DaoCao</h1>
            <h2 class="text-4xl sm:text-7xl font-bold text-[#8892b0]">I'm a Full Stack Developer.</h2>
            <p class="text-[#8892b0] py-4 max-w-[700px]">
                I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.    </p>
            <div class="">
                <button class="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600"
                    @click="toAbout">查看详细
                    <Icon name="uiw:arrow-right" class="ml-3 group-hover:rotate-90 duration-300" />
                </button>
            </div>
        </div>


    </div>
</template>

<script setup>
const router = useRouter();
const toAbout = () => {
    router.push({ path: "/about" });
}

</script>

<style lang="scss" scoped></style>