<template>
    <div name="work" class="w-full md:h-screen pt-20 text-gray-300 bg-[#0a192f]">
        <div class="max-w-[1000px] mx-auto p-4 flex flex-col justify-center">
            <div class="pb-8">
                <p class="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
                    Work
                </p>
                <p class="py-6">// Check out some of my recent work</p>
            </div>
            <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div v-for="item in data" :style="{backgroundImage:`url(${item.image})`}" class="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div ">

                    <div class="opacity-0 group-hover:opacity-100 ">
                        <span class="text-2xl font bold text-white tracking-wider ">
                            {{item.name}}
                        </span>
                        <div class="pt-8 text-center ">
                            <a :href="item.github" target="_blank">
                                <button class="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">
                                    Code
                                </button>
                            </a>
                            <a :href="item.live" target="_blank">
                                <button class="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">
                                    Live
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import WorkIm from '~/assets/images/projects/workImg.jpeg'
import RealEst from '~/assets/images/projects/realestate.jpg'

const data=[
    {
        id:1,
        name:"React JS Application",
        image:WorkIm,
        github:"",
        live:"",
    },
    {
        id:2,
        name:"React JS Application",
        image:RealEst,
        github:"",
        live:"",
    },
    {
        id:3,
        name:"React JS Application",
        image:WorkIm,
        github:"",
        live:"",
    },
    {
        id:4,
        name:"React JS Application",
        image:RealEst,
        github:"",
        live:"",
    },
    {
        id:5,
        name:"React JS Application",
        image:WorkIm,
        github:"",
        live:"",
    },
    {
        id:6,
        name:"React JS Application",
        image:RealEst,
        github:"",
        live:"",
    },

]
</script>

<style scoped></style>