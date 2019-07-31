<template>
  <search :formOption="formOption" ref="search"></search>
</template>

<script>
import search from './searchContainer'
export default {
  components: {
    search
  },
  data () {
    return {
      formOption: {
        hasTable: false,
        form: [
          {
            type: 'input',
            label: '城市',
            key: 'city',
            value: ''
          },
          {
            type: 'select',
            label: '省份',
            key: 'province',
            value: '',
            option: [
              {
                name: '陕西',
                value: 'shannxi'
              }
            ]
          },
          {
            type: 'date',
            label: '日期1',
            key: 'date1',
            value: ''
          },
          {
            type: 'datetime',
            label: '日期2',
            key: 'date2',
            value: ''
          },
          {
            type: 'datetimeFormat',
            label: '日期3',
            key: 'date3',
            value: ''
          },
          {
            type: 'daterange',
            label: '日期范围1',
            key: 'daterange1',
            value: ''
          },
          {
            type: 'datetimerange',
            label: '日期范围2',
            key: 'daterange2',
            value: ''
          }
        ],
        button: [
          {
            name: '搜索',
            key: 'search',
            type: 'info',
            method: 'handleSearch'
          },
          {
            name: '新建',
            key: 'add',
            type: 'primary',
            method: 'handleAdd'
          },
          {
            name: '重置',
            key: 'reset',
            type: 'success',
            method: 'handleReset'
          }
        ]
      },
      formModel: {}
    }
  },
  methods: {
    handleSearch () {
      this.formModel = this.$refs.search.getFormvalue()
    },
    handleAdd () {
      console.log(222)
    },
    handleReset () {
      this.$refs.search.resetFormValue()
    }
  }
}
</script>

<style scoped>
</style>
