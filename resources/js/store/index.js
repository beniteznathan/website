import { createStore } from 'vuex';

const modules = resolveModules();

function resolveModules() {
    const modules = import.meta.glob('./modules/*.js', { eager: true });

    return Object.keys(modules)
        .map(file => [file.replace(/(modules\/)|(^.\/)|(\.js$)/g, ''), modules[file]])
        .reduce((modules, [name, module]) => {
            modules[name] = module.default;
            return modules;
        }, {});
}

export default createStore({
    modules
});
