import {createRouter, createWebHistory} from 'vue-router'
import Home from '/src/components/Home.vue';
import FAQ from "/src/components/FAQ.vue";
import Contact from "/src/components/Contact.vue";
import ApplicationBase from "/src/components/applications/Base.vue";
import Individual from "/src/components/applications/Individual.vue";
import Delegation from "/src/components/applications/Delegation.vue";
import Admin from "/src/components/applications/Admin.vue";
import Press from "/src/components/applications/Press.vue";
import TermsConditions from "/src/components/legal/TermsConditions.vue";
import PrivacyPolicy from "/src/components/legal/PrivacyPolicy.vue";
import Base from "/src/components/committees/Base.vue";
import SPECPOL from "/src/components/committees/SPECPOL.vue";
import JCC from "/src/components/committees/JCC.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/faq",
        name: "FAQ",
        component: FAQ,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/apply",
        name: "Applications",
        children: [
            {
                path: "",
                name: "Applications Home",
                component: ApplicationBase,
            },
            {
                path: "individual",
                name: "Individual Applications",
                component: Individual,
            },
            {
                path: "delegation",
                name: "Delegation Applications",
                component: Delegation,
            },
            {
                path: "admin",
                name: "Admin Applications",
                component: Admin,
            },
            {
                path: "press",
                name: "Press Applications",
                component: Press,
            }
        ]
    },
    {
        path: "/committees",
        children: [
            {
                path: "",
                name: "Committees",
                component: Base,
            },
            {
                path: "SPECPOL",
                name: "SPECPOL",
                component: SPECPOL,
            },
            {
                path: "JCC",
                name: "JCC",
                component: JCC,
            }
        ]
    },
    {
        path: "/termsandconditions",
        name: "Terms and Conditions",
        component: TermsConditions
    },
    {
        path: "/privacypolicy",
        name: "Privacy Policy",
        component: PrivacyPolicy,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router