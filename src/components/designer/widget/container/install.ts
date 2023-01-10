const modules: any = import.meta.glob('./**/*.vue', { eager: true })

const widgets: any = {}

for (const p in modules) {
  widgets[modules[p].default.name] = modules[p].default
}

export default widgets
