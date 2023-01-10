const modules: any = import.meta.globEager('./settings/**/*.vue')

const propertySettings: any = {}

for (const p in modules) {
  propertySettings[modules[p].default.name] = modules[p].default
}

export default propertySettings
