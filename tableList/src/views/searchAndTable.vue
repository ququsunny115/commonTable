<template>
  <search :formOption="formOption"></search>
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
        form: [
          {
            type: 'input',
            label: '城市',
            key: 'city'
          },
          {
            type: 'select',
            label: '省份',
            key: 'province',
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
            key: 'date1'
          },
          {
            type: 'datetime',
            label: '日期2',
            key: 'date2'
          },
          {
            type: 'datetimeFormat',
            label: '日期3',
            key: 'date3'
          },
          {
            type: 'daterange',
            label: '日期范围1',
            key: 'daterange1'
          },
          {
            type: 'datetimerange',
            label: '日期范围2',
            key: 'daterange2'
          }
        ],
        button: [
          {
            name: '搜索',
            key: 'search',
            type: 'info'
          },
          {
            name: '新建',
            key: 'add',
            type: 'primary'
          },
          {
            name: '重置',
            key: 'reset',
            type: 'success'
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
