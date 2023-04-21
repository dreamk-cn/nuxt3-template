<template>
    <div class="navbar bg-base-100 dark:bg-secondary dark:text-primary">
        <div class="navbar-start">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </label>
                <ul tabindex="0"
                    class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-30 bg-base-100 dark:bg-secondary dark:text-primary">
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li tabindex="0">
                        <a class="justify-between">
                            Committees
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24">
                                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                            </svg>
                        </a>
                        <ul class="p-2 bg-base-100 dark:bg-secondary dark:text-primary">
                            <li>
                                <NuxtLink to="/committees/SPECPOL">SPECPOL</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/committees/JCC">JCC</NuxtLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <a class="btn btn-ghost normal-case text-xl text-accent dark:text-primary">VMUN</a>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/team">Our Team</NuxtLink>
                </li>
                <li tabindex="0">
                    <NuxtLink to="">
                        Committees
                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 0 24 24">
                            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                        </svg>
                    </NuxtLink>
                    <ul class="p-2 bg-base-100 dark:bg-secondary z-10">
                        <li>
                            <NuxtLink to="/committees/SPECPOL">SPECPOL</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/committees/JCC">JCC</NuxtLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NuxtLink to="/faq">FAQ</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/contact">Contact Us</NuxtLink>
                </li>
            </ul>
        </div>
        <div class="navbar-end mr-1">
            <NuxtLink to="/apply"><span
                    class="btn btn-ghost bg-base-200 dark:bg-primary dark:text-secondary shadow">Apply Now</span>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>