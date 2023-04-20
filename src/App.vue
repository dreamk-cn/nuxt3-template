<template>
    <div class="navbar bg-base-100 dark:bg-secondary dark:text-primary">
        <div class="navbar-start">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M4 6h16M4 12h8m-8 6h16"/>
                    </svg>
                </label>
                <ul tabindex="0"
                    class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-30 bg-base-100 dark:bg-secondary dark:text-primary">
                    <li>
                        <router-link to="/">Home</router-link>
                    </li>
                    <li tabindex="0">
                        <a class="justify-between">
                            Committees
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24">
                                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                            </svg>
                        </a>
                        <ul class="p-2 bg-base-100 dark:bg-secondary dark:text-primary">
                            <li>
                                <router-link to="/committees/SPECPOL">SPECPOL</router-link>
                            </li>
                            <li>
                                <router-link to="/committees/JCC">JCC</router-link>
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
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/team">Our Team</router-link>
                </li>
                <li tabindex="0">
                    <router-link to="">
                        Committees
                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                             viewBox="0 0 24 24">
                            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
                        </svg>
                    </router-link>
                    <ul class="p-2 bg-base-100 dark:bg-secondary z-10">
                        <li>
                            <router-link to="/committees/SPECPOL">SPECPOL</router-link>
                        </li>
                        <li>
                            <router-link to="/committees/JCC">JCC</router-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <router-link to="/faq">FAQ</router-link>
                </li>
                <li>
                    <router-link to="/contact">Contact Us</router-link>
                </li>
            </ul>
        </div>
        <div class="navbar-end mr-1">
            <router-link to="/apply"><span class="btn btn-ghost bg-base-200 dark:bg-primary dark:text-secondary shadow">Apply Now</span>
            </router-link>
        </div>
    </div>
    <div>
        <router-view v-slot="{ Component }">
            <transition name="fade">
                <component :is="Component"/>
            </transition>
        </router-view>
    </div>
    <footer class="footer p-10 bg-base-200 text-base-content dark:bg-neutral dark:text-accent">
        <div>
            <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                 clip-rule="evenodd" class="fill-current mb-1">
                <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </svg>
            <p>Validebağ Science High School<br/>Model United Nations Club</p>
            <span class="text-neutral font-semibold">Developed by <a target="_blank"
                                                                     href="https://github.com/HexaBinary">HexaBinary</a></span>
        </div>
        <div>
            <span class="footer-title">Secretariat</span>
            <router-link to="/"><a class="link link-hover">Home</a></router-link>
            <router-link to="/team"><a class="link link-hover">Our Team</a></router-link>
            <router-link to="/faq"><a class="link link-hover">FAQ</a></router-link>
            <router-link to="/contact"><a class="link link-hover">Contact Us</a></router-link>
            <router-link to="/apply"><a class="link link-hover">Applications</a></router-link>
        </div>
        <div>
            <router-link to="/committees"><span class="footer-title">Committees</span></router-link>
            <router-link to="/committees/SPECPOL"><a class="link link-hover">SPECPOL</a></router-link>
            <router-link to="/committees/JCC"><a class="link link-hover">JCC</a></router-link>
        </div>
        <div>
            <span class="footer-title">Legal</span>
            <router-link to="/termsandconditions"><a class="link link-hover">Terms of use</a></router-link>
            <router-link to="/privacypolicy"><a class="link link-hover">Privacy policy</a></router-link>
        </div>
        <div>
            <span class="footer-title">Social</span>
            <div class="grid grid-flow-col gap-4">
                <a target="_blank" href="https://www.instagram.com/validebagmun/">
                    <svg type="color-fill-current" width="24px" height="24px" viewBox="0 0 20 20" x="0px"
                         y="0px" class="fill-current">
                        <g>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M10 5.892a4.108 4.108 0 100 8.216 4.108 4.108 0 000-8.216zm0 6.774a2.667 2.667 0 110-5.333 2.667 2.667 0 010 5.333z"></path>
                            <path d="M15.23 5.73a.96.96 0 11-1.92 0 .96.96 0 011.92 0z"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M10 2c-2.173 0-2.445.01-3.299.048-.851.039-1.432.174-1.941.372a3.918 3.918 0 00-1.417.923c-.445.445-.719.89-.923 1.417-.198.509-.333 1.09-.372 1.941C2.01 7.555 2 7.827 2 10s.01 2.445.048 3.298c.039.852.174 1.433.372 1.942.205.526.478.972.923 1.417.445.445.89.718 1.417.923.509.198 1.09.333 1.942.372C7.555 17.99 7.827 18 10 18s2.445-.01 3.298-.048c.852-.039 1.434-.174 1.942-.372a3.918 3.918 0 001.417-.923 3.92 3.92 0 00.923-1.417c.198-.509.333-1.09.372-1.942.039-.853.048-1.125.048-3.298s-.01-2.445-.048-3.299c-.039-.851-.174-1.433-.372-1.941a3.918 3.918 0 00-.923-1.417 3.92 3.92 0 00-1.417-.923c-.51-.198-1.09-.333-1.942-.372C12.445 2.01 12.172 2 10 2zm0 1.441c2.136 0 2.389.009 3.232.047.78.036 1.204.166 1.486.275.373.146.64.319.92.599.28.28.453.546.598.92.11.282.24.705.275 1.485.039.844.047 1.097.047 3.233s-.008 2.389-.047 3.232c-.035.78-.165 1.204-.275 1.486-.145.373-.319.64-.598.92-.28.28-.547.454-.92.598-.282.11-.706.24-1.486.276-.843.038-1.096.046-3.232.046s-2.39-.008-3.233-.046c-.78-.036-1.203-.166-1.485-.276a2.481 2.481 0 01-.92-.598 2.474 2.474 0 01-.599-.92c-.11-.282-.24-.706-.275-1.486-.038-.843-.047-1.096-.047-3.232s.009-2.39.047-3.233c.036-.78.166-1.203.275-1.485.145-.374.319-.64.599-.92.28-.28.546-.454.92-.599.282-.11.705-.24 1.485-.275.844-.038 1.097-.047 3.233-.047z"></path>
                        </g>
                    </svg>
                </a>
                <a target="_blank" href="https://twitter.com/VMUNapp">
                    <svg type="color-fill-current" width="24px" height="24px" viewBox="0 0 20 20" x="0px"
                         y="0px" class="fill-current">
                        <g>
                            <path d="M19 3.844a7.07 7.07 0 01-2.12.62 3.912 3.912 0 001.623-2.178 7.075 7.075 0 01-2.345.955 3.613 3.613 0 00-2.694-1.24c-2.04 0-3.694 1.76-3.694 3.94 0 .31.037.61.1.9C6.8 6.668 4.078 5.1 2.253 2.72c-.33.606-.5 1.286-.498 1.977 0 1.363.653 2.567 1.643 3.273a3.49 3.49 0 01-1.672-.493v.05c0 1.906 1.272 3.496 2.963 3.857-.55.156-1.12.18-1.67.067.47 1.57 1.83 2.7 3.45 2.73a7.07 7.07 0 01-5.47 1.63 9.954 9.954 0 005.66 1.77c6.79 0 10.51-5.99 10.51-11.19 0-.17-.01-.34-.01-.51.73-.56 1.35-1.25 1.84-2.03"></path>
                        </g>
                    </svg>
                </a>
                <a target="_blank" href="https://github.com/ValidebagMUN">
                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                </a>
            </div>
        </div>
    </footer>
</template>

<script>
import {useDark, useToggle} from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const faviconEl = document.querySelector('link[rel="icon"]')

if (isDark) {
    faviconEl.setAttribute('href', '/vmun-light.svg')
}
else {
    faviconEl.setAttribute('href', '/vmun-dark.svg')
}
</script>

<style scoped>
.scale-enter-active,
.scale-leave-active {
    transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
    opacity: 0;
    transform: scale(0.9);
}

</style>
