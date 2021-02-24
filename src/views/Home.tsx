import { debounce } from '../utils/helpers'
import { defineComponent, onMounted, ref, watch } from 'vue'

export default defineComponent({
  setup() {
    const current = ref('')
    const basics = ref([
      'simple',
      'input',
      'events',
      'relation',
      'listeners',
      'full',
    ])
    const active = ref({ fields: [], datasource: {}, listeners: [], model: {} })
    const code = ref('')
    const updater = debounce((value) => {
      try {
        Object.assign(active.value, JSON.parse(value))
      } catch {
        //
      }
    }, 1000)

    const onSetup = ({ datasource }: any) => {
      datasource('rawdata', ({ define }: any) => {
        const { data } = define()

        return data
      })
    }

    const onCodeChange = (value: string) => {
      updater(value)
    }

    watch(
      () => current.value,
      (value) => {
        fetch(`/data/basic/${value}.json`).then((response) => {
          response.json().then((json) => {
            Object.assign(
              active.value,
              { fields: [], datasource: {}, listeners: [], model: {} },
              json
            )

            const display = Object.assign({}, json)
            delete display.model

            code.value = JSON.stringify(display)
          })
        })
      }
    )

    onMounted(() => {
      current.value = 'full'
    })

    return () => (
      <div class="h-full flex flex-row">
        <div class="flex-none w-60">
          <ul class="flex flex-col divide-y">
            {basics.value.map((item) => (
              <a onClick={() => (current.value = item)}>
                <li
                  class={{
                    'px-5 py-3 cursor-pointer': true,
                    'bg-blue-400 text-white': current.value === item,
                    'hover:bg-gray-100': current.value !== item,
                  }}
                >
                  {item}
                </li>
              </a>
            ))}
          </ul>
        </div>
        <div class="flex-1 border-l">
          <json-editor
            modelValue={code.value}
            onChange={onCodeChange}
          ></json-editor>
        </div>
        <div class="flex-1 border-l px-5 py-3 overflow-auto">
          <v-jrender
            v-model={active.value.model}
            fields={active.value.fields}
            datasource={active.value.datasource}
            listeners={active.value.listeners}
            class="j-form"
            onSetup={onSetup}
          ></v-jrender>
        </div>
      </div>
    )
  },
})
