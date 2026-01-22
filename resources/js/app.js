// resources/js/app.js

// import "./bootstrap";
import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";

const isInertiaPage = !!document.getElementById("app")?.dataset?.page;

if (isInertiaPage) {
    createInertiaApp({
        resolve: (name) => {
            const pages = import.meta.glob("./Pages/**/*.vue", { eager: true });
            return pages[`./Pages/${name}.vue`];
        },
        setup({ el, App, props, plugin }) {
            createApp({ render: () => h(App, props) })
                .use(plugin)
                .mount(el);
        },
    });
} else {
    // Optional: log or do nothing (Livewire will handle its own JS)
    console.log("Not an Inertia page — skipping Inertia boot");
}
