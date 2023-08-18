<template>
    <div name="skills" class="w-full md:h-screen bg-[#0a192f] pt-20 text-gray-300">
        <div class="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full ">
            <div>
                <p class='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                <p class='py-4'>// These are the technologies I've worked with</p>
            </div>
            <div class="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center ">
                <div v-for="item in list" class="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img class="w-20 mx-auto" :src="`/images/${item.name}`" :alt="item.name" />
                    <p class="my-4">{{ item.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
type Item = { text: string, name: string }
// const generateImgPath = (fileName: string): string => {
//     return new URL(`@/images/${fileName}`, import.meta.url).href
// }

const list: Array<Item> = [
    { text: "HTML", name: "html.png" },
    { text: "CSS", name: "css.png" },
    { text: "JavaScript", name: "javascript.png" },
    { text: "jQuery", name: "jquery.png" },
    { text: "Vue", name: "vue.png" },
    { text: "Nuxt", name: "nuxt.svg" },
    { text: "React", name: "react.png" },
    { text: "NextJS", name: "nextjs.svg" },
    { text: "GitHub", name: "github.png" },
    { text: "Node", name: "node.png" },
    { text: "Mongo", name: "mongo.png" },
    { text: "TAILWIND", name: "tailwind.png" },
]

</script>

<style scoped></style>