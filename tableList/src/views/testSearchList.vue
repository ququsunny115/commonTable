<template>
  <div>
    <searchTableList :formOption="formOption" :tableListData="tableListData" @handSizeChange="handSizeChange" @handCurrentChange="handCurrentChange"></searchTableList>
  </div>
</template>

<script>
import searchTableList from './searchListContainer'
export default{
  components: {
    searchTableList
  },
  data () {
    return {
      formOption: {
        hasTable: true,
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
            method: 'handleCreate'
          },
          {
            name: '重置',
            key: 'reset',
            type: 'success',
            method: 'handleReset'
          }
        ]
      },
      tableListData: {
        tableColumns: [
          {
            prop: 'date',
            label: '日期',
            width: '',
            type: 'center'
          },
          {
            prop: 'name',
            label: '姓名',
            width: '',
            type: 'center'
          },
          {
            prop: 'address',
            label: '地址',
            width: '',
            type: 'center'
          }
        ],
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }
        ],
        selectType: '', // 单选或复选：单选为index，复选为selection
        pagination: {
          sizeChange: 'handSizeChange',
          currentChange: 'handCurrentChange',
          total: 100,
          pageSizes: [15, 30, 60, 100],
          pageSize: 15,
          currentPage: 1
        }
      }
    }
  },
  methods: {
    handleSearch () {
      console.log(this.formOption.form)
    },
    handCurrentChange (val) {
      console.log(val)
    },
    handSizeChange (val) {
      console.log(val)
    }
  }
}
</script>

<style scoped>
</style>
